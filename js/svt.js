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
    +"%23승철이_이거먹고_볼빵빵했꾸마 OR "
	+"%23정한아_마니머거여ㅎㅎ OR "
	+"%23조슈아_먹어보슈아 OR "
    +"%23아니예요_준휘는_먹을거예요 OR "
	+"%23순영아_이거_맛있어 OR "
	+"%23원우야_여기_테이스티 OR "
    +"%23밍하오야_여기_헌하오츠 OR "
    +"%23THE_ATE OR "
    +"%23민규라고치고_디너쇼해도돼 OR "
	+"%23도겸이도_도아할_맛집 OR "
    +"%23믿고먹어boo세요 OR "
    +"%23버논아_혹시여긴_맛집 OR "
    +"%23라즈지 OR "
    +"%23디노야_여기_케이밥의_미래"
	+"&src=typed_query&f=top");
};


searchForm.addEventListener("submit", svtFn );