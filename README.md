# Academia Pro Saúde Fitness — Site em React + Material UI

Projeto demonstrativo para apresentar uma proposta de site institucional para a **Academia Pro Saúde Fitness**, com foco em captação de alunos pelo WhatsApp, visual moderno, responsivo e pronto para publicar na Vercel.

## Tecnologias

- React
- Vite
- Material UI
- MUI Icons
- Emotion

## Como rodar localmente

```bash
npm install
npm run dev
```

Depois acesse o endereço exibido no terminal, normalmente:

```bash
http://localhost:5173
```

## Gerar build de produção

```bash
npm run build
```

A pasta final será criada em:

```bash
dist
```

## Publicar na Vercel

1. Crie um repositório no GitHub.
2. Envie todos os arquivos deste projeto.
3. Acesse a Vercel e clique em **Add New Project**.
4. Importe o repositório.
5. Framework Preset: **Vite**.
6. Build Command: `npm run build`.
7. Output Directory: `dist`.
8. Clique em **Deploy**.

## Estrutura principal

```text
academia-pro-saude-mui/
├─ public/
│  └─ assets/
│     ├─ pro-saude-logo.png
│     ├─ hero-banner.jpg
│     ├─ instagram-feed.jpg
│     ├─ post-dia-das-maes.jpg
│     ├─ post-dia-trabalhador.jpg
│     └─ post-horario-feriado.jpg
├─ src/
│  ├─ App.jsx
│  ├─ main.jsx
│  └─ theme.js
├─ index.html
├─ package.json
├─ vercel.json
└─ README.md
```

## Onde alterar informações

As principais informações ficam no arquivo:

```text
src/App.jsx
```

Procure por estas constantes no começo do arquivo:

```js
const WHATSAPP_NUMBER = '5517991056126';
const WHATSAPP_DISPLAY = '(17) 99105-6126';
const ADDRESS = 'Av. Romeu Strazzi, 1505 - São José do Rio Preto, SP';
```

## Observação para apresentação comercial

As imagens foram montadas a partir dos prints enviados das redes sociais. Para vender o serviço com mais força, o ideal é depois substituir por fotos reais em alta qualidade da fachada, equipamentos, recepção, professores e alunos treinando.
