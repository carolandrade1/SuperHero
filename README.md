<p align='center'>
<img src="https://img.shields.io/badge/CarolAndrade-superhero-blue"/>
<img src="https://img.shields.io/website?url=https%3A%2F%2Fsuper-hero-beta.vercel.app%2F"/>
</p>
<br>

<h1 align='center'><a href="https://carol-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer" title="Veja o Portfolio"><img src="https://i.postimg.cc/0jJG1nwF/SUPER-HERO.png" alt="Portfolio" width="800" height=""/></a></h1>

<p align="center">
 <a href="#-sobre">Sobre</a> •
 <a href="#-instalação">Instalação</a> •
 <a href="#-organização">Organização</a> • 
 <a href="#-funcionalidades">Funcionalidades</a> •
 <a href="#-ci-cd">CI/CD</a> • 
 <a href="#-linguagens-e-tecnologias-utilizadas">Linguagens e tecnologias utilizadas</a> • 
 <a href="#licença">Licença</a>
</p>
<br>
<br>

<h3 align="center"><a href="https://super-hero-beta.vercel.app/" target="_blank" rel="noopener noreferrer">Clique aqui para conferir o projeto!</a></h3><br>
<br>

---

## 💻 Sobre

<p align="center">
<img src="https://i.postimg.cc/3xGXctTv/heroes.png" alt="Site Super Hero" width="700" height=""/>
</p>
Este projeto é uma SPA que tem como objetivo consumir a API Super Hero e demonstar os dados de cada herói.

---

## 📋 Instalação

1. Clonar repositorio
```
git clone https://github.com/carolandrade1/SuperHero
```

2. Acesse a pasta
```
cd SuperHero
```

3. Instalar dependências
```
yarn install
```

4. Rodar aplicativo
```
yarn dev
```

5. Acesse http://localhost:3000/ e navegue pelo site

<a href="https://github.com/carolandrade1/template_next_styled" target="_blank" rel="noopener noreferrer">Template base com Next e Styled Components</a>

---

## 🗃 Organização
Abaixo segue estrutura das pastas:
```
|--pages/
|----superhero
|------[id].js
|----404.js
|----favoritos.js
|----index.js(home)
```
- pages: arquivos com as informações de cada página.

```
|--src/
|----components/
|------common/
|--------footer/
|--------head/
|--------menu/
|--------SEO/
|------context/
|------screens/
|--------SuperHeroScreen/
|--------FavoritosScreen/
|--------HomeScreen/
|--------NotFoundScreen/
|----theme/
|------GlobalStyles.js
```
- src: componentes criados e theme,
- common: componentes com suas próprias lógicas, comuns a todas as páginas,
- screen: componente interno de cada página.

```
|--HomeScreen/
|----style/
|------index.js
|----index.js
```
- style: dentro de cada componente existe uma pasta com o nome 'style' com todas as informações para gerar o CSS.

---
 
## 🧠 Funcionalidades

- Na página pricipal você pode visualizar todos os heróis disponiveis na API Super Hero. Ao clicar em qualquer card você é direcionado para outra página com os dados daquele herói. É possivel adiconar um herói a seção de favoritos ao clicar no botão.
- Na página dos Favoritos, voce visualiza os heróis que foram adicionados a lista.

---

## 👁‍🗨 CI-CD

Para configuração do projeto utilizei:

- ESLint: utilizei o eslint com as configuraçõs do airbnb para automatizar a formatação de pequenos problemas como espaços em branco, ponto e vírgula, aspas e vírgulas finais.

- Husky: foi utilizado para garantir a correção do ESLint com a configuração do pré-commit antes de finalizar o commit.

- Conventional Commits: fornece um conjunto fácil de regras para a criação de um histórico de commits explícito.

Todos eles já estavam instalado no <a href="https://github.com/carolandrade1/template_next_styled" target="_blank" rel="noopener noreferrer">Template base com Next e Styled Components</a> que utilizei para iniciar o projeto.

---

## 💻 Linguagens e tecnologias utilizadas
<p align="left"> <a href="#" target="_blank"> <img src="https://cdn-images-1.medium.com/max/1200/1*y1fCsOVCYCTi1B9Q_0BOYg.png" alt="css3" width="30" height="30"/> </a> <a href="https://www.w3schools.com/css/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="30" height="30"/> </a> <a href="https://www.w3.org/html/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="30" height="30"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="30" height="30"/> </a> <a href="https://reactjs.org/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="30" height="30"/> </a> <a href="https://git-scm.com/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="30" height="30"/> </a> <a href="https://nextjs.org/" target="_blank"> <img src="https://raw.githubusercontent.com/samfromaway/samfromaway/master/.github/images/nextjs.png" alt="figma" width="30" height="30"/> </a> <a href="https://www.figma.com/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="figma" width="30" height="30"/> </a> </p>

---

## Licença

Este projeto está sob a licença [MIT](./LICENSE).

Feito por [Carol Andrade](https://www.linkedin.com/in/carolandrade1/)