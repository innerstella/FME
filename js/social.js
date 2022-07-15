const searchInput = document.querySelector("#search-form input");
const searchForm = document.querySelector("#search-form");
const searchArea = document.querySelector("#searchArea");

const HIDDEN_CLASSNAME = "hidden";

function oneweFn(event) {
  event.preventDefault();
  searchForm.classList.add(HIDDEN_CLASSNAME);
  const locationname = searchInput.value;
  localStorage.setItem("locationname", locationname);
  console.log(locationname);
  window.open(
    "https://twitter.com/search?q=" +
      //장소
      locationname +
      "%23이거무디맛있어 OR " +
      "%23산삼_나_이거_먹었삼 OR " +
      "%23사회인먹짱클럽" +
      "&src=typed_query&f=top"
  );
}

searchForm.addEventListener("submit", oneweFn);
