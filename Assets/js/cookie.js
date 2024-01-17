const DOMBody = document.body;

const cookieContainer = document.createElement("div");
cookieContainer.classList.add("cookie-container");

const cookieHeader = document.createElement("header");
const cookieHeaderText = document.createElement("h2");
cookieHeaderText.textContent = "Cookie Notice";
cookieHeader.appendChild(cookieHeaderText);

const cookieHeaderSubText = document.createElement("p");
cookieHeaderSubText.textContent = "To enhance your experience and ensure the proper functioning of our website, we use cookies. Cookies are small text files that are stored on your device when you visit a website. They help us analyze how you interact with our site and provide you with a personalized browsing experience.";

const cookieSubHeader = document.createElement("header");
cookieSubHeader.classList.add("sub-header");

const cookieSubHeaderText = document.createElement("h3");
cookieHeaderSubText.textContent = "Why do we use cookies";

const cookieList = document.createElement("ul");

const cookieListArray = ["Essential Cookies", "Performance Cookies", "Functionality Cookies", "Marketing Cookies"];

cookieListArray.forEach((liText) => {
    const listItem = document.createElement("li");
    const listText = document.createElement("p");

    listText.textContent = liText;

    listItem.appendChild(listText);
    cookieList.appendChild(listItem);
});