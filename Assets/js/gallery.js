const gallerContainer = document.getElementById("product-gallery");

const baseUrl = "./Assets/images/";

const galleryArray = ["milk.jpg", "pancakes.jpg", "banana.jpg", "pizza.jpg"];

const galleryFigure = document.createElement("figure");

const bigImgFigure = document.createElement("figure");
bigImgFigure.classList.add("big-figure");
const galleryBigImg = document.createElement("img");
galleryBigImg.src = baseUrl + galleryArray[0];

bigImgFigure.appendChild(galleryBigImg);
galleryFigure.appendChild(bigImgFigure);

const regImgFigure = document.createElement("figure");
regImgFigure.classList.add("reg-figure");

galleryArray.forEach((img) => {
  const galleryRegImg = document.createElement("img");
  const galleryRegImgSrc = baseUrl + img;
  galleryRegImg.src = galleryRegImgSrc;

  regImgFigure.appendChild(galleryRegImg);
});

galleryFigure.appendChild(regImgFigure);

gallerContainer.appendChild(galleryFigure);
