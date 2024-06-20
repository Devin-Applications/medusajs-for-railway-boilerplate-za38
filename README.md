# Drivigo

Drivigo is an online travel package selling site built using the Medusa framework and deployed on Railway. This project consists of a MedusaJS backend and a Next.js frontend, providing a seamless e-commerce experience for travel packages.

## Overview

Drivigo leverages the power of Medusa for the backend and Next.js for the frontend to deliver a performant and scalable e-commerce platform. The project is deployed on Railway, ensuring easy deployment and management of the application.

## Backend Service: medusajs-backend

### Railway Setup

- Change the value of environment variables: `COOKIE_SECRET` and `JWT_SECRET` to secure random values.
- Configure Cloudinary credentials: `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, and `CLOUDINARY_API_SECRET`.

### Local Setup

1. Install dependencies:
   ```bash
   yarn
   ```

2. Rename `.env.template` to `.env` and configure the environment variables.

3. To connect to your online database from local, copy the `DATABASE_URL` value generated on Railway and add it to your `.env`.

### Requirements

- **Postgres database** (automatically generated if using Railway template)
- **Redis** (automatically generated if using Railway template)

### Optional

- **Cloudinary**: Use Cloudinary for media services.
  1. Sign up for a free account with [Cloudinary](https://cloudinary.com/invites/lpov9zyyucivvxsnalc5/yhlpdo1vaw2mq1la0nks?t=default) and choose "developer API calls" type of user.
  2. Add your `cloud_name`, `api_key`, and `api_secret` to `.env.local` to enable Cloudinary as a file service in the local dev environment.
  3. Configure the same environment variables in your Railway dashboard to enable Cloudinary in production.
  4. For more setup details, visit [Medusa File Cloudinary](https://medusajs.com/plugins/medusa-file-cloudinary/).

### Commands

- Compile the app:
  ```bash
  yarn build
  ```

- Start the local admin dashboard app to manage products and orders:
  ```bash
  yarn dev
  ```

- Start the backend server (needed for the storefront):
  ```bash
  yarn start
  ```

## Frontend Service: medusa-storefront

### Local Setup

1. Install dependencies:
   ```bash
   yarn
   ```

2. Rename `.env.local.template` to `.env.local` and configure the environment variables.

### Requirements

- Running backend (`npm run start`) to fetch product data and more, to build Next.js pages.

### Commands

- Keep calling backend endpoint until a backend responds:
  ```bash
  yarn wait
  ```

- Build the Next.js app (ensure the backend app is running before this command):
  ```bash
  yarn build
  ```

- Serve the frontend web shop:
  ```bash
  yarn start
  ```

## Deployment
The backend service is deployed at: [Backend URL](https://medusajs-backend-production-8049.up.railway.app)

The frontend service will be deployed once the setup is complete.

## Medusa UI Components

For UI components, follow the [Medusa UI documentation](https://docs.medusajs.com/ui).
