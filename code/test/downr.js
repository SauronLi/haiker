var b = ["146", "97", "321", "152", "169", "179", "343", "186"];
var c = ["system/", "movie/", "erdi/", "music/", "q/", "ke/", "more/", "messy/"];
var d = [".svg", ".png", ".png", ".svg", ".png", ".png", ".png", ".svg"]
var localhost = "hiker://files/rules/bgHouse/src/"
var num = 0;
var type = '';
var url_icon = '';
function yiji() {
    // download();
    var a = []
    let namelist = ["系统", "影视", "2D", "音乐", "Q版", "可爱", "更多", "其他"];
    for (let i in namelist) {
        a.push({
            title: namelist[i] === getVar('icon', '2D') ? "““””<b color='#00bbf0'>" + namelist[i] + "</b>" : namelist[i],
            url: $().lazyRule((name) => {
                putVar('icon', name);
                refreshPage(true);
                return 'hiker://empty'
            }, namelist[i]),
            col_type: 'scroll_button'
        })
    }
    switch (getVar('icon', '2D')) {
        case "系统":
            num = parseInt(b[0]);
            type = c[0];
            url_icon = d[0];
            break;
        case"影视":
            num = parseInt(b[1]);
            type = c[1];
            url_icon = d[1];
            break;
        case"2D":
            num = parseInt(b[2]);
            type = c[2];
            url_icon = d[2];
            break;
        case"音乐":
            num = parseInt(b[3]);
            type = c[3];
            url_icon = d[3];
            break;
        case"Q版":
            num = parseInt(b[4]);
            type = c[4];
            url_icon = d[4];
            break;
        case"可爱":
            num = parseInt(b[5]);
            type = c[5];
            url_icon = d[5];
            break;
        case"更多":
            num = parseInt(b[6]);
            type = c[6];
            url_icon = d[6];
            break;
        case"其他":
            num = parseInt(b[7]);
            type = c[7];
            url_icon = d[7];
            break;
    }
    log("sdaas")
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

function download() {
    var b = ["146", "97", "321", "152", "169", "179", "343", "186"];
    var c = ["system/", "movie/", "erdi/", "music/", "q/", "ke/", "more/", "messy/"];
    var d = [".svg", ".png", ".png", ".svg", ".png", ".png", ".png", ".svg"]
    var url = "https://lanmeiguojiang.com/tubiao/";
    var localhost = "hiker://files/rules/bgHouse/src/"
    for (let i = 0; i < b.length; i++) {
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