const DOMBody = document.body;
DOMBody.classList.add("no-scroll");

const cookieContainer = document.createElement("div");
cookieContainer.classList.add("cookie-container");

const cookieHeader = document.createElement("header");
const cookieHeaderText = document.createElement("h2");
cookieHeaderText.textContent = "Cookie Notice";
cookieHeader.appendChild(cookieHeaderText);

const cookieHeaderSubText = document.createElement("p");
cookieHeaderSubText.textContent = "To enhance your experience and ensure the proper functioning of our website, we use cookies. Cookies are small text files that are stored on your device when you visit a website. They help us analyze how you interact with our site and provide you with a personalized browsing experience.";
cookieHeader.appendChild(cookieHeaderSubText);

const cookieSubHeader = document.createElement("header");
cookieSubHeader.classList.add("sub-header");

const cookieSubHeaderText = document.createElement("h3");
cookieSubHeaderText.textContent = "Why do we use cookies";

cookieSubHeader.appendChild(cookieSubHeaderText);

const cookieList = document.createElement("ul");

const cookieListArray = ["Essential Cookies", "Performance Cookies", "Functionality Cookies", "Marketing Cookies"];

cookieListArray.forEach((liHeader, index) => {
    const listItem = document.createElement("li");
    const listHeader = document.createElement("h4");
    const listText = document.createElement("p");

    listHeader.textContent = liHeader;

    const listTextArray = [
        "These cookies are necessary for the basic functionality of our website. They enable you to navigate our site and use essential features like accessing your shopping cart.", 
        "We use performance cookies to collect information about how you use our website, such as which pages you visit and any error messages you may encounter. This helps us improve the performance and usability of our site.",
        "These cookies allow us to remember your preferences, such as language and region settings, to provide you with a more personalized experience.",
        "We may use marketing cookies to deliver relevant advertisements based on your interests. These cookies also help us measure the effectiveness of our marketing campaigns."
    ]

    listText.textContent = listTextArray[index];

    listItem.appendChild(listHeader);
    listItem.appendChild(listText);
    cookieList.appendChild(listItem);
});

const appendChildren = ((parent, elements) => {
    elements.forEach((element) => {
        parent.appendChild(element);
    });
});

appendChildren(cookieContainer, [cookieHeader, cookieSubHeader, cookieList]);

const cookieSelectContainer = document.createElement("div");
cookieSelectContainer.classList.add("select-container");

const createCheckboxElement = ((inputType, id) => {
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", inputType);
    checkbox.setAttribute("id", id);

    return checkbox;
});

const createLabelElement = ((labelText, forInput) => {
    const label = document.createElement("label");
    label.textContent = labelText;
    label.setAttribute("for", forInput);

    return label;
});

const createCheckboxContainer = ((checkbox, label) => {
    const checkboxSpan = document.createElement("span");
    checkboxSpan.appendChild(checkbox);
    checkboxSpan.appendChild(label);

    return checkboxSpan;
})

const essCheckbox = createCheckboxElement("checkbox", "essential");
const essCheckboxLabel = createLabelElement("Essential Cookies", "essential");
const essCheckboxContainer = createCheckboxContainer(essCheckbox, essCheckboxLabel);

const perCheckbox = createCheckboxElement("checkbox", "performance");
const perCheckboxLabel = createLabelElement("Performance Cookies", "performance");
const perCheckboxContainer = createCheckboxContainer(perCheckbox, perCheckboxLabel);

const funcCheckbox = createCheckboxElement("checkbox", "functional");
const funcCheckboxLabel = createLabelElement("Functionality Cookies", "functional");
const funcCheckboxContainer = createCheckboxContainer(funcCheckbox, funcCheckboxLabel);

const marketCheckbox = createCheckboxElement("checkbox", "market");
const marketCheckboxLable = createLabelElement("Marketing Cookies", "market");
const marketCheckboxContainer = createCheckboxContainer(marketCheckbox, marketCheckboxLable);

appendChildren(cookieSelectContainer, [essCheckboxContainer, perCheckboxContainer, funcCheckboxContainer, marketCheckboxContainer]);

const cookieBtnContainer = document.createElement("div");
cookieBtnContainer.classList.add("btn-container");

const allBtn = document.createElement("p");
allBtn.textContent = "All Cookies";
allBtn.classList.add("all-btn");

const selectedBtn = document.createElement("p");
selectedBtn.textContent = "Selected Cookies";
selectedBtn.classList.add("selected-btn");

appendChildren(cookieBtnContainer, [allBtn, selectedBtn]);

cookieSelectContainer.appendChild(cookieBtnContainer);

essCheckbox.checked = true;
perCheckbox.checked = true;
funcCheckbox.checked = true;
marketCheckbox.checked = true;

allBtn.addEventListener("click", () => {
    essCheckbox.checked = true;
    perCheckbox.checked = true;
    funcCheckbox.checked = true;
    marketCheckbox.checked = true;

    removeCookie();
});

selectedBtn.addEventListener("click", () => {
    removeCookie();
})

const removeCookie = () => {
    if (essCheckbox.checked || perCheckbox.checked || funcCheckbox.checked || marketCheckbox.checked) {
        cookieContainer.remove();
        DOMBody.classList.remove("no-scroll");
    }
    else {
        alert("You have to choose at least one");
    }
}

cookieContainer.appendChild(cookieSelectContainer);

DOMBody.appendChild(cookieContainer);