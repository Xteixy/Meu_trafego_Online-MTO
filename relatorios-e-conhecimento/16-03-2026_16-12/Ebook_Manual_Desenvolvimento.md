# E-book: Manual de Desenvolvimento MTO

## Arquitetura de UI Premium
O design da MTO baseia-se em *Glassmorphism* e micro-animações para transmitir inovação e autoridade tecnológica.

### Componentes de Destaque
- **Botão WhatsApp CTA:** Utiliza a classe `animate-whatsapp-cta` (definida em `globals.css`) com keyframes de `whatsapp-glow` (pulsação de luz) e `whatsapp-shake` (vibração periódica).
- **Cartões de Equipa:** Estrutura de `Card` do Shadcn/ui com `overflow-hidden` para integração de imagens circulares e bios dinâmicas.

### Estratégia de Localização (Huíla Focus)
- **Trust Anchors:** A página `sobre/page.tsx` utiliza a sede física no Lubango (Huíla) para gerar credibilidade local.
- **Escalabilidade Digital:** A página `produtos/page.tsx` foi adaptada para remover limitações geográficas (como Luanda). O ícone `Truck` foi substituído por `Globe` para sinalizar "Alcance Nacional", garantindo que a MTO seja vista como uma empresa nacional com suporte de proximidade.

### Próximas Implementações (Camada de Dados)
- **Supabase Core:** Integração de autenticação e perfis de utilizador.
- **RBAC (Role-Based Access Control):** Diferenciação de permissões entre Admin, Suporte e Cliente para o painel de gestão.
