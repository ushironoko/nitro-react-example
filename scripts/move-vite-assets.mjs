#!/usr/bin/env zx

await $`cp -f dist/index.html src`
await $`cp -f dist/*.js src/public`
await $`cp -f dist/*.css src/public`
await $`cp -f dist/*.svg src/public`
