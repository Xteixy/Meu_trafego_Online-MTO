import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Iniciando seed do banco de dados...')

  // Limpar dados existentes
  await prisma.analytics.deleteMany()
  await prisma.notification.deleteMany()
  await prisma.payment.deleteMany()
  await prisma.campaign.deleteMany()
  await prisma.user.deleteMany()
  await prisma.service.deleteMany()
  await prisma.contact.deleteMany()

  console.log('🧹 Dados existentes removidos')

  // Criar usuários de exemplo
  const user1 = await prisma.user.create({
    data: {
      email: 'joao@exemplo.com',
      name: 'João Silva',
      company: 'Empresa XYZ',
      phone: '(11) 99999-9999',
      plan: 'PROFESSIONAL',
      isActive: true
    }
  })

  const user2 = await prisma.user.create({
    data: {
      email: 'maria@exemplo.com',
      name: 'Maria Santos',
      company: 'Startup ABC',
      phone: '(21) 88888-8888',
      plan: 'ENTERPRISE',
      isActive: true
    }
  })

  console.log('👥 Usuários criados')

  // Criar campanhas de exemplo
  const campaign1 = await prisma.campaign.create({
    data: {
      name: 'Campanha Facebook Q1',
      objective: 'Aumentar vendas',
      budget: 5000.00,
      duration: '3 meses',
      targetAudience: 'Homens 25-45, interessados em tecnologia',
      description: 'Campanha focada em conversões para produtos de tecnologia',
      status: 'ACTIVE',
      platforms: ['Facebook', 'Instagram'],
      startDate: new Date('2024-01-01'),
      endDate: new Date('2024-03-31'),
      userId: user1.id
    }
  })

  const campaign2 = await prisma.campaign.create({
    data: {
      name: 'Google Ads E-commerce',
      objective: 'Gerar leads qualificados',
      budget: 8000.00,
      duration: '6 meses',
      targetAudience: 'Mulheres 30-50, classe média alta',
      description: 'Campanha de remarketing para produtos premium',
      status: 'ACTIVE',
      platforms: ['Google Ads', 'YouTube'],
      startDate: new Date('2024-01-01'),
      endDate: new Date('2024-06-30'),
      userId: user2.id
    }
  })

  console.log('📊 Campanhas criadas')

  // Criar analytics de exemplo
  await prisma.analytics.createMany({
    data: [
      {
        campaignId: campaign1.id,
        impressions: 50000,
        clicks: 2500,
        conversions: 125,
        spend: 2500.00,
        revenue: 12500.00,
        ctr: 0.05,
        cpc: 1.00,
        cpa: 20.00,
        date: new Date('2024-01-15')
      },
      {
        campaignId: campaign1.id,
        impressions: 75000,
        clicks: 3750,
        conversions: 188,
        spend: 3750.00,
        revenue: 18800.00,
        ctr: 0.05,
        cpc: 1.00,
        cpa: 19.95,
        date: new Date('2024-02-15')
      },
      {
        campaignId: campaign2.id,
        impressions: 100000,
        clicks: 4000,
        conversions: 200,
        spend: 4000.00,
        revenue: 20000.00,
        ctr: 0.04,
        cpc: 1.00,
        cpa: 20.00,
        date: new Date('2024-01-15')
      }
    ]
  })

  console.log('📈 Analytics criados')

  // Criar pagamentos de exemplo
  await prisma.payment.createMany({
    data: [
      {
        userId: user1.id,
        amount: 5000.00,
        currency: 'BRL',
        method: 'CREDIT_CARD',
        status: 'COMPLETED',
        description: 'Pagamento campanha Facebook Q1'
      },
      {
        userId: user2.id,
        amount: 8000.00,
        currency: 'BRL',
        method: 'PIX',
        status: 'COMPLETED',
        description: 'Pagamento campanha Google Ads E-commerce'
      }
    ]
  })

  console.log('💳 Pagamentos criados')

  // Criar notificações de exemplo
  await prisma.notification.createMany({
    data: [
      {
        userId: user1.id,
        type: 'SUCCESS',
        title: 'Campanha ativada',
        message: 'Sua campanha "Campanha Facebook Q1" foi ativada com sucesso!',
        priority: 'HIGH',
        read: false
      },
      {
        userId: user1.id,
        type: 'INFO',
        title: 'Relatório mensal',
        message: 'Relatório de performance da sua campanha está disponível.',
        priority: 'MEDIUM',
        read: false
      },
      {
        userId: user2.id,
        type: 'CAMPAIGN',
        title: 'Nova campanha criada',
        message: 'Campanha "Google Ads E-commerce" foi criada e está em análise.',
        priority: 'HIGH',
        read: false
      }
    ]
  })

  console.log('🔔 Notificações criadas')

  // Criar serviços de exemplo
  await prisma.service.createMany({
    data: [
      {
        name: 'Tráfego Pago Facebook',
        description: 'Campanhas de tráfego pago no Facebook e Instagram',
        price: 2000.00,
        currency: 'BRL',
        category: 'TRAFFIC',
        isActive: true
      },
      {
        name: 'Google Ads Search',
        description: 'Campanhas de busca no Google Ads',
        price: 3000.00,
        currency: 'BRL',
        category: 'TRAFFIC',
        isActive: true
      },
      {
        name: 'Desenvolvimento de Site',
        description: 'Criação de site profissional responsivo',
        price: 5000.00,
        currency: 'BRL',
        category: 'DEVELOPMENT',
        isActive: true
      },
      {
        name: 'Consultoria SEO',
        description: 'Otimização para motores de busca',
        price: 1500.00,
        currency: 'BRL',
        category: 'SEO',
        isActive: true
      }
    ]
  })

  console.log('🛠️ Serviços criados')

  // Criar contatos de exemplo
  await prisma.contact.createMany({
    data: [
      {
        name: 'Carlos Oliveira',
        email: 'carlos@empresa.com',
        phone: '(31) 77777-7777',
        company: 'Empresa DEF',
        message: 'Gostaria de saber mais sobre seus serviços de tráfego pago.',
        subject: 'Consulta sobre serviços',
        status: 'NEW'
      },
      {
        name: 'Ana Costa',
        email: 'ana@startup.com',
        phone: '(41) 66666-6666',
        company: 'Startup GHI',
        message: 'Preciso de um site para minha startup. Podem me ajudar?',
        subject: 'Desenvolvimento de site',
        status: 'NEW'
      }
    ]
  })

  console.log('📞 Contatos criados')

  console.log('✅ Seed concluído com sucesso!')
  console.log(`📊 Criados: ${await prisma.user.count()} usuários, ${await prisma.campaign.count()} campanhas`)
}

main()
  .catch((e) => {
    console.error('❌ Erro durante o seed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })


