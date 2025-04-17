var b = ["4", "10", "321", "152", "169", "179", "343", "186"];
var c = ["system/", "movie/", "erdi/", "music/", "q/", "ke/", "more/", "messy/"];
var d = [".svg", ".png", ".png", ".svg", ".png", ".png", ".png", ".svg"]
var localhost = "hiker://files/rules/bgHouse/src/"
var url = "https://ghproxy.com/https://raw.gitmirror.com/Codebglh/haiker/main/code/src/";
var num = 0;
var type = '';
var url_icon = '';
function yiji() {
    download();
    var a = []
    let namelist = ["系统", "影视", "2D", "音乐", "Q版", "可爱", "更多", "其他"];
    for (let i in namelist) {
        a.push({
            title: namelist[i] === getVar('icon', '系统') ? "““””<font color='#00bbf0'>" + namelist[i] + "</font>" : namelist[i],
            url: $().lazyRule((name) => {
                putVar('icon', name);
                refreshPage(true);
                return 'hiker://empty'
            }, namelist[i]),
            col_type: 'scroll_button'
        })
    }
    switch (getVar('icon', '系统')) {
        case "系统":
            diplay(0)
            break;
        case"影视":
            diplay(1)
            break;
        case"2D":
            diplay(2)
            break;
        case"音乐":
            diplay(3)
            break;
        case"Q版":
            diplay(4)
            break;
        case"可爱":
            diplay(5)
            break;
        case"更多":
            diplay(6)
            break;
        case"其他":
            diplay(7)
            break;
    }

    for (let j = 1; j < num + 1; j++) {
        try {
            let pic = localhost + type + j + url_icon;
            a.push({
                title: j + url_icon,
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
function diplay(a){
    num = parseInt(b[a]);
    type = c[a];
    url_icon = d[a];
}
function download() {
    for (let i = 2; i < b.length; i++) {
        var x = parseInt(b[i]);
        for (let j = 1; j < x + 1; j++) {
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