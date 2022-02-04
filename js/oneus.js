const searchInput = document.querySelector("#search-form input");
const searchForm = document.querySelector("#search-form");
const searchArea = document.querySelector('#searchArea');

const HIDDEN_CLASSNAME = "hidden";

function nctFn(event) {
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
	+"%23레이븐이_가봐야할_이쁜_맛집 OR "
	+"%23서호야_호호불어먹어  OR "
	+"%23궈낙아_이거머궈봐 OR "
	+"%23건희를_위한_추천맛집 OR "
	+"%23환웅아이거먹고사람될게 OR "
	+"%23내동주고_사먹은_맛집후기"
	+"&src=typed_query&f=top");
};


searchForm.addEventListener("submit", nctFn );