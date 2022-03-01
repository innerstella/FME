const searchInput = document.querySelector("#search-form input");
const searchForm = document.querySelector("#search-form");
const searchArea = document.querySelector('#searchArea');

const HIDDEN_CLASSNAME = "hidden";

function nctFn(event) {
	event.preventDefault();
	searchForm.classList.add(HIDDEN_CLASSNAME);
	const locationname = searchInput.value;
	localStorage.setItem("locationname", locationname);
	console.log(locationname);
	window.open("https://twitter.com/search?q="
	//장소
	+locationname
	//해시태그


	+"%23재혀니_맛있게머겅 OR "
	+"%23정우의_원데이씩스밀 OR "
	+"%23정우의_원데이식스밀 OR "
	+"%23마크한테만공개 OR "
	+"%23먹어봤도영 OR "
	+"%23도영이의유맹맛집 OR "
	+"%23먹다가_해찬이_생각이나신거예요 OR "
	+"%23태용아_먹어보태용 OR "
	+"%23존맛툥구리 OR "
	+"%23JMTforTAEIL OR "
	+"%23먹태일_기릿 OR "
	+"%23태일아_먹어봐 OR "
	+"%23먹어봤쟈니 OR "
	+"%23맛있었쟈니 OR "
	+"%23체리모토랑_맛집_같이_하겠다 OR "
	+"%23먹으면_서로_윈윈 OR "
	+"%23悠太_味확인맛집 OR "
	+"%23유타_味확인맛집 OR "
	+"%23천러야_이거_먹기좋아 OR "
    +"%23우와_저맛집유맹해 OR "
    +"%23마크한테만공개 OR "
	+"%23런쥔이의_맛집내비게이션  OR "
	+"%23런쥔이_밥무거쒀 OR "
	+"%23제노의_맛그당어 OR "
	+"%23먹다가_해찬이_생각이나신거에요 OR "
	+"%23확신해찬맛집 OR "
	+"%23나나의_맛집탐방기 OR "
	+"%23재민아_밥먹어 OR "
	+"%23나나챌린지 OR "
	+"%23천러야_이거_먹기좋아 OR "
	+"%23박지성_단1g도안줌 OR "
	+"%23튼튼하게_먹지성"
	+"&src=typed_query&f=top");
};


searchForm.addEventListener("submit", nctFn );