//alert("HELLO");

const drop_btn = document.querySelector(".drop-btn");
const menu_wrapper = document.querySelector(".shoppingcart-wrapper");
drop_btn.onclick = () => {
  menu_wrapper.classList.toggle("show");
};

$(document).ready(function () {
  $(".shoppingcart-items li:lt(3)").show();

  $("#next").click(function () {
    $("#prev").show();
    var last = $(".shoppingcart-items").children("li:visible:last");
    last.nextAll(".shoppingcart-items li:lt(3)").toggle(200);
    last.next().prevAll(".shoppingcart-items li").hide(200);

    var $this = $(this);
    if ($(".shoppingcart-items li").last().is(":visible")) {
      $this.hide();
    }
  });

  $("#prev").click(function () {
    $("#next").show();
    var first = $(".shoppingcart-items").children("li:visible:first");
    first.prevAll(".shoppingcart-items li:lt(3)").toggle(200);
    first.prev().nextAll(".shoppingcart-items li").hide(200);

    var $this = $(this);
    if ($(".shoppingcart-items li").first().is(":visible")) {
      $this.hide();
    }
  });
});
