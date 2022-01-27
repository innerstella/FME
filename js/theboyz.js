const searchInput = document.querySelector("#search-form input");
const searchForm = document.querySelector("#search-form");
const searchArea = document.querySelector('#searchArea');

const HIDDEN_CLASSNAME = "hidden";

function theboyzFn(event) {
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
	+"%23맛있겠짛_주연앟 OR "
	+"%23이주연_난늘배고파_베베 OR "
	+"%23이재현_치킨이다가아니야 OR "
	+"%23어이어이_이재현_여기다 OR "
	+"%23영훈아_밥좀많이먹어라 OR "
    +"%23영훈아_빵빵하게_먹어"
	+"&src=typed_query&f=top");
};


searchForm.addEventListener("submit", theboyzFn );