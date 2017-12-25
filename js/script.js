var listAllFilm = document.querySelector(".listAll");
var player = document.querySelector(".playerContainer");
var textDescription = document.querySelector(".describ");
var menuItem = document.querySelectorAll(".listMenuItem");

for (let e = 0; e < menuItem.length; e++) {
  menuItem[e].addEventListener("click", function() {
    categoryChoice(listAllFilm, e);
    videoChoice();
  });
}

function categoryChoice(listAllFilm, e) {
  listAllFilm.innerHTML = "";
  if (e === 0) {
    var text = 'All';
  } else if (e === 1) {
    var text = 'Action';
  } else if (e === 2) {
    var text = 'Comedy';
  } else if (e === 3) {
    var text = 'Horror / Thriller';
  } else {
    var text = 'Animation';
  }
  for (i = 0; i < data.films.length; i++) {
    if (text === 'All') {
      listCreate(listAllFilm);
      heart();
    } else {
      if (data.films[i].category === text) {
        listCreate(listAllFilm);
        heart();
      }
    }

  }
}

function listCreate(listAllFilm) {
  listAllFilm.innerHTML += '<li class="filmList choix">' +
    '<div class="imgAllContainer">' +
    '<a href="#laVideo">' +
    '<img class="filmImg" src="img/' + data.films[i].img + '">' +
    '<div class="contenuImgContainer">' +
    '<h3 class="filmName">' + data.films[i].title + '</h3>' +
    '<h3 class="filmYear">' + data.films[i].year + '</h3>' +
    '<p class="filmDescription">' + data.films[i].description + '</p>' +
    '<div id="star' + i + '" class="starImgContainer"></div>' +
    '<img class="heart" src="img/like.svg"></img>' +
    '</div>' +
    '</a>' +
    '</div>' +
    '</li>';
  var star = document.getElementById("star" + i);
  for (var a = 0; a < data.films[i].rating; a++) {
    star.innerHTML += '<img class="rating" src="img/star.png">';
  }
  for (var a = 0; a < (5 - data.films[i].rating); a++) {
    star.innerHTML += '<img class="rating" src="img/starEmpty.png">';
  }
}

function heart() {
  var heart = document.querySelectorAll(".heart");
  var listWanted = document.querySelector(".envieList");
  for (let h = 0; h < heart.length; h++) {
    heart[h].addEventListener("mouseover", function() {
      heart[h].src = "img/like-2.svg";
    })
    heart[h].addEventListener("mouseout", function() {
      heart[h].src = "img/like.svg";
    })
    heart[h].addEventListener("click", function() {
      var name = document.querySelectorAll(".filmName");
      listWanted.innerHTML += '<li class="sub-menu-item">' + name[h].textContent + '</li>';
    })
  }
}

function videoChoice() {
  var list = document.querySelectorAll(".choix");
  var p = 1
  for (let i = 0; i < list.length; i++) {
    list[i].addEventListener("click", function() {
      var link = list[i].querySelector(".filmName");
      var c = compare(link);
      var video = videoCreate(player, textDescription, c);
      var playerContainer = document.querySelector(".playerContainer");
      var menu = document.querySelector(".vidMenu");
      var play = document.querySelector(".pause");
      var stop = document.querySelector(".stop");
      var fullscreen = document.querySelector(".fullScreen");
      var songBar = document.querySelector(".songBar");
      play.className = "pause";
      menu.style.display = "none";

      hoverVideo(player, menu);
      p = 1;
      p = stopVideo(stop, video, play, p);
      playPause(play, video, p);
      songBar.addEventListener("click", function() {
        video.volume = songBar.value * 0.1;
      })
      video.addEventListener("timeupdate", function() {
        update(video);
        document.querySelector('#progressTime').textContent = formatTime(video.currentTime);
      });
      fullScreen(video, playerContainer, menu, fullscreen);
    });
  }
}

function compare(text) {
  for (i = 0; i < data.films.length; i++) {
    if (text.textContent === data.films[i].title) {
      return i;
    }
  }
}

function videoCreate(player, textDescription, c) {
  player.innerHTML = '<video id="our-video" class="video">' +
    '<source src="video/' + data.films[c].src + '" type="video/mp4">' +
    '</video>' +
    '<nav class="vidMenu">' +
    '<button class="pause"></button>' +
    '<img class="stop" src="img2/stop.png">' +
    '<div class="progressContainer">' +
    '<div id="progressBarControl">' +
    '<div id="progressBar"></div>' +
    '</div>' +
    '<span id="progressTime">00:00</span>' +
    '<span class="totalTime">' + data.films[c].duration + '</span>' +
    '</div>' +
    '<div class="songContainer">' +
    '<div class="songIconContainer"><img class="songIcon" src="img2/son.png"></div>' +
    '<input class="songBar" type="range" min="0" max ="10" value="5" style="width=100px">' +
    '</div>' +
    '<img class="fullScreen" src="img2/fullscreen.png">' +
    '</nav>';
  textDescription.style.display = "block";
  textDescription.innerHTML = '<h2 class="videoTitle">' + data.films[c].title + '</h2>' +
    '<h3 class="videoAuthor">' + data.films[c].author + '</h3>' +
    '<h3 class="videoAuthor">' + data.films[c].year + '</h3>' +
    '<p class="videoDescription">' + data.films[c].description + '</p>' +
    '<div class="ratingContainer"></div>';
  var rating = document.querySelector(".ratingContainer");
  for (var a = 0; a < data.films[c].rating; a++) {
    rating.innerHTML += '<img class="rating" src="img/star.png">';
  }
  for (var a = 0; a < (5 - data.films[c].rating); a++) {
    rating.innerHTML += '<img class="rating" src="img/starEmpty.png">';
  }
  var video = document.getElementById('our-video');
  video.play();
  var container = document.querySelector(".containerAllVideo");
  var playerContainer = document.querySelector(".playerContainer");
  playerContainer.style.display = "block";
  return video;
}

function hoverVideo(player, menu) {
  player.addEventListener("mouseover", function() {
    menu.style.display = "";
  });
  player.addEventListener("mouseout", function() {
    menu.style.display = "none";
  });
}

function playPause(play, video, p) {
  play.addEventListener("click", function() {
    var video = document.getElementById("our-video");
    if (p === 1) {
      play.className = "play";
      video.pause();
      p = 0;
    } else {
      play.className = "pause";
      video.play();
      p = 1;
    }
  });
}

function stopVideo(stop, video, play, p) {
  stop.addEventListener("click", function() {
    video.currentTime = 0;
    video.pause();
    play.className = "play";
    p = 0;
    return p;
  })
}

function formatTime(time) {
  var hours = Math.floor(time / 3600);
  var mins = Math.floor((time % 3600) / 60);
  var secs = Math.floor(time % 60);

  if (secs < 10) {
    secs = "0" + secs;
  }

  if (hours) {
    if (mins < 10) {
      mins = "0" + mins;
    }

    return hours + ":" + mins + ":" + secs; // hh:mm:ss
  } else {
    return mins + ":" + secs; // mm:ss
  }
}

function update(player) {
  var duration = player.duration; // Durée totale
  var time = player.currentTime; // Temps écoulé
  var fraction = time / duration;
  var percent = fraction * 100;

  var progress = document.querySelector('#progressBar');

  progress.style.width = percent + '%';
}

function fullScreen(video, playerContainer, menu, fullscreen) {
  var f = 1;
  var container = document.querySelector(".containerAllVideo");
  var description = document.querySelector(".describ");
  var header = document.querySelector(".header");
  fullscreen.addEventListener("click", function() {
    video.classList.toggle("videoFullScreen");
    playerContainer.classList.toggle("playerContainerFullScreen");
    menu.classList.toggle("vidMenuFullScreen");
    container.classList.toggle("containerAllVideoFullScreen");
    var docElm = document.documentElement;
    if (f === 1) {
      if (docElm.requestFullscreen) {
        docElm.requestFullscreen();
      } else if (docElm.mozRequestFullScreen) {
        docElm.mozRequestFullScreen();
      } else if (docElm.webkitRequestFullScreen) {
        docElm.webkitRequestFullScreen();
      }
      header.style.display = "none";
      description.style.display = "";
      f = 0;
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
      description.style.display = "block";
      header.style.display = "";
      f = 1;
    }
    window.addEventListener("keydown", function(event) {
      if (event.which === 27) {
        video.className = "video";
        playerContainer.className = "playerContainer";
        menu.className = "vidMenu";
        container.className = "containerAllVideo";
        description.style.display = "block";
        header.style.display = "";
        f = 1;
      }
    });
  });
}
