
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
let displayClothes=()=>{
    
}

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

$("#imgSlider").hide()

//hide previous button if page ==1

$('#prev').hide();

//button next on click func
$("#next").click(()=>{
   $('.pageNumber').html(parseInt($('.pageNumber').html())+1)
})

//hover on Card
$('.imgCard').hover(()=>{
    $('.imgCard').append("<button class='appendedButton'>clickMe</button>")
}, )


//li click to filter elements
$("#man").click(()=>{
   
})
$("#women").click(()=>{
   
})
$("#kids").click(()=>{
   
})
