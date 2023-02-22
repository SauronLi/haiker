function Version() {
    if (!fileExist(version.localhost + "src/343.png")) {
        for (var i = 1; i < 344; i++) {
            if (!fileExist(version.localhost + "src/" + i + ".png")) {
                downloadFile(version.icon + i + ".png", version.localhost + "src/" + i + ".png")
            }
        }
    }
    if (!fileExist(version.localhost + "src/svg/185.svg")) {
        for (var i = 1; i < 186; i++) {
            if (!fileExist(version.localhost + "src/svg/" + i + ".png")) {
                downloadFile("https://lanmeiguojiang.com/tubiao/messy/" + i + ".svg", version.localhost + "src/svg/" + i + ".svg")
            }
        }
        log("图片已经准备")
    }
    deleteFile(version.url + "js/method.js", version.localhost + "js/method.js")
    downloadFile(version.url + "js/method.js", version.localhost + "js/method.js")
    deleteFile(version.url + "js/yiji.js", version.localhost + "js/yiji.js")
    downloadFile(version.url + "js/yiji.js", version.localhost + "js/yiji.js")
    deleteFile(version.url + "js/erji.js", version.localhost + "js/erji.js")
    downloadFile(version.url + "js/erji.js", version.localhost + "js/erji.js")
    log("更新成功")
}//版本更新


function shezhi() {
    var d = [];
    d.push({
        title: "<b><small>功能</small></b>",
        url: "hiker://empty",
        col_type: "avatar",
        img: version.localhost + "src/94.png",
    });
    let ur = version.localhost + "src/svg/";
    d.push({
        title: "<b>更新设置</b>",
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
        img: version.localhost + "src/50.png",
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
        Version();
    }

    setResult(d);
}

function sousuo() {
    addListener("onClose", $.toString(() => {
        clearMyVar('sousuo$input');
    }));
    var d = [];
    var searchurl = $('').lazyRule(() => {
        var bn = input;
        return $('hiker://empty#noRecordHistory##noHistory#').rule((bn) => {
            require(config.依赖);
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
    var localhost = "https://www.mhdnf.xyz/?page.currentPage=" + MY_PAGE + "&orderType=3&subjectName=&filmName="
    var url = localhost + d;
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
            url: $("hiker://empty#noRecordHistory##noHistory#").rule((b) => {
                require(config.依赖);
                erji1(b);
            }, b),
            col_type: 'movie_2',
            extra: {
                titleVisible: true,
                title: BT[i]
            }
        });

    }
    setResult(x);
}