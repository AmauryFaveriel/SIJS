var leftBtn = document.querySelector(".btn-left");
var rightBtn = document.querySelector(".btn-right");
var img1 = document.querySelector(".img1");
var img2 = document.querySelector(".img2");
var img3 = document.querySelector(".img3");
var img4 = document.querySelector(".img4");
var img5 = document.querySelector(".img5");
var carouselLink1 = document.querySelector(".carousel-link1");
var carouselLink1 = document.querySelector(".carousel-link2");
var carouselLink1 = document.querySelector(".carousel-link3");
var carouselLink1 = document.querySelector(".carousel-link4");
var carouselLink1 = document.querySelector(".carousel-link5");
var titrePerso = document.querySelector(".titre-perso");
var center = document.querySelector(".center");
var count = 0;

center.addEventListener("mouseover", function() {
  if (count == 0) {
    titrePerso.innerHTML = "NARUTO SHIPPUDEN <br> DANCE OF WAR";
  } else if (count == -1) {
    titrePerso.innerHTML = "THE 74th HUNGER <br> GAME";
  } else if (count == -2) {
    titrePerso.innerHTML = "JUSTICE LEAGUE <br> TRINITY FORCE";
  } else if (count == 1) {
    titrePerso.innerHTML = "TIE <br> FIGHTER ";
  } else if (count == 2) {
    titrePerso.innerHTML = "CHINESE TEENAGER <br> Fight scene";
  }


});

center.addEventListener("mouseout", function() {
  titrePerso.innerHTML = "<br><br>";
});



rightBtn.addEventListener("click", function() {
  count++;
  if (count >= 3) {
    count = 2;
    console.log(count);
  }
  if (count == 1) {
    img1.src = "img/img2.png";
    img2.src = "img/img3.png";
    img3.src = "img/img4.png";
    img4.src = "img/img5.png";
    img5.src = "img/img1.png";
  } else if (count == 2) {
    img1.src = "img/img3.png";
    img2.src = "img/img4.png";
    img3.src = "img/img5.png";
    img4.src = "img/img1.png";
    img5.src = "img/img2.png";
  } else if (count == 0) {
    img1.src = "img/img1.png";
    img2.src = "img/img2.png";
    img3.src = "img/img3.png";
    img4.src = "img/img4.png";
    img5.src = "img/img5.png";
  }
  if (count == -1) {
    img1.src = "img/img5.png";
    img2.src = "img/img1.png";
    img3.src = "img/img2.png";
    img4.src = "img/img3.png";
    img5.src = "img/img4.png";
  } else if (count == -2) {
    img1.src = "img/img4.png";
    img2.src = "img/img5.png";
    img3.src = "img/img1.png";
    img4.src = "img/img2.png";
    img5.src = "img/img3.png";
  }
});

leftBtn.addEventListener("click", function() {
  count--;
  if (count <= -3) {
    count = -2;
    console.log(count);
  }
  if (count == -1) {
    img1.src = "img/img5.png";
    img2.src = "img/img1.png";
    img3.src = "img/img2.png";
    img4.src = "img/img3.png";
    img5.src = "img/img4.png";
  } else if (count == -2) {
    img1.src = "img/img4.png";
    img2.src = "img/img5.png";
    img3.src = "img/img1.png";
    img4.src = "img/img2.png";
    img5.src = "img/img3.png";
  } else if (count == 0) {
    img1.src = "img/img1.png";
    img2.src = "img/img2.png";
    img3.src = "img/img3.png";
    img4.src = "img/img4.png";
    img5.src = "img/img5.png";
  } else if (count == 2) {
    img1.src = "img/img3.png";
    img2.src = "img/img4.png";
    img3.src = "img/img5.png";
    img4.src = "img/img1.png";
    img5.src = "img/img2.png";
  } else if (count == 1) {
    img1.src = "img/img2.png";
    img2.src = "img/img3.png";
    img3.src = "img/img4.png";
    img4.src = "img/img5.png";
    img5.src = "img/img1.png";
  }

});
