const searchInput = document.querySelector("#search-form input");
const searchForm = document.querySelector("#search-form");
const searchArea = document.querySelector('#searchArea');

const HIDDEN_CLASSNAME = "hidden";

window.onload = showImage;

var backgroundImage = [
	'./img/joshua.jpg',
	'./img/green.jpg',
	'./img/cix.jpg',
	'./img/mx.jpg',
	'./img/skz.jpg',
	'./img/tiger.jpg',
	'./img/kh.jpg',
	'./img/ksy1.jpg',
	'./img/ksy2.jpg',
	'./img/svt.gif',
	'./img/bjy.jpg',
	'./img/leejoon.jpg',
	'./img/leejoon2.jpg',
	'./img/minkyu.jpg',
	'./img/vernon.jpg',
	'./img/seungmin.jpg'


];

function showImage(){
	var randomNum = Math.floor(Math.random() * backgroundImage.length); //이미지 랜덤으로 뽑아냄
	document.getElementById("randomImg").src = backgroundImage[randomNum];
};

