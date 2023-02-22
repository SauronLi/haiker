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

function search(search) {
    fetch(url);
}


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
            img: getItem(zhuye[i], zhuye[i] == "H" ? "on" : "off") == "on" ? ur + "55.svg" : ur + "63.svg",
            col_type: "text_icon",
        })
    if (getItem(arrary) == "on") {
        Version();
    }

    setResult(d);
}