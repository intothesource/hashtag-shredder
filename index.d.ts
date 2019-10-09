declare namespace HashtagShredder {
    export class HashtagShredder {
        text?: string;
        static shred(text: string): string;
        constructor(text?: string)
        shred(text?: string): string;
    }
}

export = HashtagShredder;
