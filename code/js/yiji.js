
function Version() {
    return  "0.0.4";
}//版本更新

function main() {
    let d = [];

    if (MY_PAGE == 1) {
        for (var i in yijimenu) {
            d.push(yijimenu [i])
        }
    }
    if (getItem(zhuye)=="on") {
        let x=yingshi();
        for (var i in x) {
            d.push(x[i])
        }
    }

    setResult(d);
}

function yingshi() {
    let a = [];
    var local = 'https://www.mhww.xyz'
    var MY_URL = " https://www.mhww.xyz/?page.currentPage=" + MY_PAGE + "&orderType=3&subjectName=%E9%9F%93%E6%BC%AB&filmName=";
    var html = fetch(MY_URL);
    let tit = xpathArray(html, '//*[@id="booklist"]/div/div/div/p/span/text()');
    var url = xpathArray(html, '//*[@id="booklist"]/div/div/@onclick');
    var des = xpathArray(html, '//*[@id="booklist"]/div/div/div[2]/p[2]/text()');
    var pic = xpathArray(html, '//*[@id="booklist"]/div/div/div[1]/img/@src');
    for (var i = 0; i < url.length; i++) {
        a.push(
            {
                title: tit[i],
                url: "hiker://empty##"+local+url[i].replace(/window\.open\(\'|\'\)/g, "")+"#immersiveTheme##autoCache#",
                desc: des[i],
                col_type: "movie_3",
                pic_url: pic[i],
                extra: {
                    title: tit[i],
                    url: local+url[i].replace(/window\.open\(\'|\'\)/g, ""),
                    desc: des[i],
                    pic_url: pic[i],
                },
            }
        )
    }
    return a;
}
