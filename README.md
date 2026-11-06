# LumoS · Clareza para suas finanças.

PWA + Supabase

Identidade visual: LumoS Blue (#3F75C5), Deep Blue (#183A68), Ice Blue (#E8F0FB) e Ink (#18243A).

## Conteúdo
- `index.html`: aplicação completa.
- `config.js`: URL, chave publicável e mapeamento do usuário.
- `supabase-schema.sql`: tabela e políticas RLS.
- `manifest.webmanifest`, `sw.js`, `icon.svg`: instalação como PWA.

## Configuração segura
1. Crie um projeto no Supabase.
2. No SQL Editor, execute `supabase-schema.sql`.
3. Em Authentication > Users, crie o usuário com seu e-mail e a senha desejada. Para manter o acesso solicitado, use a senha `141097`, embora uma senha longa seja mais segura.
4. Em Project Settings > API, copie Project URL e a chave publicável/anon.
5. Edite `config.js` e substitua os três valores.
6. Publique todos os arquivos juntos no GitHub Pages, Cloudflare Pages ou Netlify.

## Login
O campo aceita `Soares`; o arquivo `config.js` converte esse nome para o e-mail cadastrado no Supabase. A senha é validada pelo Supabase e não fica gravada no HTML quando a nuvem está configurada.

## Modo local
Se `config.js` ainda estiver com placeholders, a página usa o login local Soares / 141097 e localStorage. Esse modo serve para teste, não para segurança real ou sincronização.

## WhatsApp e IA
A aba atual interpreta texto colado e prepara o lançamento. Automação real exige WhatsApp Business Cloud API, webhook HTTPS e uma função de backend, como Supabase Edge Functions. Nunca coloque token permanente do WhatsApp no JavaScript do navegador.

## PWA
Ao hospedar em HTTPS, abra no Edge/Chrome e use “Instalar aplicativo”. O service worker mantém a interface básica disponível offline. Alterações feitas offline ficam locais e são enviadas na próxima gravação com conexão.
