//==UserScript==
//@name         digdig.io Localization
//@name:zh-CN   digdig.io 汉化
//@description  Localize text for digdig.io
//@description:zh-CN  为 digdig.io 的文本汉化
//@author       null(hya21)
//@namespace    https://github.com/hya21
//@version      0.3.0-261025 //修改映射表结构，支持多语言、动态文本
//@icon         https://digdig.io/favicon-32x32.png
//@match        http*://*.digdig.io/*
//@grant        none
//@supportURL
//@updateURL
//@downloadURL
//==/UserScript==
(function() {
'use strict';

const langs={
	"zh-CN":[
		{ get:(c,t)=>c.map[t], map:(()=>{
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
	"Daily":"每日","Reward!":"领取奖励!",
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

	"Connecting.":"连接中.",
	"Connecting..":"连接中..",
	"Connecting...":"连接中...",
	"Unnamed":"未命名",
	"Minimize":"最小化",
	"Game minimized":"游戏已最小化",
	"Give up":"放弃",
	"Resume":"继续",
	"You were destroyed by:":"你被...消灭了",
	"A mysterious entity":"一个神秘实体",
	"Continue":"继续",
	"(or press enter)":"或 Enter",
	"Stats":["统计"],
			};
			for(const i in map){
				if(!Array.isArray(map[i]))map[i]=[map[i],0];
			};
			return map;
		})() },
		{ get:(c,t)=>{
			const entry=c.map[t.slice(-6)];
			return entry&&[t.slice(0,-entry[0].length)+entry[1],entry[2]];
		},map:{
	"iggers":[" Diggers","名挖掘者",0],
	"online":[" players online","名玩家联机",0],
		}},
		{ get:(c,t)=>{
			const entry=c.map[t.slice(0,10)];
			return entry&&[entry[1]+t.slice(entry[0].length),entry[2]];
		},map:{
	"Max Points":["Max Points","最高分数"],
	"Time Alive":["Time Alive","生存时间"],
	"Diggers de":["Digger destoryed","消灭的挖掘者"],
		}},
	],
};
const maps=langs[navigator.language];

const ctx=document.querySelector("canvas").getContext("2d");
const calc=(text,x,y,maxWidth)=>{
	for(const config of maps){
		const entry=config.get(config,text);
		if(entry){
			entry[1]??=(ctx.measureText(entry[0]).width-ctx.measureText(text).width)/2;
			return [entry[0],x+entry[1],y,maxWidth];
		};
	};
	return [text,x,y,maxWidth];
};
const ctxProto=Object.getPrototypeOf(ctx);
const origFillText=ctxProto.fillText;
const origStrokeText=ctxProto.strokeText;
ctxProto.fillText=function(...args){origFillText.call(this, ...calc(...args))};
ctxProto.strokeText=function(...args){origStrokeText.call(this,...calc(...args))};

console.log("汉化脚本已启动");
})();
