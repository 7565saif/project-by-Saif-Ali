var search = document.getElementById('search');
var close = document.getElementById('close');
var bar = document.getElementById('bar');
var navSection = document.getElementById('section-name');
if(bar){
  bar.addEventListener('click', ()=>{
    navSection.classList.add('active');
  });
}
  if(close){
   close.addEventListener('click', ()=>{
      navSection.classList.remove('active');
    });
}
if(search){
  search.addEventListener('click', ()=>{
    search.classList.add('active');
  });
}


$(document).ready(function () {
  var queryParams = location.search;
  var params = new URLSearchParams(queryParams);
  var productId = params.get("productId");

  
  // $.ajax({
  //   url: "https://5d76bf96515d1a0014085cf9.mockapi.io/product/" + productId,
  //   method: "GET",
  //   success: function (data) {
  //     // console.log(data);
  //     product = data;


var ajax = new XMLHttpRequest();
ajax.open("GET", "https://5d76bf96515d1a0014085cf9.mockapi.io/product");
ajax.send();
ajax.addEventListener("readystatechange", onReadyStateChange);
function onReadyStateChange(e) {
  if ((e.target.readyState === 4) & (e.target.status === 200)) {
    console.log(JSON.parse(e.target.responseText));
    var data = JSON.parse(e.target.responseText);
    productId = data;

  

 
      var main = document.getElementById('main-container');
      
      var checkoutheader = document.createElement('div');
      checkoutheader.classList.add('checkoutheader')
      var p1 =document.createElement('h2');
      p1.classList.add('head1');
      p1.innerText="Total Carts";
      var p2 =document.createElement('h2');
      p2.innerText="Total Amount";
      p2.classList.add('head2');
      checkoutheader.append(p1, p2);
      main.append(checkoutheader,);


      var cardContainer = document.createElement("div");
      cardContainer.classList.add("container");
      var lefCart = document.createElement("div");
      lefCart.classList.add("lefCart");
      lefCart.append(cardContainer);
      main.append(lefCart);

      var proceedOrder = document.createElement("div");
      proceedOrder.classList.add("order");
      
      lefCart.append(proceedOrder);




      var content = document.createElement("div");
      content.classList.add("content");
      cardContainer.append(content);



      var productName = document.createElement("h1");
      productName.classList.add("name");
      productName.innerText = productId.name;

      content.append(productName);


      

      var bigImg = document.createElement("div");
      bigImg.classList.add("bigImg");
      cardContainer.append(bigImg,content);

      var mainImg = document.createElement("img");
      bigImg.append(mainImg);
      mainImg.id = "mainImg";
      mainImg.src = productId.preview;
      


      var brand = document.createElement("p");
      brand.classList.add("brand");
      brand.innerText = productId.brand;
      content.append(brand);


      var price = document.createElement("h4");
      price.classList.add("price");
      price.innerText = "Price: Rs " + productId.price;
      proceedOrder.append(price);

      var paragraph = document.createElement("h2");
      paragraph.classList.add("paragraph");
      paragraph.innerText = "Description";

      var Paragraph = document.createElement("p");
      Paragraph.classList.add("Paragraph");
      Paragraph.innerText = productId.description;
      paragraph.append(Paragraph);

      var preview = document.createElement("h2");
      preview.innerText = "Product Preview";
      content.append(paragraph, preview);
    }
  }  
});



