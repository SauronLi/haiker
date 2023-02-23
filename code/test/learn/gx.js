js:
let SC = parseInt(getItem("清除", "0").replace("SC", ""));
let SY = parseInt(getItem("sy清", "0").replace("SY", ""));
let ersc = CT > (SC + 360 * 60 * 60 * 1000);
let sysc = CT > (SY + 1440 * 60 * 60 * 1000);
let get1 = getMyVar("清除", "0") == "1";
if (ersc || sysc || get1) {
    let ur = "";
    let toas = "";
    if (ersc || get1) {
        setItem("清除", CT + "SC");
        clearMyVar("MY_URL");
        ur = "erji";
        toas = "自动清除二级缓存";
    } else
    if (sysc) {
        setItem("sy清", CT + "SY");
        clearMyVar("换");
        ur = "sy";
        toas = "自动清除首页缓存";
    };
    let file = require(http + "sc.js");
    let dele = "/storage/emulated/0/Android/data/com.example.hikerview/files/Documents/cache/FY/";

    if (file.deleteFiles(dele + ur)) {
        if (get1) {
            toast("已清除二级缓存");
            clearMyVar("清除");
        } else {
            toast(toas);
        };
    } else {
        if (get1) {
            toast("无需清除");
            clearMyVar("清除");
        } else {
            toast("没有缓存可清除");
        };
    }
};

let LT = parseInt(getItem("上次", "0").replace("CT", ""));
let 更新up = (CT > (LT + 48 * 60 * 60 * 1000)) && getItem("自动", "on") == "on";
let mytitle = MY_RULE.title !== "风影 Beta";
let 手 = getMyVar("手动", "0") == "1";
let 强 = getMyVar("强制", "0") == "1";
let ver = "230216";
let xver = getItem("ver", "1");
let hver = getMyVar("vers");
let zver = hver == "0" ? xver : hver;
if ((ver > zver) && mytitle) {
    let vers = $.toString((ver, hver) => {
        if (hver == "0") {
            setItem("ver", ver);
        };
        deleteCache();
        return "海阔视界规则分享，当前分享的是：小程序，随风￥home_rule_v2￥base64://@风影@eyJsYXN0X2NoYXB0ZXJfcnVsZSI6IiIsInRpdGxlIjoi6aOO5b2xIiwiYXV0aG9yIjoi6ZqP6aOOIiwidXJsIjoiaGlrZXI6Ly9lbXB0eSMjIiwidmVyc2lvbiI6MjMwMjE2LCJjb2xfdHlwZSI6Im1vdmllXzMiLCJjbGFzc19uYW1lIjoiIiwidHlwZSI6ImFsbCIsImNsYXNzX3VybCI6IiIsImFyZWFfbmFtZSI6IiIsImFyZWFfdXJsIjoiIiwic29ydF9uYW1lIjoiIiwieWVhcl9uYW1lIjoiIiwic29ydF91cmwiOiIiLCJ5ZWFyX3VybCI6IiIsImZpbmRfcnVsZSI6ImpzOlxuIHJlcXVpcmUoY29uZmlnLuS+nei1lik7XG4gc3koKSIsInNlYXJjaF91cmwiOiJoaWtlcjovL2VtcHR5IyMqKiIsImdyb3VwIjoi4pGgQeW9seaooeadvyIsInNlYXJjaEZpbmQiOiJqczpcbiByZXF1aXJlKGNvbmZpZy7kvp3otZYpO1xuIHNvdSgpIiwiZGV0YWlsX2NvbF90eXBlIjoidGV4dF8zIiwiZGV0YWlsX2ZpbmRfcnVsZSI6IiIsInNkZXRhaWxfY29sX3R5cGUiOiJtb3ZpZV8xIiwic2RldGFpbF9maW5kX3J1bGUiOiIqIiwidWEiOiJtb2JpbGUiLCJwcmVSdWxlIjoibGV0IHRhY2l0bHkgPSBcImFIUjBjSE02THk5bmFYUmpiMlJsTG01bGRDOXpkV2xtWlc0dmMzVnBabVZ1Wnk4dEwzSmhkeTl0WVhOMFpYSXZlV05zTG1welwiO1xubGV0IHljbCA9IGdldEl0ZW0oXCJnaXRcIiwgYmFzZTY0RGVjb2RlKHRhY2l0bHkpKTtcbmluaXRDb25maWcoe1xuICAgIOS+nei1ljogeWNsXG59KTsiLCJwYWdlcyI6IltdIiwiaWNvbiI6Imh0dHBzOi8vczEuYXgxeC5jb20vMjAyMi8xMC8xNS94d1RQZFUuanBnIiwicHJveHkiOiIifQ=="
    }, ver, hver);
    confirm({
        title: "发现新版本：" + ver,
        content: '新版本需重新导入，否则会出现未知错误，是否立即导入？',
        confirm: vers,
        cancel: vers
    });
} else
if (更新up || 手 || 强) {
    function up() {
        if (强 && /newb/.test(bbh)) {
            deleteCache();
            clearMyVar("强制");
            refreshPage();
            toast("强制更新完成");
        } else {
            let nowb = getItem("当前", "1.0");
            let desc = "当前版本: " + nowb + " 是否更新？\n\n更新: ";
            let lsh = getMyVar("临时", "1.0");
            putMyVar("更新", newb);
            let ych = getMyVar("更新");
            if (ych > nowb && ych > lsh || ych > nowb && 手) {
                clearMyVar("手动");
                log("当前版本: " + nowb + " < 新版本: " + newb + "\n更新日期: " + 日期 + "\n" + 内容)
                confirm({
                    title: "发现新版本: " + newb,
                    content: desc + 内容,
                    confirm: $.toString((ych, 内容, 日期) => {
                        setItem("当前", ych);
                        clearItem("内容");
                        setItem("日期", 日期);
                        saveFile("hiker://files/cache/FY/nr.js", JSON.stringify(内容), 0);
                        deleteCache();
                        refreshPage();
                        toast("更新完成");
                    }, ych, 内容, 日期),
                    cancel: $.toString((ych) => {
                        putMyVar("临时", ych);
                        toast("暂未更新");
                    }, ych)
                })
            } else {
                clearMyVar("手动");
                toast("已是最新版");
            }
        }
    };
    if (更新up) {
        setItem("上次", CT + "CT");
    };
    let bbh = "";
    try {
        bbh = fetch(http + "ycl.js", {
            timeout: 3000
        });
        /http/.test(http) ? eval(bbh) : eval(JSON.parse(bbh).rule);
    } catch (e) {
        bbh = "报错";
    }
    if (!/newb/.test(bbh)) {
        let gitcode = "https://gitcode.net/suifen/suifeng/-/raw/master/";
        let gitea = "https://gitea.com/suifen/suifeng/raw/branch/master/";
        let git = /gitcode/.test(http) ? gitea : gitcode;
        try {
            bbh = fetch(git + "ycl.js", {
                timeout: 3000
            });
            eval(bbh);
        } catch (e) {
            bbh = "报错";
        }

        if (!/newb/.test(bbh)) {
            clearMyVar("强制");
            clearMyVar("手动");
            toast("获取远程数据时，出现未知错误");
            confirm({
                title: "远程仓库失联",
                content: "请勿强制更新或清理\t" + MY_RULE.title + "\t缓存\n否则必定报错",
                confirm: null,
                cancel: null,
            })
        } else {
            setItem("git", git + "ycl.js");
            up();
            back(true);
        }
    };
    up();
};