# @intothesource/hashtag-shredder

Shreds hashtags 🤘

## Usage

```js
import { HashtagShredder } from '@intothesource/hashtag-shredder';

const original = 'Foo #Hash Bar';
const shredded = HashtagShredder.shred(original);

t.is(shredded, 'Foo Bar');
```

## Publishing Changes

```console
$ npm run release -- [patch|minor|major]
```

## Update the docs on https://intothesource.github.io/hashtag-shredder/

```console
$ npm run deploy:gh-pages
```
