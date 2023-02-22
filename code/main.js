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
let arrary = "genxin";
let zhuye="H";
function yiji() {
    require(version.localhost + "js/yiji.js")
    main();
}


function erji() {
    require(version.localhost + "js/erji.js")
    main();
}


function manhua() {

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
    require(version.localhost + "js/method.js");
    // require(version.url + "/test/learn/she.js");
    shezhi();
}