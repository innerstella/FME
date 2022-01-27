const searchInput = document.querySelector("#search-form input");
const searchForm = document.querySelector("#search-form");
const searchArea = document.querySelector('#searchArea');

const HIDDEN_CLASSNAME = "hidden";

window.onload = showImage;

var backgroundImage = [
	'./random_image/강승윤.jpg',
	'./random_image/송민호.jpg',
	'./random_image/아낙네.jpg',
	'./random_image/위너.jpg',
	'./random_image/이장준.jpg',
	'./random_image/임창균.jpg',
	'./random_image/홍중.jpg',
	'./random_image/홍지수.jpg',
	'./random_image/휘영.jpg',
	'./random_image/원우.jpg',
	'./random_image/기범.jpg',
	'./random_image/윤현석.jpg',
	'./random_image/조슈아.jpg',
	'./random_image/최승철.jpg',
	'./random_image/도겸.jpg',
	'./random_image/용복.jpg',
	'./random_image/호싱이.jpg',
	'./random_image/채.jpg',
	'./random_image/이준.jpg'
];

function showImage(){
	var randomNum = Math.floor(Math.random() * backgroundImage.length); //이미지 랜덤으로 뽑아냄
	document.getElementById("randomImg").src = backgroundImage[randomNum];
};

