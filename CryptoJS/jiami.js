import CryptoJS from "crypto-js";
const key = CryptoJS.enc.Utf8.parse("1234123412ABCDEF");  //十六位十六进制数作为密钥
const iv = CryptoJS.enc.Utf8.parse('ABCDEF1234123412');   //十六位十六进制数作为密钥偏移量

//解密方法
function Decrypt(word) {
    let encryptedHexStr = CryptoJS.enc.Hex.parse(word);
    let srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr);
    let decrypt = CryptoJS.AES.decrypt(srcs, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 });
    let decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
    return decryptedStr.toString();
}

//加密方法
function Encrypt(word) {
    let srcs = CryptoJS.enc.Utf8.parse(word);
    let encrypted = CryptoJS.AES.encrypt(srcs, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 });
    return encrypted.ciphertext.toString().toUpperCase();
}

var a=Encrypt("function password() {\n" +
    "    // require('')//本地文件设置密码｜直接写死\n" +
    "    var path = \"hiker://files/rules/bgHouse/json/password.json\";\n" +
    "    var password = \"bgcode666\";//字符串直接写死\n" +
    "    if (!fileExist(path)) {\n" +
    "        var d = [];\n" +
    "        d.push({\n" +
    "            title: '输入密码',\n" +
    "            col_type: 'text_3',\n" +
    "            url: $('密码').input((psd,filePath) => {\n" +
    "                if (psd == input) {\n" +
    "                    require(config.依赖)\n" +
    "                    eval(getCryptoJS());\n" +
    "                    const j = CryptoJS.enc.Utf8.parse('12cdefglfcdefg12');\n" +
    "                    let j1 = CryptoJS.enc.Utf8.parse(input);\n" +
    "                    let jg = CryptoJS.AES.encrypt(j1, j, {\n" +
    "                        'mode': CryptoJS.mode.ECB, 'padding': CryptoJS.pad.Pkcs7\n" +
    "                    });\n" +
    "                    let url = jg.toString()\n" +
    "                    let b={key: url}\n" +
    "                    var c =[];\n" +
    "                    c.push(b)\n" +
    "                    writeFile(filePath, JSON.stringify(c));\n" +
    "                    refreshPage(false);\n" +
    "                    return 'toast://密码已经保存可使用'\n" +
    "                } else {\n" +
    "                    return 'toast://密码错误请重试'\n" +
    "                }\n" +
    "            }, password,path)\n" +
    "        });\n" +
    "        setResult(d)\n" +
    "        return false;\n" +
    "    } else {\n" +
    "        let a = JSON.parse(fetch(path))\n" +
    "        if (a[0].key == js(password)) {\n" +
    "            return true;\n" +
    "        }else {\n" +
    "            deleteFile(path);\n" +
    "            return false;\n" +
    "        }\n" +
    "\n" +
    "    }\n" +
    "}\n" +
    "\n" +
    "function yiji() {\n" +
    "    if (password()) {\n" +
    "\n" +
    "        setResult([{\n" +
    "            title: \"sfdaavusbacb\\nasdacdiabciabbcidbcbibdscbsabc\\nadasdai\",\n" +
    "            col_type: \"rich_text\"\n" +
    "        }])\n" +
    "    }\n" +
    "\n" +
    "}\n" +
    "\n" +
    "\n" +
    "\n")
console.log(a)