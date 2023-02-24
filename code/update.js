function password() {
   // require('')//本地文件设置密码｜直接写死
    var password='string';//字符串直接写死
    if(getItem("key","")==""){
        var d=[];

        d.push({
            title: '输入密码',
            col_type: 'text_3',
            url: $('密码').input((password) => {
                if (password==input) {
                    setItem("key",input);
                    refreshPage(false);
                    return 'toast://密码已经保存可使用'
                } else {
                    return 'toast://密码错误请重试'
                }
            })
        },password);
        setResult(d)
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
