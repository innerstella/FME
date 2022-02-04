const searchInput = document.querySelector("#search-form input");
const searchForm = document.querySelector("#search-form");
const searchArea = document.querySelector('#searchArea');

const HIDDEN_CLASSNAME = "hidden";

function oneweFn(event) {
	event.preventDefault();
	searchForm.classList.add(HIDDEN_CLASSNAME);
	const locationname = searchInput.value;
	localStorage.setItem("locationname", locationname);
	console.log(locationname);
	window.open("https://twitter.com/search?q="
	//장소
	+locationname
	+"%23용훈이_얼굴만큼_기대하고가도되는곳 OR "
	+"%23강건너_현구맛집 OR "
	+"%23하린아_자셔봐 OR "
	+"%23동명이_배고파  OR "
	+"%23기욱이의_볼주머니_저장창고"
	+"&src=typed_query&f=top");
};


searchForm.addEventListener("submit", oneweFn );