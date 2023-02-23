window.onload=function()  {//this is just for codes that needs to load before it shows
  
//Local storage
let Username = localStorage.getItem('id');
document.getElementById("useRname").innerHTML="Welcome home  :"+ Username;




  // document.body.innerHTML= new Date();//once again we used this to check if its conected to home 
console.log('Hello Console')//used for testing too
//document.write('Hello to the world')//still used for testing
var date=new Date();//let date=new Date() this is the same
//document.body.innerHTML="<h1>"  + date +"</h1>";

let huisnumber=15644;
let province="Limpopo";
//document.body.innerHTML="<b>My fake Id address  :</b>" + huisnumber + ", "+province;

let total=0.00; //i ve declared a value and also declared it
let price1,price2,price3;
price1=26.00;
price2=34.78;
price3=98.00;
total=price1+price2+price3;
//document.getElementById("total").innerHTML="Eggs: "+price1+"<br>Bread :"+price2+"<br>Milk :"+price3+"<br>Total :"+total; 

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let Qualifies="The user Does qualifies for a free delivery.";
let notQualifies="The user does NOT qualifies for a Free delivery.";

// printing or sending out total
 //   document.getElementById("total").innerHTML="The total is :"+ total;
//if (total>120)
 //{
// if the user buys oer R120.00, then custoer qualifies  for free delivery.
    
  // document.getElementById("status").innerHTML=Qualifies;
 //}
 //else
 //{
   //document.getElementById("status").innerHTML=notQualifies;
 //}
 
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//ARRAYs and LISTs   postion starts at [0]
///let shoppingList=["Bread "," Milk "," Sugar "," Eggs "];       //displaying an array
//let shoppingList= new Array("Bread "," Milk "," Sugar "," Eggs "); same as above

//let shoppingList=new Array({ item: "SQL" },
                           //{ item: "Python" },
 //                          { item: "CSS" },
  //                         { item: "Javascript" }, 
  //                         { item: "HTML"}      ) ;

   //let ListUL="<ol>";
 //  for(let i= 0; i < shoppingList.length; i++ )// loop 

     // {
     //  ListUL+="<li>"+ shoppingList[i].item +"</li>";
     // }   
  // / ListUL+="</ol>";
   // document.getElementById("ListsItems").innerHTML= ListUL;

 //shoppingList[4]="Coffe";    // This can be used to add or chage items to that list
 //document.getElementById("ListsItems").innerHTML=shoppingList+ " , Number of Items    : "+shoppingList.length;    // this shows entire list + length
  
 //documemt.getElementById("ListsItems").innerHTML=shoppingList[0];  note the positioning style
 ///++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
     //using tables
 
     let Skilllist = new Array(
      {img1: "./assets/imgz/css.webp",  language: "CSS", skill: 5},//name of items and their elements
      {img1: "./assets/imgz/html.webp", language: "HTML", skill: 5},//check commas
      {img1: "./assets/imgz/javascript.jfif",  language: "Javascript", skill: 5},
      {img1: "./assets/imgz/sql.webp",  language: "SQL", skill: 5},
      {img1: "./assets/imgz/python.webp", language: "Python", skill: 5}
  );

  let ULnew = "<div>";
  for (let i = 0; i < Skilllist.length; i++) {
     //  ULnew += "<table><tr><td><img src='" + Skilllist[i].img1 + "' alt='supposed to be my list' /></td></tr>" +
      ULnew += "<table style='border-radius: 16px;width: 100%;margin: 10px;border:1px solid grey;border'><tr><td rowspan='3' style='width:150px'><img src='" + Skilllist[i].img1 + "' alt='supposed to be my list'style='width: 100px; height: 100px; object-fit: cover; border-radius: 50%;' /></td></tr>" +
               "<tr><td>lang: " + Skilllist[i].language + "</td></tr>" +
               "<tr><td>skill: " + Skilllist[i].skill + "</td></tr></table>";
  }
  // "<table style='width: 100%; margin: 8px; border:2px solid grey; border-radius: 16px;'><tr><td rowspan='3' style='width:150px'><img src='" +
  // style='width: 100px; height: 100px; object-fit: cover; border-radius: 50%;' 
  
  ULnew += "</div>";
  document.getElementById("ListItems2").innerHTML = ULnew;
}