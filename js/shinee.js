const searchInput = document.querySelector("#search-form input");
const searchForm = document.querySelector("#search-form");
const searchArea = document.querySelector('#searchArea');

const HIDDEN_CLASSNAME = "hidden";

function shineeFn(event) {
	event.preventDefault();
	searchForm.classList.add(HIDDEN_CLASSNAME);
	const locationname = searchInput.value;
	localStorage.setItem("locationname", locationname);
	console.log(locationname);
	window.open("https://twitter.com/search?q="
	//장소
	+locationname
	+"%23기범아_나혼자먹는거_아니야 OR "
	+"%23종현아_우린_대왕쁘띠가될거야 OR "
	+"%23민호야_식단관리_이겨내 OR "
	+"%23태민_DO_EAT_BABY OR "
	+"%23찡기야_맛있겠찡 OR "
	+"%23릴프릭이_함냐함냐함"
	+"&src=typed_query&f=top");
};


searchForm.addEventListener("submit", shineeFn );