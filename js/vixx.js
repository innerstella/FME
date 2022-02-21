const searchInput = document.querySelector("#search-form input");
const searchForm = document.querySelector("#search-form");
const searchArea = document.querySelector('#searchArea');

const HIDDEN_CLASSNAME = "hidden";

function vixxFn(event) {
	event.preventDefault();
	searchForm.classList.add(HIDDEN_CLASSNAME);
	const locationname = searchInput.value;
	localStorage.setItem("locationname", locationname);
	console.log(locationname);
	window.open("https://twitter.com/search?q="
	//장소
	+locationname

	+"%23택운이를_위한_뮤슐랭가이드 OR "
	+"%23쟌이뭐먹어"
	+"&src=typed_query&f=top");
};


searchForm.addEventListener("submit", vixxFn );