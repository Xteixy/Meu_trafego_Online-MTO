# Guia e Tutorial de Implementações

## Como Atualizar a Equipa (Sobre)
Para editar os membros da liderança:
1. Carregue a imagem em `/public`.
2. Edite `app/sobre/page.tsx`, localizando as variáveis de membro (CEO, CTO, Marketing) para atualizar `image`, `bio` e redes sociais.

## Gestão de Casos de Sucesso
Os casos (ex: ernice.com) são estáticos para garantir performance visual:
- Localize a Grid de `Casos de Sucesso` em `app/sobre/page.tsx`.
- Atualize as métricas (ex: de `500+` para `10+` conforme a realidade do projeto).

## Refinamento de Produtos (Localização Nacional)
Sempre que o foco do serviço mudar (Digital vs Físico):
1. Aceda a `app/produtos/page.tsx`.
2. Na secção "Por que Escolher MTO?", atualize os cards de benefícios.
3. **Icons:** Utilize `Globe` para serviços de alcance nacional e `Shield` para garantias. Remova o ícone `Truck` se o serviço for estritamente digital.

## Manutenção de Botões Animados (CTA)
Para ajustar a intensidade da animação do botão WhatsApp:
- Edite os keyframes no final de `app/globals.css`.
- As classes `animate-whatsapp-cta` controlam o timing do brilho e da vibração.

## Comandos Prisma Relevantes
Para refletir mudanças de Role (RBAC) ou Schema:
```bash
npx prisma db push
npx prisma generate
```
