const searchInput = document.querySelector("#search-form input");
const searchForm = document.querySelector("#search-form");
const searchArea = document.querySelector('#searchArea');

const HIDDEN_CLASSNAME = "hidden";

function exoFn(event) {
	event.preventDefault();
	searchForm.classList.add(HIDDEN_CLASSNAME);
	const locationname = searchInput.value;
	localStorage.setItem("locationname", locationname);
	console.log(locationname);
	window.open("https://twitter.com/search?q="
	//장소
	+locationname
    +"%23민석아금강산도식후경 OR "
	+"%23민석아_여기가_맛집이슈 OR "
	+"%23민석이를_위한_빵집투어 OR "
    +"%23민석이를_위한_카페투어 OR "
	+"%23준면아_여기_준맛탱 OR "
	+"%23백현이를_위한_맛집투어 OR "
	+"%23백현아_먹짱일기_적짱 OR "
    +"%23경수야_여기가_맛집이디오 OR "
    +"%23됴슐랭 OR "
    +"%23경수야_먹어됴 OR "
	+"%23종인아_잘먹을게 OR "
    +"%23맛집_추천해주세훈 OR "
    +"%23세훈아_이거봐라_맛있겠지 OR "
    +"%23드셔보세훈 OR "
    +"%23세훈이_세입먹을때_세프는_세그릇째 OR "
    +"%23세훈아_순댓국_말고_이거"
	+"&src=typed_query&f=top");
};


searchForm.addEventListener("submit", exoFn );