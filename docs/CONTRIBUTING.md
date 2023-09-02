# Contributing to BTIB

This repository is used for the frontend and queries made to the API. For contributing to the CMS, navigate to the CMS repository [here](https://github.com/Black-Tech-in-Brum/btib_cms)

## Setup

Find setup instructions [here](https://github.com/Black-Tech-in-Brum/btib_cms#setup)

## Tech stack documentation

[Vite](https://vitejs.dev/guide/)
[Tailwind](https://tailwindcss.com/)
[Tailwind Cheatsheet](https://nerdcave.com/tailwind-cheat-sheet)
[React](https://react.dev/)

## Adding and modifying components

Components should be added and kept in `src/components`. When creating a new component, it should be placed in a folder of the same name, formatted in [camelCase](https://techterms.com/definition/camelcase). The component itself should use [PascalCase](https://techterms.com/definition/pascalcase). Each folder should have an index file that exports the component and any dependencies required for its implementation.

```tree
src/
  ├── components/
  │     ├── newComponent
  │          ├── NewComponent.jsx
  |          └── index.js
  │     └── ...
```

### Type-guarding

Many of the tools used in this repository are built with Typescript. As a result, props passed through components may need to be type guarded using [React's Prop Type library](https://github.com/facebook/prop-types) or lengthy conditionals. Plans are being made to transition to Typescript in order to de-duplicate code and improve maintainability.

### Assets

Few assets should be stored in the repository, as we have implemented a CMS which hosts most of the media. However, icons, fonts, and static images are implemented for the purpose of UI. Images are stored in `public/img`, fonts in `src/assets/fonts` and icons in `src/assets/icons`. Due to Vite + React's lack of native SVG import support, these must be imported as React Components and used like so:

```js
import {NewIcon as ReactComponent} from `@assets/icons/new-icon.svg`
...
return (
    ...
    <NewIcon />
    ...
)
```

All props passed to the icon component will be passed to the SVG element in the file.

### Layouts and other categories

If a component is being used to wrap other components, it can be considered a layout. In this case, the layout should be stored in `src/layouts`. Likewise, if it is solely a hook to be used by other components, it should be stored in `src/hooks` and if it is a utility function, it should be stored in `src/utils`. If you see fit to add another category of code, the folder for this category should be stored in `src`. The alias for this new folder should be added in `vite.config.js`.

```js
import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'url'
...

...
export default defineConfig({
  ...
  resolve: {
    alias: [
      ...
      {
        find: '@newCategory',
        replacement: fileURLToPath(new URL('./src/newCategory', import.meta.url)),
      },
      ...
    ],
    ...
  },
  ...
})
```

This can become a tedious process, as each category path is aliased one by one, but again, plans are being made to transition to Typescript, which has native support for aliasing nested categories with ease.

## Further support

Please contact developers on the Discord channel.
