﻿$(document).ready(function () {
    var x = 0;
    var s = "";

    console.log("hello pluralsight");


    var theForm = $("#theForm");
    theForm.hide();

    var button = $("#buyButton");
    button.on("click", function () {
        console.log("Buying Item");
    });

    var productInfo = $(".product-props li");
    productInfo.on("click", function () {
        console.log("You click " + $(this).text());
    });
});