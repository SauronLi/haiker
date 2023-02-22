js:
    var d = [];
d.push({
    col_type: "line_blank"
})
let bturl = "https://lanmeiguojiang.com/tubiao/q/";
d.push({
    title: "<b><small>功能</small></b>",
    url: "hiker://empty",
    col_type: "avatar",
    img: bturl + "94.png",
});

let ur = "https://lanmeiguojiang.com/tubiao/messy/";
let coll = "";
if (MY_NAME == "海阔视界" && getAppVersion() >= "3475" || MY_NAME == "嗅觉浏览器" && getAppVersion() >= "859") {
    coll = "text_icon";
} else {
    coll = "avatar";
}
let 轮 = "开启后，频道顶部以窗口轮播影视剧，关闭显示随机图片。";
let 屏 = "二级页面顶部以全屏显示，右上角为菜单按钮，设置后，需返回下拉刷新生效。";
let 记 = "开启后，首页会显示历史记录、我的收藏、搜索记录，长按搜索记录清除记录。";
let 首 = "开启后，随机选择一个站点作为首页。";

let 名称 = ["影视轮播", "顶部全屏", "记录收藏", "随机首页"];
let 储存 = ["轮播", "全屏", "记录", "首页"];
let des = [轮, 屏, 记, 首];

for (let i in 储存) {
    d.push({
        title: "<b>" + 名称[i] + "</b>",
        url: $("#noLoading#").lazyRule((储存) => {
            if (getItem(储存, 储存 == "首页" ? "on" : "off") == "on") {
                setItem(储存, "off");
            } else {
                setItem(储存, "on");
            };
            refreshPage(false);
            return "hiker://empty";
        }, 储存[i]),
        img: getItem(储存[i], 储存[i] == "首页" ? "on" : "off") == "on" ? ur + "55.svg" : ur + "63.svg",
        col_type: coll,
        extra: {
            longClick: [{
                title: des[i],
                js: $.toString((des) => {
                    return "toast://" + des;
                }, des[i])
            }]
        }
    });
};

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