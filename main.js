var shot = ["https://www.youtube.com/embed/kM78hErGmEo?rel=0&amp;controls=0&amp;showinfo=0&amp;start=380&end=388;autoplay=1",
"https://www.youtube.com/embed/kM78hErGmEo?rel=0&amp;controls=0&amp;showinfo=0&amp;start=1&end=10;autoplay=1",
"https://www.youtube.com/embed/kM78hErGmEo?rel=0&amp;controls=0&amp;showinfo=0&amp;start=380&end=388;autoplay=1",
"https://www.youtube.com/embed/abCtUV_mGZs?rel=0&amp;controls=0&amp;showinfo=0&amp;start=96&end=106;autoplay=1",
"https://www.youtube.com/embed/TTLB_nhBiMM?rel=0&amp;controls=0&amp;showinfo=0&amp;start=233&end=243;autoplay=1",
"https://www.youtube.com/embed/Vc5fTIz29Nw?rel=0&amp;controls=0&amp;showinfo=0&amp;start=141&end=152;autoplay=1",
"https://www.youtube.com/embed/Xkuqe8q1dLQ?rel=0&amp;controls=0&amp;showinfo=0&amp;start=381&end=390;autoplay=1",
];
var shot3 = ["https://www.youtube.com/embed/Vc5fTIz29Nw?rel=0&amp;controls=0&amp;showinfo=0&amp;start=141&end=150"];

var teamscore = 0;
var intervalId;
var timer = 0;

function randomshot() {
    var x = Math.floor(Math.random() * shot.length);
    var imagepicker = shot[x];
    document.getElementById("dunkpic").src = imagepicker;
    if (x > 2) {
        addscore();
    } else {
        noscore();
    }

}

function randomshot3(){
    var x = Math.floor(Math.random() * shot3.length);
    var imagepicker = shot3[x];
    document.getElementById("dunkpic").src = imagepicker;
    if (x < 1) {
        addscore3();

    } else {
        noscore();
    }

}

function addscore() {
  teamscore += 1;
  openNav();
  document.getElementById("teamdisplay").innerHTML = teamscore;
  setTimeout(function blackout() {document.getElementById("myNav").style.height = "0%";},  11000);

}

function addscore3() {
  teamscore += 1;
  openNav();
  document.getElementById("teamdisplay").innerHTML = teamscore;
    setTimeout(function blackout() {document.getElementById("myNav").style.height = "0%";},  11000);
}

function noscore() {
  teamscore += 0;
  openNav();
  document.getElementById("teamdisplay").innerHTML = teamscore;
  setTimeout(function blackout() {document.getElementById("myNav").style.height = "0%";},  11000);
}



 //dialogue functions for the adding presentation
function present() {
    document.getElementById("presentationembedurl").showModal();
}

function closepresent() {
document.getElementById("presentationembedurl").close();
  var x = document.getElementById("slidesurl").value;
  document.getElementById("lesson").src = x;


}


//timer functions

function RunTimer() {
    timer++;
    $("#timer").html(timer);

}

$(function() {
  intervalId = setInterval(RunTimer, 1000);
});
