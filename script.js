//==UserScript==
//@name         digdig.io 汉化
//@description  为 digdig.io 的文本汉化
//@author       null
//@namespace    https://github.com/hya21
//@version      0.1
//@icon         https://digdig.io/favicon-32x32.png
//@match        http*://*.digdig.io/*
//@grant        none
//@supportURL
//@downloadURL
//@updateURL
//==/UserScript==
(function() {
'use strict';

//定义翻译对照表
const map={
	"Loading...":"加载中...",
	"Loading..":"加载中..",

	"Sign in with Discord":"Discord登录",
	"Link your Discord account to save your progress!":"链接你的Discord账户以保存你的进度！",
	"Sign in with Apple":"Apple登录",
	"Link your Apple ID to save your progress!":"链接你的AppleID以保存你的进度！",
	"Join our Reddit community!":"加入我们的Reddit社区",
	"Join our Discord community!":"加入我们的Discord社区",
	"Changelog":"更改日志",

	"Settings":"设置",
	"Touch controls":["触摸控制"],
	"Fixed joystick":["固定摇杆"],
	"Keyboard movement":["键盘移动"],
	"Hide names":["隐藏名称"],

	"Achievements":"进度与成就",
	"Reward":"奖励",
	"Starting low":["缓慢的开始"],
	"Reach 10k score":["达到1万分"],
	"Getting good":["步入佳境"],
	"Reach 100k score":["达到10万分"],

	"This digger is called...":"这名挖掘者叫做...",
	"Play":"开始",
	"FFA":"自由对抗",
	"Dig to grow":"挖掘以成长",
	"Avoid bigger players":"避免更大的玩家",
	"TDM":"团队竞赛",
	"Team up against bigger players":"联合起来对抗更大的玩家",
	"TAG":"标记",
	"Seekers must find the hiders":"追逐者必须找到躲藏者",
	"Don't get caught":"不要被抓住！",
	"BR":"大逃杀",
	"BATTLE ROYALE":"大逃杀",
	"Be the last surviving digger":"活到最后",
	"MAZE":"迷宫",

	"Shop":"商店",
	"Daily Reward":"每日奖励",
	"Home":"主页",
	"Face":"面部",
	"Equip":"装备",
	"Unequip":"卸下",
	"Receive more gold for logging in each day!":"每天登录来获得更多黄金！",
	"Collect gold in game to unlock skins":"在游戏中收集黄金以解锁皮肤",

	"Squad":"组队",
	"Public":["公开队伍"],
	"Find Public":"寻找公开队伍",
	"New":"新建",
	"Creating...":"创建中...",
	"Empty":"空",
	"(main menu)":"(主菜单)",
	"(playing)":"(游玩中)",
	"(you)":"(你)",
	"Join":"加入",
	"Click to copy":"点击复制",

	"Unnamed":"未命名",
	"Minimize":"最小化",
	"Game minimized":"游戏已最小化",
	"Give up":"放弃",
	"Resume":"继续",
	"You were destroyed by:":"你被...消灭了",
	"Continue":"继续",
	"(or press enter)":"或 Enter",
	"Stats":["统计"],
};
for(const i in map){
	if(typeof map[i]==="string")map[i]=[map[i],0];
};
const ctx=document.querySelector("canvas").getContext("2d");
const calc=(text,x,y,maxWidth)=>{
	if(map[text]){
		map[text][1]??=(ctx.measureText(map[text][0]).width-ctx.measureText(text).width)/2;
		return [map[text][0],x+map[text][1],y,maxWidth];
	}else{
		return [text,x,y,maxWidth];
	};
};
//获取fillText和strokeText方法，修改并覆盖
const ctxProto=Object.getPrototypeOf(ctx);
const origFillText=ctxProto.fillText;
const origStrokeText=ctxProto.strokeText;
ctxProto.fillText=function(...args){origFillText.call(this, ...calc(...args))};
ctxProto.strokeText=function(...args){origStrokeText.call(this,...calc(...args))};

console.log("汉化脚本已启动");
})();