/*const searchInput = document.querySelector("#search-form input");
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

function winnerFtn(event) {
	event.preventDefault();
	searchForm.classList.add(HIDDEN_CLASSNAME);
	const locationname = searchInput.value;
	localStorage.setItem("locationname", locationname);
	console.log(locationname);
	window.open("https://twitter.com/search?q="
	//장소
	+locationname
	//위너
	+"%23위EAT_인EAT OR "
	+"%23승윤이의_맛집_PAGE OR "
	+"%23이맛집_찐받네 OR "
	+"%23마이노_마이무 OR "
	+"%23훈슐랭_여기도가봤니"
	+"&src=typed_query&f=top");
};
/*
function searchByGroup(event) {
	event.preventDefault();
	searchForm.classList.add(HIDDEN_CLASSNAME);
	const locationname = searchInput.value;
	localStorage.setItem("locationname", locationname);
	console.log(locationname);

    var winner = document.getElementById('winner');

	window.open("https://twitter.com/search?q="
	+locationname
	+"%23정한아_마니머거여ㅎㅎ OR "
	+"%23조슈아_먹어보슈아 OR "
	+"%23순영아_이거_맛있어 OR "
	+"%23원우야_여기_테이스티 OR "
	+"%23도겸이도_도아할_맛집"
	+"&src=typed_query&f=top");
};
*/

searchForm.addEventListener("submit", winnerFtn);