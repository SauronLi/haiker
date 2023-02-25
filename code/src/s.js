var jpath =
    "https://ghproxy.com/https://raw.githubusercontent.com/Codebglh/haiker/main/code/src/config.json";
var home = "hiker://files/bgHouse/src/config.json"
try {
    if (!fileExist(home)) {
        downloadFile(jpath, home);
    } else {
        let farversion = "0.0.5";
        let a = JSON.parse(fetch(home));
        var localversion = a[0].version
        if (localversion !== farversion) {
            deleteFile(home);
            downloadFile(jpath, home);
        }

    }
} catch (e) {
    log(e + jpath);
}
let a = JSON.parse(fetch(home));
let localhost = a[0].localhost;
let url = a[0].url
let namelist = a[0].namelist;
let numberlist = a[0].numberlist
let pathlist = a[0].pathlist;
let typelist = a[0].typelist;
let as = a[0].assets;

function yiji() {
    if (panduan()) {
        download();
        var d = [];
        for (let i in namelist) {
            d.push({
                title:
                    as[i] === getVar("icon", "0") ? "““””<font color='#00bbf0'>" + namelist[i] + "</font>" : namelist[i],
                url: $().lazyRule((i) => {
                    putVar("icon", i);
                    refreshPage(true);
                    return "hiker://empty";
                }, i),
                col_type: "scroll_button",
            });
        }
        let p = parseInt(getVar("icon", "0"));
        var number = numberlist[p];
        let name = pathlist[p];
        let value = typelist[p]
        if (p == 4) {

            for (let j = 1; j < number + 1; j++) {
                try {
                    let pic = localhost + name + j + value;
                    d.push({
                        title: j + value,
                        url: $("#noLoading#").lazyRule((pic) => {
                            copy(pic);
                            return "hiker://empty";
                        }, pic),
                        pic_url: pic,
                        col_type: "movie_2",
                    });
                } catch (e) {
                    log(e);
                }
            }
        } else if (p == 5) {
            for (let j = 1; j < number + 1; j++) {
                try {
                    let pic = localhost + name + j + value;
                    d.push({
                        title: j + value,
                        url: $("#noLoading#").lazyRule((pic) => {
                            copy(pic);
                            return "hiker://empty";
                        }, pic),
                        pic_url: pic,
                        col_type: "icon_round_4",
                    });
                } catch (e) {
                    log(e);
                }
            }
        } else {
            for (let j = 1; j < number + 1; j++) {
                try {
                    let pic = localhost + name + j + value;
                    d.push({
                        title: j + value,
                        url: $("#noLoading#").lazyRule((pic) => {
                            copy(pic);
                            return "hiker://empty";
                        }, pic),
                        pic_url: pic,
                        col_type: "icon_small_4",
                    });
                } catch (e) {
                    log(e);
                }
            }
        }
        setResult(d);
    }
}

function download() {
    for (let i = 0; i < numberlist.length; i++) {
        for (let j = 1; j < numberlist[i] + 1; j++) {
            let url1 = url + pathlist[i] + j + typelist[i];
            let pic = localhost + pathlist[i] + j + typelist[i];
            try {
                if (!fileExist(pic)) {
                    downloadFile(url1, pic);
                }
            } catch (e) {
                log(e + url1);
            }
        }
    }
}

function panduan() {
    var d = [];
    var text = "本小程序会下载图标到本地文件夹bghouse大约占8M左右\n" +
        "由于上一次将文件放在rule文件夹中导致备份文件过多，\n" +
        "请大家删除文件rule文件夹下的bghouse文件夹\n" +
        "同意即可使用                 不同意请删除小程序\n";
    d.push({
        title: text,
        col_type: 'rich_text',
        url: "hiker://empty",
        extra: {lineSpacing: 10, textSize: 18}
    });
    d.push({
        title: "同意",
        col_type: 'text_2',
        url: $("#noLoading#").lazyRule(()=> {
            setItem("key","yes")
        })

    });
    d.push({
            title: "不同意",
            col_type: 'text_2',
            url: $("#noLoading#").lazyRule(() => {
            setItem("key","")
            })
        }
    )
    setResult(d)
    if (getItem("key")=="yes"){
        return true;
    }else {
        return false;
    }



}