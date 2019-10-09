const REGEXP = /\B#\w+(\b\s)?/gm;

class HashtagShredder {

    static shred(text) {
        return new this(text).shred();
    }

    constructor(text) {
        this.text = text;
    }

    shred(text = this.text) {
        return text.replace(REGEXP, '');
    }
}

module.exports.HashtagShredder = HashtagShredder;
