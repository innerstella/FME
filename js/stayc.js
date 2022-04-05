const searchInput = document.querySelector("#search-form input");
const searchForm = document.querySelector("#search-form");
const searchArea = document.querySelector('#searchArea');

const HIDDEN_CLASSNAME = "hidden";

function staycFn(event) {
	event.preventDefault();
	searchForm.classList.add(HIDDEN_CLASSNAME);
	const locationname = searchInput.value;
	localStorage.setItem("locationname", locationname);
	console.log(locationname);
	window.open("https://twitter.com/search?q="
	//장소
	+locationname
    +"%23수민아이거먹어 OR "
    +"%23수민아_이거먹어 OR "
    +"%23시은이의꿀맛보장 OR "
    +"%23아이사장님뭘좀아네 OR "
    +"%23맛집이세은 OR "
    +"%23맛집이윤 OR "
    +"%23재이야여기짱맛있어"
	+"&src=typed_query&f=top");
};


searchForm.addEventListener("submit", staycFn );