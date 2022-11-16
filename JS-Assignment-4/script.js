var productData = {
    "id": "1",
    "name": "Men Navy Blue Solid Sweatshirt",
    "preview": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
    "photos": [
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg"
    ],
    "description": "Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem",
    "size": [
      1,
      1,
      0,
      1,
      0
    ],
    "isAccessory": false,
    "brand": "United Colors of Benetton",
    "price": 2599
  }



for(var counter =0; counter< productData.length; counter++){
  var product = productData[counter];
}



  
var cardContainer = document.createElement("div");
cardContainer.classList.add('container');

var bigImg = document.createElement("div");
bigImg.classList.add('bigImg');

var mainImg = document.createElement('img');
mainImg.id ="mainImg";
mainImg.src = productData.preview;


var content = document.createElement("div");
content.classList.add('content');

var productName = document.createElement("h1");
productName.classList.add('name');
productName.innerText =productData.name;

var brand = document.createElement("p");
brand.classList.add('brand');
brand.innerText =productData.brand;

var price = document.createElement("h4");
price.classList.add('price');
price.innerText = "Price: Rs " + productData.price;

var paragraph = document.createElement("h2");
paragraph.classList.add('paragraph');
paragraph.innerText = "Description";

var Paragraph = document.createElement("p");
Paragraph.classList.add('Paragraph');
Paragraph.innerText = productData.description;

var preview = document.createElement('h2');
preview.innerText = "Product Preview";

var smallImg = document.createElement("div");
smallImg.classList.add('smallImg');


function Allimg(imageSources){

var img = document.createElement("img");
img.classList.add("Allimg");
img.src= imageSources;


bigImg.append(mainImg);
cardContainer.append(bigImg, content);
content.append(productName);
content.append(brand);
content.append(price);
paragraph.append(Paragraph);
content.append(paragraph,preview);
content.append(smallImg);
smallImg.append(img);



document.body.append(cardContainer);

}

  Allimg("https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg");
  Allimg("https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg");
  Allimg("https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg");
  Allimg("https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg");
  Allimg("https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg");

var mainImg = document.getElementById('mainImg');
var img = document.getElementsByClassName('Allimg');

img[0].onclick = function(){
  mainImg.src = img[0].src;
}


img[1].onclick = function(){
  mainImg.src = img[1].src;
}


img[2].onclick = function(){
  mainImg.src = img[2].src;
}


img[3].onclick = function(){
  mainImg.src = img[3].src;
}


img[4].onclick = function(){
  mainImg.src = img[4].src;
}