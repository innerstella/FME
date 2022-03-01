const searchInput = document.querySelector("#search-form input");
const searchForm = document.querySelector("#search-form");
const searchArea = document.querySelector('#searchArea');

const HIDDEN_CLASSNAME = "hidden";

function txtFn(event) {
	event.preventDefault();
	searchForm.classList.add(HIDDEN_CLASSNAME);
	const locationname = searchInput.value;
	localStorage.setItem("locationname", locationname);
	console.log(locationname);
	window.open("https://twitter.com/search?q="
	//장소
	+locationname
    +"%23최연준_맛집1등어디야 OR "
	+"%23연도먹_연준이도먹어 OR "
	+"%23수빈아_먹어봐_마수리수리 OR "
    +"%23범규야_제발_한입만_먹어봐 OR "
	+"%23태현아_한번_맛볼테리 OR "
	+"%23태현이의_소식먹방 OR "
    +"%23강이사님_드셔보세요 OR "
	+"%23휴닝이는_맛있는거_먹고심분딩 OR "
    +"%23투모로우바이투게더_먹어봐"
	+"&src=typed_query&f=top");
};


searchForm.addEventListener("submit", txtFn );