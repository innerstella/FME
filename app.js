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
	//장소
	+locationname
	//해시태그
	//nct
	+"%23박지성_단1g도안줌 OR "
	+"%23마크한테만공개 OR "
	+"%23런쥔이의_맛집내비게이션 OR "
	+"%23제노의_맛그당어 OR "
	+"%23먹다가_해찬이_생각이나신거예요 OR "
	+"%23확신해찬맛집 OR "
	+"%23재민아_밥먹어 OR "
	+"%23나나챌린지 OR "
	+"%23천러야_이거_먹기좋아 OR "
	+"%23튼튼하게_먹지성 OR "
	+"%23먹어봤도영 OR "
	+"%23정우의_원데이씩스밀 OR "
	+"%23성찬이의_진수성찬 OR "

	//세븐틴
	+"%23승철이_이거먹고_볼빵빵했꾸마 OR "
	+"%23정한아_마니머거여ㅎㅎ OR "
	+"%23조슈아_먹어보슈아 OR "
	+"%23아니에요_준휘는_먹을거예요 OR "
	+"%23순영아_이거_맛있어 OR "
	+"%23원우야_여기_테이스티 OR "
	+"%23우지를삼킬순없잖아 OR "
	+"%23망하오야_여기_헌하오츠 OR "
	+"%23THE_ATE OR "
	+"%23민규라고치고_디너쇼해도돼 OR "
	+"%23도겸이도_도아할_맛집 OR "
	+"%23믿고먹어boo세요 OR "
	+"%23버논아_혹시여긴_맛집 OR "
	+"%23라즈지 OR "
	+"%23디노야_여기_케이밥의_미래 OR "
	//엑소
	+"%23백현이를_위한_맛집투어 OR "
	//몬스타엑스
	+"%23몬베베가_몬베베에게_추천하는_맛집 OR "
	+"%23채형원_너는세입도못먹겠지 OR "
	+"%23셔누_넌이미먹었겠지만또먹어야겠지 OR "
	+"%23민혁_너는이미북마크해놨겠지 OR "
	+"%23기현_너는맘마먹고다시시작하겠지 OR "
	+"%23주헌_너는한입가득못먹겠지 OR "
	+"%23임창균_너는한끼뚝닭먹겠지 OR "
	//방탄
	+"%23지민이와_밥밥밥을먹어요 OR "
	+"%23정국아_같이먹짱 OR "
	+"%23머거스트디 OR "
	+"%23야호바너이거먹어봤냐 OR "
	+"%23남준아여기째끼럽 OR "
	+"%23문득생각해석진이가이걸먹어봤을까 OR "
	+"%23뷔슐랭 OR "
	//샤이니
	+"%23기범아_나혼자먹는거_아니야 OR "
	//더보이즈
	+"%23여보세요_상연아_나_맛집이야_끊어 OR "
	+"%23상상그이상의_맛집 OR "
	+"%23콥이는_콥빼기로주세요 OR "
	+"%23영훈아_빵빵하게_먹어 OR "
	+"%23재현아_차츰공복이드리울테니 OR "
	+"%23김선우_맛있는걸내가놔둘리가 OR "
	+"%23지창민_도토리대신 OR "
	+"%23최찬희_요정은_밥심이다 OR "
	+"%23지창민_떡볶이말고_이건_어때 OR "
	+"%23주학년_넌이미먹었겠지 OR "

	//온앤오프
	+"%23이션같이찌자 OR "

	//기타
	+"%23강다니엘_염염긋 OR "
	+"%23황제님을위한메뉴판 OR "
	+"%23꾸꾸야_꾸친이_먹어봤꾸"
	+"&src=typed_query&f=top");
}

searchForm.addEventListener("submit", onSearchSubmit);