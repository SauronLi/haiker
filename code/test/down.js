var b = ["146", "97", "321", "152", "169", "179", "343", "186"];
var c = ["system/", "movie/", "erdi/", "music/", "q/", "ke/", "more/", "messy/"];
var d = [".svg", ".png", ".png", ".svg", ".png", ".png", ".png", ".svg"]
var url = "https://lanmeiguojiang.com/tubiao/";
var localhost = "hiker://files/rules/bgHouse/src/"

function yiji() {
    for (let i=0; i<2; i++) {
        var num = parseInt(b[i]);
        for (let j = 1; j < num+1; j++) {
            try {
                MY_URL1 = url + c[i] + j + d[i];
                MY_URL2 = localhost + c[i] + j + d[i];
               // downloadFile(MY_URL1, MY_URL2);
            }catch (e){
                log(e)
            }
        }
        log(i)
    }
    var a=[]
    require(config.依赖)
    let sdda=Version();
    require("hiker://files/rules/bgHouse/js/method.js")
    let sd2a= Version();
    a.push({
        title: 'Download'+sdda+sd2a,
        col_type: 'movie_3',

    })

    setResult(a);
}

function Version() {
    return  "0.0.1";
}//版本更新

