const searchInput = document.querySelector("#search-form input");
const searchForm = document.querySelector("#search-form");
const searchArea = document.querySelector('#searchArea');

const HIDDEN_CLASSNAME = "hidden";

function miraeFn(event) {
	event.preventDefault();
	searchForm.classList.add(HIDDEN_CLASSNAME);
	const locationname = searchInput.value;
	localStorage.setItem("locationname", locationname);
	console.log(locationname);
	window.open("https://twitter.com/search?q="
	//장소
	+locationname
    +"%23어_리안이가_리안이가 OR "
    +"%23미래에_갔다왔는데_맛집_돼_있던_맛집 OR "
    +"%23도도의_맛집여행 OR "
    +"%23카엘아_여기야 OR "
    +"%23동표야_넌이거못먹지 OR "
    +"%23시영이가_생각나면_올릴게요 OR "
    +"%23장유빈_멋있고_귀여운_막내온탑"
	+"&src=typed_query&f=top");
};


searchForm.addEventListener("submit", miraeFn );