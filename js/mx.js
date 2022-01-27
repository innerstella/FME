const searchInput = document.querySelector("#search-form input");
const searchForm = document.querySelector("#search-form");
const searchArea = document.querySelector('#searchArea');

const HIDDEN_CLASSNAME = "hidden";

function mxFn(event) {
	event.preventDefault();
	searchForm.classList.add(HIDDEN_CLASSNAME);
	const locationname = searchInput.value;
	localStorage.setItem("locationname", locationname);
	console.log(locationname);
	window.open("https://twitter.com/search?q="
	//장소
	+locationname
    +"%23몬베베가_몬베베에게_추천하는_맛집 OR "
	+"%23셔누_넌이미먹었겠지만또먹어야겠지 OR "
	+"%23민혁_너는이미북마크해놨겠지 OR "
    +"%23기현_너는맘마먹고다시시작하겠지 OR "
	+"%23채형원_너는세입도못먹겠지  OR "
	+"%23주헌_너는한입가득못먹겠지 OR "
    +"%23임창균_너는한끼뚝닭먹겠지"
	+"&src=typed_query&f=top");
};


searchForm.addEventListener("submit", mxFn );