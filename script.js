let div = document.getElementById("move-div");
let title = document.getElementById("title");

function isTouchDevice() {
  try {
    document.createEvent("TouchEvent");
    return true;
  } catch (e) {
    return false;
  }
}

const move = (e) => {
  try {
  
    var x = !isTouchDevice() ? e.pageX : e.touches[0].pageX;
    var y = !isTouchDevice() ? e.pageY : e.touches[0].pageY;
  } catch (error) {}
  div.style.left = x + "px";
  div.style.top = y + "px";
  const rect = title.getBoundingClientRect();
  if (x > rect.left && x < rect.right && y > rect.top && y < rect.bottom) {
    div.style.width = 5 + "em";
    div.style.height = 5 + "em";
  } else {
    div.style.width = 2 + "em";
    div.style.height = 2 + "em";
  }
};

//For mouse
document.addEventListener("mousemove", (e) => {
  move(e);
});

//For touch
document.addEventListener("touchmove", (e) => {
  move(e);
});
