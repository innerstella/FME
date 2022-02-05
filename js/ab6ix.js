const searchInput = document.querySelector("#search-form input");
const searchForm = document.querySelector("#search-form");
const searchArea = document.querySelector('#searchArea');

const HIDDEN_CLASSNAME = "hidden";

function ab6ixFn(event) {
	event.preventDefault();
	searchForm.classList.add(HIDDEN_CLASSNAME);
	const locationname = searchInput.value;
	localStorage.setItem("locationname", locationname);
	console.log(locationname);
	window.open("https://twitter.com/search?q="
	//장소
	+locationname
    +"%23웅이가_맛보면_좋겠웅 OR "
	+"%23우진아_맛집_추천_별거아냐 OR "
	+"%23동현이를_위한_대동맛지도 OR "
    +"%23대휘가_먹으면_아맛나"
	+"&src=typed_query&f=top");
};


searchForm.addEventListener("submit", ab6ixFn );