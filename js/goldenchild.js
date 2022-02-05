const searchInput = document.querySelector("#search-form input");
const searchForm = document.querySelector("#search-form");
const searchArea = document.querySelector('#searchArea');

const HIDDEN_CLASSNAME = "hidden";

function goldenFn(event) {
	event.preventDefault();
	searchForm.classList.add(HIDDEN_CLASSNAME);
	const locationname = searchInput.value;
	localStorage.setItem("locationname", locationname);
	console.log(locationname);
	window.open("https://twitter.com/search?q="
	//장소
	+locationname
    +"%23대열아_여기가맛있대열 OR "
	+"%23와이_렇게맛있을수가 OR "
	+"%23장준아나중에밥이나한끼하자 OR "
    +"%23태그야_맛집해시태그야 OR "
	+"%23승민아_여기_z지존킬z OR "
	+"%23봉재현_이건_먹겠지 OR "
	+"%23지범_맛집다녀오겠습니다 OR "
    +"%23주찬아_쫓겨나기전까지만먹자 OR "
    +"%23주찬_넌이미여기서쫓겨났겠지 OR "
    +"%23동동맛집센터 OR "
	+"%23보민아_여기가극락인가봄 OR "
    +"%23Y가_최고로_모시는_맛집"
	+"&src=typed_query&f=top");
};


searchForm.addEventListener("submit", goldenFn );