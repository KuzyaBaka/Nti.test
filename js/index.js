document.addEventListener("DOMContentLoaded", function () {
  const profile = document.getElementById("profile");
  const menu = document.querySelector(".profile-menu");
  const body = document.querySelector("body");

  const sliderButton = document.getElementById("sliderButton");
  const slides = document.querySelector(".sliderholder");
  const slide = document.querySelectorAll(".slider");

  const phone = document.getElementById("tel-number");

  /* Открытие профиля */
  profile.addEventListener("mousemove", () => {
    menu.classList.remove("hidden");
  });

  body.addEventListener("click", () => {
    if (!menu.classList.contains("hidden")) {
      menu.classList.add("hidden");
    }
  });

  /* Сайдер */

  let currentSlide = 0;
  const slideWidth = slides.offsetWidth;

  const nextSlide = () => {
    if (currentSlide <= 4) {
      currentSlide++;
      moveSlides();
    }
  };

  const moveSlides = () => {
    slide.style.transform = `translateX(${-slideWidth * currentSlide}px)`;
  };

  sliderButton.addEventListener("click", nextSlide);

  /* Валидация номера */

  const getNumbers = (input) => {
    return input.value.replace(/\D/g, "");
  };

  const handlePhoneInput = (e) => {
    let input = e.target,
      inputValue = getNumbers(input),
      formattedInputValue = "";

    if (!inputValue) {
      return (input.value = "");
    }

    if (["7", "8", "9"].indexOf(inputValue[0]) > -1) {
      if (inputValue[0] == "9") inputValue = "7" + inputValue;
      let firstSymbols = inputValue[0] == "8" ? "8" : "+7";
      formattedInputValue = firstSymbols + " ";

      if (inputValue.length > 1) {
        formattedInputValue += "(" + inputValue.substring(1, 4);
      }

      if (inputValue.length >= 5) {
        formattedInputValue += ") " + inputValue.substring(4, 7);
      }
      if (inputValue >= 8) {
        formattedInputValue += "-" + inputValue.substring(7, 9);
      }
      if (inputValue >= 10) {
        formattedInputValue += "-" + inputValue.substring(9, 11);
      }
    } else {
      formattedInputValue = "+" + inputValue.substring(0, 16);
    }

    input.value = formattedInputValue;
  };

  phone.addEventListener("input", handlePhoneInput);
});
