<p align="center">
  <a href="#">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="path/to/drivigo-logo-dark.svg">
      <source media="(prefers-color-scheme: light)" srcset="path/to/drivigo-logo-light.svg">
      <img alt="Drivigo logo" src="path/to/drivigo-logo-light.svg" width=100>
    </picture>
  </a>
  <a href="https://railway.app/template/QvfPwp?referralCode=-Yg50p">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://railway.app/brand/logo-light.svg">
      <source media="(prefers-color-scheme: light)" srcset="https://railway.app/brand/logo-dark.svg">
      <img alt="Railway logo" src="https://railway.app/brand/logo-light.svg" width=100>
    </picture>
  </a>
</p>

<h2 align="center">
  Drivigo - Your Travel Package Solution<br>
  <a href="https://railway.app/template/QvfPwp?referralCode=-Yg50p">one-click deploy on railway!</a>
</h2>

<h1 align="center">
  Need help?<br>
  <a href="#">Step by step tutorial, with screenshots and video</a>
</h1>

<p align="center">
  Combine Drivigo's modules for your travel package backend with the newest Next.js 14 features for a performant storefront.</p>

<p align="center">
  <a href="#">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat" alt="PRs welcome!" />
  </a>
  <a href="#">
    <img src="https://img.shields.io/badge/chat-on%20discord-7289DA.svg" alt="Discord Chat" />
  </a>
  <a href="#">
    <img src="https://img.shields.io/twitter/follow/drivigo.svg?label=Follow%20@drivigo" alt="Follow @drivigo" />
  </a>
</p>

## About this boilerplate
This boilerplate is a monorepo consisting of a snapshot of a Drivigo backend and storefront app created with `npx create-drivigo-app@latest` February 2024. Modified to be plug n' play deployable on [railway.app](https://railway.app?referralCode=-Yg50p)!


# drivigo-backend

### railway setup
Please change the value of environment variables: `COOKIE_SECRET` and `JWT_SECRET`.

### local setup
- Install dependencies `yarn`
- Rename `.env.template` ->  `.env`
- To connect to your online database, from local; copy the `DATABASE_URL` value that has been auto-generated on railway, and add to your `.env`

### requirements
- **postgres database** (will be automatically generated if using railway template)
- **redis** (will be automatically generated if using railway template)

### optional
 - **cloudinary**: I highly recommend using a proper media service.
   1. Sign up for a free account with [cloudinary](https://cloudinary.com/invites/lpov9zyyucivvxsnalc5/yhlpdo1vaw2mq1la0nks?t=default) choose "developer API calls" type of user.
   2. Add your `cloud_name`, `api_key` & `api_secret` to .env.local this will enable Cloudinary as a file service on local dev environment
   3. Configure the same environment variables in your railway dashboard to enable cloudinary in production.
   4. If the steps above were confusing, visit [https://cloudinary.com/documentation](https://cloudinary.com/documentation) for more setup details.

### commands
`cd drivigo-backend/`
`yarn build` will compile the app.
`yarn dev` will start the local admin dashboard app to manage products and orders etc.
`yarn start` will start the backend server, needed for the storefront

# drivigo-storefront

### local setup
install dependencies `yarn`
Rename `.env.local.template` ->  `.env.local`

### requirements
- running backend `npm run start` - needed to fetch products data and more, to build nextjs pages.

### commands
`cd drivigo-storefront/`
`yarn wait` will keep calling backend endpoint until a backend responds.
`yarn build` will build the nextjs app - remember to start backend app prior to running this command.
`yarn start` will serve the frontend web shop.
