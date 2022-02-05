const searchInput = document.querySelector("#search-form input");
const searchForm = document.querySelector("#search-form");
const searchArea = document.querySelector('#searchArea');

const HIDDEN_CLASSNAME = "hidden";

function rocketFn(event) {
	event.preventDefault();
	searchForm.classList.add(HIDDEN_CLASSNAME);
	const locationname = searchInput.value;
	localStorage.setItem("locationname", locationname);
	console.log(locationname);
	window.open("https://twitter.com/search?q="
	//장소
	+locationname
    +"%23연히의_냠냐미 OR "
	+"%23여기수윤이자린데오 OR "
	+"%23먹어보시갱 OR "
    +"%23꼬르륵소리 OR "
	+"%23배부르다현"
	+"&src=typed_query&f=top");
};


searchForm.addEventListener("submit", rocketFn );