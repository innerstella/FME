const searchInput = document.querySelector("#search-form input");
const searchForm = document.querySelector("#search-form");
const searchArea = document.querySelector("#searchArea");

const HIDDEN_CLASSNAME = "hidden";

function onSearchSubmit(event) {
  event.preventDefault();
  searchForm.classList.add(HIDDEN_CLASSNAME);
  const locationname = searchInput.value;
  localStorage.setItem("locationname", locationname);
  console.log(locationname);
  window.open(
    "https://twitter.com/search?q=" +
      //장소
      locationname +
      //해시태그
      "%23승연아_우즈야_여기야 OR " +
      "%23신동_넌이미먹었겠지 OR " +
      "%23박지성_단1g도안줌 OR " +
      "%23제노의_맛그당어 OR " +
      "%23런쥔이_밥무거쒀 OR " +
      "%23확신해찬맛집 OR " +
      "%23몬베베가_몬베베에게_추천하는_맛집 OR " +
      "%23백현이를_위한_맛집투어 OR " +
      "%23황제님을위한메뉴판 OR " +
      "%23강다니엘_염염긋 OR " +
      "%23완전_장원영_스타일_아니냐구 OR " +
      "%23ㄷㅂㅇㅈ OR " +
      "%23런쥔이의_맛집내비게이션 OR " +
      "%23승철이_이거먹고_볼빵빵했꾸마 OR " +
      "%23정한아_마니머거여ㅎㅎ OR " +
      "%23조슈아_먹어보슈아 OR " +
      "%23순영아_이거_맛있어 OR " +
      "%23원우야_여기_테이스티 OR " +
      "%23민규라고치고_디너쇼해도돼 OR " +
      "%23도겸이도_도아할_맛집 OR " +
      "%23믿고먹어boo세요" +
      "&src=typed_query&f=top"
  );

  // 검색 후 창 새로고침
  location.reload();
}

searchForm.addEventListener("submit", onSearchSubmit);

import { openModal, closeModal } from "./modal.js";

const $ = (selector) => document.querySelector(selector);

$(".btn-open-modal").addEventListener("click", () => {
  openModal();
});

$(".modal-container").addEventListener("click", (event) => {
  if (event.target === $(".modal-container")) {
    closeModal();
  }
});

$(".modal-close").addEventListener("click", () => {
  closeModal();
});
