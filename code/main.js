var version =
    {
        author: "bgcode",
        ver: '0.0.1',
        url: 'https://ghproxy.com/https://raw.githubusercontent.com/Codebglh/haiker/main/code/',
        icon: 'https://ghproxy.com/https://raw.githubusercontent.com/Codebglh/haiker/main/code/src/icon/',
    }

var yijimenu = [{
    title: "收藏", url: "hiker://collection", pic_url: version.icon + '1.png', col_type: 'icon_4',
}, {
    title: "历史", url: "hiker://history", pic_url: version.icon + '2.png', col_type: 'icon_4',
}, {
    title: "设置", url: $("hiker://empty#noRecordHistory##noHistory#").rule(() => {
        require(config.依赖);
        shezhi();
    }), pic_url: version.icon + '3.png', col_type: 'icon_4',
}, {
    title: "搜索", url: $("hiker://empty#noRecordHistory##noHistory#").rule(() => {
        require(config.依赖);
        sousuo();
    }), pic_url: version.icon + '4.png', col_type: 'icon_4',
}, {
    col_type: 'line'
}]


function yiji() {
    download()
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

function download() {
    for (let i = 0; i < 344; i++) {
        let a = "https://lanmeiguojiang.com/tubiao/more/" + i + ".png";
        let b = "hiker://files/rules/bgHouse/js/" + i + ".png";
        downloadFile(a, b)
    }

}

