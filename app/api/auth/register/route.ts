import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import { prisma } from '@/lib/prisma'
import { hash } from 'bcryptjs'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, password, name, company, phone } = body

    // Validar dados obrigatórios
    if (!email || !password || !name) {
      return NextResponse.json(
        { error: 'Email, senha e nome são obrigatórios' },
        { status: 400 }
      )
    }

    // Verificar se o usuário já existe
    const existingUser = await prisma.user.findUnique({
      where: { email }
    })

    if (existingUser) {
      return NextResponse.json(
        { error: 'Usuário já existe com este email' },
        { status: 409 }
      )
    }

    // Criar usuário no Supabase Auth
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name,
          company,
          phone
        }
      }
    })

    if (authError) {
      console.error('Erro no Supabase Auth:', authError)
      return NextResponse.json(
        { error: 'Erro ao criar conta de autenticação' },
        { status: 500 }
      )
    }

    // Criar usuário no banco de dados
    const user = await prisma.user.create({
      data: {
        id: authData.user!.id,
        email,
        name,
        company,
        phone,
        plan: 'STARTER'
      }
    })

    // Criar notificação de boas-vindas
    await prisma.notification.create({
      data: {
        userId: user.id,
        type: 'SUCCESS',
        title: 'Bem-vindo ao MTO!',
        message: 'Sua conta foi criada com sucesso. Comece a explorar nossos serviços de tráfego.',
        priority: 'HIGH'
      }
    })

    return NextResponse.json({
      message: 'Usuário criado com sucesso',
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        company: user.company,
        plan: user.plan
      }
    })

  } catch (error) {
    console.error('Erro no registro:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}


