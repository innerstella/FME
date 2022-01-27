const searchInput = document.querySelector("#search-form input");
const searchForm = document.querySelector("#search-form");
const searchArea = document.querySelector('#searchArea');

const HIDDEN_CLASSNAME = "hidden";

window.onload = showImage;

var backgroundImage = [
	'./img_key/1.jpg',
	'./img_key/2.jpg',
	'./img_key/3.jpg',
	'./img_key/4.jpg',
	'./img_key/5.jpg',
	'./img_key/6.jpg',
	'./img_key/7.jpg',
	'./img_key/8.jpg',
	'./img_key/9.jpg',
	'./img_key/10.jpg'

];

function showImage(){
	var randomNum = Math.floor(Math.random() * backgroundImage.length); //이미지 랜덤으로 뽑아냄
	document.getElementById("randomImg").src = backgroundImage[randomNum];
};

