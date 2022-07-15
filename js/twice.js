const searchInput = document.querySelector("#search-form input");
const searchForm = document.querySelector("#search-form");
const searchArea = document.querySelector("#searchArea");

const HIDDEN_CLASSNAME = "hidden";

function twiceFn(event) {
  event.preventDefault();
  searchForm.classList.add(HIDDEN_CLASSNAME);
  const locationname = searchInput.value;
  localStorage.setItem("locationname", locationname);
  console.log(locationname);
  window.open(
    "https://twitter.com/search?q=" +
      //장소
      locationname +
      "%23쩝쩝박사_말랑이에게 OR " +
      "%23지효야나먹어쪄 OR " +
      "%23사나없이먹으나마나" +
      "&src=typed_query&f=top"
  );
}

searchForm.addEventListener("submit", twiceFn);
