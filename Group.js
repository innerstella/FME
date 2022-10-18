const searchInput = document.querySelector("#search-form input");
const searchForm = document.querySelector("#search-form");
const searchArea = document.querySelector("#searchArea");

const HIDDEN_CLASSNAME = "hidden";

console.log("connected");

window.onload = function () {
  console.log(document.querySelector("#name").innerText);
  let groupName = document.querySelector("#name").innerText;
  sessionStorage.setItem("groupName", groupName);
};

function groupFn(event) {
  event.preventDefault();
  searchForm.classList.add(HIDDEN_CLASSNAME);
  const locationname = searchInput.value;
  const GroupName = sessionStorage.getItem("groupName");
  localStorage.setItem("locationname", locationname);

  if (GroupName === "갓세븐") {
    window.open(
      "https://twitter.com/search?q=" +
        locationname +
        "%23뱀맛집 OR " +
        "%23배무맛집 OR " +
        "%23퉤이스티로드 OR " +
        "%23왕잭슨_여기_왕맛있다 OR " +
        "%23냠긔탱긔" +
        "&src=typed_query&f=top"
    );
  } else if (GroupName === "골든차일드") {
    window.open(
      "https://twitter.com/search?q=" +
        locationname +
        "%23대열아_여기가맛있대열 OR " +
        "%23와이_렇게맛있을수가 OR " +
        "%23장준아나중에밥이나한끼하자 OR " +
        "%23태그야_맛집해시태그야 OR " +
        "%23승민아_여기_z지존킬z OR " +
        "%23봉재현_이건_먹겠지 OR " +
        "%23지범_맛집다녀오겠습니다 OR " +
        "%23주찬아_쫓겨나기전까지만먹자 OR " +
        "%23주찬_넌이미여기서쫓겨났겠지 OR " +
        "%23동동맛집센터 OR " +
        "%23보민아_여기가극락인가봄 OR " +
        "%23Y가_최고로_모시는_맛집" +
        "&src=typed_query&f=top"
    );
  } else if (GroupName === "뉴진스") {
    window.open(
      "https://twitter.com/search?q=" +
        locationname +
        "%23이맛이꾸민지생시인지 OR " +
        "%23맛집으로달려라하니 OR " +
        "%23단다니챙겨먹자 OR " +
        "%23난맛집을찾는_베이비 OR " +
        "%23혜인아_다음에꼭같이가자 OR " +
        "%23NJ맛집_맞지" +
        "&src=typed_query&f=top"
    );
  } else if (GroupName === "드림노트") {
    window.open(
      "https://twitter.com/search?q=" +
        locationname +
        "%23드댕이도_드냠드냠" +
        "&src=typed_query&f=top"
    );
  } else if (GroupName === "드리핀") {
    window.open(
      "https://twitter.com/search?q=" +
        locationname +
        "%23협아_이_디저트꼭먹어봐 OR " +
        "%23윤성아_혼자_먹기_아까워 OR " +
        "%23주창욱_넌_안먹어봤겠지 OR " +
        "%23동윤아_맛집은_안중요한가 OR " +
        "%23민서가_쏠테니_많이먹어 OR " +
        "%23집중집중_준호_맘마타임 OR " +
        "%23준호야_맛있는_거_먹으러_가차 OR " +
        "%23이_거맛있어_협 OR " +
        "%23렉스에게_가장_잘맞는_맛집은" +
        "&src=typed_query&f=top"
    );
  } else if (GroupName === "더보이즈") {
    window.open(
      "https://twitter.com/search?q=" +
        locationname +
        "%23맛있겠짛_주연앟 OR " +
        "%23이주연_난늘배고파_베베 OR " +
        "%23이재현_치킨이다가아니야 OR " +
        "%23어이어이_이재현_여기다 OR " +
        "%23영훈아_밥좀많이먹어라 OR " +
        "%23재현아_차츰공복이드리울테니 OR " +
        "%23영훈아_빵빵하게_먹어" +
        "&src=typed_query&f=top"
    );
  } else if (GroupName === "데이식스") {
    window.open(
      "https://twitter.com/search?q=" +
        locationname +
        "%23나는_너의_밥선생 OR " +
        "%23영현아_여기서도_7인분_어때 OR " +
        "%23나나나나_원필이가_먹을래 OR " +
        "%23도운이_밥묵엇슴까" +
        "&src=typed_query&f=top"
    );
  } else if (GroupName === "DKZ") {
    window.open(
      "https://twitter.com/search?q=" +
        locationname +
        "%23경윤아_여기_찐맛이야 OR " +
        "%23AI_충전기 OR " +
        "%23민규_이거_먹어 OR " +
        "%23문익아_여기서_파는거야 OR " +
        "%23먹잘알_종형아_이거_먹잘 OR " +
        "%23기석이_밥_먹을_시간 OR " +
        "%23재찬아_밥먹자" +
        "&src=typed_query&f=top"
    );
  } else if (GroupName === "레드벨벳") {
    window.open(
      "https://twitter.com/search?q=" +
        locationname +
        "%23주현아맛있겠찌 OR " +
        "%23슬슐랭가이드 OR " +
        "%23오늘은웬디여기 OR " +
        "%23수영아아줌마들잘먹지 OR " +
        "%23누가_날_맛집으로_땡긴다악" +
        "&src=typed_query&f=top"
    );
  } else if (GroupName === "로켓펀치") {
    window.open(
      "https://twitter.com/search?q=" +
        locationname +
        "%23연히의_냠냐미 OR " +
        "%23여기수윤이자린데오 OR " +
        "%23먹어보시갱 OR " +
        "%23꼬르륵소리 OR " +
        "%23배부르다현" +
        "&src=typed_query&f=top"
    );
  } else if (GroupName === "라잇썸") {
    window.open(
      "https://twitter.com/search?q=" +
        locationname +
        "%23상아야_여기_맛집_맞지 OR " +
        "%23초원아_이거먹을래 OR " +
        "%23나영이랑_더_빠르게_맛집_찾아볼래요 OR " +
        "%23밥먹었나영 OR " +
        "%23히나짱의_맛있는_집 OR " +
        "%23히나모롤의_추천맛집 OR " +
        "%23쭈대장과_함께 OR " +
        "%23유정이가_좋아하는_맛집_좀_추천해줄래 OR " +
        "%23휘연이와_함께하고싶은_곳 OR " +
        "%23지냥이_배고파" +
        "&src=typed_query&f=top"
    );
  } else if (GroupName === "루시") {
    window.open(
      "https://twitter.com/search?q=" +
        locationname +
        "%23이게내마지막밥이라고 OR " +
        "%23너에게내밥상을줄게 OR " +
        "%23상엽아_다람쥐는_이거_못먹겠지 OR " +
        "%23예찬이짱짱맨 OR " +
        "%23원상아_여기_알라빙빙" +
        "&src=typed_query&f=top"
    );
  } else if (GroupName === "몬스타엑스") {
    window.open(
      "https://twitter.com/search?q=" +
        locationname +
        "%23몬베베가_몬베베에게_추천하는_맛집 OR " +
        "%23셔누_넌이미먹었겠지만또먹어야겠지 OR " +
        "%23민혁_너는이미북마크해놨겠지 OR " +
        "%23기현_너는맘마먹고다시시작하겠지 OR " +
        "%23채형원_너는세입도못먹겠지  OR " +
        "%23주헌_너는한입가득못먹겠지 OR " +
        "%23임창균_너는한끼뚝닭먹겠지" +
        "&src=typed_query&f=top"
    );
  } else if (GroupName === "AB6IX") {
    window.open(
      "https://twitter.com/search?q=" +
        locationname +
        "%23웅이가_맛보면_좋겠웅 OR " +
        "%23우진아_맛집_추천_별거아냐 OR " +
        "%23동현이를_위한_대동맛지도 OR " +
        "%23대휘가_먹으면_아맛나" +
        "&src=typed_query&f=top"
    );
  } else if (GroupName === "에스파") {
    window.open(
      "https://twitter.com/search?q=" +
        locationname +
        "%23지젤아밥무라 OR " +
        "%23윈터의_맛집을_입력해주세요 OR " +
        "%23닝닝이랑같이먹고싶은거 OR " +
        "%23지구에서여기가젤루맛있어 OR " +
        "%23이맛집은신이에요" +
        "&src=typed_query&f=top"
    );
  } else if (GroupName === "에이티즈") {
    window.open(
      "https://twitter.com/search?q=" +
        locationname +
        "%23우리배는_식도로만_가 OR " +
        "%23에이티즈_우리배는_식도로만_가 OR " +
        "%23이게바로_에이티즈의_맛인기라 OR " +
        "%23이타다끼_마쓰 OR " +
        "%23박성화_세입컷챌린지 OR " +
        "%23박성화_너는세입이면먹겠지 OR " +
        "%23박성화_이것좀_먹어보라고_성화 OR " +
        "%23캡틴홍중의_다음_먹적지 OR " +
        "%23김홍_중독될정도로맛있는집 OR " +
        "%23정윤_호불어서먹어 OR " +
        "%23정윤_호텔5성안부럽다 OR " +
        "%23정윤_호텔5성뷔페안부럽다 OR " +
        "%23윤둥아_이거_둥나맛있어 OR " +
        "%23맛이여_상상이상 OR " +
        "%23강여_상당히맛있는집 OR " +
        "%23강여상_치킨말고_이것도_먹어봐 OR " +
        "%23산맛집 OR " +
        "%23산이미식회 OR " +
        "%23여기도_먹어보산 OR " +
        "%23오늘도_잘먹었산 OR " +
        "%23최산을_다해_먹어봐요 OR " +
        "%23송민_기가막힌맛집 OR " +
        "%23맛있게_먹우영 OR " +
        "%23정우영_한입에_먹우영 OR " +
        "%23정우_영원히먹을수있는집 OR " +
        "%23쫑슐랭가이드 OR " +
        "%23찍먹보단쫑먹 OR " +
        "%23최종_호불호없는맛집 OR " +
        "%23최종호_먹어봐_최종보스_맛집 OR " +
        "%23VJ_윤호특공대" +
        "&src=typed_query&f=top"
    );
  } else if (GroupName === "빌리") {
    window.open(
      "https://twitter.com/search?q=" +
        locationname +
        "%23수아_여기_와봤수아 OR " +
        "%23여기와봤_수아 OR " +
        "%23뚜현아_진짜_여기_맛집이야 OR " +
        "%23뚜진맛 OR " +
        "%23수현아_밥먹자 OR " +
        "%23먹잘알람  OR " +
        "%23라미_완소한끼 OR " +
        "%23츠키_많이먹어 OR " +
        "%23츠키야당근말고이거 OR " +
        "%23수연이랑_냥냥멍냠 OR " +
        "%23션이랑_냠냠멍냠 OR " +
        "%23이거먹자_시윤아 OR " +
        "%23이거먹어볼래_시윤아 OR " +
        "%23오늘도_냠냠하루나 OR " +
        "%23하루나_여기맛집이야 OR " +
        "%23Oneday_나의까까" +
        "&src=typed_query&f=top"
    );
  } else if (GroupName === "블랙핑크") {
    window.open(
      "https://twitter.com/search?q=" +
        locationname +
        "%23블랙핑크_맛집사거리 OR " +
        "%23제니야_여기젠나마싯다 OR " +
        "%23채영아_눈물나는맛이야 OR " +
        "%23지수야_여기츄라이츄라이 OR " +
        "%23리사에게_가장맛난걸로줘" +
        "&src=typed_query&f=top"
    );
  } else if (GroupName === "비투비") {
    window.open(
      "https://twitter.com/search?q=" +
        //장소
        locationname +
        "%23은광아_이거_누룽지백숙만큼_맛있어 OR " +
        "%23여기_도토리 OR " +
        "%23창섭아_맛집어디있는지알게됐됬됐됬됐다 OR " +
        "%23현식적인맛집추천 OR " +
        "%23이거맛있뎨" +
        "&src=typed_query&f=top"
    );
  } else if (GroupName === "방탄소년단") {
    window.open(
      "https://twitter.com/search?q=" +
        //장소
        locationname +
        "%23남준아여기째끼럽 OR " +
        "%23문득생각해석진이가이걸먹어봤을까 OR " +
        "%23머거스트디 OR " +
        "%23야호바너이거먹어봤냐 OR " +
        "%23지민이와_밥밥밥을먹어요 OR " +
        "%23뷔슐랭 OR " +
        "%23정국아_같이먹짱" +
        "&src=typed_query&f=top"
    );
  } else if (GroupName === "싸이퍼") {
    window.open(
      "https://twitter.com/search?q=" +
        //장소
        locationname +
        "%23병근한입 OR " +
        "%23휘랑둥_여긴가야해 OR " +
        "%23석원이도냠냠 OR " +
        "%23이타_다끼마스 OR " +
        "%23편식쟁이_원이_먹어봐 OR " +
        "%23현빈아_난_먹어봤지롱 OR " +
        "%23도환아_여기와서_먹어봐 OR " +
        "%23맛집을_태그" +
        "&src=typed_query&f=top"
    );
  } else if (GroupName === "CIX") {
    window.open(
      "https://twitter.com/search?q=" +
        //장소
        locationname +
        "%23곤_만나서_먹자 OR " +
        "%23병곤아_이거_곤나맛있어 OR " +
        "%23승훙이도_훙입만 OR " +
        "%23먹어보세용_희희 OR " +
        "%23아강이_냐미냐미 OR " +
        "%23현석아_이거_머거바니 OR " +
        "%23서기의_메뉴판" +
        "&src=typed_query&f=top"
    );
  } else if (GroupName === "크래비티") {
    window.open(
      "https://twitter.com/search?q=" +
        //장소
        locationname +
        "%23크래비티_무뿌식뿌 OR " +
        "%23나_한입_세림이_세입 OR " +
        "%23앨런아_맛집으로_지금_당장_런 OR " +
        "%23정모야_맛집_뒤집자 OR " +
        "%23우빈아_데굴데굴_냠 OR " +
        "%23원진아_함번만_먹어봐 OR " +
        "%23미니미니미니_강쥐는먹으면안돼용 OR " +
        "%23형준아_내랑_밥물래 OR " +
        "%23태영이도_맛집_태워가영 OR " +
        "%23성민이_입에_안성맞춤" +
        "&src=typed_query&f=top"
    );
  } else if (GroupName === "엔하이픈") {
    window.open(
      "https://twitter.com/search?q=" +
        //장소
        locationname +
        "%23엔진예절 OR " +
        "%23엔진이_커넥해주는_맛집 OR " +
        "%23가든_맛집 OR " +
        "%23정원이_볼살로_레쭈고 OR " +
        "%23맛있떠_누가만들었어이거 OR " +
        "%23정원이의_식사랜드 OR " +
        "%23당연함_이희승이먹어야함 OR " +
        "%23희승아_라면말고_이건어때 OR " +
        "%23오늘의_제이 OR " +
        "%23맛집_기대해주셔도_감사합니다 OR " +
        "%23재윤이에게_메뉴추천 OR " +
        "%23제이크_요기요 OR " +
        "%23성훈이_입속으로_트리플악셀 OR " +
        "%23선우도_가고싶어하는_맛집 OR " +
        "%23선우야_이것도_맛있을거예요 OR " +
        "%23니시무라_마니무라" +
        "&src=typed_query&f=top"
    );
  } else if (GroupName === "EXO") {
    window.open(
      "https://twitter.com/search?q=" +
        //장소
        locationname +
        "%23민석아금강산도식후경 OR " +
        "%23민석아_여기가_맛집이슈 OR " +
        "%23민석이를_위한_빵집투어 OR " +
        "%23민석이를_위한_카페투어 OR " +
        "%23준면아_여기_준맛탱 OR " +
        "%23백현이를_위한_맛집투어 OR " +
        "%23백현아_먹짱일기_적짱 OR " +
        "%23경수야_여기가_맛집이디오 OR " +
        "%23됴슐랭 OR " +
        "%23경수야_먹어됴 OR " +
        "%23종인아_잘먹을게 OR " +
        "%23종인아또나만먹는거지 OR " +
        "%23맛집_추천해주세훈 OR " +
        "%23세훈아_이거봐라_맛있겠지 OR " +
        "%23드셔보세훈 OR " +
        "%23세훈이_세입먹을때_세프는_세그릇째 OR " +
        "%23세훈아_순댓국_말고_이거" +
        "&src=typed_query&f=top"
    );
  } else if (GroupName === "여자친구") {
    window.open(
      "https://twitter.com/search?q=" +
        //장소
        locationname +
        "%23소원아여기가거기야 OR " +
        "%23맛린집 OR " +
        "%23은하에게_강추 OR " +
        "%23유주라잌썸띵투잍 OR " +
        "%23맛이신비해 OR " +
        "%23무지야여기무지맛있어" +
        "&src=typed_query&f=top"
    );
  } else if (GroupName === "프로미스나인") {
    window.open(
      "https://twitter.com/search?q=" +
        //장소
        locationname +
        "%23여기먹어볼새롬 OR " +
        "%23하영아_진짤루_맛집잉엥용 OR " +
        "%23맛집을_규와앙 OR " +
        "%23지원아밥메건니 OR " +
        "%23지선아_누가1인분만먹고살아_미친거지 OR " +
        "%23역시_대나무가_아니면_곤란한가요_더여나 OR " +
        "%23우리_챙람쥐_식량저장소 OR " +
        "%23나경아_여기맛집웅앵 OR " +
        "%23꿀깅아_여기_꿀발랐다" +
        "&src=typed_query&f=top"
    );
  } else if (GroupName === "아이콘") {
    window.open(
      "https://twitter.com/search?q=" +
        //장소
        locationname +
        "%23이식당놓쳐서후회한다면후회한시간을후회할거잖아후회하기싫음후회할일들을후회하기전에_이거먹어봐 OR " +
        "%23지나니_이거맛나니 OR " +
        "%23바비야밥이왔어요 OR " +
        "%23윤형아_여기맛집이햫 OR " +
        "%23준회야_여기밥많이주내 OR " +
        "%23찬우야여기맛집이_왔쨔뇨 OR " +
        "%23김동동_일단밥부터먹혁" +
        "&src=typed_query&f=top"
    );
  } else if (GroupName === "미래소년") {
    window.open(
      "https://twitter.com/search?q=" +
        //장소
        locationname +
        "%23어_리안이가_리안이가 OR " +
        "%23미래에_갔다왔는데_맛집_돼_있던_맛집 OR " +
        "%23도도의_맛집여행 OR " +
        "%23카엘아_여기야 OR " +
        "%23동표야_넌이거못먹지 OR " +
        "%23시영이가_생각나면_올릴게요 OR " +
        "%23장유빈_멋있고_귀여운_막내온탑" +
        "&src=typed_query&f=top"
    );
  } else if (GroupName === "NCT") {
    window.open(
      "https://twitter.com/search?q=" +
        locationname +
        "%23재혀니_맛있게머겅 OR " +
        "%23정우의_원데이씩스밀 OR " +
        "%23먹어봤도영 OR " +
        "%23도영이의유맹맛집 OR " +
        "%23먹다가_해찬이_생각이나신거예요 OR " +
        "%23태용아_먹어보태용 OR " +
        "%23존맛툥구리 OR " +
        "%23JMTforTAEIL OR " +
        "%23먹태일_기릿 OR " +
        "%23태일아_먹어봐 OR " +
        "%23먹어봤쟈니 OR " +
        "%23체리모토랑_맛집_같이_하겠다 OR " +
        "%23먹으면_서로_윈윈 OR " +
        "%23悠太_味확인맛집 OR " +
        "%23유타_味확인맛집 OR " +
        "%23천러야_이거_먹기좋아 OR " +
        "%23우와_저맛집유맹해 OR " +
        "%23마크한테만공개 OR " +
        "%23런쥔이의_맛집내비게이션  OR " +
        "%23런쥔이_밥무거쒀 OR " +
        "%23제노의_맛그당어 OR " +
        "%23확신해찬맛집 OR " +
        "%23나나의_맛집탐방기 OR " +
        "%23재민아_밥먹어 OR " +
        "%23나나챌린지 OR " +
        "%23천러야_이거_먹기좋아 OR " +
        "%23이거맛있쿤 OR " +
        "%23食中食_TEN OR " +
        "%23샤오쥔_광둥타코말고_이거먹어봐 OR " +
        "%23덕준아_이세상엔_맛있는게많다 OR " +
        "%23헨드리_맛도리 OR " +
        "%23양양아_념념하자 OR " +
        "%23박지성_단1g도안줌 OR " +
        "%23튼튼하게_먹지성" +
        "&src=typed_query&f=top"
    );
  } else if (GroupName === "엔플라잉") {
    window.open(
      "https://twitter.com/search?q=" +
        //장소
        locationname +
        "%23승짱JMT니까먹어봐 OR " +
        "%23차훈_넌어차피_안먹겠지 OR " +
        "%23재현아_맛있겠지_김재현이요 OR " +
        "%23회승아_만들수있니_집밥요정 OR " +
        "%23동동아_먹어봐" +
        "&src=typed_query&f=top"
    );
  } else if (GroupName === "원어스") {
    window.open(
      "https://twitter.com/search?q=" +
        locationname +
        "%23레이븐이_가봐야할_이쁜_맛집 OR " +
        "%23서호야_호호불어먹어  OR " +
        "%23궈낙아_이거머궈봐 OR " +
        "%23건학아_이거만먹고_운동할게 OR " +
        "%23건희를_위한_추천맛집 OR " +
        "%23환웅아이거먹고사람될게 OR " +
        "%23내동주고_사먹은_맛집후기" +
        "&src=typed_query&f=top"
    );
  } else if (GroupName === "원위") {
    window.open(
      "https://twitter.com/search?q=" +
        //장소
        locationname +
        "%23용훈이_얼굴만큼_기대하고가도되는곳 OR " +
        "%23강건너_현구맛집 OR " +
        "%23kang_981124 OR " +
        "%23ㅎㄹㅇㅌㄱㅂ OR " +
        "%23하린아_자셔봐 OR " +
        "%23동명이_배고파  OR " +
        "%23기욱이의_볼주머니_저장창고" +
        "&src=typed_query&f=top"
    );
  } else if (GroupName === "온앤오프") {
    window.open(
      "https://twitter.com/search?q=" +
        //장소
        locationname +
        "%23효진이는_앞으로도_꾸준히먹자 OR " +
        "%23효지나마이크내리고젓가락들어 OR " +
        "%23이션같이찌자 OR " +
        "%23이승준먹방대결 OR " +
        "%23어스_맛집_여기있으 OR " +
        "%23엇대먹 OR " +
        "%23맛있게먹었 OR " +
        "%23수박민균 OR " +
        "%23민균이를위한야미푸드 OR " +
        "%23유토와_같이먹자 OR " +
        "%23맛집소개해줄게Ü OR " +
        "%23온앤오프_같이먹자 OR " +
        "%23온앤오프_짱먹자" +
        "&src=typed_query&f=top"
    );
  } else if (GroupName === "오소스") {
    window.open(
      "https://twitter.com/search?q=" +
        locationname +
        "%23오소스_소스에_찍어_먹어 OR " +
        "%23알리오소스_아니고_저스트_오소스" +
        "&src=typed_query&f=top"
    );
  } else if (GroupName === "SF9") {
    window.open(
      "https://twitter.com/search?q=" +
        //장소
        locationname +
        "%23인성아나이거오분순삭 OR " +
        "%23영균아_뭐라도_먹어봐 OR " +
        "%23저는잘먹을수있어요 OR " +
        "%23얘두다나이거먹음 OR " +
        "%23김석우_입으로_떼구르르 OR " +
        "%23옴뇸뇸소리안나요 OR " +
        "%23태양아_이거어때_난좋은데 OR " +
        "%23함께먹어주호 OR " +
        "%23영빈아왜먹질못하니" +
        "&src=typed_query&f=top"
    );
  } else if (GroupName === "샤이니") {
    window.open(
      "https://twitter.com/search?q=" +
        //장소
        locationname +
        "%23기범아_나혼자먹는거_아니야 OR " +
        "%23종현아_우린_대왕쁘띠가될거야 OR " +
        "%23민호야_식단관리_이겨내 OR " +
        "%23태민_DO_EAT_BABY OR " +
        "%23찡기야_맛있겠찡 OR " +
        "%23릴프릭이_함냐함냐함" +
        "&src=typed_query&f=top"
    );
  } else if (GroupName === "스트레이키즈") {
    window.open(
      "https://twitter.com/search?q=" +
        //장소
        locationname +
        "%23여기맛있승민 OR " +
        "%23크리스_배고파용 OR " +
        "%23리노는_배고파 OR " +
        "%23창빈이는_안보겠지ㅠ OR " +
        "%23현이도_먹어봐 OR " +
        "%23한이의한입거리 OR " +
        "%23이_식당은_진심으로_하늘이에요 OR " +
        "%23현이도_먹어봐 OR " +
        "%23쏟아지는_맛집 OR " +
        "%23비니의맛집_마시쪄마시쪄" +
        "&src=typed_query&f=top"
    );
  } else if (GroupName === "스테이씨") {
    window.open(
      "https://twitter.com/search?q=" +
        //장소
        locationname +
        "%23수민아이거먹어 OR " +
        "%23수민아_이거먹어 OR " +
        "%23시은이의꿀맛보장 OR " +
        "%23아이사장님뭘좀아네 OR " +
        "%23맛집이세은 OR " +
        "%23맛집이윤 OR " +
        "%23재이야여기짱맛있어" +
        "&src=typed_query&f=top"
    );
  } else if (GroupName === "세븐틴") {
    window.open(
      "https://twitter.com/search?q=" +
        locationname +
        "%23승철이_이거먹고_볼빵빵했꾸마 OR " +
        "%23정한아_마니머거여ㅎㅎ OR " +
        "%23조슈아_먹어보슈아 OR " +
        "%23아니예요_준휘는_먹을거예요 OR " +
        "%23순영아_이거_맛있어 OR " +
        "%23원우야_여기_테이스티 OR " +
        "%23우지를삼킬순없잖아 OR " +
        "%23밍하오야_여기_헌하오츠 OR " +
        "%23THE_ATE OR " +
        "%23민규라고치고_디너쇼해도돼 OR " +
        "%23도겸이도_도아할_맛집 OR " +
        "%23믿고먹어boo세요 OR " +
        "%23버논아_혹시여긴_맛집 OR " +
        "%23라즈지 OR " +
        "%23디노야_여기_케이밥의_미래 OR " +
        "%23캐럿들_여기_캐맛있어 OR " +
        "%23계산은_쿱스가" +
        "&src=typed_query&f=top"
    );
  } else if (GroupName === "TNX") {
    window.open(
      "https://twitter.com/search?q=" +
        //장소
        locationname +
        "%23냠냠쭌쭌 OR " +
        "%23복숭아맛집 OR " +
        "%23성준아_여기_같이_오자 OR " +
        "%23오냠오냠 OR " +
        "%23휘로록짭짭 OR " +
        "%23낑깡현수 OR " +
        "%23휘풍당당_맛집_나가신다" +
        "&src=typed_query&f=top"
    );
  } else if (GroupName === "트레저") {
    window.open(
      "https://twitter.com/search?q=" +
        //장소
        locationname +
        "%23현석이_입맛이에 OR " +
        "%23지훈아_여기가봐라 OR " +
        "%23욧집 OR " +
        "%23준규_메롱 OR " +
        "%23마시호_여기가보시호 OR " +
        "%23재혁아_바나나우유말고_이것도먹어봐 OR " +
        "%23사히맛집태그언제생겨 OR " +
        "%23사히밥 OR" +
        "%23예담아_담아놔 OR " +
        "%23이야아마시따아도영아 OR " +
        "%23정우야_여기_먹으러_꼭와 OR " +
        "%23라마x3 OR " +
        "%23정환아_여기맛있소" +
        "&src=typed_query&f=top"
    );
  } else if (GroupName === "트와이스") {
    window.open(
      "https://twitter.com/search?q=" +
        //장소
        locationname +
        "%23쩝쩝박사_말랑이에게 OR " +
        "%23지효야나먹어쪄 OR " +
        "%23사나없이먹으나마나" +
        "&src=typed_query&f=top"
    );
  } else if (GroupName === "TOMORROW X TOGETHER") {
    window.open(
      "https://twitter.com/search?q=" +
        //장소
        locationname +
        "%23최연준_맛집1등어디야 OR " +
        "%23연도먹_연준이도먹어 OR " +
        "%23수빈아_먹어봐_마수리수리 OR " +
        "%23범규야_제발_한입만_먹어봐 OR " +
        "%23태현아_한번_맛볼테리 OR " +
        "%23태현이의_소식먹방 OR " +
        "%23강이사님_드셔보세요 OR " +
        "%23휴닝이는_맛있는거_먹고심분딩 OR " +
        "%23투모로우바이투게더_먹어봐" +
        "&src=typed_query&f=top"
    );
  } else if (GroupName === "베리베리") {
    window.open(
      "https://twitter.com/search?q=" +
        locationname +
        "%23허나아_밥먹자 OR " +
        "%23호영씨_아아아아 OR " +
        "%23민찬아_만찬이야 OR " +
        "%23계현보장맛집 OR " +
        "%23여노야_밥은_먹고_다니니 OR " +
        "%23용왕님_기미상궁_마쳤어용승 OR " +
        "%23kcal_플랙스" +
        "&src=typed_query&f=top"
    );
  } else if (GroupName === "빅스") {
    window.open(
      "https://twitter.com/search?q=" +
        //장소
        locationname +
        "%23택운이를_위한_뮤슐랭가이드 OR " +
        "%23학연이가_뇸뇸_먹어볼까욘 OR " +
        "%23라비_맛집_도와드려요 OR " +
        "%23갈비찜을밥위에얹어주세횩 OR " +
        "%23쟌이뭐먹어" +
        "&src=typed_query&f=top"
    );
  } else if (GroupName === "위너") {
    window.open(
      "https://twitter.com/search?q=" +
        locationname +
        "%23위EAT_인EAT OR " +
        "%23승윤이의_맛집_PAGE OR " +
        "%23이맛집_찐받네 OR " +
        "%23마이노_마이무 OR " +
        "%23훈슐랭_여기도가봤니" +
        "&src=typed_query&f=top"
    );
  } else if (GroupName === "펜타곤") {
    window.open(
      "https://twitter.com/search?q=" +
        locationname +
        "%23펜타곤_함께먹자 OR " +
        "%23펜타곤_같이먹자 OR " +
        "%23홍석_넌_먹으면_근손실오겠지 OR " +
        "%23여기바로고민보다고_신원 OR " +
        "%23펜타곤에서제일베부른정우석 OR " +
        "%23형구야_여기_완전_기가막키노 OR " +
        "%23후_이거먹으러_와라_회택아 OR " +
        "%23개밥보다맛있는몽몽이밥 OR " +
        "%23여기넘맛있어유_또올래 OR " +
        "%23이거먹고다이어트_조지노 OR " +
        "%23예_난여기로정했다" +
        "&src=typed_query&f=top"
    );
  } else if (GroupName === "퍼플키스") {
    window.open(
      "https://twitter.com/search?q=" +
        locationname +
        "%23고뚠아_이거먹어봐 OR " +
        "%23도시야_이거_억수로_맛있데이 OR " +
        "%23수안이가_행복해지려면_이걸먹어봐" +
        "&src=typed_query&f=top"
    );
  } else if (GroupName === "사인클") {
    window.open(
      "https://twitter.com/search?q=" +
        //장소
        locationname +
        "%23이거무디맛있어 OR " +
        "%23사회인먹짱클럽" +
        "&src=typed_query&f=top"
    );
  } else if (GroupName === "아스트로") {
    window.open(
      "https://twitter.com/search?q=" +
        //장소
        locationname +
        "%23THIS_IS_EAT OR " +
        "%23명준이_아가배_지킴단 OR " +
        "%23진우야_이거다_이거맛있지누 OR " +
        "%23빈아_운동및식단_포기했다 OR " +
        "%23돌잔치_음식추천 OR " +
        "%23로하_이거먹으러_왔따나 OR " +
        "%23은우야_인누와_같이먹차" +
        "&src=typed_query&f=top"
    );
  } else if (GroupName === "하이라이트") {
    window.open(
      "https://twitter.com/search?q=" +
        //장소
        locationname +
        "%23두준아나두먹을래 OR " +
        "%23식샤님의_깨끗한_밥그릇 OR " +
        "%23식샤님_블로그_올리셨나요 OR " +
        "%23식샤님_오늘은_뭐드셨어요 OR " +
        "%23맛섭아_요집이야 OR " +
        "%23근손실도_이기구왕 OR " +
        "%23동운아_밥은먹고다니냐" +
        "&src=typed_query&f=top"
    );
  }

  // 검색 후 창 새로고침
  location.reload();
}

searchForm.addEventListener("submit", groupFn);
