const searchInput = document.querySelector("#search-form input");
const searchForm = document.querySelector("#search-form");
const searchArea = document.querySelector('#searchArea');

const HIDDEN_CLASSNAME = "hidden";

function cravityFn(event) {
	event.preventDefault();
	searchForm.classList.add(HIDDEN_CLASSNAME);
	const locationname = searchInput.value;
	localStorage.setItem("locationname", locationname);
	console.log(locationname);
	window.open("https://twitter.com/search?q="
	//장소
	+locationname
    +"%23크래비티_무뿌식뿌 OR "
	+"%23나_한입_세림이_세입 OR "
	+"%23앨런아_맛집으로_지금_당장_런 OR "
    +"%23정모야_맛집_뒤집자 OR "
	+"%23우빈아_데굴데굴_냠 OR "
	+"%23원진아_함번만_먹어봐 OR "
	+"%23미니미니미니_강쥐는먹으면안돼용 OR "
	+"%23형준아_내랑_밥물래 OR "
    +"%23태영이도_맛집_태워가영 OR "
	+"%23성민이_입에_안성맞춤"

	+"&src=typed_query&f=top");
};


searchForm.addEventListener("submit", cravityFn );