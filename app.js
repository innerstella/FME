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
	+"%23먹어봤도영"
	+"&src=typed_query&f=top");
}

//링크 만들기

searchForm.addEventListener("submit", onSearchSubmit);

//window.open('https://twitter.com/search?q=망원%23승연아_우즈야_여기야OR%23강다니엘_염염긋&src=typed_query&f=top');