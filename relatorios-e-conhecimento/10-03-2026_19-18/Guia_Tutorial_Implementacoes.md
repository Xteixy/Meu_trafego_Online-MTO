# Guia e Tutorial de Implementações Recentes
**Aprenda a Manter e Evoluir o Site MTO**

## 1. Como Atualizar Artigos do Blog
Para adicionar ou editar artigos:
1. Abra o ficheiro `app/blog/data.ts`.
2. Localize o array `articles`.
3. Adicione um novo objeto seguindo o esquema:
   ```typescript
   {
     id: number,
     title: string,
     content: string (6-8 parágrafos),
     difficulty: "Iniciante" | "Pro" | "Expert",
     image: "/nome-da-imagem.png"
   }
   ```
4. Certifique-se de que a imagem está na pasta `public/`.

## 2. Como Replicar Animações Luminosas (Glow)
As animações de destaque são definidas em `app/globals.css`.
- **Efeito Vibrate:** Use a classe `.animate-whatsapp-cta`.
- **Efeito Shine:** Use a classe `.ebook-shine-border`.
- **Efeito Pulse:** Definido via `wa-scale-pulse`.

Para aplicar em um novo botão:
```html
<button className="animate-whatsapp-cta"> ... </button>
```

## 3. Guia de Deploy (Vercel + Namecheap)
Quando estiver pronto para o lançamento oficial:
1. Conecte o repositório Git à Vercel.
2. Nas configurações do projeto Vercel, adicione as variáveis:
   - `DATABASE_URL` (da Neon)
   - `NEXT_PUBLIC_SUPABASE_URL`
3. No Namecheap, atualize os Nameservers para os indicados pela Vercel.

## 4. Gestão de Base de Dados (Prisma)
Sempre que fizer alterações no ficheiro `prisma/schema.prisma` (ex: adicionar uma nova tabela), execute os seguintes comandos no terminal:
1. **Atualizar a base de dados:** `pnpm run db:push`
2. **Gerar o cliente Prisma local:** `pnpm run db:generate`
3. Se precisar popular a base com dados de teste (Utilizadores admin, campanhas dummy): `pnpm run db:seed`

## 5. Auditoria de Marca
Sempre valide se:
- O número `937500709` está presente em novos CTAs.
- As cores `primary` (Rosa MTO) e `secondary` (Amarelo Ouro) estão sendo usadas nos gradientes.

---
*Guia prático para a equipa MTO.*
