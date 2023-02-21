var yijimenu = [{
    title: "收藏",
    url: "hiker://collection",
    pic_url: 'https://ghproxy.com/https://raw.githubusercontent.com/Codebglh/hikerule/main/code/src/2.png',
    col_type: 'icon_4',
}, {
    title: "历史",
    url: "hiker://history",
    pic_url: 'https://ghproxy.com/https://raw.githubusercontent.com/Codebglh/hikerule/main/code/src/3.png',
    col_type: 'icon_4',
}, {
    title: "设置",
    url: $("hiker://empty#noRecordHistory##noHistory#").rule(() => {
        log("shezhi")
    }),
    pic_url: 'https://ghproxy.com/https://raw.githubusercontent.com/Codebglh/hikerule/main/code/src/4.png',
    col_type: 'icon_4',
}, {
    title: "搜索",
    url: $("hiker://empty#noRecordHistory##noHistory#").rule(() => {
        log("sousuo");
    }),
    pic_url: 'https://ghproxy.com/https://raw.githubusercontent.com/Codebglh/hikerule/main/code/src/5.png',
    col_type: 'icon_4',
}, {
    col_type: 'line'
}]
let localfile = 'hiker://files/rules/bgHouse/js/'
var d = [];
if (MY_PAGE == 1) {
    for (var i in yijimenu) {
        d.push(yijimenu [i])
    }
}
var url = 'http://cj.lziapi.com/api.php/provide/vod/?ac=videolist&pg=';
var MY_URL = url + MY_PAGE;
var html = JSON.parse(fetch(MY_URL));
let a = html.list
for (var i = 0; i < a.length; i++) {
    let s = a[i].vod_play_url
    d.push({
        title: a[i].vod_name,
        desc: a[i].vod_blurb,
        pic_url: a[i].vod_pic,
        url: "hiker://empty#immersiveTheme#" + $().rule(() => {
            require("hiker://files/rules/bgHouse/js/erji.js")
            erji();
        }),
        col_type: 'movie_3',
        extra: {title: a[i].vod_name, desc: a[i].vod_blurb, pic_url: a[i].vod_pic, url: a[i].vod_play_url}
    });
}
setResult(d);