const searchInput = document.querySelector("#search-form input");
const searchForm = document.querySelector("#search-form");
const searchArea = document.querySelector('#searchArea');

const HIDDEN_CLASSNAME = "hidden";

function treasureFn(event) {
	event.preventDefault();
	searchForm.classList.add(HIDDEN_CLASSNAME);
	const locationname = searchInput.value;
	localStorage.setItem("locationname", locationname);
	console.log(locationname);
	window.open("https://twitter.com/search?q="
	//장소
	+locationname
	+"%23현석이_입맛이에 OR "
	+"%23지훈아_여기가봐라 OR "
	+"%23욧집 OR "
	+"%23준규_메롱 OR "
    +"%23마시호_여기가보시호 OR "
    +"%23재혁아_바나나우유말고_이것도먹어봐 OR "
    +"%23사히맛집태그언제생겨 OR "
    +"%23예담아_담아놔 OR "
    +"%23이야아마시따아도영아 OR "
    +"%23정우야_여기_먹으러_꼭와 OR "
    +"%23라마x3 OR "
	+"%23정환아_여기맛있소"
	+"&src=typed_query&f=top");
};


searchForm.addEventListener("submit", treasureFn );