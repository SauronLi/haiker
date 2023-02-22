js:
var d = [];
d.push({
    col_type: "line_blank"
})
let bturl = "https://lanmeiguojiang.com/tubiao/q/";
d.push({
    title: "<b><small>功能</small></b>",
    url: "hiker://empty",
    col_type: "avatar",
    img: bturl + "94.png",
});

let ur = "https://lanmeiguojiang.com/tubiao/messy/";
let coll = "";
if (MY_NAME == "海阔视界" && getAppVersion() >= "3475" || MY_NAME == "嗅觉浏览器" && getAppVersion() >= "859") {
    coll = "text_icon";
} else {
    coll = "avatar";
}
let 轮 = "开启后，频道顶部以窗口轮播影视剧，关闭显示随机图片。";
let 屏 = "二级页面顶部以全屏显示，右上角为菜单按钮，设置后，需返回下拉刷新生效。";
let 记 = "开启后，首页会显示历史记录、我的收藏、搜索记录，长按搜索记录清除记录。";
let 首 = "开启后，随机选择一个站点作为首页。";

let 名称 = ["影视轮播", "顶部全屏", "记录收藏", "随机首页"];
let 储存 = ["轮播", "全屏", "记录", "首页"];
let des = [轮, 屏, 记, 首];

for (let i in 储存) {
    d.push({
        title: "<b>" + 名称[i] + "</b>",
        url: $("#noLoading#").lazyRule((储存) => {
            if (getItem(储存, 储存 == "首页" ? "on" : "off") == "on") {
                setItem(储存, "off");
            } else {
                setItem(储存, "on");
            };
            refreshPage(false);
            return "hiker://empty";
        }, 储存[i]),
        img: getItem(储存[i], 储存[i] == "首页" ? "on" : "off") == "on" ? ur + "55.svg" : ur + "63.svg",
        col_type: coll,
        extra: {
            longClick: [{
                title: des[i],
                js: $.toString((des) => {
                    return "toast://" + des;
                }, des[i])
            }]
        }
    });
};

d.push({
    col_type: "line_blank"
})

d.push({
    title: "<b><small>播放</small></b>",
    url: "hiker://empty",
    col_type: "avatar",
    img: bturl + "93.png",
});

let 推 = "电视端TVBOX推送，频道查看使用教程。";
let 嗅 = "开启后，使用播放器自带功能索检视频。";
let 缓 = "部分视频开启缓存无法播放，自行判断是否开启。";
let 助 = "调用配置助手。";
let 断 = "开启后，所有大厂线路都会调用断插、魔断的解析。";
let 名 = getItem("嗅探", "off") == "on" ? ["BOX 推送", "VID 嗅探", "M3U8 缓存", "CY 助手"] : ["BOX 推送", "VID 嗅探", "DN 断插"];

let 储 = getItem("嗅探", "off") == "on" ? ["推送", "嗅探", "缓存", "助手"] : ["推送", "嗅探", "断插"];
let desc = getItem("嗅探", "off") == "on" ? [推, 嗅, 缓, 助] : [推, 嗅, 断];
for (let j in 名) {
    d.push({
        title: "<b>" + 名[j] + "</b>",
        url: $("#noLoading#").lazyRule((储存, j) => {
            if (getItem(储存, "off") == "on") {
                clearItem(储存);
            } else
            if (MY_NAME == "海阔视界" && getAppVersion() >= "3475" || MY_NAME == "嗅觉浏览器" && getAppVersion() >= "859") {
                setItem(储存, "on");
            } else
            if (j !== "1") {
                setItem(储存, "on");
            } else {
                confirm({
                    title: MY_NAME.replace(/视界|浏览器/g, "") + "版本过低",
                    content: "当前版本无法开启VID嗅探，是否前往更新？",
                    confirm: $.toString(() => {
                        if (MY_NAME == "海阔视界" && getAppVersion() < "3216" || MY_NAME == "嗅觉浏览器") {
                            return MY_NAME == "嗅觉浏览器" ? "toast://拉取更新失败，请手动前往更新" : "web://https://haikuo.lanzoui.com/u/GoldRiver";
                        } else {
                            return "hiker://settingMore";
                        };
                    }),
                    cancel: null
                });
            }
            refreshPage(false);
            return "hiker://empty";
        }, 储[j], j),
        img: getItem(储[j], "off") == "on" ? ur + "55.svg" : ur + "63.svg",
        col_type: coll,
        extra: {
            longClick: [{
                title: desc[j],
                js: $.toString((des) => {
                    return "toast://" + des;
                }, desc[j])
            }]
        }
    });
};
let ai = "开启后，(嗅探时长会增加2-3秒)大厂线路无法播放时，会自动调用断插、魔断的解析。";
if (getItem("断插", "off") == "off" && getItem("嗅探", "off") == "off") {
    clearItem("AID");
    d.push({
        title: "<b>A I 断插</b>",
        url: $("#noLoading#").lazyRule(() => {
            if (getItem("AI", "on") == "on") {
                setItem("AI", "off");
            } else {
                clearItem("AI");
            };
            refreshPage(false);
            return "hiker://empty";
        }),
        img: getItem("AI", "on") == "on" ? ur + "55.svg" : ur + "63.svg",
        col_type: coll,
        extra: {
            longClick: [{
                title: ai,
                js: $.toString((des) => {
                    return "toast://" + des;
                }, ai)
            }]
        }
    });
} else {
    setItem("AID", "off");
};
d.push({
    col_type: "line_blank"
})
d.push({
    title: "<b><small>配置</small></b>",
    url: "hiker://empty",
    col_type: "avatar",
    img: bturl + "106.png",
});
let jpng = "https://s1.ax1x.com/2022/12/07/zgwfJK.png";
let zs = "配置助手设置，频道查看设置教程。";

if (getItem("嗅探", "off") == "on") {
    d.push({
        title: "<b>助手配置</b>",
        img: jpng,
        url: $("hiker://empty#noRecordHistory##noHistory#").rule(() => {
            try {
                eval(JSON.parse(request("hiker://page/home?rule=配置助手&type=设置#noHistory#")).rule);
            } catch (e) {
                back(false);
                toast("未找到配置助手");
            };
        }),
        col_type: coll,
        extra: {
            inheritTitle: false,
            longClick: [{
                title: zs,
                js: $.toString((des) => {
                    return "toast://" + des;
                }, zs)
            }]
        }
    })
} else {
    let title = ["断插接口", "断插配置"];
    let url = ["编辑", "设置"];
    for (let i in url) {
        d.push({
            title: "<b>" + title[i] + "</b>",
            img: jpng,
            url: "hiker://page/Route?rule=MyFieldᴰⁿ&type=" + url[i] + "#noHistory##noRecordHistory#",
            col_type: coll,
            extra: {
                inheritTitle: false
            }
        })
    };
}

let ips = "TVBOX推送IP设置，频道查看设置教程";
let ip = MY_NAME == "海阔视界" ? "http://" + getIP() + ":9978" : "http://";
if (getItem("推送", "off") == "on") {
    d.push({
        title: "<b>TV BOX</b>\t\t<small>" + (getItem("ip", ip)) + "</small>",
        url: $(getItem("ip", ip), "TVBOX推送IP").input(() => {
            setItem("ip", input);
            refreshPage(false);
        }),
        img: "https://s1.ax1x.com/2022/12/07/zg6pOU.png",
        col_type: coll,
        extra: {
            longClick: [{
                title: ips,
                js: $.toString((des) => {
                    return "toast://" + des;
                }, ips)
            }]
        }
    });
} else {
    clearItem("ip");
};
d.push({
    col_type: "line_blank"
})
d.push({
    title: "<b><small>更新</small></b>",
    url: "hiker://empty",
    col_type: "avatar",
    img: bturl + "97.png",
});
d.push({
    title: "<b>自动更新</b>",
    url: $("#noLoading#").lazyRule(() => {
        if (getItem("自动", "on") == "on") {
            setItem("自动", "off");
        } else {
            clearItem("自动");
        };
        refreshPage(false);
        return "hiker://empty";
    }),
    img: getItem("自动", "on") == "on" ? ur + "55.svg" : ur + "63.svg",
    col_type: coll
});

let 检 = "手动检测更新，无需频繁点击，频繁点击会禁用检测更新。";
let item = CT > (parseInt(getMyVar("时间", "0").replace("CT", "")) + 0.2 * 60 * 60 * 1000);
d.push({
    title: "<b>检测更新</b>",
    url: $("#noLoading#").lazyRule((CT, item) => {
        let toa = "";
        if (item) {
            putMyVar("时间", CT);
            putMyVar("手动", "1");
            /*back(false);*/
            require(config.依赖);
            gx()
            toa = "hiker://empty";
        } else {
            toa = "toast://检测更新过于频繁，已禁止检测";
        };
        refreshPage(false);
        return toa;
    }, CT + "CT", item),
    img: ur + "119.svg",
    col_type: coll,
    extra: {
        longClick: [{
            title: 检,
            js: $.toString((des) => {
                return "toast://" + des;
            }, 检)
        }]
    }
});

d.push({
    col_type: "line_blank"
})

d.push({
    title: "<b><small>其它</small></b>",
    img: bturl + "92.png",
    url: "hiker://empty",
    col_type: "avatar",
});

let jpg = "https://s1.ax1x.com/2022/12/07/";
let tile = ["关于风影", "清除数据"];
let 关于 = $("hiker://empty#noRecordHistory##noHistory##noRefresh#").rule((CT) => {
    var d = [];
    d.push({
        url: "hiker://empty",
        col_type: "card_pic_3",
        extra: {
            longClick: [{
                    title: getItem("隐藏", "off") == "on" ? "状态：显示" : "状态：隐藏",
                    js: $.toString(() => {
                        if (getItem("隐藏", "off") == "on") {
                            clearItem("隐藏");
                        } else {
                            setItem("隐藏", "on");
                        };
                        refreshPage(false);
                        return getItem("隐藏", "off") == "on" ? "toast://已显示" : "toast://已隐藏";
                    })
                }
                /*, {
                                title: "OFF",
                                js: $.toString(() => {
                                    setItem("隐藏", "off");
                                    return "toast://已关闭";
                                })
                            }*/
            ]
        }
    })
    d.push({
        title: "‘‘’’<b>\t版本号: " + getItem("当前", "1.0") + "</b>",
        url: "hiker://empty",
        img: "https://s1.ax1x.com/2022/10/15/xwTPdU.jpg",
        col_type: "card_pic_3"
    })
    d.push({
        col_type: "line_blank"
    })

    let items = CT > (parseInt(getItem("强时", "0").replace("CT", "")) + 6 * 60 * 60 * 1000);
    d.push({
        title: "<b>强制更新</b>",
        url: $("#noLoading#").lazyRule((items, CT) => {
            let toa = "";
            if (items) {
                confirm({
                    title: "重要提示",
                    content: "强制更新专为小程序无法更新或更新异常时使用(更新完成需返回首页刷新页面)\n确认将会清除全部数据",
                    confirm: $.toString((CT) => {
                        setItem("强时", CT);
                        putMyVar("强制", "1");
                        require(config.依赖);
                        gx();
                        refreshPage(false);
                    }, CT),
                    cancel: $.toString(() => {
                        toast("强制更新取消");
                    })
                });
                toa = "hiker://empty";
            } else {
                toa = "toast://强制更新为备用，已禁用";
            };
            return toa;
        }, items, CT + "CT"),
        img: "https://lanmeiguojiang.com/tubiao/messy/156.svg",
        col_type: "text_icon"
    })
    d.push({
        col_type: "line_blank"
    })
    d.push({
        title: "‘‘’’<b>免责声明</b>",
        url: "hiker://empty",
        col_type: "text_1",
        extra: {
            lineVisible: false
        }
    })

    d.push({
        title: "1、小程序数据内容均来源于互联网，经软件对原网页源码重新排版后显示，此小程序与海阔不参与任何制作、上传、储存等内容，其显示的所有内容与视频，其版权均归原网站作者所有。<br>2、此小程序代码内容仅供爱好者学习与交流使用，禁止用于其他用途，请于导入后24小时内删除，请勿传播！<br>3、因使用此小程序产生的版权问题，软件开发者与此小程序作者概不负责。<br>4、请勿相信网页或者视频中的任何广告，切记！！！",
        col_type: "rich_text",
        extra: {
            textSize: "13"
        }
    });
    setResult(d);
}, CT);

let itemi = CT > (parseInt(getItem("时", "0").replace("CT", "")) + 24 * 60 * 60 * 1000);
let 清除 = $("#noLoading#").lazyRule((item, CT) => {
    let toa = "";
    if (item) {
        putMyVar("清除", "1");
        setItem("时", CT);
        toa = "hiker://empty";
        require(config.依赖);
        gx();
    } else {
        toa = "toast://清除完成";
    };
    refreshPage(false);
    return toa;
}, itemi, CT + "CT");
let urlg = [关于, 清除];
let png = ["zgwfJK.png", "zgwdiV.png"];
let 清 = "清除二级页面缓存数据，首页缓存不会清除(不要频繁清除，清除后进入二级会变慢)，每隔15天自动清除一次，首页缓存每隔60天清除一次。";

for (let i in tile) {
    let extra = i == 1 ? {
        longClick: [{
            title: 清,
            js: $.toString((des) => {
                return "toast://" + des;
            }, 清)
        }]
    } : {
        inheritTitle: false
    };
    d.push({
        title: "<b>" + tile[i] + "</b>",
        url: urlg[i],
        col_type: coll,
        img: jpg + png[i],
        extra: extra
    });
};

d.push({
    col_type: "line_blank"
})
d.push({
    title: "<b>版本: " + getItem("当前", "1.0") + "</b>",
    img: "https://s1.ax1x.com/2022/10/15/xwTPdU.jpg",
    url: "hiker://empty",
    col_type: "avatar",
});
let 内容 = "";
try {
    eval("内容 = " + readFile("hiker://files/cache/FY/nr.js"), 0);
} catch (e) {
    内容 = "1,风影初始版本。"
};
d.push({
    title: "<b>更新日期：" + getItem("日期") + "<small>\t\t\tBy\t随风</small></b>" + 内容.replace("1,", "<br>1,").replace(/\n/g, "<br>"),
    col_type: "rich_text",
    extra: {
        textSize: "12"
    }
});

d.push({
    col_type: "line"
})
d.push({
    title: "<br>",
    col_type: "rich_text"
});
setResult(d);