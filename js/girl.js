$(document).ready(function(){
    var girl_obj=[{
        "img" : "girl_pic1.PNG",
        "name" : "러브헤이트원피스(OP)",
        "price" : "11,000원"
    },{
        "img" : "girl_pic2.PNG",
        "name" : "헤이쥬드원피스(OP)",
        "price" : "31,000원"
    },{
        "img" : "girl_pic3.PNG",
        "name" : "보헤미안원피스(OP)",
        "price" : "17,000원"
    },{
        "img" : "girl_pic4.PNG",
        "name" : "도도청스커트(8K)",
        "price" : "17,000원"
    },{
        "img" : "girl_pic5.PNG",
        "name" : "컷팅치마바지(PA)",
        "price" : "27,000원"
    },{
        "img" : "girl_pic6.PNG",
        "name" : "리엣스커트(8K)",
        "price" : "19,000원"
    },{
        "img" : "girl_pic7.PNG",
        "name" : "다이너주름스커트(8K)",
        "price" : "17,000원"
    },{
        "img" : "girl_pic8.PNG",
        "name" : "로코스커트(8N)",
        "price" : "12,000원"
    },{
        "img" : "girl_pic9.PNG",
        "name" : "단가라슬림원피스(OP)",
        "price" : "12,000원"
    },{
        "img" : "girl_pic10.PNG",
        "name" : "유혹스커트(8K)",
        "price" : "13,000원"
    }]
    
    
    for(var i=0;i<girl_obj.length;i++){
        $.each(girl_obj[i], function(key, value){
            if(key=="img"){
                img="img/girl_item/"+value;
                $("#pic_num" +i +">img").attr("src", img);
            }else if(key=="name"){
                $("#pic_num" +i+ ">p").prepend(value);
            }else if(key=="price"){
                $("#pic_num" +i+ ">.price").text(value);
            }
        })
    }
});