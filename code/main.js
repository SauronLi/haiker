var version = {
    author: "bgcode",
    ver: '0.0.1',
    url: 'https://ghproxy.com/https://raw.githubusercontent.com/Codebglh/haiker/main/code/',
    icon: 'https://ghproxy.com/https://raw.githubusercontent.com/Codebglh/haiker/main/code/src/icon/',
    localhost: 'hiker://files/rules/bgHouse/'
}

var yijimenu = [{
    title: "收藏", url: "hiker://collection", pic_url: version.icon + '37.png', col_type: 'icon_4',
}, {
    title: "历史", url: "hiker://history", pic_url: version.icon + '51.png', col_type: 'icon_4',
}, {
    title: "设置", url: $("hiker://empty#noRecordHistory##noHistory#").rule(() => {
        require(config.依赖);
        shezi();
    }), pic_url: version.icon + '44.png', col_type: 'icon_4',
}, {
    title: "搜索", url: $("hiker://empty#noRecordHistory##noHistory#").rule(() => {
        require(config.依赖);
        sousuo();
    }), pic_url: version.icon + '103.png', col_type: 'icon_4',
}, {
    col_type: 'line'
}]

function yiji() {
    Version()
    require(version.localhost + "js/yiji.js")
    main();
}


function erji() {
    let html = JSON.parse(fetch("https://api.web.360kan.com/v1/detail?cat=2&id=RbRrb07mRGbpNH"));
    let data = html.data
    let title = data.title
    let description = data.description
    let pic = data.cdncover
    let a = [];
    a.push({
        title: "‘‘’’<b><small><font color=\"#b0e0e6\">片名" + title + "</font></small></b>",
        desc: "‘‘’’<b><small><b><font color=\"#708090\">" + title + "</font></b><font color=\"#778899\">" + description + "</font></small></b>",
        url: "pic",
        pic_url: pic,
        col_type: "movie_1_vertical_pic_blur"
    })
    a.push({
        title: "线路",
        desc: "",
        url: "",
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
    setResult(a);
}


function manhua() {

}

function Version() {
    if (fileExist(version.localhost + "src/343.png")) {
        log("图片依赖已准备")
    } else {
        for (var i = 1; i < 344; i++) {
            if (!fileExist(version.localhost + "src/" + i + ".png")) {
                downloadFile(version.icon + i + ".png", version.localhost + "src/" + i + ".png")
            }
        }
    }
    if (fileExist(version.localhost + "src/svg/343.svg")) {
        log("图片依赖已准备")
    } else {
        for (var i = 1; i < 186; i++) {
            if (!fileExist( version.localhost + "src/svg/" + i + ".png")) {
                downloadFile("https://lanmeiguojiang.com/tubiao/messy/"+ i + ".svg", version.localhost + "src/svg/" + i + ".svg")
            }
        }
    }
    var GX = true
    if (GX) {
        deleteFile(version.url + "js/method.js", version.localhost + "js/method.js")
        downloadFile(version.url + "js/method.js", version.localhost + "js/method.js")
        log("methodji()")
    }
    if (GX) {
        deleteFile(version.url + "js/yiji.js", version.localhost + "js/yiji.js")
        downloadFile(version.url + "js/yiji.js", version.localhost + "js/yiji.js")
        log("yiji()")
    }
    if (GX) {
        deleteFile(version.url + "js/erji.js", version.localhost + "js/erji.js")
        downloadFile(version.url + "js/erji.js", version.localhost + "js/erji.js")
        log("erji()")
    }
}

function sousuo() {
    let a = [];
    a.push({
        title: "请输入内容",
        col_type: "input",
        extra: {"key": input}
    })
    for (let i = 0; i < b.length; i++) {
        a.push({
            title: "请输入内容",
            col_type: "input",
            url: "",
            extra: {}
        })
    }

}

function shezi() {

        var d = [];
    let bturl = "https://lanmeiguojiang.com/tubiao/q/";
    d.push({
        title: "<b><small>功能</small></b>",
        url: "hiker://empty",
        col_type: "avatar",
        img: bturl + "94.png",
    });
    let ur = "https://lanmeiguojiang.com/tubiao/messy/";
    let coll = "text_icon";
    let 名称 = "影视轮播";
    let 储存 = "轮播";
    let des = "开启后，频道顶部以窗口轮播影视剧，关闭显示随机图片。";

    d.push({
        title: "<b>" + 名称 + "</b>",
        url: $("#noLoading#").lazyRule((储存) => {
            if (getItem(储存, 储存 == "轮播" ? "on" : "off") == "on") {
                setItem(储存, "off");
            } else {
                setItem(储存, "on");
            }
            ;
            refreshPage(false);
            return "hiker://empty";
        }, 储存),
        img: getItem(储存, 储存 == "轮播" ? "on" : "off") == "on" ? ur + "55.svg" : ur + "63.svg",
        col_type: coll,
        extra: {
            longClick: [{
                title: des,
                js: $.toString((des) => {
                    return "toast://" + des;
                }, des)
            }]
        }
    });


    d.push({
        col_type: "line_blank"
    })

    d.push({
        title: "<b><small>播放</small></b>",
        url: "hiker://empty",
        col_type: "avatar",
        img: bturl + "93.png",
    });
    setResult(d);
}