$(".closetList").click(function(){
    var top=$(this).children(".top").children("img").attr("src");
    var under=$(this).children(".under").children("img").attr("src");
    $("#manekin > .top").children("img").attr("src", top);
    $("#manekin > .under").children("img").attr("src", under);
    $("#upView > img").attr("src", top);
    $("#bottomView > img").attr("src", under);
})

