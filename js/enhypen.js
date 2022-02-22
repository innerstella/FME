const searchInput = document.querySelector("#search-form input");
const searchForm = document.querySelector("#search-form");
const searchArea = document.querySelector('#searchArea');

const HIDDEN_CLASSNAME = "hidden";

function enhypenFn(event) {
	event.preventDefault();
	searchForm.classList.add(HIDDEN_CLASSNAME);
	const locationname = searchInput.value;
	localStorage.setItem("locationname", locationname);
	console.log(locationname);
	window.open("https://twitter.com/search?q="
	//장소
	+locationname
    +"%23엔진예절 OR "
	+"%23엔진이_커넥해주는_맛집 OR "
	+"%23가든_맛집 #가든맛집 OR "
    +"%23정원이_볼살로_레쭈고 OR "
	+"%23맛있떠_누가만들었어이거 OR "
	+"%23정원이의_식사랜드 OR "
    +"%23당연함_이희승이먹어야함 OR "
	+"%23희승아_라면말고_이건어때 OR "
    +"%23오늘의_제이 OR "
    +"%23맛집_기대해주셔도_감사합니다 OR "
    +"%23재윤이에게_메뉴추천 OR "
    +"%23제이크_요기요 OR "
    +"%23성훈이_입속으로_트리플악셀 OR "
    +"%23선우도_가고싶어하는_맛집 OR "
    +"%23선우야_이것도_맛있을거예요 OR "
    +"%23니시무라_마니무라"
	+"&src=typed_query&f=top");
};


searchForm.addEventListener("submit", enhypenFn );