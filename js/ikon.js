const searchInput = document.querySelector("#search-form input");
const searchForm = document.querySelector("#search-form");
const searchArea = document.querySelector('#searchArea');

const HIDDEN_CLASSNAME = "hidden";

function ikonFn(event) {
	event.preventDefault();
	searchForm.classList.add(HIDDEN_CLASSNAME);
	const locationname = searchInput.value;
	localStorage.setItem("locationname", locationname);
	console.log(locationname);
	window.open("https://twitter.com/search?q="
	//장소
	+locationname

	+"%23이식당놓쳐서후회한다면후회한시간을후회할거잖아후회하기싫음후회할일들을후회하기전에_이거먹어봐 OR "
	+"%23지나니_이거맛나니 OR "
	+"%23바비야밥이왔어요 OR "
	+"%23윤형아_여기맛집이햫 OR "
    +"%23준회야_여기밥많이주내 OR "
	+"%23찬우야여기맛집이_왔쨔뇨 OR "
	+"%23김동동_일단밥부터먹혁"
	+"&src=typed_query&f=top");
};


searchForm.addEventListener("submit", ikonFn );