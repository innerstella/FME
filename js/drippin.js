const searchInput = document.querySelector("#search-form input");
const searchForm = document.querySelector("#search-form");
const searchArea = document.querySelector('#searchArea');

const HIDDEN_CLASSNAME = "hidden";

function drippinFn(event) {
	event.preventDefault();
	searchForm.classList.add(HIDDEN_CLASSNAME);
	const locationname = searchInput.value;
	localStorage.setItem("locationname", locationname);
	console.log(locationname);
	window.open("https://twitter.com/search?q="
	//장소
	+locationname
    +"%23협아_이_디저트꼭먹어봐 OR "
	+"%23윤성아_혼자_먹기_아까워 OR "
	+"%23주창욱_넌_안먹어봤겠지 OR "
    +"%23동윤아_맛집은_안중요한가 OR "
	+"%23민서가_쏠테니_많이먹어 OR "
	+"%23집중집중_준호_맘마타임 OR "
    +"%23준호야_맛있는_거_먹으러_가차 OR "
    +"%23렉스에게_가장_잘맞는_맛집은"
	+"&src=typed_query&f=top");
};


searchForm.addEventListener("submit", drippinFn );