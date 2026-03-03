'use strict';

let names = ['wallpaper1','wallpaper2','wallpaper3','wallpaper4','wallpaper5','wallpaper6','wallpaper7'];
let resolution = ['4k','2k','4k','2k','4k','HD','4k'];
let images = ['i1.jpg','i2.jpg','i3.jpg','i4.jpg','i5.jpg','i6.jpg','i7.jpg'];

// Smooth Scroll
document.documentElement.style.scrollBehavior = "smooth";

// Body Style
document.body.style.margin = "0";
document.body.style.fontFamily = "Arial, sans-serif";
document.body.style.background = "linear-gradient(to right, #141e30, #243b55)";

// Title
let title = document.createElement("h1");
title.textContent = "Cool Wallpapers 🫀";
title.style.color = "#fff";
title.style.textAlign = "center";
title.style.fontSize = "60px";
title.style.padding = "20px";
title.style.marginBottom = "30px";
title.style.animation = "fadeDown 1s ease forwards";

document.body.appendChild(title);

// Container
let container = document.createElement("div");
container.style.textAlign = "center";
container.style.paddingBottom = "50px";
document.body.appendChild(container);

// Animation Keyframes
let style = document.createElement("style");
style.textContent = `
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeDown {
  from {
    opacity: 0;
    transform: translateY(-40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
`;
document.head.appendChild(style);

// Card Function
function element(titleContent, resolutionText, imgsrc) {

    let card = document.createElement("div");
    let cardTitle = document.createElement("h2");
    let paragraph = document.createElement("p");
    let img = document.createElement("img");

    cardTitle.textContent = titleContent;
    paragraph.textContent = resolutionText;
    img.src = imgsrc;

    // Card Style
    card.style.width = "500px";
    card.style.backgroundColor = "#1e1e1e";
    card.style.color = "#fff";
    card.style.padding = "15px";
    card.style.margin = "15px";
    card.style.display = "inline-block";
    card.style.borderRadius = "15px";
    card.style.boxShadow = "0 10px 25px rgba(0,0,0,0.4)";
    card.style.transition = "0.4s ease";
    card.style.animation = "fadeUp 0.8s ease forwards";
    card.style.opacity = "0";

    // Image Style
    img.style.width = "100%";
    img.style.height = "350px";
    img.style.objectFit = "cover";
    img.style.borderRadius = "10px";
    img.style.marginTop = "10px";

    paragraph.style.color = "#00ffcc";
    paragraph.style.fontWeight = "bold";

    // Hover Effect
    card.addEventListener("mouseenter", function() {
        card.style.transform = "scale(1.05)";
        card.style.boxShadow = "0 15px 35px rgba(0,0,0,0.6)";
    });

    card.addEventListener("mouseleave", function() {
        card.style.transform = "scale(1)";
        card.style.boxShadow = "0 10px 25px rgba(0,0,0,0.4)";
    });

    card.appendChild(cardTitle);
    card.appendChild(paragraph);
    card.appendChild(img);
    container.appendChild(card);

    // Delay animation لكل كارت
    setTimeout(() => {
        card.style.opacity = "1";
    }, 200);
}

// Loop
for (let i = 0; i < names.length; i++) {
    element(names[i], resolution[i], `/images/${images[i]}`);
}