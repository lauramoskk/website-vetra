# Notas de Desenvolvimento - Base do Projeto

Este projeto é uma **base genérica (boilerplate)** construída com Astro e TailwindCSS, pronta para ser customizada para novos clientes.

## ✅ O que está pronto (Infraestrutura)
- **Framework:** Astro 5 + TailwindCSS 4.
- **Estrutura:** Layout base com SEO configurável, Header, Footer e seções padrão.
- **Performance:** Configurações de otimização de imagens (WebP, lazy load), fontes e scripts.
- **Componentes:** Biblioteca de componentes UI (`src/components/common`, `Button`, `Badge`, etc.).

## ⚠️ O que precisa ser feito para cada *novo* projeto
1. **Configuração Inicial:**
   - Atualizar `name` no `package.json`.
   - Atualizar `site` no `astro.config.mjs`.
   - Atualizar título e descrição padrão em `src/layouts/Layout.astro`.

2. **Personalização Visual:**
   - Adicionar novo Logo em `src/assets/`.
   - Gerar e substituir `public/favicon.png`.
   - Ajustar cores no `src/styles` ou `tailwind.config.mjs` se necessário.

3. **Conteúdo:**
   - Preencher `src/pages/index.astro` com o conteúdo real.
   - Atualizar textos e links em `Header.astro` e `Footer.astro`.
   - Adicionar imagens reais em `src/assets/`.

## 📂 Estrutura de Pastas Importante
- `src/layouts/`: Layout mestre.
- `src/components/common/`: Componentes globais (Header, MobileMenu, Footer).
- `src/components/sections/`: Seções pré-estilizadas (Hero, Features, Contact) prontas para uso.
- `src/pages/`: Páginas do site (atualmente apenas Landing Page).
