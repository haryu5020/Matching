$("#all").click(function(){
    var chk=$(this).is(":checked");
    if(chk){
        $(".pdtcheckbox").prop("checked", true);
    }else{
        $(".pdtcheckbox").prop("checked", false);
    }
})

