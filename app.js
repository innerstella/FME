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
	'./random_image/휘영.jpg'
];

function showImage(){
	var randomNum = Math.floor(Math.random() * backgroundImage.length); //이미지 랜덤으로 뽑아냄
	document.getElementById("randomImg").src = backgroundImage[randomNum];
};

function onSearchSubmit(event) {
	event.preventDefault();
	searchForm.classList.add(HIDDEN_CLASSNAME);
	const locationname = searchInput.value;
	localStorage.setItem("locationname", locationname);
	console.log(locationname);
	window.open("https://twitter.com/search?q="
	//장소
	+locationname
	//해시태그

	//위너
	+"%23위EAT_인EAT OR "
	+"%23승윤이의_맛집_PAGE OR "
	+"%23이맛집_찐받네 OR "
	+"%23마이노_마이무 OR "
	+"%23훈슐랭_여기도가봤니 OR "
	//nct
	+"%23박지성_단1g도안줌 OR "
	+"%23제노의_맛그당어 OR "
	+"%23나나의_맛집탐방기 OR "
	+"%23정우의_원데이씩스밀 OR "

	//세븐틴
	+"%23정한아_마니머거여ㅎㅎ OR "
	+"%23조슈아_먹어보슈아 OR "
	+"%23순영아_이거_맛있어 OR "
	+"%23원우야_여기_테이스티 OR "
	+"%23도겸이도_도아할_맛집 OR "

	//엑소
	+"%23백현이를_위한_맛집투어 OR "

	//몬스타엑스
	+"%23몬베베가_몬베베에게_추천하는_맛집 OR "
	+"%23채형원_너는세입도못먹겠지 OR "

	//방탄
	+"%23지민이와_밥밥밥을먹어요 OR "
	+"%23정국아_같이먹짱 OR "
	+"%23머거스트디 OR "
	+"%23뷔슐랭 OR "

	//샤이니
	+"%23기범아_나혼자먹는거_아니야 OR "
	+"%23릴프릭이_함냐함냐함 OR "

	//더보이즈
	+"%23김선우_맛있는걸내가놔둘리가 OR "
	+"%23ㄷㅂㅇㅈ OR "

	//온앤오프
	+"%23이션같이찌자 OR "
	+"%23효진이는_앞으로도_꾸준히먹자 OR "

	//에이티즈
	+"%23에이티즈_우리배는_식도로만_가 OR "

	//기타
	+"%23강다니엘_염염긋 OR "
	+"%23우석아_맛집으로_우따따따 OR "
	+"%23승연아_우즈야_여기야 OR "
	+"%23황제님을위한메뉴판 OR "
	+"📍"
	+"&src=typed_query&f=top");
}


searchForm.addEventListener("submit", onSearchSubmit);