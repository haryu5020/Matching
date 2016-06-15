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
        "name" : "더 뮤즈티셔츠",
        "price" : "12,000원"
    },{
        "img" : "girl_pic11.PNG",
        "name" : "캘리그티셔츠",
        "price" : "12,000원"
    },{
        "img" : "girl_pic12.PNG",
        "name" : "마린단가라티",
        "price" : "11,000원"
    },{
        "img" : "girl_pic13.PNG",
        "name" : "스모크블라우스",
        "price" : "16,000원"
    },{
        "img" : "girl_pic14.PNG",
        "name" : "꿈결처럼블라우스",
        "price" : "27,000원"
    },{
        "img" : "girl_pic15.PNG",
        "name" : "레이스스퀘어티",
        "price" : "12,000원"
    },{
        "img" : "girl_pic16.PNG",
        "name" : "아이스트리티",
        "price" : "7,000원"
    },{
        "img" : "girl_pic17.PNG",
        "name" : "슈에뜨세라티",
        "price" : "20,000원"
    },{
        "img" : "girl_pic18.PNG",
        "name" : "스멍키데님숏팬츠",
        "price" : "7,000원"
    },{
        "img" : "girl_pic19.PNG",
        "name" : "포버튼숏팬츠",
        "price" : "21,000원"
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