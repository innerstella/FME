const searchInput = document.querySelector("#search-form input");
const searchForm = document.querySelector("#search-form");
const searchArea = document.querySelector('#searchArea');

const HIDDEN_CLASSNAME = "hidden";

function nctdreamFn(event) {
	event.preventDefault();
	searchForm.classList.add(HIDDEN_CLASSNAME);
	const locationname = searchInput.value;
	localStorage.setItem("locationname", locationname);
	console.log(locationname);
	window.open("https://twitter.com/search?q="
	//장소
	+locationname
	//해시태그

	//위너
	+"%23마크한테만공개 OR "
	+"%23런쥔이의_맛집내비게이션  OR "
	+"%23런쥔이_밥무거쒀 OR "
	+"%23제노의_맛그당어 OR "
	+"%23먹다가_해찬이_생각이나신거에요 OR "
	+"%23확신해찬맛집 OR "
	+"%23나나의_맛집탐방기 OR "
	+"%23재민아_밥먹어 OR "
	+"%23나나챌린지 OR "
	+"%23천러야_이거_먹기좋아 OR "
	+"%23박지성_단1g도안줌 OR "
	+"%23튼튼하게_먹지성"
	+"&src=typed_query&f=top");
};


searchForm.addEventListener("submit", nctdreamFn );