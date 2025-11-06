import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseClient } from '@/lib/supabase'
import { prisma } from '@/lib/prisma'

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, password } = body

    // Validar dados obrigatórios
    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email e senha são obrigatórios' },
        { status: 400 }
      )
    }

    // Fazer login no Supabase Auth
    const supabase = getSupabaseClient()
    const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
      email,
      password
    })

    if (authError) {
      console.error('Erro no login:', authError)
      return NextResponse.json(
        { error: 'Credenciais inválidas' },
        { status: 401 }
      )
    }

    // Buscar dados do usuário no banco
    const user = await prisma.user.findUnique({
      where: { id: authData.user!.id },
      select: {
        id: true,
        email: true,
        name: true,
        company: true,
        phone: true,
        plan: true,
        avatar: true,
        isActive: true
      }
    })

    if (!user) {
      return NextResponse.json(
        { error: 'Usuário não encontrado' },
        { status: 404 }
      )
    }

    if (!user.isActive) {
      return NextResponse.json(
        { error: 'Conta desativada' },
        { status: 403 }
      )
    }

    // Criar notificação de login
    await prisma.notification.create({
      data: {
        userId: user.id,
        type: 'INFO',
        title: 'Login realizado',
        message: `Bem-vindo de volta, ${user.name}!`,
        priority: 'LOW'
      }
    })

    return NextResponse.json({
      message: 'Login realizado com sucesso',
      user,
      session: authData.session
    })

  } catch (error) {
    console.error('Erro no login:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}


