var updateLog = '2022/09/26 初制作模版';
var version = {
    author: "bgcode",
    ver: "0.0.2",
    Id: "https://ghproxy.com/https://raw.githubusercontent.com/Codebglh/hikerule/main/l/moban.js",
    update: '2022/09/26 14:25',
    info: updateLog,
    ok: 'https://okjx.cc/?url=',
    url: 'https://ghproxy.com/https://raw.githubusercontent.com/Codebglh/hikerule/main/l/',
};

function yiji() {
    var d = [];
    d.push({
        title: "主页",
        url: $("hiker://empty#noRecordHistory##noHistory#").rule(() => {
            require(config.依赖);
            zhuye();
        }),
        pic_url: version.url + 'src/1.png',
        col_type: 'icon_5',
    });
    d.push({
        title: "收藏",
        url: "hiker://collection",
        pic_url: version.url + 'src/2.png',
        col_type: 'icon_5',
    });
    d.push({
        title: "历史",
        url: "hiker://history",
        pic_url: version.url + 'src/3.png',
        col_type: 'icon_5',
    });
    d.push({
        title: "设置",
        url: $("hiker://empty#noRecordHistory##noHistory#").rule(() => {
            require(config.依赖);
            shezhi();
        }),
        pic_url: version.url + 'src/4.png',
        col_type: 'icon_5',
    });
    d.push({
        title: "更新",
        url: $('#noLoading#').lazyRule(() => {
            require(config.依赖);
            update();
        }),
        pic_url: version.url + 'src/update.png',
        col_type: 'icon_5',
    });
    d.push({
        title: 'L模版说明-点击管理模版',
        url: $("hiker://empty#noRecordHistory##noHistory#").rule(() => {
            require(config.依赖);
            moban();
        }),
        desc: "所见即所得，只要你能看见你就能做出来",
        col_type: 'text_1',
    });


    d.push({
        title: '一级模版制作',
        url: $("hiker://empty#noRecordHistory##noHistory#").rule(() => {
            require(config.依赖);
            yjm();
        }),
        desc: "所见即所得，只要你能看见你就能做出来",
        col_type: 'text_3',
    });

    d.push({
        title: '二级模版制作',
        url: $("hiker://empty#noRecordHistory##noHistory#").rule(() => {
            require(config.依赖);
            ejm();
        }),
        desc: "所见即所得，只要你能看见你就能做出来",
        col_type: 'text_3',
    });

    d.push({
        title: '搜索模版制作',
        url: $("hiker://empty#noRecordHistory##noHistory#").rule(() => {
            require(config.依赖);
            ssm();
        }),
        desc: "所见即所得，只要你能看见你就能做出来",
        col_type: 'text_3',
    });


    setResult(d);
};

function zhuye() {
    addListener("onClose", $.toString(() => {
        clearMyVar('zhuye$input');
    }));
    var d = [];
    d.push({
        title: '<span style="color:#ff6600"><b>\t热搜榜\t\t\t</b></span>',
        url: "hiker://empty",
        pic_url: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3779990328,1416553241&fm=179&app=35&f=PNG?w=60&h=70&s=E7951B62A4639D153293A4E90300401B',
        col_type: 'icon_small_3'
    });
    setResult(d);
};


function shezhi() {
    addListener("onClose", $.toString(() => {
        clearMyVar('shezhi$input');
    }));
    var d = [];
    d.push({
        title: '<span style="color:#ff6600"><b>\t热搜榜\t\t\t</b></span>',
        url: "hiker://empty",
        pic_url: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3779990328,1416553241&fm=179&app=35&f=PNG?w=60&h=70&s=E7951B62A4639D153293A4E90300401B',
        col_type: 'icon_small_3'
    });
    setResult(d);
};


function update() {
 

};

function moban() {

    var d = [];
    let root = 'hiker://files/rules/bgHouse/json/'
    let names = ['一级模板', '二级模板', '搜索模板'];
    for (let name of names) {
        d.push({
            title: name === getMyVar('name', names[0]) ? '““””<span style="color: #12b668">' + name + '</span>' : name,
            url: $('#noLoading#').lazyRule((name) => {
                putMyVar('name', name);
                refreshPage(false);
                return "hiker://empty";
            }, name),
            col_type: 'text_3',
        });
    }

    let fileName = getMyVar('name', names[0]);
    let filePath = `${root}${fileName}.json`;
    let code = request(filePath);
    d.push({
        title: 'L模板注意事项',
        col_type: 'text_1',
        desc: '请仔细观看操作步骤和格式在进行更改',
        url: 'toast://不懂就问在频道找我'
    });

    d.push({
        title: '初始化',
        col_type: 'text_3',
        url: $('#noLoading#').lazyRule((filePath, fileName) => {
            return $(`确认初始化本地模板文件:${fileName}?将公开模板覆盖本地模板文件`).confirm((filePath, fileName) => {
                let api = 'https://ghproxy.com/https://raw.githubusercontent.com/Codebglh/hikerule/main/l/json/'
                let mobans = {
                    一级模板: api + '1.json',
                    二级模板: api + '2.json',
                    搜索模板: api + '3.json',
                }
                let moban = mobans[fileName];
                // log(moban)
                let code = fetch(moban);

                if (code && code.length > 30) {
                    writeFile(filePath, code);
                    refreshPage(false);
                    return 'toast://已初始化重置模板:' + fileName + '=>' + moban
                } else {
                    return 'toast://仓库服务器通讯异常，请稍候再试...\n' + code
                }
            }, filePath, fileName)
        }, filePath, fileName)
    });
    d.push({
        title: '新增',
        col_type: 'text_3',
        url: $("{{clipboard}}", "自动识别剪切板内容或手动输入JSON文本").input((filePath) => {
            let obj = {};
            try {
                obj = JSON.parse(input)
            } catch (e) {
                return 'toast://新增失败,JSON校验不通过:' + e.message
            }
            let localmubans = JSON.parse(fetch(filePath) || '[]'); //本地的模板
            let idex = localmubans.findIndex(it => it.名称 === obj.名称);
            if (idex > -1) {
                return 'toast://你的第' + idex + '个跟待新增的冲突了，自己改名新增或者去编辑原来那个模板吧'
            }
            localmubans.push(obj);
            writeFile(filePath, JSON.stringify(localmubans));
            refreshPage(false);
            return 'toast://已成功新增到:' + filePath
        }, filePath)
    });
    d.push({
        title: '导入',
        col_type: 'text_3',
        url: $("{{clipboard}}", "自动识别剪切板内容或手动输入口令").input((filePath, fileName) => {
            if (!/一级模板|二级模板|搜索模板/.test(input)) {
                return 'toast://无法识别的模板导入口令.必须包含字符串一级模板|二级模板|搜索模板'
            }
            if (!input.includes(fileName)) {
                return 'toast://当前位置仅允许导入:' + fileName + ',你的是:' + input.split('：')[0]
            }
            try {
                input = input.split('\n')[1].trim();
                let text = parsePaste(input);
                let obj = JSON.parse(base64Decode(text));
                // log(obj);
                let localmubans = JSON.parse(fetch(filePath) || '[]'); //本地的模板
                let titles = localmubans.map(it => it.名称); // 模板标题

                //单条导入
                let idex = titles.indexOf(obj.名称);
                if (idex < 0) {
                    localmubans.push(obj);
                    writeFile(filePath, JSON.stringify(localmubans));
                    refreshPage(false);
                    return 'toast://成功导入到:' + filePath
                } else {
                    return $('检测到已有订阅:' + obj.名称 + ',是否覆盖?').confirm((filePath, idex, obj) => {
                        let localmubans = JSON.parse(fetch(filePath) || '[]');
                        localmubans[idex] = obj;
                        writeFile(filePath, JSON.stringify(localmubans));
                        refreshPage(false);
                        return 'toast://覆盖并导入成功'
                    }, filePath, idex, obj)
                }
            } catch (e) {
                return 'toast://内容有误啊兄弟:' + input + '\n' + e.message
            }

        }, filePath, fileName)
    });
    d.push({col_type: 'text_1',});
    try {
        let localmubans = JSON.parse(code);
        for (let i in localmubans) {
            let moban = localmubans[i];
            d.push({
                title: i + ':' + moban.名称,
                col_type: 'text_1',
                url: $('hiker://empty#noHistory##noRecordHistory##noRefresh#').rule((moban) => {
                    setPageTitle('编辑:' + moban.名称);
                    setResult([{title: JSON.stringify(moban), col_type: 'rich_text'}]);
                }, moban),
                extra: {
                    lineVisible: false
                }
            });
            d.push({
                title: '编辑',
                col_type: 'text_3',
                url: $(JSON.stringify(moban), '请输入编辑后的内容').input((localmubans, i, filePath) => {
                    let ret = {};
                    try {
                        ret = JSON.parse(input)
                    } catch (e) {
                        return 'toast://JSON校验失败，不允许保存'
                    }
                    if (JSON.stringify(localmubans[i]) !== input) {
                        localmubans[i] = ret;
                        writeFile(filePath, JSON.stringify(localmubans));
                        refreshPage(false);
                        return 'toast://已修改并保存'
                    } else {
                        return 'toast://原文件无变化'
                    }
                }, localmubans, i, filePath)
            });
            d.push({
                title: '导出',
                col_type: 'text_3',
                url: $('#noLoading#').lazyRule((moban, fileName) => {
                    try {
                        let shareText = base64Encode(JSON.stringify(moban));
                        var pastes = getPastes();
                        var url = sharePaste(shareText, pastes.slice(-1)[0]);
                        let import_rule = fileName + "：" + moban.名称 + '\n' + url;
                        copy(import_rule);
                        return 'toast://已导出并复制到剪切板，快去分享吧';
                    } catch (e) {
                        return 'toast://发生错误:' + e.message
                    }
                }, moban, fileName)
            });
            d.push({
                title: '删除',
                col_type: 'text_3',
                url: $(`确认删除${getMyVar('mubanManage', names[0])}:${moban.名称}`).confirm((localmubans, i, filePath, name) => {
                    localmubans.splice(i, 1); //删除
                    writeFile(filePath, JSON.stringify(localmubans));
                    refreshPage(false);
                    return 'toast://已删除' + name
                }, localmubans, i, filePath, moban.名称)
            });
        }
    } catch (e) {
        log(e.message)
    }
    ;
    setResult(d);
};


function yjm() {

    clearMyVar('moban$input');

    var d = [];
    let input = [];
    d.push({
        title: "获取",
        url: $.toString(() => {
            putMyVar('url', input);
            refreshPage(false);
            return 'toast://完成访问'
        },),
        desc: "请输入URL",
        col_type: "input",
        extra: {
            defaultValue: getMyVar('url', ''),
            textSize: 13,
            type: "textarea",
            height: 1,
        }
    });
    d.push({
        title: '规则使用xpath选择器',
        desc: '使用具体教程请百度xpath语法或观看B站视频',
        col_type: 'text_1',
        url: 'toast://请阅读源码自取'
    });
    d.push({
        title: "标题",
        url: $.toString(() => {
            putMyVar('title', input);
            refreshPage(false);
            return 'toast://完成访问'
        },),
        desc: "输入xpath语法例如：//*[@class=\"fed-tabs-boxs\"]/text()",
        col_type: 'input',
        extra: {
            defaultValue: getMyVar('title', ''),
            textSize: 13,
            type: "textarea",
            height: 2
        },
    });
    d.push({
        title: "描述",
        url: $.toString(() => {
            putMyVar('detail', input);
            refreshPage(false);
            return 'toast://完成访问'
        },),
        desc: "输入xpath语法例如：//*[@class=\"fed-tabs-boxs\"]/text()",
        col_type: 'input',
        extra: {
            defaultValue: getMyVar('detail', ''),
            textSize: 13,
            type: "textarea",
            height: 2
        },
    });
    d.push({
        title: "链接",
        url: $.toString(() => {
            putMyVar('myurl', input);
            refreshPage(false);
            return 'toast://完成访问'
        },),
        desc: "输入xpath语法例如：//*[@class=\"fed-tabs-boxs\"]/@href",
        col_type: 'input',
        extra: {
            defaultValue: getMyVar('myurl', ''),
            textSize: 13,
            type: "textarea",
            height: 2
        },
    });
    d.push({
        title: "图片",
        url: $.toString(() => {
            putMyVar('img', input);
            refreshPage(false);
            return 'toast://完成访问'
        },),
        desc: "输入xpath语法例如：//*[@class=\"fed-tabs-boxs\"]/@src",
        col_type: 'input',
        extra: {
            defaultValue: getMyVar('img', ''),
            textSize: 13,
            type: "textarea",
            height: 2
        },
    });
    d.push({
        title: "类型",
        url: $.toString(() => {
            putMyVar('type', input);
            refreshPage(false);
            return 'toast://完成访问'
        },),
        desc: "输入海阔自带类型例如：movie_1,movie_2,movie_3等等",
        col_type: 'input',
        extra: {
            defaultValue: getMyVar('type', ''),
            textSize: 13,
            type: "textarea",
            height: 2
        }
    });
    let url = getMyVar('url', input);
    let code = request(url);
    let title = getMyVar('title', input);
    let detail = getMyVar('detail', input);
    let myurl = getMyVar('myurl', input);
    let img = getMyVar('img', input);


    setResult(d);
};