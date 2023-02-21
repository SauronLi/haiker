var version =
    {
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
    var d = [];
    if (MY_PAGE == 1) {
        for (var i in yijimenu) {
            d.push(yijimenu [i])
        }
    }

    setResult(d);
}


function erji() {

}


function manhua() {

}

function Version() {

}

function IO(a, b, mathod) {//a是原地址，b是本地地址,c是选择方法
    switch (mathod) {
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

