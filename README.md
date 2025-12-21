# Generic Client Base

Landing page base.

## 🚀 Tecnologias

- **Astro** 5.15.5 - Framework web moderno
- **Tailwind CSS** 4.1.17 - Framework CSS utilitário
- **TypeScript** - Tipagem estática

## 📁 Estrutura do Projeto

```
/
├── public/          # Arquivos estáticos (favicon, etc)
├── src/
│   ├── assets/     # Imagens e recursos
│   ├── components/ # Componentes reutilizáveis
│   │   ├── common/ # Componentes comuns (Header)
│   │   └── sections/ # Seções da página (Hero, Numbers)
│   ├── layouts/    # Layouts da aplicação
│   ├── pages/      # Páginas (rotas)
│   └── styles/     # Estilos globais
└── package.json
```

## 🧞 Comandos

Todos os comandos são executados na raiz do projeto:

| Comando                   | Ação                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Instala as dependências                        |
| `npm run dev`             | Inicia servidor de desenvolvimento em `localhost:4321` |
| `npm run build`           | Gera build de produção em `./dist/`            |
| `npm run preview`         | Visualiza o build localmente antes de fazer deploy |

## 🎨 Componentes Principais

- **Button**: Botão reutilizável com variantes (primary, outline)
- **Title**: Componente de título estilizado
- **Description**: Componente de descrição
- **NumberCard**: Card para exibir números e estatísticas
- **Header**: Cabeçalho fixo com navegação
- **Hero**: Seção hero da landing page
- **Numbers**: Seção de números/estatísticas

## 📱 Responsividade

O projeto utiliza classes responsivas do Tailwind CSS com breakpoint `max-sm:` para dispositivos móveis.

## 🚀 Deploy no Servidor

Este projeto é **estático (SSG)**, o que significa que ele não precisa de Node.js rodando no servidor de produção.

### Passo a Passo

1. **Gerar o Build:**
   Na sua máquina local, execute:
   ```bash
   npm run build
   ```
   Isso criará uma pasta `dist/` com todos os arquivos HTML, CSS e JS otimizados.

2. **Upload:**
   Copie todo o conteúdo da pasta `dist/` para a pasta pública do seu servidor (ex: `/var/www/generic-client-base`).

3. **Configuração do Servidor (Nginx):**
   Um arquivo de exemplo `nginx.conf` foi incluído na raiz do projeto.
   - Copie o conteúdo deste arquivo para a configuração do seu Nginx (geralmente em `/etc/nginx/sites-available/`).
   - Ajuste o caminho `root` para onde você fez o upload dos arquivos.
   - Reinicie o Nginx.

---

## 🔗 Links Úteis

- [Documentação do Astro](https://docs.astro.build)
- [Documentação do Tailwind CSS](https://tailwindcss.com/docs)
- [Schema.org - Organization](https://schema.org/Organization)
- [Open Graph Protocol](https://ogp.me/)
- [Twitter Cards](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)
