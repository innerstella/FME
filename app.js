const searchInput = document.querySelector("#search-form input");
const searchForm = document.querySelector("#search-form");
const searchArea = document.querySelector('.searchArea');

const HIDDEN_CLASSNAME = "hidden";
const LOCATION_KEY = "currentStorage";
//const SHOWING = "showing";

function onSearchSubmit(event) {
	event.preventDefault();
	searchForm.classList.add(HIDDEN_CLASSNAME);
	const locationname = searchInput.value;
	//localStorage.setItem("locationname", locationname);
	localStorage.setItem(LOCATION_KEY, locationname);

  if (locationname === ""){
	  alert("장소를 입력하세요.");
  }
  console.log(locationname);
}

searchForm.addEventListener("submit", onSearchSubmit);