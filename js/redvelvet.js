const searchInput = document.querySelector("#search-form input");
const searchForm = document.querySelector("#search-form");
const searchArea = document.querySelector('#searchArea');

const HIDDEN_CLASSNAME = "hidden";

function redvelvetFn(event) {
	event.preventDefault();
	searchForm.classList.add(HIDDEN_CLASSNAME);
	const locationname = searchInput.value;
	localStorage.setItem("locationname", locationname);
	console.log(locationname);
	window.open("https://twitter.com/search?q="
	//장소
	+locationname
    +"%23주현아맛있겠찌 OR "
	+"%23슬슐랭가이드 OR "
	+"%23오늘은웬디여기 OR "
    +"%23수영아아줌마들잘먹지 OR "
	+"%23누가_날_맛집으로_땡긴다악"
	+"&src=typed_query&f=top");
};


searchForm.addEventListener("submit", redvelvetFn );