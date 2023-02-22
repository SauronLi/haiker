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