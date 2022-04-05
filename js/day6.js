const searchInput = document.querySelector("#search-form input");
const searchForm = document.querySelector("#search-form");
const searchArea = document.querySelector('#searchArea');

const HIDDEN_CLASSNAME = "hidden";

function day6Fn(event) {
	event.preventDefault();
	searchForm.classList.add(HIDDEN_CLASSNAME);
	const locationname = searchInput.value;
	localStorage.setItem("locationname", locationname);
	console.log(locationname);
	window.open("https://twitter.com/search?q="
	//장소
	+locationname
    +"%23나는_너의_밥선생 OR "
	+"%23영현아_여기서도_7인분_어때 OR "
	+"%23나나나나_원필이가_먹을래 OR "
    +"%23도운이_밥묵엇슴까"
	+"&src=typed_query&f=top");
};


searchForm.addEventListener("submit", day6Fn );