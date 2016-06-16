var up=[
    "girl_pic1_1.png",
    "girl_pic3_2.png",
    "girl_pic4_3.png",
    "girl_pic16_1.png"
]
var bottom=[
    "girl_pic5_1.png",
    "girl_pic6_2.png",
    "girl_pic9_1.png",
    "girl_pic9_2.png"
]
var up_url="img/matching_img/girl/";
var bottom_url="img/matching_img/girl/";

var up_list;
var i=1;
var bottom_list;
var j=1;

$(document).ready(function(){
    up_list=up_url+up[0];
    bottom_list=bottom_url+bottom[0];
    $("#up" + "> img").attr("src", up_list);
    $("#bottom" + "> img").attr("src", bottom_list);
})





$("#up_right").click(function(){
    if(i>=up.length){
        up_list=up_url+up[up.length-1];
        i=up.length-2;
    }else{
        up_list=up_url+up[i];
    }
    i+=1;
    $("#up" + "> img").attr("src", up_list);
})

$("#up_left").click(function(){
    i-=1;
    if(i<0){
        up_list=up_url+up[0];
        i=1;
    }else{
        up_list=up_url+up[i];
    }
    $("#up" + "> img").attr("src", up_list);
})


$("#bottom_right").click(function(){
    if(j>=bottom.length){
        bottom_list=bottom_url+bottom[bottom.length-1];
        j=bottom.length-2;
    }else{
        bottom_list=bottom_url+bottom[j];
    }
    j+=1;
    $("#bottom" + "> img").attr("src", bottom_list);
})

$("#bottom_left").click(function(){
    j-=1;
    if(j<0){
        bottom_list=bottom_url+up[0];
        j=1;
    }else{
        bottom_list=bottom_url+up[j];
    }
    $("#bottom" + "> img").attr("src", bottom_list);
})



$("#up").on("dragend", function(){
    var up_cloth=$("#up" + " > img").attr("src");
    $("#top" + " > img").attr("src", up_cloth);
    
    $("#drag" + " > p").html("");
})
$("#bottom").on("dragend", function(){
    var bottom_cloth=$("#bottom" + " > img").attr("src");
    $("#under" + " > img").attr("src", bottom_cloth);
    $("#drag" + " > p").html("");
})