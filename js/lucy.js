const searchInput = document.querySelector("#search-form input");
const searchForm = document.querySelector("#search-form");
const searchArea = document.querySelector('#searchArea');

const HIDDEN_CLASSNAME = "hidden";

function lucyFn(event) {
	event.preventDefault();
	searchForm.classList.add(HIDDEN_CLASSNAME);
	const locationname = searchInput.value;
	localStorage.setItem("locationname", locationname);
	console.log(locationname);
	window.open("https://twitter.com/search?q="
	//장소
	+locationname
    +"%23이게내마지막밥이라고 OR "
	+"%23너에게내밥상을줄게 OR "
	+"%23상엽아_다람쥐는_이거_못먹겠지 OR "
    +"%23예찬이짱짱맨 OR "
	+"%23원상아_여기_알라빙빙"
	+"&src=typed_query&f=top");
};


searchForm.addEventListener("submit", lucyFn );