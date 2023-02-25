var jpath =
    "https://ghproxy.com/https://raw.githubusercontent.com/Codebglh/haiker/main/code/src/config.json";
let a = JSON.parse(fetch(jpath));
let localhost = a[0].localhost;
let number = a[0].number
let type = a[0].path;
let url_icon = a[0].type;
let namelist = a[0].namelist;
let url=a[0].url
function yiji() {
    download();
    var d = [];
    for (let i in namelist) {
        a.push({
            title:
                namelist[i] === getVar("icon", namelist[0])
                    ? "““””<font color='#00bbf0'>" + namelist[i] + "</font>"
                    : namelist[i],
            url: $().lazyRule((name) => {
                putVar("icon", name);
                refreshPage(true);
                return "hiker://empty";
            }, i),
            col_type: "scroll_button",
        });
    }
    var num = number[getVar("icon", 0)];
    let name = type[getVar("icon", 0)];
    let value = url_icon[getVar("icon",)]
    for (let j = 1; j < num + 1; j++) {
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
    setResult(d);
}


function download() {
    for (let i = 0; i < number.length; i++) {
        for (let j = 1; j < number[i] + 1; j++) {
            let url1 = url + type[i] + j + url_icon[i];
            let pic = localhost +  type[i] + j + url_icon[i];
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
