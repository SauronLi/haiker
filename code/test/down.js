var b = ["146", "97", "321", "152", "169", "179", "343", "186"];
var c = ["system/", "movie/", "erdi/", "music/", "q/", "ke/", "more/", "messy/"];
var d = [".svg", ".png", ".png", ".svg", ".png", ".png", ".png", ".svg"]
var url = "https://lanmeiguojiang.com/tubiao/";
var localhost = "hiker://files/rules/bgHouse/src/"

function yiji() {
    download();
    var a = []
    let b = ["系统", "影视", "2D", "音乐", "Q版", "可爱", "更多", "其他"];
    for (let i in b) {
        d.push({
            title: b[i] === getVar('icon', '影视') ? b[i] : b[i],
            url: $().lazyRule((name, key) => {
                putVar('icon', name);
                putVar('iconkey', key);
                refreshPage(true);
                return 'hiker://empty'
            }, b[i], c[i]),
            col_type: 'scroll_button'

        })
    }
    var num = 0;
    var type = '';
    var url_icon = '';

    function url(a) {
        num = parseInt(b[a]);
        type = c[a];
        url_icon = d[a]
    }

    switch (getVar('icon', '系统')) {
        case "系统":
            url(0);
            break;
        case"影视":
            url(1);
            break;
        case"2D":
            url(2);
            break;
        case"音乐":
            url(3);
            break;
        case"Q版":
            url(4);
            break;
        case"可爱":
            url(5);
            break;
        case"更多":
            url(6);
            break;
        case"其他":
            url(7);
            break;
    }

    for (let j = 1; j < num + 1; j++) {
        try {
            let pic = localhost + type + j + url_icon;
            a.push({
                title: j + d[i],
                url: $("#noLoading#").lazyRule((pic) => {
                    copy(pic);
                    return "hiker://empty";
                }, pic),
                pic_url: pic,
                col_type: 'icon_small_4',
            })
        } catch (e) {
            log(e)
        }

    }
    setResult(a);
}

function Version() {
    return "0.0.1";
}//版本更新

function download() {
    for (let i = 0; i < b.length; i++) {
        var num = parseInt(b[i]);
        for (let j = 1; j < num + 1; j++) {
            let url1 = url + c[i] + j + d[i];
            let pic = localhost + c[i] + j + d[i];
            try {
                if (!fileExist(pic)) {
                    downloadFile(url1, pic);
                }
            } catch (e) {
                log(e + url1)
            }
        }
    }
}