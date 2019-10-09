import { expectType, expectError } from 'tsd';
import { HashtagShredder } from '.';

expectType<string>(HashtagShredder.shred('#Foo'));
expectType<string>(new HashtagShredder('#Foo').shred());
expectType<string>(new HashtagShredder().shred('#Foo'));
