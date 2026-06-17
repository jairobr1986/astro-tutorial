# Base de Sites Estaticos - Jairo

Projeto base em Astro para criar sites estaticos, rapidos e mobile-first.

Esta base foi criada a partir de um tutorial de Astro e atualizada para funcionar com Astro 6. A ideia e usar este repositorio como ponto de partida para sites simples, portfolios, landing pages, blogs e paginas institucionais.

## Autor

- Nome: Jairo Oliveira Santos
- Marca/projetos: `jbr19686`
- Redes sociais: `@jairobr1986`
- GitHub: <https://github.com/jairobr1986>
- LinkedIn: <https://www.linkedin.com/in/jairobr1986>

## Tecnologias

- Astro 6
- TypeScript
- Content Collections para posts em Markdown
- Preact para componentes interativos
- RSS e Sitemap
- CSS mobile-first com variaveis de tema claro/escuro

## Comandos

Execute os comandos na raiz do projeto.

| Comando | Acao |
| --- | --- |
| `npm install` | Instala as dependencias |
| `npm run dev` | Inicia o servidor local |
| `npm run check` | Verifica erros de Astro e TypeScript |
| `npm run build` | Gera o site final em `dist/` |
| `npm run preview` | Visualiza o build localmente |

## Estrutura Principal

```text
src/
  components/       Componentes reutilizaveis
  content/posts/    Posts em Markdown
  layouts/          Layouts das paginas
  pages/            Rotas do site
  styles/global.css Estilos globais e temas
public/
  scripts/menu.js   Script do menu mobile
```

## Personalizacao Rapida

### Cores

As cores principais ficam em `src/styles/global.css`.

Tema claro:

```css
:root {
  --page-bg: #f6f7fb;
  --text: #1f2937;
  --accent: #f97316;
}
```

Tema escuro:

```css
html.dark {
  --page-bg: #101318;
  --text: #f5f7fb;
  --accent: #fb923c;
}
```

### Redes Sociais

Os links e icones ficam em `src/components/Social.astro`.

O rodape usa:

```astro
<Social platform="linkedin" username="jairobr1986" />
<Social platform="github" username="jairobr1986" />
<Social platform="instagram" username="jairo.work" />
```

### Assinatura Discreta

O rodape tem uma assinatura pequena:

```text
por Jairo
```

Em telas com mouse, ao passar por cima aparece um texto discreto informando quem desenvolveu o site. Isso fica em `src/components/Footer.astro`, no atributo `data-tooltip`.

## Sobre Tailwind CSS

Tailwind CSS esta instalado neste projeto, mas a base atual usa CSS tradicional em `global.css`.

Minha recomendacao para esta base:

- Para sites pequenos e personalizados, CSS tradicional com variaveis e uma boa estrutura e simples, leve e facil de manter.
- Tailwind nao deixa o site pesado quando usado corretamente, porque o build final inclui apenas o CSS usado.
- Tailwind pode valer a pena quando voce for criar muitos layouts parecidos, trabalhar com componentes reutilizaveis ou acelerar producao.
- Para aprender e manter controle visual, esta base pode continuar com CSS comum. Depois, se fizer sentido, da para migrar partes do layout para Tailwind.

## Checklist Antes de Criar um Site Novo

- Alterar `site` em `astro.config.mjs` para o dominio real.
- Atualizar titulo e conteudo das paginas em `src/pages/`.
- Atualizar redes sociais no `Footer.astro`.
- Atualizar posts em `src/content/posts/`.
- Rodar `npm run check`.
- Rodar `npm run build`.

## Licenca

MIT. Veja o arquivo `LICENSE`.
