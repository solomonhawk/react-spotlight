# react-pack

A React project template based on previous work we have done. **This
is a work in progress**.

---

[![Circle CI](https://circleci.com/gh/vigetlabs/react-pack.svg?style=svg&circle-token=e00756be10579c2767550fc76d42af9b4823f6c5)](https://circleci.com/gh/vigetlabs/react-pack)

---

1. [Overview](#overview)
2. [What it includes](#what-it-includes)
3. [Structure](#structure)
4. [Running the app](#running-the-app)
5. [Roadmap](#roadmap)

## Overview

`react-pack` was spin off of our Capacitor repo, however has much
stronger opinions influenced by our previous React apps. This repo is
for Viget, not the world.

## What it includes:

1. [Microcosm](https://github.com/vigetlabs/microcosm) for architecture
2. [ImmutableJS](https://github.com/facebook/immutable-js) for data storage
3. [ReactRouter](https://github.com/rackt/react-router) for routing
4. [Webpack](https://github.com/webpack/webpack) for asset compilation
5. [BabelJS](babeljs.io) for modern JavaScript language features
6. [HapiJS](hapijs.com) for backend support

## Structure

This is not complete, but:

```
.
├── app            # The react app
├── bin            # Binaries
├── config         # Configuration settings (karma, webpack, etc)
├── package.json   # Contains npm dependencies and build scripts
├── platforms
│   ├── browser    # Setup for rendering in the browser
│   └── node       # Setup for hosting the app with node
```

## Running the app

```bash
npm install
npm start
```

This will host the server and webpack. You can visit the sample app at
http://localhost:3000.

## Roadmap

1. I (Nate) need to add more documentation.
2. The Flux framework used here, Microcosm, needs tighter integration with
ImmutableJS.
3. The setup should be layered so that the needs of large apps can
   easily be stripped away for smaller apps.
4. The setup is 85% batteries included for server rendering. This
   should be 100%, and easy to toggle.
