js:
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