# codesmash-aws-serverless-aurelia

This repo contains a highly customized template for deploying a serverless Aurelia web app. You can build a fully customized Aurelia web app from this repo. The app is intended to be deployed in an AWS S3 bucket. The AWS S3 bucket is used to provide a serverless (low cost and high availability) data storage for static files.

# Customization

This repo is usimg the following packages:

## Neutrino 

- A fluent API setup for Webpack

## Webpack

- Static file packaging for Javascript-based web apps.

## TypeScript

- Statically typed JavaScript implementation

## Tailwind CSS

- Utility-based CSS library

## Babel

- JavaScript transpiler

## PostCSS

- A tool for transforming CSS with JavaScript

# Build Process

The app is already prepared for 3 different environments - development, testing and production. You can run the app locally by simply running:

- npm run start

You can build the file for each environment by running:

- npm run dev
- npm run uat
- npm run prod
