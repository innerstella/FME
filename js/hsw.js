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
    +"%23하성운_오늘_꼭_먹어봐 OR "
	+"%23성운아_식하하세요"
	+"&src=typed_query&f=top");
};


searchForm.addEventListener("submit", svtFn );