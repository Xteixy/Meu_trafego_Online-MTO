# E-book: O Poder da Validação com Zod

## Introdução
Neste e-book, exploramos como a MTO utiliza a biblioteca **Zod** para transformar a segurança das suas aplicações.

## Por que Zod?
Zod permite-nos definir exatamente como os dados devem ser antes de chegarem à nossa base de dados.
- **Email:** Verificação real de sintaxe.
- **Telefone:** Máscaras específicas para redes angolanas (+244).
- **Password:** Requisitos mínimos de complexidade.

## Exemplos de Código
```typescript
const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  phone: z.string().regex(/^\d{9}$/) // Padrão 9 dígitos
});
```

## Conclusão
Com Zod, eliminamos erros de "undefined" e bugs silenciosos, oferecendo uma plataforma robusta e profissional.
