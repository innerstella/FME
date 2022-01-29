const searchInput = document.querySelector("#search-form input");
const searchForm = document.querySelector("#search-form");
const searchArea = document.querySelector('#searchArea');

const HIDDEN_CLASSNAME = "hidden";

function skzFn(event) {
	event.preventDefault();
	searchForm.classList.add(HIDDEN_CLASSNAME);
	const locationname = searchInput.value;
	localStorage.setItem("locationname", locationname);
	console.log(locationname);
	window.open("https://twitter.com/search?q="
	//장소
	+locationname
    +"%23여기맛있승민 OR "
    +"%23크리스_배고파용 OR "
    +"%23리노는_배고파 OR "
    +"%23창빈이는_안보겠지ㅠ OR "
    +"%23현이도_먹어봐 OR "
    +"%23한이의한입거리 OR "
    +"%23이_식당은_진심으로_하늘이에요 OR "
    +"%23현이도_먹어봐 OR "
    +"%23쏟아지는_맛집 OR "
    +"%23비니의맛집_마시쪄마시쪄"
	+"&src=typed_query&f=top");
};


searchForm.addEventListener("submit", skzFn );