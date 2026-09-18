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
            url: "cracking-the-coding-interview.png",
            title: "Cracking the Coding Interview",
            originalPrice: 59.95,
            discountedPrice: 14.95,
            rating: 4.5
        },
        {
            id: 2,
            url: "The-10X-Rule-scaled.jpg",
            title: "The-10X-Rule-scaled.jpg",
            originalPrice: 59.95,
            discountedPrice: 14.95,
            rating: 4.5
        },
        {
            id: 3,
            url: "Atomic Habits.jpg",
            title: "Atomic Habits.jpg",
            originalPrice: 59.95,
            discountedPrice: 14.95,
            rating: 4.5
        },
        {
            id: 4,
            url: "deep-work-2.jpg",
            title: "Deep Work.jpg",
            originalPrice: 59.95,
            discountedPrice: 14.95,
            rating: 4.5
        },
        {
            id: 5,
            url: "5 second rule.jpg",
            title: "5 Second Rule.jpg",
            originalPrice: 59.95,
            discountedPrice: 14.95,
            rating: 4.5
        },
        {
            id: 6,
            url: "rich and poor dad.jpg",
            title: "Rich and Poor Dad.jpg",
            originalPrice: 59.95,
            discountedPrice: 14.95,
            rating: 4.5
        },
          {
            id: 6,
            url: "Your-Next-Five-Moves.jpg",
            title: "Your Next Five Moves.jpg",
            originalPrice: 59.95,
            discountedPrice: 14.95,
            rating: 4.5
        },
          {
            id: 6,
            url: "Mastery.jpg",
            title: "Mastery.jpg",
            originalPrice: 59.95,
            discountedPrice: 14.95,
            rating: 4.5
        },
          {
            id: 6,
            url: "the-48-laws-of-power-review-732x1024.jpg",
            title: "48 Laws of Power.jpg",
            originalPrice: 59.95,
            discountedPrice: 14.95,
            rating: 4.5
        },
          {
            id: 6,
            url: "rich dad's cashflow.jpg",
            title: "CashFlow Quadrant.jpg",
            originalPrice: 59.95,
            discountedPrice: 14.95,
            rating: 4.5
        },

        
             {
            id: 6,
            url: "be-obsessed-or-be-average-main.jpg",
            title: "CashFlow Quadrant.jpg",
            originalPrice: 59.95,
            discountedPrice: 14.95,
            rating: 4.5
        },

        
             {
            id: 6,
            url: "can-t-hurt-me-2.jpg",
            title: "Can't Hurt Me.jpg",
            originalPrice: 59.95,
            discountedPrice: 14.95,
            rating: 4.5
        }
        
        
    ];
}