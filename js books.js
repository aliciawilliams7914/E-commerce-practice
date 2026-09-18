function renderBooks() {
    const booksWrapper = document.querySelector(".books");

   

   const books = getBooks();

   const booksHtml = books.map((book) => {

   return `<div class="book">
<figure class="book__img--wrapper">
<img class="book__img" src="${book.url}" alt="">
</figure>
<div class="book__title">
${book.title}
</div>
<div class="book__ratings">
<i class="fas fa-star"></i>
<i class="fas fa-star"></i>
<i class="fas fa-star"></i>
<i class="fas fa-star"></i>
<i class="fas fa-star-half-alt"></i>
</div>
<div class="book__price">
<span class="book__price--normal">$${book.originalPrice}</span> $${book.discountedPrice}
</div>
</div>`;
});

   
    
 booksWrapper.innerHTML = booksHtml;
console.log(booksHtml)
 
}
 


setTimeout(() => {
renderBooks();
});



function getBooks() {
    return [
        {
            id: 1,
            url: "cracking-the-coding-interview",
            title: "assets/Cracking the Coding Interview",
            originalPrice: 59.95,
            discountedPrice: 14.95,
            rating: 4.5
        },
        {
            id: 2,
            url: "The-10X-Rule-scaled",
            title: "assets/The-10X-Rule-scaled.png",
            originalPrice: 59.95,
            discountedPrice: 14.95,
            rating: 4.5
        },
        {
            id: 3,
            url: "Atomic Habits",
            title: "assets/Atomic Habits.jpeg",
            originalPrice: 59.95,
            discountedPrice: 14.95,
            rating: 4.5
        },
        {
            id: 4,
            url: "deep-work",
            title: "assets/Deep Work (1).jpeg",
            originalPrice: 59.95,
            discountedPrice: 14.95,
            rating: 4.5
        },
        {
            id: 5,
            url: "5 second rule",
            title: "assets/5 Second Rule.jpg",
            originalPrice: 59.95,
            discountedPrice: 14.95,
            rating: 4.5
        },
        {
            id: 6,
            url: "rich and poor dad",
            title: "assets/Rich and Poor Dad.jpg",
            originalPrice: 59.95,
            discountedPrice: 14.95,
            rating: 4.5
        }
    ];
}