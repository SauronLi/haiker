function IO(a, b, method) {//a是原地址，b是本地地址,c是选择方法
    switch (method) {
        case  1:
            downloadFile(a, b);//下载文件
        case 2:
            deleteFile(b);//删除文件
        case 3:
            fileExist(b);//判断文件是否存在
        default:
            log("方法错误");
    }
}
//文件操作方法

function Version(){

}

function search(search){
    fetch(url);
}


function shezhi(){
    var d = [];
    d.push({
        title: "<b><small>功能</small></b>",
        url: "hiker://empty",
        col_type: "avatar",
        img: version.localhost + "src/94.png",
    });
    let ur = version.localhost+"src/svg/";
    let name = "更新设置";
    let arrary = "genxin";
    let des = "开启后，频道顶部以窗口轮播影视剧，关闭显示随机图片。";

    d.push({
        title: "<b>" + name + "</b>",
        url: $("#noLoading#").lazyRule((arrary) => {
            log(getItem(arrary))
            if (getItem(arrary, arrary == "genxin" ? "on" : "off") == "on") {
                setItem(arrary, "off");
            } else {
                setItem(arrary, "on");
            }
            log(getItem(arrary))
            refreshPage(false);
            return "hiker://empty";
        }, arrary),
        img: getItem(arrary, arrary == "genxin" ? "on" : "off") == "on" ? ur + "55.svg" : ur + "63.svg",
        col_type: "text_icon",
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
        col_type: "line"
    })

    setResult(d);
}