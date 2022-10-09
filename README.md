<table>
  <tr>
    <td><img src="https://github.com/luiizsilverio/codarme-copa/blob/master/web/public/img/logo/logo-fundo-branco.svg" /></td>
    <td><h1>COPA 2022</h1></td>
  </tr>
</table>


## Conteúdo
* [Sobre a aplicação](#sobre-a-aplicação)
* [Tecnologias](#hammer_and_wrench-tecnologias)
* [Iniciando a Aplicação](#car-Iniciando-a-aplicação)
* [Screenshots](#camera_flash-screenshots)
* [Licença](#balance_scale-licença)
* [Contato](#email-contato)

## Sobre a aplicação
Aplicação desenvolvida durante o evento __Full Stack Challenge__, edição Copa 2022, promovido pela Codar.me.<br />
Foram 5 dias de aula, totalizando mais de 11 horas de vídeo, desenvolvendo uma API em Node e um front-end em React.<br />
A aplicação possui um cadastro de usuários, com tela de login e de cadastro.
Ao logar, o sistema entra na Dashboard, que mostra os jogos da Copa realizados no dia informado.<br/>
Além disso, permite dar palpites na pontuação dos jogos.<br/>
Todos os palpites são armazenados na nuvem, em um banco de dados do [PlanetScale](https://planetscale.com).<br />
Foram feitas algumas melhorias no Front-end, como por exemplo, __Phosphor-Icons__ para exibir ícones, ao invés de arquivo Svg. Além disso, notificações de erro são exibidas utilizando __React-Toastify__.<br />
Ao final da última aula, foi explicado como fazer o deploy da API na Vercel. A aplicação está disponível [aqui](https://copa-api-one.vercel.app).<br />


## :hammer_and_wrench: Tecnologias
* Back-end
  * __Node__ + __Koa__ + __Cors__
  * __Prisma ORM__ para acessar o banco de dados
  * __JsonWebToken__ para autenticação JWT
* Front-end
  * __React + Vite__
  * __TailwindCSS__ para estilização.
  * __Formik / Yup__ para validação de formulários
  * __React-Use__ para Hooks
  * __Date-Fns__ para lidar com datas.
  * __Phosphor-React__ para exibir ícones
  * __React-Toastify__ para exibição de mensagens
  * __Axios__ para acessar a API.
<br />

## :car: Iniciando a aplicação
Baixe o repositório com git clone e entre na pasta do projeto.<br/>
Renomeie os arquivos _.env.example_ para _.env_ e informe as URLs e o JWT secret.<br/>
```bash
$ git clone https://github.com/luiizsilverio/codarme-copa
```
* Back-end
```bash
$ cd api
$ npm install
$ npm run dev
```
* Front-end
```bash
$ cd ..
$ cd web
$ npm install
$ npm run dev
```

## :camera_flash: Screenshots
![](https://github.com/luiizsilverio/codarme-copa/blob/master/web/src/assets/copa.gif)

## :balance_scale: Licença
Este projeto está licenciado sob a [licença MIT](LICENSE).

## :email: Contato

E-mail: [**luiiz.silverio@gmail.com**](mailto:luiiz.silverio@gmail.com)
