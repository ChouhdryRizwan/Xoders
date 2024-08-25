var swiper = new Swiper(".testinomials-crousel", {
  spaceBetween: 30,
  speed: 1500,
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    480: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  mousewheel: false,
  keyboard: true,
});


function showProductsByCategories(categories) {
  const productList = document.getElementById("product-list-six");
  productList.innerHTML = "";

  categories.forEach((category) => {
    const filteredProducts = products.filter(
      (product) => product.category === category
    );
    const limitedProducts = filteredProducts.slice(0, 2);

    limitedProducts.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.className = "swiper-slide product-slide text-start";
      productCard.innerHTML = `
        <img
          class="img-fluid product-card-image"
          src="${product.images[0]}"
          alt="${product.name}"
        />
        <div class="product-star-rating mt-1">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="far fa-star"></i>
        </div>
        <h5 class="mt-1 product-card-name">${product.name}</h5>       
        <h4 class="mt-1 product-card-price">${product.price}</h4>
        <a href="productDetail.html?id=${product.id}"> 
          <button class="btn-view mt-3">
            Add to Cart 
            <i class="fa-solid fa-basket-shopping"></i>
          </button>
        </a>
      `;
      productList.appendChild(productCard);
    });
  });

  // Initialize Swiper
  new Swiper(".six-product-container", {
    spaceBetween: 30,
    speed: 1000,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    breakpoints: {
      1024: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 3,
      },
      450: {
        slidesPerView: 1,
      },
    },
  });
}

// Call the function with an array of categories
showProductsByCategories(["IndoorPlants", "EdiblePlants", "Ferns", "Herbs", "Soils"]);
