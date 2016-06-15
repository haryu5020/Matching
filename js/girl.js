$(document).ready(function(){
    var girl_obj=[{
        "img" : "girl_pic1.PNG",
        "name" : "밀크쇼콜라티",
        "price" : "13,000원"
    },{
        "img" : "girl_pic2.PNG",
        "name" : "살랑블라우스",
        "price" : "29,000원"
    },{
        "img" : "girl_pic3.PNG",
        "name" : "우디카나시티",
        "price" : "7,000원"
    },{
        "img" : "girl_pic4.PNG",
        "name" : "페페크롭티",
        "price" : "7,000원"
    },{
        "img" : "girl_pic5.PNG",
        "name" : "컷팅치마바지",
        "price" : "27,000원"
    },{
        "img" : "girl_pic6.PNG",
        "name" : "쫀쫀스키니",
        "price" : "9,000원"
    },{
        "img" : "girl_pic7.PNG",
        "name" : "레몬칩티셔츠",
        "price" : "9,000원"
    },{
        "img" : "girl_pic8.PNG",
        "name" : "리필숏팬츠",
        "price" : "22,000원"
    },{
        "img" : "girl_pic9.PNG",
        "name" : "블루밍숏팬츠",
        "price" : "19,000원"
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