# Relatório Técnico: Back-end Nível 1

## Objetivo
Implementar a primeira camada de segurança e personalização do sistema MTO, garantindo integridade de dados e ambientes seguros para os clientes.

## Componentes Chave

### 1. Validação Rigorosa (Zod)
- **O que é:** Uma biblioteca de declaração e validação de esquema TypeScript-first.
- **Implementação:** Integração nos formulários de Registo, Login e Edição de Perfil.
- **Benefício:** Impede a entrada de dados malformados ou injeções simples, garantindo que "empresa" e "telefone" sigam os formatos reais de Angola.

### 2. Gestão de Perfis de Utilizador
- **Funcionalidade:** Criação de uma área de dashboard privada onde o cliente pode gerir os seus dados.
- **Segurança:** Proteção de dados através de políticas de acesso ao nível da linha (RLS) e autenticação JWT via Supabase.

## Cronograma de Execução
1. Atualização do Schema Prisma (Enums de Role).
2. Criação dos Schemas Zod para as rotas de Auth.
3. Desenvolvimento da UI do Perfil do Utilizador.
