const searchInput = document.querySelector("#search-form input");
const searchForm = document.querySelector("#search-form");
const searchArea = document.querySelector('#searchArea');

const HIDDEN_CLASSNAME = "hidden";

function got7Fn(event) {
	event.preventDefault();
	searchForm.classList.add(HIDDEN_CLASSNAME);
	const locationname = searchInput.value;
	localStorage.setItem("locationname", locationname);
	console.log(locationname);
	window.open("https://twitter.com/search?q="
	//장소
	+locationname

	+"%23뱀맛집 OR "
	+"%23배무맛집 OR "
	+"%23퉤이스티로드 OR "
	+"%23왕잭슨_여기_왕맛있다 OR "
	+"%23냠긔탱긔"
	+"&src=typed_query&f=top");
};


searchForm.addEventListener("submit", got7Fn );