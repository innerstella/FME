const searchInput = document.querySelector("#search-form input");
const searchForm = document.querySelector("#search-form");
const searchArea = document.querySelector('#searchArea');

const HIDDEN_CLASSNAME = "hidden";

function aespaFn(event) {
	event.preventDefault();
	searchForm.classList.add(HIDDEN_CLASSNAME);
	const locationname = searchInput.value;
	localStorage.setItem("locationname", locationname);
	console.log(locationname);
	window.open("https://twitter.com/search?q="
	//장소
	+locationname
	+"%23지젤아밥무라 OR "
	+"%23윈터의_맛집을_입력해주세요 OR "
	+"%23닝닝이랑같이먹고싶은거 OR "
	+"%23이맛집은신이에요"
	+"&src=typed_query&f=top");
};


searchForm.addEventListener("submit", aespaFn );