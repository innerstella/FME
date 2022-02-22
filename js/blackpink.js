const searchInput = document.querySelector("#search-form input");
const searchForm = document.querySelector("#search-form");
const searchArea = document.querySelector('#searchArea');

const HIDDEN_CLASSNAME = "hidden";

function blackpinkFn(event) {
	event.preventDefault();
	searchForm.classList.add(HIDDEN_CLASSNAME);
	const locationname = searchInput.value;
	localStorage.setItem("locationname", locationname);
	console.log(locationname);
	window.open("https://twitter.com/search?q="
	//장소
	+locationname

	+"%23블랙핑크_맛집사거리 OR "
	+"%23제니야_여기젠나마싯다 OR "
    +"%23채영아_눈물나는맛이야 OR "
    +"%23지수야_여기츄라이츄라이 OR "
    +"%23리사에게_가장맛난걸로줘"
	+"&src=typed_query&f=top");
};


searchForm.addEventListener("submit", blackpinkFn );