document.addEventListener("DOMContentLoaded", () => {
  const banners = document.querySelectorAll(".banner__body");
  const buttons = document.querySelectorAll(".banner__pagination-button");
  const wrapper = document.querySelector(".banner__wrapper");
  const wrapperItem = document.querySelector(".banner__wrapper-item");
  let currentIndex = 0;

  function showBanner(index) {
    banners.forEach((banner, i) => {
      banner.classList.remove("active");
      buttons[i].classList.remove("is-current");
    });

    banners[index].classList.add("active");
    buttons[index].classList.add("is-current");
  }

  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      currentIndex = parseInt(e.target.getAttribute("data-index"));
      console.log(currentIndex);
      showSlide(currentIndex);
      showBanner(currentIndex);
      console.log(currentIndex);
    });
  });

  function showSlide(index) {
    wrapper.style.transform = `translateX(-${index *  wrapperItem.clientWidth}px)`;
  }
  showBanner(currentIndex);
});
