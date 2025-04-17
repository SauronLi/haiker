var version = {
    author: "bgcode",
    ver: '0.0.3',
    mdversion:'0.0.4',
    yjversion:'0.0.4',
    ejversion:'0.0.4',
    url: 'https://raw.gitmirror.com/SauronLi/haiker/main/code/',
    icon: 'https://raw.gitmirror.com/SauronLi/haiker/main/code/src/',
    localhost: 'hiker://files/bgHouse/'
}
var yijimenu = [{
    title: "收藏", url: "hiker://collection", pic_url: version.localhost + 'src/more/1.png', col_type: 'icon_4',
}, {
    title: "历史", url: "hiker://history", pic_url: version.localhost + 'src/more/2.png', col_type: 'icon_4',
}, {
    title: "设置", url: $("hiker://empty#noRecordHistory##noHistory#").rule(() => {
        require(config.依赖);
        shezi();
    }), pic_url: version.localhost + 'src/more/3.png', col_type: 'icon_4',
}, {
    title: "搜索", url: $("hiker://empty#noRecordHistory##noHistory#").rule(() => {
        require(config.依赖);
        sousuo();
    }), pic_url: version.localhost + 'src/more/4.png', col_type: 'icon_4',
}, {
    col_type: 'line'
}]
let arrary = "genxin";
let zhuye="H";
let path=""
function yiji() {
    update()
    require(version.localhost + "js/yiji.js")
    main();
}
function erji() {
    require(version.localhost + "js/erji.js")
    main();
}
function sousuo() {
    require(version.localhost + "js/method.js")
    sousuo1();

}
function shezi() {
    require(version.localhost + "js/method.js");
    shezhi();
}

function update() {
    let key = "day"//修改即可重置更新时间
    let time = new Date().getTime();//获取当前时间
    let locktime = getItem(key, "")
    let updatetime = time + Math.round(1000 * 60 * 60 * 24 * 7);
    if (locktime == "") {
        GX()
        setItem(key, "" + updatetime)
    }
    if (time > locktime) {
        GX();//更新函数
        setItem(key, "");//重置更新时间
    }
}
function GX() {
    require(config.依赖);
    if (!fileExist(version.localhost + "src/more/10.png")) {
        for (var i = 1; i < 11; i++) {
            if (!fileExist(version.localhost + "src/more/" + i + ".png")) {
                downloadFile(version.icon + "more/" + i + ".png", version.localhost + "src/more/" + i + ".png")
            }
        }
        log("图片已经准备")
    }
    if (!fileExist(version.localhost + "src/messy/4.svg")) {
        for (var i = 1; i < 5; i++) {
            if (!fileExist(version.localhost + "src/messy/" + i + ".png")) {
                downloadFile(version.icon + "messy/" + i + ".svg", version.localhost + "src/messy/" + i + ".svg")
            }
        }
        log("图片已经准备")
    }
    if (!fileExist(version.localhost + "js/method.js")) {
        downloadFile(version.url + "js/method.js", version.localhost + "js/method.js")
    } else {
        let a = version.mdversion;
        require(version.localhost + "js/method.js")
        let b = Version();
        if (a !== b) {
            deleteFile(version.url + "js/method.js", version.localhost + "js/method.js")
            downloadFile(version.url + "js/method.js", version.localhost + "js/method.js")
            log("更新method.js")
        }
    }
    if (!fileExist(version.localhost + "js/yiji.js")) {
        downloadFile(version.url + "js/yiji.js", version.localhost + "js/yiji.js")
    } else {
        let a = version.yjversion;
        require(version.localhost + "js/yiji.js")
        let b = Version();
        if (a !== b) {
            deleteFile(version.url + "js/yiji.js", version.localhost + "js/yiji.js")
            downloadFile(version.url + "js/yiji.js", version.localhost + "js/yiji.js")
            log("更新yiji.js")
        }
    }
    if (!fileExist(version.localhost + "js/erji.js")) {
        downloadFile(version.url + "js/erji.js", version.localhost + "js/erji.js")
    } else {
        let a = version.ejversion;
        require(version.localhost + "js/erji.js")
        let b = Version();
        if (a !== b) {
            deleteFile(version.url + "js/erji.js", version.localhost + "js/erji.js")
            downloadFile(version.url + "js/erji.js", version.localhost + "js/erji.js")
            log("更新erji.js")
        }
    }
}