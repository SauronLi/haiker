var jpath =
    "https://ghproxy.com/https://raw.githubusercontent.com/Codebglh/haiker/main/code/src/config.json";
let a = JSON.parse(fetch(jpath));
let localhost = a[0].localhost;
let url=a[0].url
let namelist = a[0].namelist;
let numberlist = a[0].numberlist
let pathlist = a[0].pathlist;
let typelist = a[0].typelist;


function yiji() {
    download();
    var d = [];
    for (let i in namelist) {
        d.push({
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
    var number = numberlist[getVar("icon", 0)];
    let name = pathlist[getVar("icon", 0)];
    let value = typelist[getVar("icon",)]
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
    setResult(d);
}


function download() {
    for (let i = 0; i < numberlist.length; i++) {
        for (let j = 1; j < numberlist[i] + 1; j++) {
            let url1 = url + pathlist[i] + j + typelist[i];
            let pic = localhost +  pathlist[i] + j + typelist[i];
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
