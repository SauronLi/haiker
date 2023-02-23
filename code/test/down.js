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
    a.push({
        title: 'Download',
        col_type: 'movie_3',

    })
    setResult(a);
}