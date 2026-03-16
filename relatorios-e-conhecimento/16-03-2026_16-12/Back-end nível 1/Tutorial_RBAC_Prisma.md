# Tutorial: Implementando Roles (RBAC) com Prisma

## 1. Atualizar o `schema.prisma`
Adicionar o Enum de Role:
```prisma
enum Role {
  ADMIN
  SUPPORT
  CLIENT
}
```

## 2. Migração da Base de Dados
No terminal, execute:
```bash
npx prisma db push
```

## 3. Atribuição de Funções
Ao criar um novo utilizador, a função padrão será `CLIENT`. Se for necessário um Administrador, a alteração deve ser feita diretamente via Dashboard Admin (ou SQL seguro).

## 4. Proteção de Rotas
Utilize o Middleware do Next.js para verificar a Role do utilizador antes de permitir o acesso à pasta `app/admin`.
