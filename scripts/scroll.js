$(document).ready(function() {
            $('#myContainer').multiscroll({
            	anchors: ['first', 'second', 'third', 'four'],
            	menu: '#menu',
            	css3: true
            });
        });


$(document).ready(function(){
    $("#showHideContent").click(function () {
        if ($("#map").is(":hidden")) {
            $("#map").show("slow");}
        else {
            $("#map").hide("slow");
        }
        return false;
    });
});