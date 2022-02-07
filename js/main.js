const searchInput = document.querySelector("#search-form input");
const searchForm = document.querySelector("#search-form");
const searchArea = document.querySelector('#searchArea');

const HIDDEN_CLASSNAME = "hidden";

window.onload = showImage;

var backgroundImage = [
	'./img/1.gif',
	'./img/2.gif',
	'./img/3.gif',
	'./img/4.gif',
	'./img/5.gif',
	'./img/6.gif',
	'./img/7.gif',
	'./img/8.gif',
	'./img/9.gif',
	'./img/10.gif',

];

function showImage(){
	var randomNum = Math.floor(Math.random() * backgroundImage.length); //이미지 랜덤으로 뽑아냄
	document.getElementById("randomImg").src = backgroundImage[randomNum];
};

