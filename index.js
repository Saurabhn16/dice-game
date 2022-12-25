

  var ran1=Math.floor(Math.random()*6)+1;
  var ran2=Math.floor(Math.random()*6)+1;
  var randomdiceimage="dice"+ ran1 +".png";
  var randomImageSource="images/"+randomdiceimage;

  var image1= document.querySelector(".img1");

  image1.setAttribute("src",randomImageSource);

  var randomdiceimage1="images/dice"+ ran2 +".png";
  var image1= document.querySelector(".img2");
  image1.setAttribute("src",randomdiceimage1);
  if (ran1>ran2) {
    document.querySelector("h1").innerHTML="PLAYER 1 wins"
  }
  else if(ran1<ran2) {
    document.querySelector("h1").innerHTML="PLAYER 2 wins"
  }
  else {
    document.querySelector("h1").innerHTML="DRAW!"
  }
