const searchInput = document.querySelector("#search-form input");
const searchForm = document.querySelector("#search-form");
const searchArea = document.querySelector('#searchArea');

const HIDDEN_CLASSNAME = "hidden";

function gfFn(event) {
	event.preventDefault();
	searchForm.classList.add(HIDDEN_CLASSNAME);
	const locationname = searchInput.value;
	localStorage.setItem("locationname", locationname);
	console.log(locationname);
	window.open("https://twitter.com/search?q="
	//장소
	+locationname
    +"%23소원아여기가거기야 OR "
	+"%23맛린집 OR "
	+"%23은하에게_강추 OR "
    +"%23유주라잌썸띵투잍 OR "
	+"%23맛이신비해 OR "
	+"%23무지야여기무지맛있어"
	+"&src=typed_query&f=top");
};


searchForm.addEventListener("submit", gfFn );