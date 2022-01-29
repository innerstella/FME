const searchInput = document.querySelector("#search-form input");
const searchForm = document.querySelector("#search-form");
const searchArea = document.querySelector('#searchArea');

const HIDDEN_CLASSNAME = "hidden";

function ateezFn(event) {
	event.preventDefault();
	searchForm.classList.add(HIDDEN_CLASSNAME);
	const locationname = searchInput.value;
	localStorage.setItem("locationname", locationname);
	console.log(locationname);
	window.open("https://twitter.com/search?q="
	//장소
	+locationname
    +"%23우리배는_식도로만_가 OR "
    +"%23에이티즈_우리배는_식도로만_가 OR "
    +"%23이게바로_에이티즈의_맛인기라 OR "
    +"%23이타다끼_마쓰 OR "
    +"%23박성화_세입컷챌린지 OR "
    +"%23박성화_너는세입이면먹겠지 OR "
    +"%23박성화_이것좀_먹어보라고_성화 OR "
    +"%23캡틴홍중의_다음_먹적지 OR "
    +"%23김홍_중독될정도로맛있는집 OR "
    +"%23정윤_호불어서먹어 OR "
    +"%23정윤_호텔5성안부럽다 OR "
    +"%23정윤_호텔5성뷔페안부럽다 OR "
    +"%23윤둥아_이거_둥나맛있어 OR "
    +"%23맛이여_상상이상 OR "
    +"%23강여_상당히맛있는집 OR "
    +"%23강여상_치킨말고_이것도_먹어봐 OR "
    +"%23산맛집 OR "
    +"%23산이미식회 OR "
    +"%23여기도_먹어보산 OR "
    +"%23오늘도_잘먹었산 OR "
    +"%23최산을_다해_먹어봐요 OR "
    +"%23송민_기가막힌맛집 OR "
    +"%23맛있게_먹우영 OR "
    +"%23정우영_한입에_먹우영 OR "
    +"%23정우_영원히먹을수있는집 OR "
    +"%23쫑슐랭가이드 OR "
    +"%23찍먹보단쫑먹 OR "
    +"%23최종_호불호없는맛집 OR "
    +"%23최종호_먹어봐_최종보스_맛집 OR "
    +"%23VJ_윤호특공대"
	+"&src=typed_query&f=top");
};


searchForm.addEventListener("submit", ateezFn );