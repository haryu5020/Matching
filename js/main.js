$(document).ready(function(){
    var new_obj=[{
        "img" : "con1.PNG",
        "name" : "꽃게랑티셔츠(T)",
        "price" : "15,000원"
    },{
        "img" : "con2.PNG",
        "name" : "아이러브티(T)",
        "price" : "12,000원"
    },{
        "img" : "con3.PNG",
        "name" : "데님숏팬츠(JE)",
        "price" : "24,000원"
    },{
        "img" : "con4.PNG",
        "name" : "로스숏팬츠(JE)",
        "price" : "16,000원"
    },{
        "img" : "con5.PNG",
        "name" : "데님언발숏팬츠(JE)",
        "price" : "15,000원"
    },{
        "img" : "con6.PNG",
        "name" : "보헤미안투톤원피스(OP)",
        "price" : "17,000원"
    },{
        "img" : "con7.PNG",
        "name" : "크롭티(8N)",
        "price" : "9,000원"
    },{
        "img" : "con8.PNG",
        "name" : "에몽반팔티(T)",
        "price" : "9,000원"
    }]//new item
    
    
    
    var best_obj=[{
        "img" : "con9.PNG",
        "name" : "멜빵팬츠(JE)",
        "price" : "19,000원"
    },{
        "img" : "con10.PNG",
        "name" : "아기새싹티(T)",
        "price" : "12,000원"
    },{
        "img" : "con11.PNG",
        "name" : "단짝반팔티(T)",
        "price" : " 9,000원"
    },{
        "img" : "con12.PNG",
        "name" : "첼로브이넥티(T)",
        "price" : "14,000원"
    },{
        "img" : "con13.PNG",
        "name" : "리틀시스터티(T)",
        "price" : "10,000원"
    },{
        "img" : "con14.PNG",
        "name" : "아이스트리티(T)",
        "price" : "7,000원"
    },{
        "img" : "con15.PNG",
        "name" : "세일러티셔츠(T)",
        "price" : "13,000원"
    },{
        "img" : "con16.PNG",
        "name" : "5부팬츠(8N)",
        "price" : "19,000원"
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