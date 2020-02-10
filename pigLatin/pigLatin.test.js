const pigLatin = require("./pigLatin.js");

describe('#translate', function () {
    it('translates a word beginning with a vowel', function() {
        s = pigLatin.translate("apple");
        expect(s).toEqual('appleay');
    })
})