# E-book: Manual de Desenvolvimento MTO
**Construindo uma Agência Digital de Alta Performance**

## Introdução
Este manual serve como guia definitivo para a arquitetura e desenvolvimento da plataforma MTO (Meu Tráfego Online).

## 1. Stack Tecnológica
- **Framework:** Next.js (App Router)
- **Estilização:** Tailwind CSS + Animações Customizadas
- **Base de Dados:** Neon PostgreSQL (Integrado via Prisma)
- **Autenticação:** Supabase Auth
- **Ícones:** Lucide React

## 2. Arquitetura do Sistema
O projeto segue uma estrutura modular full-stack para garantir alta escalabilidade:

### Frontend (User Interface)
- `components/ui`: Componentes base construídos com Shadcn UI e adaptados.
- `components/navigation`: Barra de navegação responsiva com suporte a temas (Light/Dark).
- `app/blog` & `app/ebooks`: Interfaces orientadas a conteúdo e conversão com rotas dinâmicas.

### Backend (APIs e Base de Dados)
- `lib/supabase.ts` & `lib/prisma.ts`: Clientes de conexão para gerir autenticação e consultas à base de dados.
- `app/api/auth`: Rotas protegidas (Login/Registro) com geração de JWT pelo Supabase.
- `prisma/schema.prisma`: Definição estrutural de todas as tabelas (Users, Campaigns, Payments, Analytics).
- `hooks/use-auth.tsx`: Hook customizado para persitência de sessão e proteção de rotas privadas no frontend (ex. Dashboard).

## 3. Decisões de Design (UI/UX)
- **Glassmorphism:** Uso extensivo de `backdrop-blur` e cores semitransparentes para um ar sofisticado.
- **Micro-animações:** Keyframes como `float`, `shine` e `vibrate` são usados estrategicamente para guiar o olhar do utilizador para as vendas (CTAs).
- **Modo Escuro (Dark Mode):** Foco na economia de energia e conforto visual, ressaltando o tema tecnológico de IA.

## 4. Manutenção e Escala
Para adicionar novos ebooks ou artigos:
1. Aceder a `app/blog/data.ts` ou `app/ebooks/page.tsx`.
2. Atualizar o array de objetos.
3. O sistema renderizará automaticamente as novas entradas com o layout premium estabelecido.

---
*MTO - Tráfego que gera Lucro.*
