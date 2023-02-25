function Version() {
    return "0.0.3";
}//版本更新


function shezhi() {
    var d = [];
    d.push({
        title: "<b><small>功能</small></b>",
        url: "hiker://empty",
        col_type: "avatar",
        img: version.localhost + "src/more/94.png",
    });
    let ur = version.localhost + "src/messy/";
    d.push({
        title: "<b>持续更新</b>",
        url: $("#noLoading#").lazyRule((arrary) => {
            if (getItem(arrary, arrary == "genxin" ? "on" : "off") == "on") {
                setItem(arrary, "off");
            } else {
                setItem(arrary, "on");
            }
            refreshPage(false);
            return "hiker://empty";
        }, arrary),
        img: getItem(arrary, arrary == "genxin" ? "on" : "off") == "on" ? ur + "55.svg" : ur + "63.svg",
        col_type: "text_icon",
    });
    d.push({
        col_type: "line"
    })
    d.push({
        title: "<b><small>首页选择</small></b>",
        url: "hiker://empty",
        col_type: "avatar",
        img: version.localhost + "src/more/50.png",
    });

    d.push({
        title: "<b> H漫画 </b>",
        url: $("#noLoading#").lazyRule((zhuye) => {
            if (getItem(zhuye, zhuye == "H" ? "on" : "off") == "on") {
                setItem(zhuye, "off");
            } else {
                setItem(zhuye, "on");
            }
            refreshPage(false);
            return "hiker://empty";
        }, zhuye),
        img: getItem(zhuye, zhuye == "H" ? "on" : "off") == "on" ? ur + "55.svg" : ur + "63.svg",
        col_type: "text_icon",
    })
    if (getItem(arrary) == "on") {
        require(config.依赖)
        GX();
    }

    setResult(d);
}

function sousuo1() {
    addListener("onClose", $.toString(() => {
        clearMyVar('sousuo$input');
    }));
    var d = [];
    var searchurl = $('').lazyRule(() => {
        var bn = input;
        return $('hiker://empty##fypage##noRecordHistory##noHistory#').rule((bn) => {
            require("hiker://files/bgHouse/js/method.js");
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


function search(d) {
    var x = [];
    var local = "https://www.mhdnf.xyz"
    var url = "https://www.mhdnf.xyz/?page.currentPage=" + MY_PAGE + "&orderType=3&subjectName=&filmName=" + d;
    var html = fetch(url)
    var BT = xpathArray(html, '//*[@id="booklist"]/div/div/div/p/span/text()');
    var LJ = xpathArray(html, '//*[@id="booklist"]/div/div/@onclick');
    var XQ = xpathArray(html, '//*[@id="booklist"]/div/div/div[2]/p[2]/text()');
    var TP = xpathArray(html, '//*[@id="booklist"]/div/div/div[1]/img/@src');
    for (var i = 0; i < BT.length; i++) {
        var a = LJ[i];
        var b = local + a.replace(/window\.open\(\'|\'\)/g, "")
        x.push({
            title: BT[i],
            desc: XQ[i].replace("\r\n", ""),
            pic_url: TP[i],
            url: $("hiker://empty##noRecordHistory##noHistory#").rule(() => {
                require("hiker://files/bgHouse/js/method.js");
                main();
            }),
            col_type: 'movie_2',
            extra: {
                titleVisible: true,
                title: BT[i],
                url: b,
                desc: XQ[i].replace("\r\n", ""),
                pic_url: TP[i],

            }
        });

    }
    setResult(x);
}

function main() {
    let url_1 = MY_PARAMS.url;
    var html = fetch(url_1);
    let title = MY_PARAMS.title;
    let description = MY_PARAMS.desc
    let pic = MY_PARAMS.pic_url;
    var bb = {
        线路一: "//*[@id=\"xl1\"]/@onclick",
        线路二: "//*[@id=\"xl2\"]/@onclick",
        线路三: "//*[@id=\"xl3\"]/@onclick",
        线路四: "//*[@id=\"xl4\"]/@onclick",
        线路五: "//*[@id=\"xl5\"]/@onclick"
    };
    let xl = xianlu();
    var url = xpathArray(html, eval("bb." + getItem("path")));
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
        pic_url: "hiker://files/bgHouse/src/more/67.png",
        col_type: "icon_small_3",
    })
    a.push({
        title: "剧情",
        desc: "",
        url: $("hiker://empty#noRecordHistory##noHistory#").rule((description) => {
            setResult([{title: description, col_type: "long_text"}]);
        }, description),
        pic_url: "hiker://files/bgHouse/src/more/10.png",
        col_type: "icon_small_3",
        extra: {"inheritTitle": false}//不继承标题
    })
    a.push({
        title: "搜索",
        desc: "",
        url: $("hiker://empty#noRecordHistory##noHistory#").rule(() => {
            require("hiker://files/bgHouse/method.js");
            sousuo();
        }),
        pic_url: "hiker://files/bgHouse/src/more/195.png",
        col_type: "icon_small_3",
    })

    var ds = '<span style="color:#19B89D">选集排序<small><font color=\'grey\'>	共' + url.length + '条</font></small></span>'
    a.push({
        title: getItem("zf", "f") == "z" ? ds + '<span style="color: #33cccc">▴</span>' : ds + '<span style="color: #ff7f50">▾</span>',
        col_type: "text_icon",
        url: $("#noLoading#").lazyRule(() => {
            if (getItem("zf", "f") == "z") {
                clearItem("zf");
            } else {
                setItem("zf", "z");
            }
            refreshPage(false);
            return "#noHistory#hiker://empty"
        }),
        pic_url: getItem("zf", "f") == "z" ? "hiker://files/bgHouse/src/messy/123.svg" : "hiker://files/bgHouse/src/messy/124.svg",
    })
    for (let i in xl) {
        a.push(xl[i])
    }
    if (getItem("zf", "f") == "z") {
        for (let i = 0; i < url.length; i++) {
            a.push({
                title: "第" + (i + 1) + "话",
                url: $().lazyRule((url) => {
                    require("hiker://files/bgHouse/js/erji.js");
                    return eval(url)
                }, (url[i])), col_type: 'text_4',
            })
        }
    } else {
        for (let i = url.length - 1; i >= 0; i--) {
            a.push({
                title: "第" + (i + 1) + "话",
                url: $().lazyRule((url) => {
                    require("hiker://files/bgHouse/js/erji.js");
                    return eval(url)
                }, (url[i])), col_type: 'text_4',
            })
        }
    }
    a.push({
        col_type: 'line'
    })
    a.push({
        desc: "‘‘’’<small><font color=#f20c00>此规则仅限学习交流使用，请于导入后24小时内删除，任何团体或个人不得以任何方式方法传播此规则的整体或部分！</font></small>",
        url: "toast://温馨提示：且用且珍惜！",
        col_type: 'text_center_1',
    })
    a.push({
        col_type: 'line'
    })
    a.push({
        col_type: "big_blank_block"
    })

    a.push({
        col_type: "big_blank_block"
    })
    setResult(a);
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