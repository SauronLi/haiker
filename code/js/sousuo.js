function main() {
    addListener("onClose", $.toString(() => {
        clearMyVar('sousuo$input');
    }));
    var d = [];
    var searchurl = $('').lazyRule(() => {
        var bn = input;
        return $('hiker://empty##fypage##noRecordHistory##noHistory#').rule((bn) => {
            require("hiker://files/rules/bgHouse/js/method.js");
            search(bn);
        }, bn);


    });
    d.push({
        title: '🔍',
        url: $.toString((searchurl) => {
            return input + searchurl;
        }, searchurl),

        col_type: 'input',
        extra: {
            titleVisible: true,
        }
    });
    setResult(d);
}