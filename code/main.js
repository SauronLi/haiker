var version = {
    author: "bgcode",
    ver: '0.0.1',
    url: 'https://ghproxy.com/https://raw.githubusercontent.com/Codebglh/haiker/main/code/',
    icon: 'https://ghproxy.com/https://raw.githubusercontent.com/Codebglh/haiker/main/code/src/icon/',
}

var yijimenu = [{
    title: "收藏", url: "hiker://collection", pic_url: version.icon + '37.png', col_type: 'icon_4',
}, {
    title: "历史", url: "hiker://history", pic_url: version.icon + '51.png', col_type: 'icon_4',
}, {
    title: "设置", url: $("hiker://empty#noRecordHistory##noHistory#").rule(() => {
        require(config.依赖);
        shezhi();
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
    let d = [];
    if (MY_PAGE == 1) {
        for (var i in yijimenu) {
            d.push(yijimenu [i])
        }
    }
    d.push({
        title: "yemian",
        desc: "miaos",
        url: "hiker://empty##immersiveTheme##autoCache#",
        pic_url: "https://w.wallhaven.cc/full/l8/wallhaven-l83o92.jpg",
        col_type: "movie_3"
    })
    setResult(d);
}


function erji() {
    let html = JSON.parse(fetch("https://api.web.360kan.com/v1/detail?cat=2&id=RbRrb07mRGbpNH"));
    let data = html.data
    let title = data.title
    let description = data.description
    let pic = data.cdncover
    let a = [];
    a.push({
        title: "‘‘’’<b><small><font color=\"#b0e0e6\">" + title + "</font></small></b>",
        desc: "‘‘’’<b><small><b><font color=\"#708090\">" + title + "</font></b><font color=\"#778899\">" + description + "</font></small></b>",
        url: "pic",
        pic_url: pic,
        col_type: "movie_1_vertical_pic_blur"
    })
    a.push({
        title: "线路",
        desc: "",
        url: "",
        pic_url: version.icon+"67.png",
        col_type: "icon_small_3",
    })
    a.push({
        title: "剧情",
        desc: "",
        url: $("hiker://empty#noRecordHistory##noHistory#").rule((description)=>{
            setResult([{title: description, col_type: "long_text"}]);
        },description),
        pic_url: version.icon+"10.png",
        col_type: "icon_small_3",
    })
    a.push({
        title: "搜索",
        desc: "",
        url: "",
        pic_url: version.icon+"195.png",
        col_type: "icon_small_3",
    })
    setResult(a);
}


function manhua() {

}

function Version() {

}


