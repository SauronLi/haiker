function canUse() {
    //如果更新了规则也要限流，可以修改key
    let key = "lock2"
    //等待分钟数
    let waitMin = 10

    let min = Math.round(1000 * 60 * 60*24*7)
    let unlock = new Date().getTime() + min;
    let time = getItem(key, "");
    if (time == "") {
        setItem(key, "" + unlock)
        let st = new Date(unlock).toLocaleString().replace(/:\d{1,2}$/, ' ');

        let msg = "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\使用需知<br><br>这是您第一次使用/更新该版本规则，下面为使用介绍，请仔细阅读。本规则将在" + st + "解锁使用。<br><br>ⓐ本小程序图标分为影视图标、音乐图标、其它、更多以及Q版图标<br>ⓑ影视图标共146个、音乐图标共152个、Q版图标共138个、更多图标343个、其它图标若干，欢迎大家前来挑选自己喜爱的一个<br>ⓒ使用方法：你喜欢哪个图标点下对应图标就会自动复制图标链接，然后粘贴到你想添加的位置即可<br>ⓓ本小程序的图标数量和类型会不定期增加届时请及时到仓库导入新版<br>ⓔ如遇到重复图标/不显示图标/少号图标请及时到仓库或者论坛反馈<br>ⓕ请仔细阅读以上内容并且到时间后重新访问本规则或者等待时间到了刷新本页面即可。<br><br>Tips:图标为本人精心挑选，种类多、图标优美、风格百态，本次新增更多图383个！"
        setResult([{
            title: msg,
            col_type: "rich_text"
        }])
        return false
    } else if (parseInt(time) < new Date().getTime()) {

        return true
    } else {
        let st = new Date(parseInt(time)).toLocaleString().replace(/:\d{1,2}$/, ' ');

        let msg = "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\使用需知<br><br>这是您第一次使用/更新该小程序规则，下面为使用介绍，请仔细阅读。本规则将在" + st + "解锁使用。<br><br>ⓐ本小程序图标分为影视图标、音乐图标、其它、更多以及Q版图标<br>ⓑ影视图标共146个、音乐图标共152个、Q版图标共138个、更多图标343个、其它图标若干，欢迎大家前来挑选自己喜爱的一个<br>ⓒ使用方法：你喜欢哪个图标点下对应图标就会自动复制图标链接，然后粘贴到你想添加的位置即可<br>ⓓ本小程序的图标数量和类型会不定期增加届时请及时到仓库导入新版<br>ⓔ如遇到重复图标/不显示图标/少号图标请及时到仓库或者论坛反馈<br>ⓕ请仔细阅读以上内容并且到时间后重新访问本规则或者等待时间到了刷新本页面即可。<br><br>Tips:图标为本人精心挑选，种类多、图标优美、风格百态，本次新增更多图383个！"
        setResult([{
            title: msg,
            col_type: "rich_text"
        }])
        return false
    }
}
$.exports = canUse();