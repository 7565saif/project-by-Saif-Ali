$(document).ready(function() {
    var productList = window.localStorage.getItem('product-list');
    productList = productList === null || productList === '' ? [] : productList;
    productList = productList.length > 0 ? JSON.parse(productList) : [];

    var totalCount = 0;
    for(var i=0; i<productList.length; i++) {
        totalCount = totalCount + productList[i].count;
    }

    $('#cart-count').html(totalCount);
})


// SECONDpAGE

$(document).ready(function(){
    $('.center').slick({
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: false,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
    });

    function createHomePageProductCard(obj) {
      // <div class="product-card">
      //     <a href='/details.html'>
      //     <img class="product-image" src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg" />
          
      //     <div class="product-meta">
      //         <h4>Men Navy Solid Sweatshirt</h4>
      //         <h5>United Colors of Benetton</h5>
      //         <p>Rs 2599</p>
      //     </div>
      //     </a>
      // </div>

      var mainDiv = document.createElement('div');
      mainDiv.classList.add('product-card');

      var productLink = document.createElement('a');
      productLink.href = '/product/details.html?p='+obj.id;

      var productImage = document.createElement('img');
      productImage.classList.add('product-image');
      productImage.src = obj.preview;
      productImage.alt = obj.name + ' Pic';

      productLink.appendChild(productImage);

      var innerDiv = document.createElement('div');
      innerDiv.classList.add('product-meta');

      var productName = document.createElement('h4');
      var productNameText = document.createTextNode(obj.name);
      productName.appendChild(productNameText);

      var productBrand = document.createElement('h5');
      var productBrandText = document.createTextNode(obj.brand);
      productBrand.appendChild(productBrandText);

      var productPrice = document.createElement('p');
      var productPriceText = document.createTextNode('Rs ' + obj.price);
      productPrice.appendChild(productPriceText);

      innerDiv.appendChild(productName);
      innerDiv.appendChild(productBrand);
      innerDiv.appendChild(productPrice);

      mainDiv.appendChild(productLink);
      mainDiv.appendChild(innerDiv);

      return mainDiv;
    }

    $.get('https://5d76bf96515d1a0014085cf9.mockapi.io/product', function(data, status) {
      var response = data;

      for(var i=0; i<response.length; i++) {
        if(response[i].isAccessory) {
          $('#accessory-grid').append(createHomePageProductCard(response[i]))
        } else {
          $('#clothing-grid').append(createHomePageProductCard(response[i]))
        }
      }
    })
});


// product


$(document).ready(function() {
    var productList = window.localStorage.getItem('product-list');
    productList = productList === null || productList === '' ? [] : productList;
    productList = productList.length > 0 ? JSON.parse(productList) : [];

    var totalCount = 0;
    for(var i=0; i<productList.length; i++) {
        totalCount = totalCount + productList[i].count;
    }

    $('#cart-count').html(totalCount);
})

$(document).ready(function() {
    var productId = window.location.search.split('=')[1];
    var currentObj = null;

    function createProductImages(url, pos) {
        var image = document.createElement('img');
        image.src = url

        if(pos === 0) {
            image.classList.add("active-image");
        }

        image.onclick = function() {
            $('#product-images img').removeClass("active-image")
            image.classList.add("active-image");
            $('#product-preview').attr('src', url);
        }

        return image;
    }

    $.get('https://5d76bf96515d1a0014085cf9.mockapi.io/product/' + productId, function(data, status) {
        currentObj = data;
        $('#product-preview').attr('src', data.preview)
        $('#product-title').html(data.name);
        $('#product-brand').html(data.brand);
        $('#description').html(data.description);
        $('#product-price').html(data.price);

        for(var i=0; i<data.photos.length; i++) {
            $('#product-images').append(createProductImages(data.photos[i], i));
        }
    })

    $("#btn-add-to-cart").click(function() {
        $('#btn-add-to-cart').addClass('bigger');
        setTimeout(function() {
            $('#btn-add-to-cart').removeClass('bigger');
        }, 200)

        var productList = window.localStorage.getItem('product-list');
        productList = productList === null || productList === '' ? [] : productList;
        productList = productList.length > 0 ? JSON.parse(productList) : [];

        // productList.push(currentObj);
        // window.localStorage.setItem('product-list', JSON.stringify(productList));
        console.log(productList);

        var foundAtPos = -1;
        for(var i=0; i < productList.length; i++) {
            // console.log(productList[i].id);
            if(parseInt(productList[i].id) == parseInt(currentObj.id)) {
                foundAtPos = i;
            }
        }

        if(foundAtPos > -1) {
            productList[foundAtPos].count = productList[foundAtPos].count + 1;
            console.log(productList[foundAtPos].count);
            window.localStorage.setItem('product-list', JSON.stringify(productList));
        } else {
            currentObj.count = 1;
            productList.push(currentObj);
            console.log(productList);
            window.localStorage.setItem('product-list', JSON.stringify(productList));
        }

        var totalCount = 0;
        for(var i=0; i<productList.length; i++) {
            totalCount = totalCount + productList[i].count;
        }
    
        $('#cart-count').html(totalCount);
    })
});

// BASE2


$(document).ready(function() {
    var productList = window.localStorage.getItem('product-list');
    productList = productList === null || productList === '' ? [] : productList;
    productList = productList.length > 0 ? JSON.parse(productList) : [];

    var totalCount = 0;
    for(var i=0; i<productList.length; i++) {
        totalCount = totalCount + productList[i].count;
    }

    $('#cart-count').html(totalCount);
})