# Serverless Aurelia

![Aurelia](https://github.com/immmersive/codesmash-aws-serverless-aurelia/blob/main/app/web/src/resources/images/aurelia.png)

This repo contains a highly customized template for deploying a serverless [Aurelia](https://aurelia.io/) web app. 

You can build a fully customized Aurelia web app from this repo. The app is intended to be deployed in an AWS S3 bucket. The AWS S3 bucket is used to provide a serverless (low cost and high availability) data storage for static files.

# 🔨 Build Locally

The app is already prepared for 3 different environments - development, testing and production. You can run the app locally, by first installing NPM packages in the following folder:

```bash
cd codesmash-aws-serverless-aurelia/app/web

npm i

npm run start  
```

You can build the file for each environment (dev, uat, prod) by running:

```bash
npm run ${stage}  
```

## 🏗️ Build in AWS

The app is ideally built as part of a DevOps build process in a CI/CD pipeline, with AWS CodeBuild and automatically deployed to an AWS S3 bucket. You can find the config files for each environment, which define the build steps in the following path:

```bash
app/web/src/config/aws/buildspec_${stage}.yml
```

# 📦 Customization

This repo is usimg the following packages:

## Aurelia

JavaScript framework for building SPA web apps.

- aurelia-plugin
- aurelia-bootstrapper

## Neutrino 

A fluent API setup for Webpack

## Webpack

Static file packaging for Javascript-based web apps.

- records
- custom build folder
- hot module reload
- html-webpack-plugin
  - index.ejs template
- copy-webpack-plugin
  - robots.txt
  - sitemap.xml
- url-loader
  - imports images
- resolves node_modules
- dynamic import
  - build manifest
  - split chunks and load with dynamic import('...')
- performance hints
- postcss-loader
- mini-css-extract-plugin
  - css-loader: loads css files
  - sass-loader: loads saas files
- ts-loader
  - loads TypeScript files

## TypeScript

Statically typed JavaScript implementation

## Tailwind CSS

Utility-based CSS library

## Babel

JavaScript transpiler

## PostCSS

A tool for transforming CSS with JavaScript

# How To

## Dynamic Chunk Import

You can load parts of JavaScript dynamically by importing them in the following way:

```javascript
const { default: myModule } = await import(/* webpackChunkName: "myModule" */ '../myModule');  
```

# 🚧 Roadmap

Further additions to the repository are as follows:

## AWS AppSync

Load data from database using a serverless GraphQL API hosted on AWS.

## AWS API Gateway

Load data from database using a serverless REST API hosted on AWS.

## AWS Cognito

Authenticate users with a serverless auth service hosted on AWS.

References

[codesmash-aws-serverless-auth](https://github.com/immmersive/codesmash-aws-serverless-auth)

## Aurelia Store

Manage state on the frontend.

## Aurelia I18N

Load translations dynamically.

## Markdown Processing

Display markdown text with styles.
