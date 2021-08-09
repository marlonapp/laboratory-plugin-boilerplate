# Marlon Lab Plugin Boilerplate

Marlon Laboratory is built with scalability in mind: internal team and community developers can develop own plugins that are able to add features, editing style, ovveride first-party components, manage events, access to WebGL Context, generate logics, and so on.

## Dependencies

All necessary stuff are handled by this boilerplate.
For preventing duplication of code and unuseful usage of memory, cpu and network the Marlon Laboratory will provide following dependencies:

- Vue: Vue Framework, version 2.6.14 (this will upgrade to > 3)
- Pixi: Pixi Framework, version 6.0.4 (this will upgrade to > 6.11)
- Marlon Lab: this package contains core of Marlon LAB (Application, WebGl, PIXI ticker, Event System, so on.)
- Marlon Vue: this package provides some useful stuff like utilities, vuex modules and vue components used by Marlon Team for Marlon Products.

### Install dependencies

1. Use your favourite package manager: npm, yarn, nnpm, etc.
2. Run install. Example `npm install` or `yarn install`.

## Eslint and TypeScript

This boilerplate includes configurations used by Marlon Team.

## Folder structure

./ src
    -  / components -> in this folder puts all Vue Component files
    -  / listeners -> in this folder puts all listeners files: Plugin has default code to load automatically all listeners.
    - main.ts  -> entry file: include code for auto-installation
    - plugin.ts -> this file contains main class of your plugin

## Development

1. Create a repo using this repo as template.
2. Run `npm run serve`.
3. Open Marlon Laboratory Application `https://stage.marlonapp.cloud`.
4. Log in using your credentials.
5. Select or create a project.
6. Install plugin using console. Place this code: 

    ```javascript
    MARLON_LAB.Application.instance.pluginManager.installFromURL(
        new URL('http://localhost:8080/marlon-example-plugin.umd.js')
    )
    ```

### Notes about plugins

- Change name for builds changing name into package.json
- If you run dev, two process run:
    1. Webpack (build and watch)
    2. Nodemon + HTTP SERVER
- You must refresh LABORATORY on build change, no Hot Reload provided yet.

## Production

Weight: ExamplePlugin GZipped -> 14.37 KiB.

1. Build `npm run build`
2. Deploy on your favourite CDN

## TODO

- [ ] Install by UI.
- [ ] Manage maps of events (mouse, keyboard, actions, gestures).
- [ ] Add tools property to Plugin like shortcuts.
- [ ] Use string with EventSystem.
- [ ] Provide more functions for access Application and write on it.
