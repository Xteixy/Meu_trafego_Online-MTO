# Plano de Inicialização do Servidor - MTO

Este plano descreve as etapas necessárias para configurar o ambiente local e iniciar o servidor de desenvolvimento.

## 📋 Pré-requisitos
- [pnpm](https://pnpm.io/) (Recomendado, pois o projeto possui um lockfile `pnpm-lock.yaml`)
- Node.js 18+

## 🚀 Mudanças e Procedimentos Propostos

### 1. Instalação de Dependências
Executar a instalação limpa das dependências do projeto para garantir compatibilidade.
- **Comando**: `pnpm install`

### 2. Sincronização do Banco de Dados (Prisma)
Gerar o cliente Prisma e sincronizar o esquema com o banco de dados Supabase configurado no `.env.local`.
- **Comandos**: 
  - `npx prisma generate`
  - `npx prisma db push` (Opcional, se o banco já estiver sincronizado)

### 3. Inicialização do Servidor
Iniciar o ambiente de desenvolvimento do Next.js.
- **Comando**: `pnpm dev`

## 🧪 Plano de Verificação

### Testes Manuais
1. **Instalação**: Verificar se a pasta `node_modules` foi criada corretamente.
2. **Prisma**: Confirmar se o cliente Prisma foi gerado sem erros.
3. **Servidor**: Acessar `http://localhost:3000` e verificar se a página inicial carrega corretamente com as animações e estilos.
4. **Dashboard**: Tentar acessar o dashboard para validar a conexão com o Supabase.

---
> [!IMPORTANT]
> O arquivo `.env.local` já possui chaves de API, mas se houver erro de autenticação, o usuário deve verificar se o projeto no Supabase ainda está ativo.
