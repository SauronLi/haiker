
var jpath =
    "https://ghproxy.com/https://raw.githubusercontent.com/Codebglh/haiker/main/code/src/config.json";
var home="hiker://files/rules/bgHouse/src/config.json"
try {
    if (!fileExist(home)) {
        downloadFile(jpath, home);
    }else{
        let farversion = "0.0.3";
        let a = JSON.parse(fetch(home));
        var localversion =a[0].version

        if(localversion!==farversion){
            deleteFile(home);
            downloadFile(jpath, home);
        }

    }
} catch (e) {
    log(e + jpath);
}
let a = JSON.parse(fetch(home));

let localhost = a[0].localhost;
let url=a[0].url
let namelist = a[0].namelist;
let numberlist = a[0].numberlist
let pathlist = a[0].pathlist;
let typelist = a[0].typelist;
let as=a[0].assets;
function yiji() {
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
    let p=parseInt(getVar("icon", "0"));
    var number = numberlist[p];
    let name = pathlist[p];
    let value = typelist[p]
    if(p==8){

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
    }else if(p==9){
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
    }else {
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

function download(){
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