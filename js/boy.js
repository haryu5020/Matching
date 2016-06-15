$(document).ready(function(){
    var boy_obj=[{
        "img" : "boy_pic1.PNG",
        "name" : "기네스 단가라 반팔티",
        "price" : "13,000원"
    },{
        "img" : "boy_pic2.PNG",
        "name" : "포넨 헨리넥 린넨셔츠",
        "price" : "25,000원"
    },{
        "img" : "boy_pic3.PNG",
        "name" : "홀리데이 레이어드 반팔티",
        "price" : "17,000원"
    },{
        "img" : "boy_pic4.PNG",
        "name" : "타이프 워싱데님",
        "price" : "17,000원"
    },{
        "img" : "boy_pic5.PNG",
        "name" : "트리플 반팔티셔츠",
        "price" : "18,000원"
    },{
        "img" : "boy_pic6.PNG",
        "name" : "루즈 레이어드 반팔티",
        "price" : "9,000원"
    },{
        "img" : "boy_pic7.PNG",
        "name" : "올리브 시어서커체크셔츠",
        "price" : "13,000원"
    },{
        "img" : "boy_pic8.PNG",
        "name" : "허리밴딩 데님팬츠",
        "price" : "17,000원"
    },{
        "img" : "boy_pic9.PNG",
        "name" : "루비 데님 하프팬츠",
        "price" : "12,000원"
    },{
        "img" : "boy_pic10.PNG",
        "name" : "카일 배색 반팔티",
        "price" : "11,000원"
    }]
    
    
    for(var i=0;i<boy_obj.length;i++){
        $.each(boy_obj[i], function(key, value){
            if(key=="img"){
                img="img/boy_item/"+value;
                $("#pic_num" +i +">img").attr("src", img);
            }else if(key=="name"){
                $("#pic_num" +i+ ">p").prepend(value);
            }else if(key=="price"){
                $("#pic_num" +i+ ">.price").text(value);
            }
        })
    }
});