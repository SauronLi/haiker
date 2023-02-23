function yiji(inputurl, key, other) {

    let a = [];
    let local  = inputurl[0];
    var MY_URL = inputurl[1];
    var html = fetch(MY_URL);
    let tit = xpathArray(html, key[0]);
    var url = xpathArray(html, key[1]);
    var des = xpathArray(html, key[2]);
    var pic = xpathArray(html, key[3]);
    for (var i = 0; i < url.length; i++) {
        a.push({
            title: tit[i],
            url: "hiker://empty##" + local + url[i].replace(/window\.open\(\'|\'\)/g, "") + "#immersiveTheme##autoCache#",
            desc: des[i],
            col_type: "movie_3",
            pic_url: pic[i],
            extra: {
                title: tit[i], url: local + url[i].replace(/window\.open\(\'|\'\)/g, ""), desc: des[i], pic_url: pic[i],
            },
        })
    }
    return a;
}
