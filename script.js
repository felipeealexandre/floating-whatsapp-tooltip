var whatsappButton = document.querySelector(".whatsapp-button");
var tooltip = document.querySelector(".tooltip");

whatsappButton.addEventListener("mouseover", function () {
  tooltip.style.opacity = "1";
  tooltip.style.visibility = "visible";
});

whatsappButton.addEventListener("mouseout", function () {
  tooltip.style.opacity = "0";
  tooltip.style.visibility = "hidden";
});
