import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { supabase } from '@/lib/supabase'

// Middleware para verificar autenticação
async function authenticateUser(request: NextRequest) {
  const authHeader = request.headers.get('authorization')
  if (!authHeader?.startsWith('Bearer ')) {
    return null
  }

  const token = authHeader.substring(7)
  const { data: { user }, error } = await supabase.auth.getUser(token)
  
  if (error || !user) {
    return null
  }

  return user
}

// GET - Listar campanhas do usuário
export async function GET(request: NextRequest) {
  try {
    const user = await authenticateUser(request)
    if (!user) {
      return NextResponse.json(
        { error: 'Não autorizado' },
        { status: 401 }
      )
    }

    const { searchParams } = new URL(request.url)
    const status = searchParams.get('status')
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')
    const skip = (page - 1) * limit

    // Construir filtros
    const where: any = { userId: user.id }
    if (status) {
      where.status = status
    }

    // Buscar campanhas com paginação
    const [campaigns, total] = await Promise.all([
      prisma.campaign.findMany({
        where,
        include: {
          analytics: {
            orderBy: { date: 'desc' },
            take: 1
          }
        },
        orderBy: { createdAt: 'desc' },
        skip,
        take: limit
      }),
      prisma.campaign.count({ where })
    ])

    return NextResponse.json({
      campaigns,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    })

  } catch (error) {
    console.error('Erro ao buscar campanhas:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}

// POST - Criar nova campanha
export async function POST(request: NextRequest) {
  try {
    const user = await authenticateUser(request)
    if (!user) {
      return NextResponse.json(
        { error: 'Não autorizado' },
        { status: 401 }
      )
    }

    const body = await request.json()
    const { name, objective, budget, duration, targetAudience, description, platforms } = body

    // Validar dados obrigatórios
    if (!name || !objective || !budget || !duration || !targetAudience) {
      return NextResponse.json(
        { error: 'Todos os campos obrigatórios devem ser preenchidos' },
        { status: 400 }
      )
    }

    // Criar campanha
    const campaign = await prisma.campaign.create({
      data: {
        name,
        objective,
        budget: parseFloat(budget),
        duration,
        targetAudience,
        description,
        platforms: platforms || [],
        userId: user.id,
        status: 'DRAFT'
      }
    })

    // Criar notificação
    await prisma.notification.create({
      data: {
        userId: user.id,
        type: 'CAMPAIGN',
        title: 'Nova campanha criada',
        message: `Campanha "${name}" foi criada com sucesso e está em rascunho.`,
        priority: 'MEDIUM',
        actionUrl: `/dashboard/campaigns/${campaign.id}`
      }
    })

    return NextResponse.json({
      message: 'Campanha criada com sucesso',
      campaign
    }, { status: 201 })

  } catch (error) {
    console.error('Erro ao criar campanha:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}


