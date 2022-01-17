const searchInput = document.querySelector("#search-form input");
const searchForm = document.querySelector("#search-form");
const searchArea = document.querySelector('#searchArea');

const HIDDEN_CLASSNAME = "hidden";


function onSearchSubmit(event) {
	event.preventDefault();
	searchForm.classList.add(HIDDEN_CLASSNAME);
	const locationname = searchInput.value;
	localStorage.setItem("locationname", locationname);
	console.log(locationname);
	window.open("https://twitter.com/search?q="
	+locationname //장소
	//해시태크
	+"%23박지성_단1g도안줌 OR "
	+"%23강다니엘_염염긋 OR "
	+"%23백현이를_위한_맛집투어 OR "
	+"%23몬베베가_몬베베에게_추천하는_맛집 OR "
	+"%23황제님을위한메뉴판 OR "
	+"%23정우의_원데이씩스밀 OR "
	+"%23제노의_맛그당어 OR "
	+"%23먹어봤도영 OR "
	+"%23채형원_너는세입도못먹겠지 OR "
	+"%23기범아_나혼자먹는거_아니야 OR "
	+"%23여보세요_상연아_나_맛집이야_끊어 OR "
	+"%23상상그이상의_맛집 OR "
	+"%23콥이는_콥빼기로주세요 OR "
	+"%23영훈아_빵빵하게_먹어 OR "
	+"%23재현아_차츰공복이드리울테니"
	+"&src=typed_query&f=top");
}

searchForm.addEventListener("submit", onSearchSubmit);