$(document).ready(function() {

  $("#total-items").text("2");

  $("#price-total").text(parseFloat($("#value-product-one").text()) + parseFloat($("#value-product-two").text()) + parseFloat($("#mail-one").val()));

  $("#product-one, #product-two, #select-mail").change(function() {
    let productOneQuantity = parseInt($("#product-one").val());
    let productTwoQuantity = parseInt($("#product-two").val());
    let sumQuantity = productOneQuantity + productTwoQuantity;

    if (sumQuantity !== 0) {
      $("#total-items").text(sumQuantity);
    }

    $("#price-total").text(parseFloat($("#value-product-one").text()) + parseFloat($("#value-product-two").text()) + parseFloat($("#mail-one").val()));
  });

  $("#product-one").change(function() {
    let productOneQuantity = parseInt($("#product-one").val());

    switch (productOneQuantity) {
      case 1:
        $("#value-product-one").text("10.00");
        break;
      case 2:
        $("#value-product-one").text("20.00");
        break;
      case 3:
        $("#value-product-one").text("30.00");
        break;
      case 4:
        $("#value-product-one").text("40.00");
        break;
      case 5:
        $("#value-product-one").text("50.00");
        break;
    }
  });

  $("#product-two").change(function() {
    let productTwoQuantity = parseInt($("#product-two").val());

    switch (productTwoQuantity) {
      case 1:
        $("#value-product-two").text("19.00");
        break;
      case 2:
        $("#value-product-two").text("38.00");
        break;
      case 3:
        $("#value-product-two").text("57.00");
        break;
      case 4:
        $("#value-product-two").text("76.00");
        break;
      case 5:
        $("#value-product-two").text("95.00");
        break;
    }
  });

  $("#select-mail").change(function() {
    let mailValue = parseFloat(this.value);

    $("#price-total").text((parseFloat($("#value-product-one").text()) + parseFloat($("#value-product-two").text()) + mailValue).toFixed(2));

    $(".btn-update").click(function(mailValue) {});
  });

  $(".fa-times").click(function() {
    $(this).parent().parent().html("");

    $("#price-total").parent().text("Click Update");
  });

});
