# Serverless Aurelia

![Aurelia](https://github.com/immmersive/codesmash-aws-serverless-aurelia/blob/main/app/web/src/resources/images/aurelia.png)

This repo contains a highly customized template for deploying a serverless Aurelia web app. 

You can build a fully customized Aurelia web app from this repo. The app is intended to be deployed in an AWS S3 bucket. The AWS S3 bucket is used to provide a serverless (low cost and high availability) data storage for static files.

# 📦 Customization

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

# 🔨 Build Process

The app is already prepared for 3 different environments - development, testing and production. You can run the app locally by simply running:

- npm run start

You can build the file for each environment by running:

- npm run dev
- npm run uat
- npm run prod

## 🏗️ Building in AWS

The app is ideally built as part of a DevOps build process in a CI/CD pipeline, in AWS CodeBuild and automatically deployed to an AWS S3 bucket. You can find the config files for each environment, which define the build steps in the following path:

- app/web/src/config/aws/buildspec_${stage}.yml

# 🚧 Roadmap

Further additions to the repository are as follows:

## AWS AppSync

Coming soon

## AWS API Gateway

Coming soon

## AWS Cognito

Coming soon

## Aurelia Store

Coming soon

## Aurelia I18N

Coming soon

## Markdown Processing

Coming soon
