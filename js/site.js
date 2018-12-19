$('img').css('display', 'none').fadeIn(1600);


//    $(document).ready(function(){
//        $("#placeMenu").click(function () {
//            $("#placeSubMenu").slideToggle("slow");
//        });
//    });


//$("#myid").hover(function () {
//    $("#showme").hide();
//});
//$("#myid").hover(function () {
    
//    $("#showme").show();
//});

//$('.PicNav a').hover( function () {
//    $(this).css("font-size", "2em")
//});
//for News flips and handle
    //$(document).ready(function(){
    //    var getDivId;
    //    $("#panel").toggle("slow");
        
    //          $('#flip, #flip1, #flip2').click(function (e) {
    //              getDivId = ($(this).attr('id').toString());
    //              if (getDivId == "flip") {
    //                  $("#panel1").slideUp("slow");
    //                  $("#panel2").slideUp("slow");
    //                  $("#panel").toggle("slow");
    //              }
    //              if (getDivId == "flip1") {
    //                $("#panel").slideUp("slow");
    //                $("#panel2").slideUp("slow");
    //                $("#panel1").toggle("slow");
    //                }
    //              if(getDivId == "flip2"){
    //                    $("#panel").slideUp("slow");
    //                    $("#panel1").slideUp("slow");
    //                    $("#panel2").toggle("slow");
    //               }

    //           });
       
    //});
//PlaceInfo hididng right span
$(window).resize(function () {

    var width = $(window).width();
    var height = $(window).height();
    if (width < 751) {
        $("#RightAdv").hide();
    }
    if (width > 750) {
        $("#RightAdv").show();
    }
});
//$(window).resize(function () {
//    if (height > 840) {
//        $("#newsAdv").show();
//    }
//    else {
//        $("#newsAdv").hide();
//    }
//});
//Tool tip
    $(document).ready(function () {
        $("[data-toggle=tooltip]").tooltip();
    });

//New get and set newscontent height


function getHeight() {

    document.getElementById("demo").innerHTML = document.getElementById("Navigation").clientHeight;
    var conDiv = 0;
    conDiv= document.getElementById("Navigation").clientHeight;
    if (conDiv > 600) {
        document.getElementById("newsAdv").style.display = 'block';
    }
    else {
        document.getElementById("newsAdv").style.display = 'none';
    }
    
    //document.getElementById("newsIframe").clientHeight = document.getElementById("setNavigation").clientHeight;
}