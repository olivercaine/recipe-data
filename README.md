[![Node.js CI](https://github.com/olivercaine/typescript-library-boilerplate/actions/workflows/node.js.yml/badge.svg)](https://github.com/olivercaine/typescript-library-boilerplate/actions/workflows/node.js.yml)
[![Coverage Status](https://coveralls.io/repos/github/goldenbearkin/typescript-library-boilerplate/badge.svg?branch=master)](https://coveralls.io/github/goldenbearkin/typescript-library-boilerplate?branch=master)

# Recipe Data

A simple NPM package containing recipe models and data

# Stacks
- **unit test**: mocha, chai
- **code coverage**: nyc, wallabyjs(optional)
- **ci**: travis

# How to use?

You can see a [demo](https://olivercaine.github.io/ui-component-library) of this being used in this [recipe UI package](https://github.com/olivercaine/ui-component-library).

1. Register the GitHub Package Registry in your .npmrc file ([additional docs](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry)):

```
# .npmrc
@olivercaine:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=<YOUR_GITHUB_TOKEN>
```

2. Install the package

```
npm install --save-dev @olivercaine/recipe-data@latest
```

Note: you can see the latest version in the [packages page](https://github.com/users/olivercaine/packages/npm/package/recipe-data)

3. Import the package into your app:

```typescript
import { recipes } from '@olivercaine/recipe-data'
```

# Commands list
````
yarn test           // run test(mocha) and coverage report(nyc)
yarn test:watch     // run test on watch mode (without coverage report)
yarn build          // build for both esm (ES5 + ES2015 module) and ES5 UMD bundle, at dist folder.
yarn lint           // run lint against lib and test
````

### Credits

1. [OpenAI](https://labs.openai.com) for generating to recipe details and images 
2. https://chat.openai.com for generating the recipe images (https://labs.openai.com/sc/dE4xFAJiJysVYdHW4ds4Fgmb)

# Testing

This boilerplate use Mocha as test framework.

# License

MIT