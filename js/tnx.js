const searchInput = document.querySelector("#search-form input");
const searchForm = document.querySelector("#search-form");
const searchArea = document.querySelector("#searchArea");

const HIDDEN_CLASSNAME = "hidden";

function tnxFn(event) {
  event.preventDefault();
  searchForm.classList.add(HIDDEN_CLASSNAME);
  const locationname = searchInput.value;
  localStorage.setItem("locationname", locationname);
  console.log(locationname);
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
}

searchForm.addEventListener("submit", tnxFn);
