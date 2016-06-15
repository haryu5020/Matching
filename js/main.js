$(document).ready(function(){
    var new_obj=[{
        "img" : "girl_pic11.PNG",
        "name" : "캘리그티셔츠",
        "price" : "12,000원"
    },{
        "img" : "boy_pic11.PNG",
        "name" : "캘리포니아 박스티셔츠",
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
        "img" : "boy_pic12.PNG",
        "name" : "컬러사이드 지퍼반팔티",
        "price" : "22,000원"
    },{
        "img" : "girl_pic14.PNG",
        "name" : "꿈결처럼블라우스",
        "price" : "27,000원"
    },{
        "img" : "girl_pic15.PNG",
        "name" : "레이스스퀘어티",
        "price" : "12,000원"
    },{
        "img" : "boy_pic13.PNG",
        "name" : "나이스 워싱트임박스티",
        "price" : "9,000원"
    }]//new item
    
    
    
    var best_obj=[{
        "img" : "boy_pic14.PNG",
        "name" : "스퀘어드 셔츠",
        "price" : "19,000원"
    },{
        "img" : "girl_pic16.PNG",
        "name" : "아이스트리티",
        "price" : "7,000원"
    },{
        "img" : "boy_pic15.PNG",
        "name" : "로이드 헨리넥셔츠",
        "price" : " 13,000원"
    },{
        "img" : "boy_pic16.PNG",
        "name" : "요거트 단가라반팔티",
        "price" : "14,000원"
    },{
        "img" : "girl_pic17.PNG",
        "name" : "슈에뜨세라티",
        "price" : "20,000원"
    },{
        "img" : "girl_pic18.PNG",
        "name" : "스멍키데님숏팬츠",
        "price" : "7,000원"
    },{
        "img" : "boy_pic17.PNG",
        "name" : "아폴로 나염박스티",
        "price" : "17,000원"
    },{
        "img" : "girl_pic19.PNG",
        "name" : "포버튼숏팬츠",
        "price" : "21,000원"
    }]
    
    for(var i=0;i<new_obj.length;i++){
        $.each(new_obj[i], function(key, value){
            if(key=="img"){
                img="img/item/"+value;
                $("#pic_num" +i +">img").attr("src", img);
            }else if(key=="name"){
                $("#pic_num" +i+ ">p").prepend(value);
            }else if(key=="price"){
                $("#pic_num" +i+ ">.price").text(value);
            }
        })
    }
    
    for(var i=0;i<best_obj.length;i++){
        $.each(best_obj[i], function(key, value){
            if(key=="img"){
                img="img/item/"+value;
                $("#pic_bst" +i +">img").attr("src", img);
            }else if(key=="name"){
                $("#pic_bst" +i+ ">p").prepend(value);
            }else if(key=="price"){
                $("#pic_bst" +i+ ">.price").text(value);
            }
        })
    }
})