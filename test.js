import test from 'ava';

import { HashtagShredder } from '.';

console.dir({ HashtagShredder });

test('HashtagShredder() — empty string if only input is a hashtag', t => {
    const original = '#Foo';
    const shredded = HashtagShredder.shred(original);

    t.is(shredded, '');
});

test('HashtagShredder() — be nice with whitespace', t => {
    const original = 'Foo #Hash Bar';
    const shredded = HashtagShredder.shred(original);

    t.is(shredded, 'Foo Bar');
});

test('HashtagShredder() — be nice with uppercase and lowercase', t => {
    const original = 'Foo #hash #tag Bar';
    const shredded = HashtagShredder.shred(original);

    t.is(shredded, 'Foo Bar');
});

test('HashtagShredder() — also shred trailing whitespace', t => {
    const original = '#Foo ';
    const shredded = HashtagShredder.shred(original);

    t.is(shredded, '');
});

test('HashtagShredder() — do not shred url fragments', t => {
    const original = 'Foo https://example.com/index.html#hash Bar';
    const shredded = HashtagShredder.shred(original);

    t.is(shredded, 'Foo https://example.com/index.html#hash Bar');
});
