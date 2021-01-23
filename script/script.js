$(document).ready(function(){
    console.log("1");
    
    $(".btn").click(function(){
        var akosesi = Number($("#akose").val());
        var bkosesi = Number($("#bkose").val());
        var a= parseFloat(akosesi);
        var b= parseFloat(bkosesi);
        console.log("Girildi");
        console.log(a);
        var alan = a*b;
        var cevre = 2*(a+b);
        console.log("Girildi2");
        console.log(alan);
        $(".alan").text(alan);
        console.log("Girildi3");
        $(".cevre").text(cevre);
        console.log("Girildi4");
        $("#dortgen").css({"width": a, "height":b});
        console.log("Girildi5");
    });

});