const searchInput = document.querySelector("#search-form input");
const searchForm = document.querySelector("#search-form");
const searchArea = document.querySelector('#searchArea');

const HIDDEN_CLASSNAME = "hidden";

function svtFn(event) {
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
	+"%23훈슐랭_여기도가봤니"
	+"&src=typed_query&f=top");
};


searchForm.addEventListener("submit", svtFn );