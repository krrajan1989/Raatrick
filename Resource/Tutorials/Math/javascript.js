window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 22 || document.documentElement.scrollTop > 22) {
    document.getElementById("content-item").style.top = "60px";
	document.getElementById("content-list").style.height = "92vh";
  } else {
    document.getElementById("content-item").style.top = "175px";
	document.getElementById("content-list").style.height = "78vh";
  }
}