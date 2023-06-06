const postWrap = document.querySelector(".post-wrap");

let bar = document.createElement("div");

bar.style.height = "4px";
bar.style.width = "0";
bar.style.backgroundColor = "#6633cc";
bar.style.position = "fixed";
bar.style.top = "0";
bar.style.left = "0";
bar.style.zIndex = "9999";
bar.style.transition = "0.2s";

document.body.append(bar);

function updateBar() {
  const textHeight = postWrap.offsetHeight;

  const pagePositonY = window.pagePositonY;

  const updateBar = (pagePositonY * 100) / textHeight;

  bar.style.width = updateBar + "%";
}

window.addEventListener("Load", () => {
  document.addEventListener("scroll", updateBar);
});
