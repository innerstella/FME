const searchInput = document.querySelector("#search-form input");
const searchForm = document.querySelector("#search-form");
const searchArea = document.querySelector('#searchArea');

const HIDDEN_CLASSNAME = "hidden";

function veryveryFn(event) {
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
	+"%23허나아_밥먹자 OR "
	+"%23호영씨_아아아아 OR "
	+"%23민찬아_만찬이야 OR "
	+"%23계현보장맛집 OR "
	+"%23여노야_밥은_먹고_다니니 OR "
	+"%23용왕님_기미상궁_마쳤어용승 OR "
    +"%23kcal_플랙스"
	+"&src=typed_query&f=top");
};


searchForm.addEventListener("submit", veryveryFn );