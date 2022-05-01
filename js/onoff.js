const searchInput = document.querySelector("#search-form input");
const searchForm = document.querySelector("#search-form");
const searchArea = document.querySelector('#searchArea');

const HIDDEN_CLASSNAME = "hidden";

function onoffFn(event) {
	event.preventDefault();
	searchForm.classList.add(HIDDEN_CLASSNAME);
	const locationname = searchInput.value;
	localStorage.setItem("locationname", locationname);
	console.log(locationname);
	window.open("https://twitter.com/search?q="
	//장소
	+locationname
    +"%23효진이는_앞으로도_꾸준히먹자 OR "
	+"%23효지나마이크내리고젓가락들어 OR "
	+"%23이션같이찌자 OR "
    +"%23이승준먹방대결 OR "
	+"%23어스_맛집_여기있으 OR "
	+"%23엇대먹 OR "
	+"%23맛있게먹었 OR "
	+"%23수박민균 OR "
	+"%23민균이를위한야미푸드 OR "
	+"%23유토와_같이먹자 OR "
	+"%23맛집소개해줄게Ü OR "
	+"%23온앤오프_같이먹자 OR "
	+"%23온앤오프_짱먹자"
	+"&src=typed_query&f=top");
};


searchForm.addEventListener("submit", onoffFn );