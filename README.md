## First React Web App
Based on [React Starter Kit](https://www.reactstarterkit.com)
[Node.js](https://nodejs.org/)
[React](https://facebook.github.io/react/)
[Webpack](http://webpack.github.io/)
[Babel](http://babeljs.io/)
[Browsersync](http://www.browsersync.io/)

## Getting Started

### Requirements

* Mac OS X, Windows, or Linux
* [Yarn](https://yarnpkg.com/) package + [Node.js](https://nodejs.org/) v6.5 or
  newer
* Text editor or IDE pre-configured with React/JSX/Flow/ESlint
  ([learn more](./how-to-configure-text-editors.md))

### Directory Layout

Before you start, take a moment to see how the project structure looks like:

```
.
├── /build/                     # The folder for compiled output
├── /docs/                      # Documentation files for the project
├── /node_modules/              # 3rd-party libraries and utilities
├── /public/                    # Static files which are copied into the /build/public folder
├── /src/                       # The source code of the application
│   ├── /components/            # React components
│   ├── /data/                  # GraphQL server schema and data models
│   ├── /routes/                # Page/screen components along with the routing information
│   ├── /client.js              # Client-side startup script
│   ├── /config.js              # Global application settings
│   ├── /server.js              # Server-side startup script
│   └── ...                     # Other core framework modules
├── /test/                      # Unit and end-to-end tests
├── /tools/                     # Build automation scripts and utilities
│   ├── /lib/                   # Library for utility snippets
│   ├── /build.js               # Builds the project from source to output (build) folder
│   ├── /bundle.js              # Bundles the web resources into package(s) through Webpack
│   ├── /clean.js               # Cleans up the output (build) folder
│   ├── /copy.js                # Copies static files to output (build) folder
│   ├── /deploy.js              # Deploys your web application
│   ├── /postcss.config.js      # Configuration for transforming styles with PostCSS plugins
│   ├── /run.js                 # Helper function for running build automation tasks
│   ├── /runServer.js           # Launches (or restarts) Node.js server
│   ├── /start.js               # Launches the development web server with "live reload"
│   └── /webpack.config.js      # Configurations for client-side and server-side bundles
├── Dockerfile                  # Commands for building a Docker image for production
├── package.json                # The list of 3rd party libraries and utilities
└── yarn.lock                   # Fixed versions of all the dependencies
```

### Quick Start

#### 1. Get the latest version

You can start by cloning the latest version of React Starter Kit (RSK) on your
local machine by running:

```shell
$ git clone https://github.com/ursulacervantes/first-react-app.git
```

#### 2. Run `yarn install`

This will install both run-time project dependencies and developer tools listed
in [package.json](../package.json) file.

#### 3. Run `yarn start`

This command will build the app from the source files (`/src`) into the output
`/build` folder. As soon as the initial build completes, it will start the
Node.js server (`node build/server.js`) and
[Browsersync](https://browsersync.io/) with
[HMR](https://webpack.github.io/docs/hot-module-replacement) on top of it.

> [http://localhost:3000/](http://localhost:3000/) — Node.js server
> (`build/server.js`) with Browsersync and HMR enabled\
> [http://localhost:3001/](http://localhost:3001/) — Browsersync control panel
> (UI)

Now you can open your web app in a browser, on mobile devices and start hacking.
Whenever you modify any of the source files inside the `/src` folder, the module
bundler ([Webpack](http://webpack.github.io/)) will recompile the app on the fly
and refresh all the connected browsers.

![browsersync](https://dl.dropboxusercontent.com/u/16006521/react-starter-kit/brwosersync.jpg)

Note that the `yarn start` command launches the app in `development` mode, the
compiled output files are not optimized and minimized in this case. You can use
`--release` command line argument to check how your app works in release
(production) mode:

```shell
$ yarn start -- --release
```

_NOTE: double dashes are required_

[demo]: http://
