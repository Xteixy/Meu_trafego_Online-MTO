import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getSupabaseClient } from '@/lib/supabase'

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

// Middleware para verificar autenticação
async function authenticateUser(request: NextRequest) {
  const authHeader = request.headers.get('authorization')
  if (!authHeader?.startsWith('Bearer ')) {
    return null
  }

  const token = authHeader.substring(7)
  const supabase = getSupabaseClient()
  const { data: { user }, error } = await supabase.auth.getUser(token)
  
  if (error || !user) {
    return null
  }

  return user
}

// GET - Buscar dados do usuário
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const user = await authenticateUser(request)
    if (!user) {
      return NextResponse.json(
        { error: 'Não autorizado' },
        { status: 401 }
      )
    }

    // Verificar se o usuário está buscando seus próprios dados
    if (user.id !== params.id) {
      return NextResponse.json(
        { error: 'Acesso negado' },
        { status: 403 }
      )
    }

    // Buscar dados do usuário
    const userData = await prisma.user.findUnique({
      where: { id: params.id },
      select: {
        id: true,
        email: true,
        name: true,
        company: true,
        phone: true,
        plan: true,
        avatar: true,
        isActive: true,
        createdAt: true,
        updatedAt: true,
        _count: {
          select: {
            campaigns: true,
            payments: true,
            notifications: {
              where: { read: false }
            }
          }
        }
      }
    })

    if (!userData) {
      return NextResponse.json(
        { error: 'Usuário não encontrado' },
        { status: 404 }
      )
    }

    return NextResponse.json(userData)

  } catch (error) {
    console.error('Erro ao buscar usuário:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}

// PATCH - Atualizar dados do usuário
export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const user = await authenticateUser(request)
    if (!user) {
      return NextResponse.json(
        { error: 'Não autorizado' },
        { status: 401 }
      )
    }

    // Verificar se o usuário está atualizando seus próprios dados
    if (user.id !== params.id) {
      return NextResponse.json(
        { error: 'Acesso negado' },
        { status: 403 }
      )
    }

    const body = await request.json()
    const { name, company, phone, avatar } = body

    // Validar dados
    if (!name) {
      return NextResponse.json(
        { error: 'Nome é obrigatório' },
        { status: 400 }
      )
    }

    // Atualizar usuário
    const updatedUser = await prisma.user.update({
      where: { id: params.id },
      data: {
        name,
        company,
        phone,
        avatar,
        updatedAt: new Date()
      },
      select: {
        id: true,
        email: true,
        name: true,
        company: true,
        phone: true,
        plan: true,
        avatar: true,
        isActive: true,
        updatedAt: true
      }
    })

    return NextResponse.json({
      message: 'Usuário atualizado com sucesso',
      user: updatedUser
    })

  } catch (error) {
    console.error('Erro ao atualizar usuário:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}


