const title = document.querySelector(".title");

const headerContainer = document.createElement("div");
headerContainer.className = "header-container";

const headerLogo = document.createElement("img");
headerLogo.src = "./jjk_logo.png";
headerLogo.className = "logo";

const headerTitle = document.createElement("h1");
headerTitle.textContent = "Jujutsu Kaisen Characters";

const headerButton = document.createElement("Home");
headerButton.textContent = "Home";
headerButton.addEventListener("click", (e) => {
  window.location = "/";
});

headerContainer.appendChild(headerLogo);
headerContainer.appendChild(headerTitle);
title.appendChild(headerContainer);
