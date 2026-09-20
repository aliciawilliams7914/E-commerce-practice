function renderBooks(filter) {
    const booksWrapper = document.querySelector(".books");

   

const books = getBooks();


if (filter === "LOW_TO_HIGH") {
    books.sort((a, b) => a.originalPrice - b.originalPrice);
    } else if (filter === "HIGH_TO_LOW") {
   books.sort((a, b) => b.originalPrice - a.originalPrice);
    } else if (filter === "RATING") {
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
${ratingsHtml(book.rating)}
</div>
<div class="book__price">
<span>$${book.originalPrice.toFixed(2)}</span>
</div>
</div>`;
})
   .join("");

   
    
 booksWrapper.innerHTML = booksHtml;

 
}
function ratingsHtml(rating) {
    let ratingsHtml = "";
    for (let i = 0; i < Math.floor(rating); i++) {
        ratingsHtml += `<i class="fas fa-star"></i>`;
    }
    if (!Number.isInteger(rating)) {
        ratingsHtml += `<i class="fas fa-star-half-alt"></i>`;
    }
    return ratingsHtml;
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
            title: "The-10X-Rule-scaled.",
            originalPrice: 59.95,
            discountedPrice: 14.95,
            rating: 4.5
        },
        {
            id: 3,
            url: "Atomic Habits.jpg",
            title: "Atomic Habits.",
            originalPrice: 29.95,
            discountedPrice: 14.95,
            rating: 4.5
        },
        {
            id: 4,
            url: "deep-work-2.jpg",
            title: "Deep Work.",
            originalPrice: 22.95,
            discountedPrice: 14.95,
            rating: 4.5
        },
        {
            id: 5,
            url: "5 second rule.jpg",
            title: "5 Second Rule.",
            originalPrice: 59.95,
            discountedPrice: 14.95,
            rating: 4.5
        },
        {
            id: 6,
            url: "rich and poor dad.jpg",
            title: "Rich and Poor Dad.",
            originalPrice: 59.95,
            discountedPrice: 14.95,
            rating: 4.5
        },
          {
            id: 6,
            url: "Your-Next-Five-Moves.jpg",
            title: "Your Next Five Moves.",
            originalPrice: 59.95,
            discountedPrice: 14.95,
            rating: 4.5
        },
          {
            id: 6,
            url: "Mastery.jpg",
            title: "Mastery.",
            originalPrice: 59.95,
            discountedPrice: 14.95,
            rating: 4.5
        },
          {
            id: 6,
            url: "the-48-laws-of-power-review-732x1024.jpg",
            title: "48 Laws of Power.",
            originalPrice: 59.95,
            discountedPrice: 14.95,
            rating: 4.5
        },
          {
            id: 6,
            url: "rich dad's cashflow.jpg",
            title: "CashFlow Quadrant.",
            originalPrice: 59.95,
            discountedPrice: 14.95,
            rating: 4.5
        },

        
             {
            id: 6,
            url: "be-obsessed-or-be-average-main.jpg",
            title: "be-obsessed-or-be-average-main.",
            originalPrice: 29.95,
            discountedPrice: 14.95,
            rating: 4.5
        },

        
             {
            id: 6,
            url: "can-t-hurt-me-2.jpg",
            title: "Can't Hurt Me.",
            originalPrice: 59.95,
            discountedPrice: 14.95,
            rating: 4.5
        }
        
        
    ];
}