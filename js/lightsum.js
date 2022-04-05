const searchInput = document.querySelector("#search-form input");
const searchForm = document.querySelector("#search-form");
const searchArea = document.querySelector('#searchArea');

const HIDDEN_CLASSNAME = "hidden";

function lightFn(event) {
	event.preventDefault();
	searchForm.classList.add(HIDDEN_CLASSNAME);
	const locationname = searchInput.value;
	localStorage.setItem("locationname", locationname);
	console.log(locationname);
	window.open("https://twitter.com/search?q="
	//장소
	+locationname
    +"%23상아야_여기_맛집_맞지 OR "
	+"%23초원아_이거먹을래 OR "
	+"%23나영이랑_더_빠르게_맛집_찾아볼래요 OR "
    +"%23밥먹었나영 OR "
    +"%23히나짱의_맛있는_집 OR "
    +"%23히나모롤의_추천맛집 OR "
    +"%23쭈대장과_함께 OR "
    +"%23유정이가_좋아하는_맛집_좀_추천해줄래 OR "
    +"%23휘연이와_함께하고싶은_곳 OR "
    +"%23지냥이_배고파"

	+"&src=typed_query&f=top");
};


searchForm.addEventListener("submit", lightFn );