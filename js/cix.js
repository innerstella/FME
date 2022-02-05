const searchInput = document.querySelector("#search-form input");
const searchForm = document.querySelector("#search-form");
const searchArea = document.querySelector('#searchArea');

const HIDDEN_CLASSNAME = "hidden";

function svtFn(event) {
	event.preventDefault();
	searchForm.classList.add(HIDDEN_CLASSNAME);
	const locationname = searchInput.value;
	localStorage.setItem("locationname", locationname);
	console.log(locationname);
	window.open("https://twitter.com/search?q="
	//장소
	+locationname
    +"%23곤_만나서_먹자 OR "
	+"%23병곤아_이거_곤나맛있어 OR "
	+"%23승훙이도_훙입만 OR "
    +"%23먹어보세용_희희 OR "
	+"%23아강이_냐미냐미 OR "
	+"%23현석아_이거_머거바니 OR "
	+"%23서기의_메뉴판"
	+"&src=typed_query&f=top");
};


searchForm.addEventListener("submit", svtFn );