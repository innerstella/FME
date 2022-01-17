const searchInput = document.querySelector("#search-form input");
const searchForm = document.querySelector("#search-form");
const searchArea = document.querySelector('#searchArea');

const HIDDEN_CLASSNAME = "hidden";


function onSearchSubmit(event) {
	event.preventDefault();
	searchForm.classList.add(HIDDEN_CLASSNAME);
	const locationname = searchInput.value;
	localStorage.setItem("locationname", locationname);
	console.log(locationname);
	window.open("https://twitter.com/search?q="
	+locationname //장소
	//해시태크
	+"%23박지성_단1g도안줌 OR "
	+"%23강다니엘_염염긋 OR "
	+"%23백현이를_위한_맛집투어 OR "
	+"%23몬베베가_몬베베에게_추천하는_맛집 OR "
	+"%23황제님을위한메뉴판 OR "
	+"%23정우의_원데이씩스밀 OR "
	+"%23제노의_맛그당어 OR "
	+"%23먹어봤도영 OR "
	+"%23채형원_너는세입도못먹겠지 OR "
	+"%23기범아_나혼자먹는거_아니야 OR "
	+"%23여보세요_상연아_나_맛집이야_끊어 OR "
	+"%23상상그이상의_맛집 OR "
	+"%23콥이는_콥빼기로주세요 OR "
	+"%23영훈아_빵빵하게_먹어 OR "
	+"%23재현아_차츰공복이드리울테니 OR "
	+"%23이션같이찌자 OR "
	+"%23김선우_맛있는걸내가놔둘리가 OR "
	+"%23지창민_도토리대신 OR "
	+"%23최찬희_요정은_밥심이다 OR "
	+"%23원우야_여기_테이스티 OR "
	+"%23꾸꾸야_꾸친이_먹어봤꾸 OR "
	+"%23성찬이의_진수성찬 OR "
	+"%23지창민_떡볶이말고_이건_어떄 OR "
	+"%23주학년_넌이미먹었겠지 OR "
	+"%23지민이와_밥밥밥을먹어요 OR "
	+"%23정국아_같이먹짱 OR "
	+"%23머거스트디 OR "
	+"%23야호바너이거먹어봤냐 OR "
	+"%23남준아여기째끼럽 OR "
	+"%23문득생각해석진이가이걸먹어봤을까 OR "
	+"%23뷔슐랭"
	+"&src=typed_query&f=top");
}

searchForm.addEventListener("submit", onSearchSubmit);