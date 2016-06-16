$(".closetList").click(function(){
    var top=$(this).children(".top").children("img").attr("src");
    var under=$(this).children(".under").children("img").attr("src");
    $("#manekin > .top").children("img").attr("src", top);
    $("#manekin > .under").children("img").attr("src", under);
    $("#upView > img").attr("src", top);
    $("#bottomView > img").attr("src", under);
})

$("#cancel").click(function(){
    var top=$("#manekin > .top").children("img").attr("src");
    var under=$("#manekin > .under").children("img").attr("src");
    
    $("#manekin > .top").children("img").attr("src", " ");
    $("#manekin > .under").children("img").attr("src", " ");
    $("#upView > img").attr("src", " ");
    $("#bottomView > img").attr("src", " ");
    
    $(".closetList").each(function(){
        var chk=$(this).children(".top").children("img").attr("src");
        if(chk==top){
            $(this).children(".top").children("img").attr("src", " ");
            $(this).children(".under").children("img").attr("src", " ");
        }
    })
})
