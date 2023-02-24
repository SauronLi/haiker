var b = ["146", "97", "321", "152", "169", "179", "343", "186"];
var c = ["system/", "movie/", "erdi/", "music/", "q/", "ke/", "more/", "messy/"];
var d = [".svg", ".png", ".png", ".svg", ".png", ".png", ".png", ".svg"]
var url = "https://lanmeiguojiang.com/tubiao/";
var localhost = "hiker://files/rules/bgHouse/src/"

function yiji() {
    download();
    var a = []
    for (let i = 2; i < b.length; i++) {
        var num = parseInt(b[i]);
        for (let j = 1; j < num + 1; j++) {
            try {
                pic = localhost + c[i] + j + d[i];
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
        log(i)
    }


    setResult(a);
}

function Version() {
    return "0.0.1";
}//版本更新

function download() {
    for (let i = 0; i < 2; i++) {
        var num = parseInt(b[i]);
        for (let j = 1; j < num + 1; j++) {
            try {
                url1 = url + c[i] + j + d[i];
                pic = localhost + c[i] + j + d[i];
                downloadFile(url1, pic);
            } catch (e) {
                log(e + url1)
            }
        }
    }
}