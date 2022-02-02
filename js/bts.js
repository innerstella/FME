const searchInput = document.querySelector("#search-form input");
const searchForm = document.querySelector("#search-form");
const searchArea = document.querySelector('#searchArea');

const HIDDEN_CLASSNAME = "hidden";

function btsFn(event) {
	event.preventDefault();
	searchForm.classList.add(HIDDEN_CLASSNAME);
	const locationname = searchInput.value;
	localStorage.setItem("locationname", locationname);
	console.log(locationname);
	window.open("https://twitter.com/search?q="
	//장소
	+locationname
    +"%23남준아여기째끼럽 OR "
	+"%23문득생각해석진이가이걸먹어봤을까 OR "
	+"%23머거스트디 OR "
    +"%23야호바너이거먹어봤냐 OR "
	+"%23지민이와_밥밥밥을먹어요 OR "
	+"%23뷔슐랭 OR "
    +"%23정국아_같이먹짱"
	+"&src=typed_query&f=top");
};


searchForm.addEventListener("submit", btsFn );