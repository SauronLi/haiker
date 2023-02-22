function main() {
    let url_1 = MY_PARAMS.url;
    var html = fetch(url_1);
    let title = MY_PARAMS.title;
    let description = MY_PARAMS.desc
    let pic = MY_PARAMS.pic_url;
    var bb = ["//*[@id=\"xl1\"]/@onclick", "//*[@id=\"xl1\"]/@onclick", "//*[@id=\"xl2\"]/@onclick", "//*[@id=\"xl3\"]/@onclick", "//*[@id=\"xl4\"]/@onclick", "//*[@id=\"xl5\"]/@onclick"]

    let a = [];
    a.push({
        title: "‘‘’’<b><small><font color=\"#b0e0e6\">片名:" + "\n" + "\n" + title + "</font></small></b>",
        desc: "‘‘’’<b><small><b><font color=\"#708090\">" + title + "</font></b><font color=\"#778899\">" + description + "</font></small></b>",
        url: "pic",
        pic_url: pic,
        col_type: "movie_1_vertical_pic_blur"
    })
    a.push({
        title: "线路",
        url: $("#noLoading#").lazyRule(() => {
            if (getItem("xl", "gua") == "ka") {
                clearItem("xl");
            } else {
                setItem("xl", "ka");
            }
            refreshPage(false);
            return "#noHistory#hiker://empty"
        }),
        pic_url: version.icon + "67.png",
        col_type: "icon_small_3",
    })
    a.push({
        title: "剧情",
        desc: "",
        url: $("hiker://empty#noRecordHistory##noHistory#").rule((description) => {
            setResult([{title: description, col_type: "long_text"}]);
        }, description),
        pic_url: version.icon + "10.png",
        col_type: "icon_small_3",
        extra: {"inheritTitle": false}//不继承标题
    })
    a.push({
        title: "搜索",
        desc: "",
        url: $("hiker://empty#noRecordHistory##noHistory#").rule(() => {
            require(version.localhost + "method.js");
            sousuo();
        }),
        pic_url: version.icon + "195.png",
        col_type: "icon_small_3",
    })
    var bb = {
        线路一: "//*[@id=\"xl1\"]/@onclick",
        线路二: "//*[@id=\"xl2\"]/@onclick",
        线路三: "//*[@id=\"xl3\"]/@onclick",
        线路四: "//*[@id=\"xl4\"]/@onclick",
        线路五: "//*[@id=\"xl5\"]/@onclick"
    }
    let xl = xianlu();
    for (let i in xl) {
        a.push(xl[i])
    }
    var url = xpathArray(html, eval("bb."+getItem("path")));
    for (let i =0;i<url.length;i++) {
        a.push({
            title: "第" + (i+1) + "话",
            url: $().lazyRule((url) => {
                require("hiker://files/rules/bgHouse/js/erji.js");
                return eval(url)
            }, (url[i])), col_type: 'text_4',
        })
    }
    d.push({
        desc: "‘‘’’<small><font color=#f20c00>此规则仅限学习交流使用，请于导入后24小时内删除，任何团体或个人不得以任何方式方法传播此规则的整体或部分！</font></small>",
        url: "toast://温馨提示：且用且珍惜！",
        col_type: 'text_center_1',
    })
    setResult(a);
}

function openMH(bookid, linkid, path) {
    var localhost = 'https://www.mhdnf.xyz'
    eval(getCryptoJS());
    const j = CryptoJS.enc.Utf8.parse('12cdefgabcdefg12');
    let j1 = CryptoJS.enc.Utf8.parse(linkid);
    let jg = CryptoJS.AES.encrypt(j1, j, {
        'mode': CryptoJS.mode.ECB, 'padding': CryptoJS.pad.Pkcs7
    });
    let url = localhost + '/play?linkId=' + linkid + '&bookId=' + bookid + "&path=" + path + '&key=' + jg.toString()
    var html = fetch(url)
    var xx = xpathArray(html, "//*[@id=\"imgList\"]/img/@src");
    var BT = xpathArray(html, "//*[@id=\"imgList\"]/img/@data-original");
    var ll = "pics://"
    for (var i = 0; i < 3; i++) {
        ll = ll + xx[i] + '&&'
    }
    for (var i = 0; i < BT.length; i++) {
        if (i == BT.length - 1) {
            ll = ll + BT[i]
        } else {
            ll = ll + BT[i] + '&&'
        }
    }
    return ll
}


function xianlu() {
    var d = [];
    if (getItem("xl") == "ka") {
        d.push({
            col_type: 'line'
        })
        d.push({
            col_type: "big_blank_block"
        })
        d.push({
            col_type: "line_blank"
        })
        d.push({
            col_type: "big_blank_block"
        })
        d.push({
            title: '‘‘’’<small><b><font color="#33cccc">线路 : </font></b></small>',
            url: "hiker://empty",
            col_type: "scroll_button"
        })
        var aa = ["线路一", "线路二", "线路三", "线路四", "线路五"];
        for (var i in aa) {
            d.push({
                title: getItem('path') == aa[i] ? '““””<b><span style="color: #33cccc">' + aa[i] + '↓</span></b>' : '““””<b><span >' + aa[i] + '</span></b>',
                url: $("#noLoading#").lazyRule((aa) => {
                    if (getItem('path') != aa) {
                        setItem('path', aa);
                    }
                    refreshPage(false);
                    return 'toast://切换路线成功'
                }, (aa[i])),
                col_type: "scroll_button"
            });
        }
    }
    d.push({
        col_type: 'line'
    })
    return d;

}