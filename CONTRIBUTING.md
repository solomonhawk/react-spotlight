# Contributing

1. [Setup](#setup)
2. [Running in development](#running-in-development)
3. [Configuration](#configuration)
4. [Deployment](#deployment)
5. [Testing](#testing)
6. [Reviews](#reviews)

## Setup

This project is built using tools written for
[nodejs](http://nodejs.org). We recommend installing Node with
[nvm](https://github.com/creationix/nvm).

At the time of writing, the project is built (and tested) with Node
0.10.0. It will remain at that version until a higher level of build tool
support for 0.12.0 can be obtained.

Dependencies are managed with an [`npm`](npmjs.org) `package.json`
file. You can install dependencies with:

```bash
npm install
```

## Running in development

```bash
npm run dev
```

This will host the node application, however it will additionally boot
up `webpack-dev-server` to manage asset compilation.

## Configuration

All environment variables should go in `.env`. This file is loaded in
on boot, but existing variables will persist. For example:

`NODE_ENV=production PORT=4000 npm start`

Would start the server in production mode on port `4000`, instead of `3000`.

## Deployment

A `postinstall` script has been added to the `package.json` for this
project. Heroku should automatically run this script to build
assets. For other hosting environments simply run `npm run
postinstall` after other deployment activities have been performed.

On your server, you may need to set the `NODE_ENV` flag to
`production`, more on that here:

https://devcenter.heroku.com/articles/nodejs-support

## Testing

This project uses [Karma](karma-runner.github.io). You can run tests
with:

```bash
npm test
```

### Coverage

Additionally, we aspire for 100% code coverage. However this is not a
foolproof indicator of good testing. Tests that cover as much surface
area as possible (for the sake of coverage) should be avoided. This
is a much softer measure than a style guide, and will fall to code
review for enforcement.

## Reviews

All changes should be submitted through pull request. Ideally, at
least two :+1:s should be given before a pull request is merge.
