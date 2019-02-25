## Reference

- Declaration Files Guide
  - https://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html
  - https://www.typescriptlang.org/docs/handbook/declaration-files/library-structures.html#consuming-dependencies
- https://basarat.gitbooks.io/typescript/
- ⭐️ https://itnext.io/step-by-step-building-and-publishing-an-npm-typescript-package-44fe7164964c

## To check

- https://www.pikapkg.com/blog/introducing-pika-pack/
- https://egghead.io/lessons/javascript-creating-the-library-and-adding-dependencies
- https://stackoverflow.com/questions/54836494/how-to-create-a-typescript-module-containing-react-components
- https://github.com/WrocTypeScript/
- https://github.com/karol-majewski/create-typescript-library
  
- [ ] Jest & testing
- [ ] CI
- [ ] Build with TS + Rollup only - mention

##  What if the types in your library make use of the latest TypeScript (conditional types, bigint etc.), but your users are still using an older version?

- typesVersions
  - https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-1.html

```json
{
  "name": "package-name",
  "version": "1.0",
  "types": "./index.d.ts",
  "typesVersions": {
    ">=3.1": { "*": ["ts3.1/*"] }
  }
}
```

## What Target?

- https://kangax.github.io/compat-table/es5/
- https://caniuse.com/#search=es5
- https://mariusschulz.com/blog/typescript-2-1-async-await-for-es3-es5
- https://www.meziantou.net/2018/05/14/which-version-of-ecmascript-should-i-use-in-the-typescript-configuration

## Downleveling

- `downlevelIteration`
  - previously generators, operators that work on Iterator (for..of) were only supported in ES6/ES2015
  - with this this flag they can be downleveled to ES3/5
- `noEmitHelpers`
  - disables generating helpers code (`__extends`, `__awaiter`, `__generator` etc.) for each file
- `importHelpers`
  - imports those helpers ☝️ once for generated code

## Types field

> Also note that if your main declaration file is named index.d.ts and lives at the root of the package (next to index.js) you do not need to mark the "types" property, though it is advisable to do so

## Files field

- can left out if default is ok
- > If the "files" and "include" are both left unspecified, the compiler defaults to including all TypeScript (.ts, .d.ts and .tsx)
- https://github.com/stereobooster/package.json#types
- https://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html

## Type only libraries

- https://github.com/piotrwitek/utility-types
- https://github.com/bterlson/strict-event-emitter-types

## Declaration map

- https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-9.html
- > In other words, hitting go-to-definition on a declaration from a .d.ts file generated with --declarationMap will take you to the source file (.ts) location where that declaration was defined, and not to the .d.ts.

## Module browser keys in package.json

- [ ] module browser keys in package.json
  - [ ] https://github.com/piotrwitek/typesafe-actions/blob/master/package.json