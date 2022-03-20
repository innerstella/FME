const searchInput = document.querySelector("#search-form input");
const searchForm = document.querySelector("#search-form");
const searchArea = document.querySelector('#searchArea');

const HIDDEN_CLASSNAME = "hidden";

function btobFn(event) {
	event.preventDefault();
	searchForm.classList.add(HIDDEN_CLASSNAME);
	const locationname = searchInput.value;
	localStorage.setItem("locationname", locationname);
	console.log(locationname);
	window.open("https://twitter.com/search?q="
	//장소
	+locationname
	+"%23은광아_이거_누룽지백숙만큼_맛있어 OR "
	+"%23여기_도토리 OR "
	+"%23창섭아_맛집어디있는지알게됐됬됐됬됐다 OR "
	+"%23현식적인맛집추천 OR "
    +"%23이거맛있뎨"
	+"&src=typed_query&f=top");
};


searchForm.addEventListener("submit", btobFn );