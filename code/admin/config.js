let picurl = "https://www.dmoe.cc/random.php?t=" + Math.random()
let texturl = text()
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
let a=[
  {
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
  },
  {
	"title": "",
	"desc": "",
	"col_type": "line",
	"url": "",
	"pic_url": ""
  },
  {
	"title": "",
	"desc": "",
	"col_type": "icon_small_4",
	"url": "hiker://history",
	"pic_url": ""
  },
  {
	"title": "",
	"desc": "",
	"col_type": "icon_small_4",
	"url": "hiker://collection",
	"pic_url": ""
  },
  {
	"title": "",
	"desc": "",
	"col_type": "icon_small_4",
	"url": "hiker://download",
	"pic_url": ""
  },
  {
	"title": "",
	"desc": "",
	"col_type": "icon_small_4",
	"url": "hiker://download",
	"pic_url": ""
  },
  {
	"title": "",
	"desc": "",
	"col_type": "line",
	"url": "",
	"pic_url": ""
  },
  {
	"title": "",
	"desc": "",
	"col_type": "icon_1_search",
	"url": "hiker://search",
	"pic_url": "hiker://images/search"
  },
  {
	"title": "",
	"desc": "",
	"col_type": "line",
	"url": "",
	"pic_url": ""
  },
  {
	"title": "",
	"desc": "我的小程序（）",
	"col_type": "movie_2",
	"url": "hiker://home",
	"pic_url": ""
  },
  {
	"title": "",
	"desc": "聚影",
	"col_type": "movie_2",
	"url": "hiker://home@聚影",
	"pic_url": ""
  }
]