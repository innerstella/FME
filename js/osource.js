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
	
	+locationname
    +"%23오소스_소스에_찍어_먹어 OR "
	+"%23알리오소스_아니고_저스트_오소스"
	+"&src=typed_query&f=top");
};


searchForm.addEventListener("submit", svtFn );