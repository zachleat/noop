# @zachleat/noop

A minimal ESM package to test module importing in other tools.

Install from [npm](https://www.npmjs.com/package/@zachleat/noop):

```
npm install @zachleat/noop
```

Usage:

```js
// ESM
import { noop, noopSync } from "@zachleat/noop";

// Dynamic Import
const { noop, noopSync } = await import("@zachleat/noop");

// CommonJS
const { noop, noopSync } = require("@zachleat/noop");
```
