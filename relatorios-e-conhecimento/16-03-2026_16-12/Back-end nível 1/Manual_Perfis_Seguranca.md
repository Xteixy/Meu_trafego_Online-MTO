# Manual de Procedimentos: Perfis e Segurança

## Gestão de Avatar e Contactos
O utilizador deve ter autonomia total sobre o seu perfil.
1. **Upload de Avatar:** Integrado com Supabase Storage.
2. **Edição de Contactos:** Validados via Zod antes de qualquer "update" na tabela `User`.

## Políticas de Segurança (RBAC)
- **USER:** Acesso apenas aos seus próprios dados.
- **SUPPORT:** Leitura de tickets e dados básicos de clientes.
- **ADMIN:** Gestão total do sistema e subscrições.

## Manutenção de Dados
Sempre que um plano for alterado, o sistema deve verificar as permissões do utilizador logado através da sessão do servidor (Next.js Server Actions).
