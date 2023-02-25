function main() {

    let path = "https://ghproxy.com/https://raw.githubusercontent.com/Codebglh/haiker/main/code/admin/config.json";
    let picurl = "https://www.dmoe.cc/random.php?t=" + Math.random()

    let texturl = text()
    d.push( {
            "title": "",
            "desc": "",
            "col_type": "card_pic_1",
            "url": "hiker://empty",
            "pic_url": picurl
        },
        {
            "title": texturl,
            "desc": "",
            "col_type": "avatar",
            "url": "hiker://empty",
            "pic_url": "https://ghproxy.com/https://raw.githubusercontent.com/Codebglh/haiker/main/code/src/avatar/bgcode.jpeg"
        })
    let d = JSON.parse(fetch(path))

    setResult(d);
}

function text(){
    var items = ["https://v1.hitokoto.cn/?encode=text"];
    var colors = ['grey', '#ff7512', '#cb54ff', '#ff5358', '#ff9044', '#7678ff', '#34b1ff'];

    function getOne(name) {
        return name[Math.floor(Math.random() * items.length)]
    }

    let word = "此情若是长久时,网络不好可不行";
    var tips = '<small><font color="' + getOne(colors) + '">' + word + '</font></small>';
    try {
        let word = request(getOne(items), {timeout: 500});
        if (word.length < 2) {
           return  tips
        } else {
          return   '<small><font color="' + getOne(colors) + '">' + word + '</font></small>'
        }
    } catch (e) {
        return tips
    }

}