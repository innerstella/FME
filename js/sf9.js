const searchInput = document.querySelector("#search-form input");
const searchForm = document.querySelector("#search-form");
const searchArea = document.querySelector('#searchArea');

const HIDDEN_CLASSNAME = "hidden";

function sf9Fn(event) {
	event.preventDefault();
	searchForm.classList.add(HIDDEN_CLASSNAME);
	const locationname = searchInput.value;
	localStorage.setItem("locationname", locationname);
	console.log(locationname);
	window.open("https://twitter.com/search?q="
	//장소
	+locationname
	+"%23인성아나이거오분순삭 OR "
	+"%23영균아_뭐라도_먹어봐 OR "
	+"%23저는잘먹을수있어요 OR "
	+"%23얘두다나이거먹음 OR "
	+"%23김석우_입으로_떼구르르 OR "
	+"%23옴뇸뇸소리안나요 OR "
	+"%23태양아_이거어때_난좋은데 OR "
	+"%23함께먹어주호 OR "
	+"%23영빈아왜먹질못하니"
	+"&src=typed_query&f=top");
};


searchForm.addEventListener("submit", sf9Fn );