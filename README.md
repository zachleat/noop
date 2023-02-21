# `@zachleat/noop`

A minimal ESM package to test module importing in other tools.

Install:

```
npm install @zachleat/noop
```

Usage:

```js
import { noop, noopSync } from "@zachleat/noop";
```

Does not provide a CommonJS version but you _could_ import in CommonJS using `import("@zachleat/noop")`.