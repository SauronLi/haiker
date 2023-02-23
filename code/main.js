var version = {
    author: "bgcode",
    ver: '0.0.1',
    url: 'https://ghproxy.com/https://raw.githubusercontent.com/Codebglh/haiker/main/code/',
    icon: 'https://ghproxy.com/https://raw.githubusercontent.com/Codebglh/haiker/main/code/src/',
    localhost: 'hiker://files/rules/bgHouse/'
}
var yijimenu = [{
    title: "收藏", url: "hiker://collection", pic_url: version.localhost + 'more/37.png', col_type: 'icon_4',
}, {
    title: "历史", url: "hiker://history", pic_url: version.localhost + 'more/51.png', col_type: 'icon_4',
}, {
    title: "设置", url: $("hiker://empty#noRecordHistory##noHistory#").rule(() => {
        require(config.依赖);
        shezi();
    }), pic_url: version.localhost + 'more/44.png', col_type: 'icon_4',
}, {
    title: "搜索", url: $("hiker://empty#noRecordHistory##noHistory#").rule(() => {
        require(config.依赖);
        sousuo();
    }), pic_url: version.localhost + 'more/103.png', col_type: 'icon_4',
}, {
    col_type: 'line'
}]
let arrary = "genxin";
let zhuye="H";
let path=""
function yiji() {
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
    // require(version.url + "/test/learn/she.js");
    shezhi();
}