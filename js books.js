function renderBooks(filter) {
    const booksWrapper = document.querySelector(".books");

   

const books = getBooks();

console.log(filter)
if (filter === "LOW_TO_HIGH") {
    console.log("low to high");
    books.sort((a, b) => a.originalPrice - b.originalPrice);
}
if (filter === "HIGH_TO_LOW") {
    console.log("high to low");
    books.sort((a, b) => b.originalPrice - a.originalPrice);
}
if (filter === "RATING") {
    console.log("rating");
    books.sort((a, b) => b.rating - a.rating);
}

   const booksHtml = books
   .map((book) => {

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
<span>$${book.originalPrice.toFixed(2)}</span>
</div>
</div>`;
})
   .join("");

   console.log(booksHtml);
    
 booksWrapper.innerHTML = booksHtml;

 
}
 
function filterBooks(event) {
    renderBooks(event.target.value);
    
}

setTimeout(() => {
renderBooks(filter);
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
            originalPrice: 29.95,
            discountedPrice: 14.95,
            rating: 4.5
        },
        {
            id: 4,
            url: "deep-work-2.jpg",
            title: "Deep Work.jpg",
            originalPrice: 22.95,
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
            title: "be-obsessed-or-be-average-main.jpg",
            originalPrice: 29.95,
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