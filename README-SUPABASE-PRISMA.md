# 🚀 MTO - Configuração Supabase + Prisma

## 📋 **PRÉ-REQUISITOS**

- ✅ Node.js 18+ instalado
- ✅ pnpm instalado
- ✅ Conta no Supabase (gratuita)
- ✅ Git configurado

## 🗄️ **PASSO 1: CONFIGURAR SUPABASE**

### 1.1 Criar Projeto no Supabase
1. Acesse [supabase.com](https://supabase.com)
2. Faça login ou crie uma conta
3. Clique em "New Project"
4. Escolha sua organização
5. Preencha:
   - **Name**: `mto-website`
   - **Database Password**: Crie uma senha forte
   - **Region**: Escolha a mais próxima (ex: São Paulo)
6. Clique em "Create new project"

### 1.2 Obter Credenciais
1. No dashboard do projeto, vá em **Settings** → **API**
2. Copie as seguintes informações:
   - **Project URL**: `https://[project-id].supabase.co`
   - **anon public**: Chave pública anônima
   - **service_role**: Chave de serviço (mantenha segura!)

### 1.3 Configurar Banco de Dados
1. No dashboard, vá em **SQL Editor**
2. Execute o seguinte SQL para criar as tabelas:

```sql
-- Habilitar extensões necessárias
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Criar tabelas (será feito pelo Prisma)
-- As tabelas serão criadas automaticamente quando executarmos as migrations
```

## 🔧 **PASSO 2: CONFIGURAR VARIÁVEIS DE AMBIENTE**

### 2.1 Criar arquivo .env.local
Na raiz do projeto, crie um arquivo `.env.local` com:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://[seu-project-id].supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=[sua-anon-key]
SUPABASE_SERVICE_ROLE_KEY=[sua-service-role-key]

# Database Configuration
DATABASE_URL=postgresql://postgres:[sua-senha]@db.[seu-project-id].supabase.co:5432/postgres

# Stripe Configuration (opcional para pagamentos)
STRIPE_SECRET_KEY=[sua-stripe-secret-key]
STRIPE_WEBHOOK_SECRET=[sua-stripe-webhook-secret]
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=[sua-stripe-publishable-key]

# App Configuration
NEXTAUTH_SECRET=[chave-secreta-aleatoria]
NEXTAUTH_URL=http://localhost:3000
```

### 2.2 Substituir valores
- `[seu-project-id]`: ID do seu projeto Supabase
- `[sua-anon-key]`: Chave anônima do Supabase
- `[sua-service-role-key]`: Chave de serviço do Supabase
- `[sua-senha]`: Senha do banco que você criou
- `[chave-secreta-aleatoria]`: Gere uma chave aleatória (ex: `openssl rand -base64 32`)

## 📊 **PASSO 3: EXECUTAR MIGRAÇÕES DO PRISMA**

### 3.1 Primeira execução
```bash
# Gerar cliente Prisma
npx prisma generate

# Fazer push do schema para o banco
npx prisma db push

# (Opcional) Abrir Prisma Studio para visualizar dados
npx prisma studio
```

### 3.2 Verificar conexão
```bash
# Testar conexão com o banco
npx prisma db pull
```

## 🚀 **PASSO 4: TESTAR A APLICAÇÃO**

### 4.1 Iniciar servidor
```bash
pnpm run dev
```

### 4.2 Testar funcionalidades
1. Acesse `http://localhost:3000`
2. Teste o registro de usuário
3. Teste o login
4. Acesse o dashboard
5. Crie uma campanha de tráfego

## 🔍 **PASSO 5: VERIFICAR LOGS E DEBUG**

### 5.1 Logs do Prisma
```bash
# Ver logs detalhados
DEBUG="prisma:*" pnpm run dev
```

### 5.2 Logs do Supabase
- Dashboard do Supabase → **Logs**
- Verificar autenticação e queries

## 🛠️ **ESTRUTURA IMPLEMENTADA**

### **API Routes Criadas:**
- ✅ `/api/auth/register` - Registro de usuários
- ✅ `/api/auth/login` - Login de usuários
- ✅ `/api/campaigns` - CRUD de campanhas
- ✅ `/api/notifications` - Sistema de notificações
- ✅ `/api/users/[id]` - Dados do usuário

### **Modelos do Banco:**
- ✅ **User** - Usuários e perfis
- ✅ **Campaign** - Campanhas de tráfego
- ✅ **Payment** - Histórico de pagamentos
- ✅ **Notification** - Sistema de notificações
- ✅ **Analytics** - Métricas de campanhas
- ✅ **Service** - Catálogo de serviços
- ✅ **Contact** - Formulários de contato

### **Funcionalidades:**
- ✅ Autenticação com Supabase
- ✅ CRUD de campanhas
- ✅ Sistema de notificações
- ✅ Perfis de usuário
- ✅ Middleware de autenticação
- ✅ Validação de dados
- ✅ Tratamento de erros

## 🔒 **SEGURANÇA IMPLEMENTADA**

### **Autenticação:**
- ✅ JWT tokens do Supabase
- ✅ Middleware de verificação
- ✅ Controle de acesso por usuário
- ✅ Validação de dados de entrada

### **Banco de Dados:**
- ✅ Relacionamentos seguros
- ✅ Cascade delete configurado
- ✅ Índices otimizados
- ✅ Validação de tipos

## 📱 **PRÓXIMOS PASSOS RECOMENDADOS**

### **1. Sistema de Pagamentos**
- [ ] Integrar Stripe
- [ ] Webhooks de pagamento
- [ ] Histórico de transações

### **2. Dashboard Avançado**
- [ ] Gráficos de analytics
- [ ] Relatórios em PDF
- [ ] Exportação de dados

### **3. Notificações em Tempo Real**
- [ ] WebSockets com Supabase
- [ ] Push notifications
- [ ] Email automático

### **4. SEO e Performance**
- [ ] Meta tags dinâmicas
- [ ] Lazy loading
- [ ] Cache de consultas

## 🆘 **SOLUÇÃO DE PROBLEMAS**

### **Erro de Conexão com Banco:**
```bash
# Verificar variáveis de ambiente
echo $DATABASE_URL

# Testar conexão
npx prisma db pull
```

### **Erro de Autenticação:**
1. Verificar chaves do Supabase
2. Verificar configuração do Auth
3. Verificar logs do navegador

### **Erro de Build:**
```bash
# Limpar cache
rm -rf .next
rm -rf node_modules
pnpm install
npx prisma generate
```

## 📞 **SUPORTE**

- **Documentação Prisma**: [pris.ly/docs](https://pris.ly/docs)
- **Documentação Supabase**: [supabase.com/docs](https://supabase.com/docs)
- **Issues do Projeto**: Criar issue no repositório

---

## 🎯 **STATUS ATUAL**

- ✅ **Supabase**: Configurado
- ✅ **Prisma**: Schema criado e cliente gerado
- ✅ **API Routes**: Implementadas
- ✅ **Autenticação**: Integrada
- ✅ **Banco de Dados**: Pronto para uso

**🚀 Próximo: Configurar projeto no Supabase e testar!**


