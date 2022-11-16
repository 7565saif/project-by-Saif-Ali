var search = document.getElementById("search");
var close = document.getElementById("close");
var bar = document.getElementById("bar");
var navSection = document.getElementById("section-name");
if (bar) {
  bar.addEventListener("click", () => {
    navSection.classList.add("active");
  });
}
if (close) {
  close.addEventListener("click", () => {
    navSection.classList.remove("active");
  });
}
if (search) {
  search.addEventListener("click", () => {
    search.classList.add("active");
  });
}

$(document).ready(function () {
  var queryParams = location.search;
  var params = new URLSearchParams(queryParams);
  var productId = params.get("productId");
  // console.log(productId);

  $.ajax({
    url: "https://5d76bf96515d1a0014085cf9.mockapi.io/product/" + productId,
    method: "GET",
    success: function (data) {
      // console.log(data);
      productId = data;

      var main = document.getElementById("main-container");

      var cardContainer = document.createElement("div");
      cardContainer.classList.add("container");
      main.append(cardContainer);

      var content = document.createElement("div");
      content.classList.add("content");
      cardContainer.append(content);

      var productName = document.createElement("h1");
      productName.classList.add("name");
      productName.innerText = productId.name;

      content.append(productName);

      var bigImg = document.createElement("div");
      bigImg.classList.add("bigImg");
      cardContainer.append(bigImg, content);

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
      content.append(price);

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

      var productImg = productId.photos;

      for (var counter = 0; counter < productImg.length; counter++) {
        var smallImg = document.createElement("img");
        content.append(smallImg);
        smallImg.id = "smallImg";
        smallImg.classList.add("images");
        smallImg.src = productImg[counter];
        smallImg.addEventListener("click", onSmallImgClick);
      }
      function onSmallImgClick(e) {
        mainImg.src = e.target.src;
      }

      var btndiv = document.createElement("div");
      btndiv.classList.add("btn");

      var cardbtn = document.createElement("button");
      btndiv.append(cardbtn);
      cardbtn.classList.add("cardBtn");
      cardbtn.type = "submit";
      cardbtn.innerText = "add to cart";
      cardbtn.id = "btnId";

      content.append(btndiv);

// BTN FUNCTIONALITY
  const addToCartBtns = document.querySelectorAll('.cardBtn')
  addToCartBtns.forEach((btn)=>{
    btn.addEventListener('click', addItemFunction)
  } )

  function addItemFunction(data){
    const img = data.target;
     
    console.log(img);
  }
// COUNTER CART
      var count = 0;

      var counter = document.getElementById('counter');
      var btndiv = document.getElementById('btnId').addEventListener('click', event =>{
        var counter = counter.classList;
        var btndiv =  'btnId';
        counter++;

        counter.innerText = count;
        counter.remove(btndiv, counter.contains(btndiv));
        setTimeout(() =>
        counter.classList.add('btnId')
        ,1)
      })
      
    },
  });
});


/*

class CartItem{
  constructor(bigImg, content
    , name, brand, price, paragraph, images){
      this.bigImg = bigImg
      this.content = content
      this.name = name
      this.brand = brand
      this.price = price
      this.paragraph = paragraph
      this.images = images
    }
}
class locationCart{
  static key = 'cartItems'

  static getlocalCartItems(){
    let cartMap = new Map()
    const cart = localStorage.getItem(this.key)
    
    if(cart ===null || cart.length===0)
    return new Map(object.entries(JSON.parse(cart))) 
  }
  static addItemToloacalCart(id, item){
    let cart= localcart.getlocalCartItems()
    if(cart.has(id)){
      let mapItem = cart.get(id)
      mapItem.quantity +=1
      cart.set(id, mapItem)
    }
    else
    cart.set(id, item)
    localStorage.setItem(key, JSON.stringify(Object.fromEntries(cart)))
    updateCartUI()
  }
  static removeItemFromCart(id){
    let cart = localCart.getlocalCartItems()
    if(cart.has(id)){
      let mapItem = cart.get(id)
      if(mapItem.quantity>1){
        mapItem.quantity -=1
        cart.set(id, mapItem)
      }else
      cart.delete(id)
    }
    if(cart.length===0)
    localStorage.clear()
    else
    localStorage.setItem(key, JSON.stringify(Object.fromEntries(cart)))
    updateCartUI()
  }
}
*/