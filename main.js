
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

//generate ID Function
let IDGenerator=()=>{
    let id=0;
	let generator=()=>{id++;return id}
	return generator
}


//ID generator for clients;
let idClient=IDGenerator();
//ID generator for forniture;
let idForniture=IDGenerator();

//forniture Class
let Forniture=(name,category,price)=>{
    return {
    id:idForniture(),
    name:name,
    category:category,
    price:price,
    rate:rate,
    } 
}

//both paragaraphs should be hidden first
$("#SignInDialog").hide();
$("#SignUpDialog").hide();


//pop using jqueryUI dialog method
$("#signinToggle").click(()=>{
    $("#SignInDialog").dialog();
  } );

$("#signUpToggle").click(()=>{
    $("#SignUpDialog").dialog();
  } );





