
//Client Class
let Client=(firstName,lastName,email,password,orders)=>{
    return {
    id:idClient(),
    firstName:firstName,
    lastName:lastName,
    email:email,
    password:password,
    orders:[],
    } 
}
//array of clients

//generate ID Function
let IDGenerator=()=>{
    let id=0;
	let generator=()=>{id++;return id}
	return generator
}


//ID generator for clients;
let idClient=IDGenerator();
//ID generator for clothes;
let idCloth=IDGenerator();

//clothes Class
let Clothes=(name,gender,price,img)=>{
    return {
    id:idCloth(),
    name:name,
    gender:gender,
    price:price,
    imgSrc:img
    } 
}
//array of clothes
let clothes =[
    Clothes("Red suit",'F',150,"Img/clothes1.jpg"),
    Clothes("Pink dress",'F',220,"Img/clothes2.jpg"),
    Clothes("pink and black",'F',120,"Img/clothes3.jpg"),
    Clothes("black shoes",'F',170,"Img/clothes4.jpg"),
    Clothes("black suit",'F',100,"Img/clothes5.jpg"),
    Clothes("black chemise",'M',50,"Img/clothes6.jpg"),
    Clothes("blue chemise",'M',60,"Img/clothes7.jpg"),
]

//array to display 6 element in each pageand map it to change to values






//both paragaraphs should be hidden first
$("#SignInDialog").hide();
$("#SignUpDialog").hide();


//pop using jqueryUI dialog method
$("#signinToggle").click(()=>{
    $("#SignInDialog").dialog();
  } );

$("#signUpToggle").click(()=>{
    $("#SignUpDialog").attr("background-color","white")
    $("#SignUpDialog").dialog();
  } );




//slider 
var img=['Img/slider1.jpg','Img/slider2.jpg','Img/slider3.jpg'];
var image=$("#slide"); 
var i=0

//slider interval
setInterval((()=>{
	image.attr("src",img[i]);
    if (i<img.length-1){
       i++
    }
	else {
        i=0
    }
}),5000)

$("#imgSlider").show()
$("#afterSlide").hide()



 //pagination test
 let disArray=[];
 let copyArray=clothes.slice();


//displayClothes;

let displayClothes=(arr)=>{
    arr.forEach(e=>$("#grid-container").append(`<div class="grid-item">
    <img class="imgCard" src="${e.imgSrc}">
    <p class="pName">${e.name}</p>
    <p class="pPrice">${e.price}</p>
</div>`))
}


displayClothes(copyArray.slice(0,6))
//button next on click func
$("#next").click(()=>{
   $('.pageNumber').html(parseInt($('.pageNumber').html())+1)
   $('#prev').show();
   $(".grid-item").remove();
   if(copyArray[5]!==undefined){
    displayClothes(copyArray.slice(6))
    $('#next').hide();
   }
})

 
//hide previous button if page ==1

$('#prev').hide();
$("#prev").click(()=>{
    copyArray=clothes;
    $('.pageNumber').html(parseInt($('.pageNumber').html())-1)
    if(parseInt($('.pageNumber').html())===1){
        $('#prev').hide();
        $('#next').show();
        
    }
    $(".grid-item").remove();
    displayClothes(copyArray.slice(0,6));
 })
 



//hover on Card
$('.imgCard').hover(()=>{
    $('.imgCard').append("<button class='appendedButton'>clickMe</button>")
}, )


//li click to filter elements
$("#man").click(()=>{
   let k= clothes.filter(e=>e.gender==="M")
    $("#imgSlider").hide()
    $("#afterSlide").show()
    $(".grid-item").remove();
    displayClothes(k);
   
})
$("#women").click(()=>{
    let k= clothes.filter(e=>e.gender==="F")
    $("#imgSlider").hide()
    $("#afterSlide").show()
    $(".grid-item").remove();
    displayClothes(k);
    
})
$("#kids").click(()=>{
    let k= clothes.filter(e=>e.gender==="K")
    $("#imgSlider").hide()
    $("#afterSlide").show()
    $(".grid-item").remove();
    displayClothes(k);
})

//search bar
$("#searchButt").click(()=>{
    displayArray=clothes.filter(e=>{return e.name.toUpperCase().includes($("#search").val().toUpperCase())})
    $("#imgSlider").hide()
    $("#afterSlide").show()
    $(".grid-item").remove();
    displayClothes(displayArray);
})
//home page onClick Logo
$("#logo").click(()=>{
    location.reload();
})