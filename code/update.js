function password() {
    // require('')//本地文件设置密码｜直接写死
    var path = "hiker://files/rules/bgHouse/json/password.json";
    var password = 'string';//字符串直接写死
    if (!fileExist(path)) {
        var d = [];
        d.push({
            title: '输入密码',
            col_type: 'text_3',
            url: $('密码').input((psd,filePath) => {
                if (psd == input) {
                    let b={key: input}
                    var c =[];
                    c.push(b)
                    writeFile(filePath, JSON.stringify(c));
                    refreshPage(false);
                    return 'toast://密码已经保存可使用'
                } else {
                    return 'toast://密码错误请重试'
                }
            }, password,path)
        });
        setResult(d)
        return false;
    } else {
        let a = JSON.parse(fetch(Path))
        if (a[0].key == password) {
            return true;
        }
        return false;
    }
}

function yiji() {
    if (password()) {

        setResult([{
            title: "sfdaavusbacb\nasdacdiabciabbcidbcbibdscbsabc\nadasdai",
            col_type: "rich_text"
        }])
    }

}

function update() {
    let key = "day"//修改即可重置更新时间
    let time = new Date().getTime();//获取当前时间
    let locktime = getItem(key, "")
    let updatetime = time + Math.round(1000 * 60 * 60 * 24 * 7);
    if (nowtime == "") {
        setItem(key, "" + updatetime)
    }
    if (time > locktime) {
        Version();//更新函数
        setItem(key, "");//重置更新时间
    }
}
