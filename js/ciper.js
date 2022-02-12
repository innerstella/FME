const searchInput = document.querySelector("#search-form input");
const searchForm = document.querySelector("#search-form");
const searchArea = document.querySelector('#searchArea');

const HIDDEN_CLASSNAME = "hidden";

function ciperFn(event) {
	event.preventDefault();
	searchForm.classList.add(HIDDEN_CLASSNAME);
	const locationname = searchInput.value;
	localStorage.setItem("locationname", locationname);
	console.log(locationname);
	window.open("https://twitter.com/search?q="
	//장소
	+locationname

	+"%23병근한입 OR "
	+"%23휘랑둥_여긴가야해 OR "
	+"%23석원이도냠냠 OR "
	+"%23이타_다끼마스 OR "
	+"%23편식쟁이_원이_먹어봐 OR "
	+"%23현빈아_난_먹어봤지롱 OR "
	+"%23도환아_여기와서_먹어봐 OR "
	+"%23맛집을_태그"
	+"&src=typed_query&f=top");
};


searchForm.addEventListener("submit", ciperFn );