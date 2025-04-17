js:
var d = [];
MY_URL = MY_URL.split("##")[1];
//setPageTitle(pagetitle + "-" + MY_PARAMS.title);

if (getMyVar("MY_URL", "0") !== MY_URL) {
    putMyVar("MY_URL", MY_URL);
    require(http + "dwer.js");

    try {
        var arts = pdfa(html, 线路);
        var tabs = [];
        for (let i in arts) {
            tabs.push(pdfh(arts[i], 线路名).replace(/ |.*』|：.*|网盘|云盘|猜你喜欢|\s|^\s*|\s*$/g, "").replace(/[ ]|[&nbsp;]/g, ""))
        }
    } catch (e) {};
    try {
        let conts = pdfa(html, 列表);
        var lits = [];
        for (let i in conts) {
            lits.push(pdfa(conts[i], 子列表));
        };
        var lists = [];
        for (let s in conts) {
            var td = [];
            let lis = lits[s];
            for (let j in lis) {
                td.push(pdfh(lis[j], "a&&Text") + "$" + pd(lis[j], "a&&href"));
            }; //log(td)
            lists.push(td.join("#").replace(/\&/g, "＆＆"));
        }
        //listt.join("$$$");
    } catch (e) {};
    try {
        var 名 = MY_PARAMS.title;
        try {
            var 类 = "类型：" + pdfh(html, 类型).replace(/◎|\/|分类：|电影|连续剧|动漫|类型：|类型 :|关键词：|\[|\]/g, "");
        } catch (e) {
            var 类 = "类型：风影";
        };
        try {
            var 导 = "导演：" + pdfh(html, 导演).replace(/\/|导演：|导演 :|◎/g, "");
        } catch (e) {
            var 导 = "导演：风影";
        };
        try {
            var 主 = "主演：" + pdfh(html, 主演).replace(/\/|主演：|主演:|演员：|演员 :|◎/g, "");
        } catch (e) {
            var 主 = "主演：风影";
        };
        var 更 = "更新：" + MY_PARAMS.desc;
        var 图1 = MY_PARAMS.img;
        var 图2 = pd(html, 图片) + "@Referer=";
        var 图 = (/http|https|pic|jpg|png/.test(图1)) ? 图1 : 图2;
        var 介 = pdfh(html, 简介).replace(/　|展开|收起|详情|[收起部分]|概要 |©豆瓣|简介|:|：/g, "");
    } catch (e) {};
    var tuii = pdfa(html, 推荐列表);

    var titles = "片名：" + 名 + "\n" + 类.substring(0, 18) + "\n" + 更;

    var descs = "片名：" + 名 + "\n" + 类 + "\n\n" + 导 + "\n" + 主 + "\n\n" + 更 + "\n\n" + "剧情介绍：" + "\n" + 介 + "\n\n";

    let erji = {
        "名": 名,
        "导": 导,
        "主": 主,
        "图": 图,
        "介": 介,
        "titles": titles,
        "descs": descs,
        "tabs": tabs,
        "lists": lists,
        "tuii": tuii
    };
    saveFile("hiker://files/cache/FY/erji/" + base64Encode(MY_URL) + ".js", JSON.stringify(erji), 0);
} else {
    try {
        eval("var erji = " + readFile("hiker://files/cache/FY/erji/" + base64Encode(MY_URL) + ".js", 0));

        var 名 = erji.名;
        var 导 = erji.导;
        var 主 = erji.主;
        var 图 = erji.图;
        var 介 = erji.介;
        var titles = erji.titles;
        var descs = erji.descs;
        var tabs = erji.tabs;
        var lists = erji.lists;
        var tuii = erji.tuii;
    } catch (e) {
        clearMyVar("MY_URL");
    };
};
//推荐更
let 推荐更 = "";
if (/text-right|fed-list-remarks|list-remarks|remarks|pic-tag-left|module-item-note|module-item-text|pic-text|state|continu|public-list-subtitle|c3/.test(tuii)) {
    推荐更 = '.fed-list-remarks||.list-remarks||.remarks||.pic-tag-left||.module-item-note||.module-item-text||.pic-text||.state||.continu||.public-list-subtitle||.text-right||.c3&&Text'
} else {
    推荐更 = 'a&&title'
}

//推荐图
let 推荐图 = "";
if (/xixikdy|dmxq/.test(MY_URL)) {
    推荐图 = 'img&&src||lay-src'
} else
if (/hl-lazy|ff-img/.test(tuii)) {
    推荐图 = '.hl-lazy||.ff-img&&data-original'
} else
if (/br/.test(tuii) && /eclazy/.test(tuii) && !/zjtu/.test(MY_URL) || /zaixiandianying8/.test(MY_URL)) {
    推荐图 = '.br||.myui-vodlist__thumb&&style'
} else
if (/lazy|lazyload/.test(tuii)) {
    推荐图 = '.lazy||.lazyload&&data-original||data-src'
} else {
    推荐图 = 'img&&src'
};

//推荐名
let 推荐名 = "";
if (/ajeee|wanbotv/.test(MY_URL)) {
    推荐名 = '.lazy||.ff-img&&alt'
} else
if (/zmovo-team-title/.test(tuii)) {
    推荐名 = '.zmovo-team-title&&a&&Text'
} else {
    推荐名 = "a&&title"
}

let 推荐链 = /zmovo-team-title/.test(tuii) ? '.zmovo-team-title&&a&&href' : "a&&href";

let Color = "#f13b66a";
let Color1 = "#098AC1";
let Color2 = "#19B89D";

d.push({
    title: '‘‘’’<b><small><font color="#b0e0e6">' + titles + '</font></small></b>',
    desc: '‘‘’’<b><small><b><font color="#708090">剧情：</b>' + '<font color="#778899">' + 介 + '</font></font></small></b>',
    url: 图 /*.replace("@Referer=", "")*/ ,
    img: 图,
    col_type: "movie_1_vertical_pic_blur",
    extra: {
        gradient: true
    }
});

let ertu = "https://lanmeiguojiang.com/tubiao/more/";

d.push({
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
    img: ertu + "13.png",
    col_type: "icon_small_3"
});

d.push({
    title: "剧情",
    url: $("hiker://empty#noRecordHistory##noHistory#").rule((text) => {
        setResult([{
            title: text,
            col_type: "long_text"
        }])
    }, descs),
    img: ertu + "74.png",
    col_type: "icon_small_3",
    extra: {
        inheritTitle: false
    }
})

let bak = getMyVar("bak", "0");
let surl = "";
if (bak == "1") {
    surl = $("#noLoading#").lazyRule(() => {
        back(false);
        clearMyVar("bak");
        return "hiker://empty";
    })
} else {
    surl = $("#noLoading#").lazyRule((input) => {
        putMyVar("Mysou", input);
        return $("hiker://empty#noRecordHistory##noHistory#fypage").rule(() => {
            require(config.依赖);
            yso()
        });
    }, 名);
}

d.push({
    title: "影搜",
    url: surl,
    img: ertu + "101.png",
    col_type: "icon_small_3",
    extra: {
        erji: "1",
        inheritTitle: false,
        key: 名,
        longClick: [{
            title: "云盘君",
            js: $.toString(() => {
                return "hiker://page/soup#noRecordHistory##noHistory#?rule=云盘君";
            })
        }]
    }
});

function setTabs(tabs, vari) {

    if (getItem("xl", "gua") == "ka") {
        if (arts == "") {
            toast("没有其它线路了哟！");
            clearItem("xl");
        } else {
            d.push({
                col_type: "big_blank_block"
            })
            d.push({
                col_type: "line"
            })
            d.push({
                col_type: "big_blank_block"
            })
            d.push({
                col_type: "big_blank_block"
            })

            let push = {
                "name": MY_RULE.title + " • " + 名 || MY_RULE.title,
                "pic": 图.replace(/@.*/, ""),
                "content": 介,
                "director": 导.replace("导演：", ""),
                "actor": 主.replace("主演：", ""),
            };
            let ip = MY_NAME == "嗅觉浏览器" ? "http://" : "http://" + getIP() + ":9978";
            let tvip = getItem("ip", ip);
            let tabss = tabs ? tabs : "源";
            //let lists = lists.replace(/[\'\"\\\/\b\f\n\r\t]/g, "");
            if (getItem("推送", "off") == "on") {
                d.push({
                    title: '‘‘’’<small><b><font color="#33cccc">BOX 推送 : </font></b></small>',
                    col_type: "scroll_button",
                    url: $("#noLoading#").lazyRule((push, tabs, lists, tvip) => {
                        if (!/997/.test(tvip) || tvip == "") {
                            return "toast://前往设置项，TVBOX设置ip地址";
                        }
                        let froms = [];
                        for (let i in tabs) {
                            froms.push(tabs[i]);
                        }
                        if (froms.length > 0) {
                            push["from"] = froms.join("$$$");
                            push["url"] = lists.join("$$$"); //log(push);
                            var state = request(tvip + "/action", {
                                headers: {
                                    "Content-Type": "application/x-www-form-urlencoded",
                                    "Referer": tvip
                                },
                                timeout: 3000,
                                body: "do=push&url=" + JSON.stringify(push),
                                method: "POST"
                            });
                            if (state == "ok") {
                                return "toast://推送成功，如显示“没找到数据”可能是该链接需要密码或当前的jar不支持。";
                            } else {
                                return "toast://推送失败，可能是ip地址设置错误或未连接到TVBOX。";
                            }
                        }
                        return "toast://此线路无法推送";
                    }, push, tabss, lists, tvip)
                })
            } else {
                d.push({
                    title: '‘‘’’<small><b><font color="#33cccc">线路 : </font></b></small>',
                    url: "hiker://empty",
                    col_type: "scroll_button"
                })
            }
            try {
                eval("var wenj = " + readFile("hiker://files/cache/FY/xl.js"), 0);
                if (wenj != "") {
                    if (wenj.route[MY_URL] != undefined) {
                        putMyVar(MY_URL, wenj.route[MY_URL]);
                    }
                }
            } catch (e) {}
            let 缓存 = 50; //线路缓存数量

            for (let i in tabs) {
                if (tabs[i] != "") {
                    d.push({
                        title: getMyVar(vari, "0") == i ? '‘‘’’<small><b><font color="#33cccc">' + tabs[i] + '↓</font></b></small>' : '‘‘’’<small>' + tabs[i] + '</small>',
                        url: $("hiker://empty#noHistory##noLoading#").lazyRule((vari, i, 缓存) => {
                            if (parseInt(getMyVar(vari, "0")) != i) {
                                try {
                                    eval("var wenj = " + readFile("hiker://files/cache/FY/xl.js"), 0);
                                } catch (e) {
                                    var wenj = "";
                                }
                                if (wenj == "") {
                                    wenj = {
                                        route: {}
                                    };
                                } else if (wenj.route == undefined) {
                                    wenj.route = {};
                                }
                                wenj.route[vari] = i;
                                var key = 0;
                                var one = "";
                                for (var k in wenj.route) {
                                    key++;
                                    if (key == 1) {
                                        one = k
                                    }
                                }
                                if (key > 缓存) {
                                    delete wenj.route[one];
                                }
                                saveFile("hiker://files/cache/FY/xl.js", JSON.stringify(wenj), 0);
                                putMyVar(vari, i);
                                refreshPage(false);
                                return 'hiker://empty'
                            } else {
                                return "#noHistory#hiker://empty"
                            }
                        }, vari, i, 缓存),
                        col_type: "scroll_button"
                    })
                }
            }
        }
    }
};
setTabs(tabs, MY_URL);

function setLists(lists, index) {
    d.push({
        col_type: "big_blank_block"
    })
    d.push({
        col_type: "line_blank"
    })
    d.push({
        col_type: "big_blank_block"
    })

    let lisd = "";
    try {
        let listt = lists[index].split("#");
        try {
            let lists1 = listt[0].split("$")[0];
            let lists2 = listt[listt.length - 1].split("$")[0];
            if (parseInt(lists1.match(/(\d+)/)[0]) > parseInt(lists2.match(/(\d+)/)[0])) {
                lisd = listt.reverse();
            } else {
                lisd = listt;
            }
        } catch (e) {
            lisd = listt;
        }
    } catch (e) {};
    let list = "";
    try {
        if (getItem("zf", "f") == "z") {
            list = lisd;
        } else {
            list = lisd.reverse();
        };
    } catch (e) {
        list = "";
    };

    let zftu = "https://lanmeiguojiang.com/tubiao/messy/";
    let paix = '<span style="color:' + Color2 + '">选集排序' + "<small><font color='grey'>" + '\t\t共 ' + list.length + ' 条\t\t\t</font></small></span>';

    d.push({
        title: getItem("zf", "f") == "z" ? paix + '<span style="color: #33cccc">▴</span>' : paix + '<span style="color: #ff7f50">▾</span>',
        url: $("#noLoading#").lazyRule(() => {
            if (getItem("zf", "f") == "z") {
                clearItem("zf");
            } else {
                setItem("zf", "z");
            }
            refreshPage(false);
            return "#noHistory#hiker://empty"
        }),
        img: getItem("zf", "f") == "z" ? zftu + "123.svg" : zftu + "124.svg",
        col_type: "text_icon"
    });

    let xtan = getItem("嗅探", "off") == "on";

    let lazy = $("").lazyRule((xt, http) => {
        require(base64Decode(http) + "lazy.js");
        return xt ? video() : lazy()
    }, xtan, base64Encode(http));

    try {
        if (list == "") {
            d.push({
                title: "暂无片源",
                url: "hiker://empty#noHistory#",
                col_type: "text_center_1",
                extra: {
                    lineVisible: false
                }
            });
        } else {
            for (let j = 0; j < list.length; j++) {
                let jm = list[j].split("$")[0].replace(/.*第|集|话.*|期.*|线路|厂长|\(.*\)/g, "");
                let url = list[j].split("$")[1];
                let col = "";
                if (list.length < 17) {
                    col = "text_2";
                } else {
                    col = jm.length > 5 ? "text_2" : "text_4";
                };
                let extra = {
                    id: url,
                    videoExcludeRules: [".html,"],
                    blockRules: [".m4a", ".mp3", ".gif", ".jpeg", ".jpg", ".ico", ".png", "hm.baidu.com", "/ads/*.js", "cnzz.com"],
                    jsLoadingInject: true,
                    /*ua: PC_UA,*/
                    cacheM3u8: getItem("缓存") == "on" ? true : false
                };
                d.push({
                    title: "‘‘’’<small>" + jm + "</small>",
                    url: /\.mp4|\.m3u8/.test(url) ? url : url + lazy,
                    col_type: col,
                    extra: extra
                });
            }
        }
    } catch (e) {}
};
setLists(lists, getMyVar(MY_URL, "0"));

d.push({
    col_type: "big_blank_block"
})
d.push({
    col_type: "big_blank_block"
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

let kg = "";
if (getMyVar("yn", "no") == "no") {
    kg = '<font color="#33cccc">影视推荐 ▴</font>';
} else {
    kg = '<font color="#33cccc">影视推荐 ▾</font>';
}

d.push({
    title: kg,
    url: $("#noLoading#").lazyRule(() => {
        if (getMyVar("yn", "no") == "yes") {
            putMyVar("yn", "no");
        } else {
            putMyVar("yn", "yes");
        }
        refreshPage(false);
        return "#noHistory#hiker://empty"
    }),
    img: ertu + "239.png",
    col_type: "avatar"
})

let tkg = getMyVar("yn", "no") == "no";
if (tkg) {
    d.push({
        title: "‘‘’’<small><font color=#20b2aa>数据资源收集于网络，海阔不提供任何资源！</font></small>",
        desc: "‘‘’’<small><font color=#ff7f50>本规则仅限学习与交流，请导入后24小时内删除，请勿传播！</font></small>",
        url: "hiker://empty",
        col_type: "text_center_1",
        extra: {
            lineVisible: false
        }
    });
} else {
    if (tuii == "") {
        d.push({
            desc: "暂无影视推荐",
            url: "hiker://empty",
            col_type: "text_center_1",
            extra: {
                lineVisible: false
            }
        })
    } else {
        var tui = tuii;
    };
}

for (let i in tui) {
    let imgd = pdfh(tui[i], 推荐图);
    let img = "";
    if (/http/.test(imgd) && !/zjtu/.test(MY_URL)) {
        img = pdfh(tui[i], 推荐图).replace(/.*url=|.*tu=|\);/g, "");
    } else {
        img = pd(tui[i], 推荐图);
    }

    try {
        let xun = MY_PARAMS.xun;
        let turl = "";
        if (xun == "1") {
            turl = $("#noLoading#").lazyRule(() => {
                back(false);
                return "hiker://empty"
            });
        } else {
            turl = $("hiker://empty##" + pd(tui[i], 推荐链).replace("vodplay", "voddetail").replace(/project-(\d+)\//, "play-$1-1-1/") + "#immersiveTheme##autoCache##noHistory" + game).rule(() => {
                require(config.依赖);
                erji()
            })
        }

        let 推名 = pdfh(tui[i], 推荐名);
        let 推更 = pdfh(tui[i], 推荐更);
        d.push({
            title: 推名,
            desc: 推更,
            pic_url: img + "@Referer=",
            url: turl,
            extra: {
                pageTitle: 推名 + "（" + getItem("m1") + "）",
                xun: "1",
                title: 推名,
                desc: 推更,
                img: img + "@Referer=",
            },
            col_type: "movie_3_marquee"
        });
    } catch (e) {};
};

if (tkg) {
    d.push({
        title: "<br>",
        col_type: "rich_text"
    });
} else {
    d.push({
        title: "‘‘’’<small>－－到\t底\t了－－</small>",
        url: "hiker://empty",
        col_type: "text_center_1"
    });
}
setResult(d);

setLastChapterRule("js:" + $.toString((http) => {
    MY_URL = MY_URL.split("##")[1];
    require(http + "dwer.js");

    let title = "";
    try {
        let conts = pdfa(html, 列表);
        let lies = [];
        for (let i in conts) {
            lies.push(pdfa(conts[i], 子列表))
        };
        let lists = lies[0].length;
        let sz = 0;
        for (let s in conts) {
            if (lies[s].length > lists) {
                lists = lies[s].length;
                sz = s;
            };
        };
        let list = lies[sz];
        let title1 = pdfh(list[0], 'a&&Text');
        let title2 = pdfh(list[list.length - 1], "a&&Text");
        try {
            if (parseInt(title1.match(/(\d+)/)[0]) > parseInt(title2.match(/(\d+)/)[0])) {
                title = title1;
            } else {
                title = title2;
            };
        } catch (e) {
            title = title2;
        }
    } catch (e) {
        title = "未更新";
    }
    setResult("更新：" + title);
}, http));

//by随风 重新整合及优化样式
//二级模板  代码来自众大佬