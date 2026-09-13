function renderBooks() {
    const booksWrapper = document.querySelector('.books');
 booksWrapper.innerHTML = 
 `
<div class="book">
<figure class="book__img--wrapper">
<img class="book__img" src="cracking-the-coding-interview.png" alt="">
</figure>
<div class="book__title">
 Cracking the Coding Interview
</div>
<div class="book__ratings">
<i class="fas fa-star"></i>
<i class="fas fa-star"></i>
<i class="fas fa-star"></i>
<i class="fas fa-star"></i>
<i class="fas fa-star-half-alt"></i>
</div>
<div class="book__price">0
0<span class="book__price--normal">$59.99</span> $14.95
</div>
0</div> `  }
setTimeout(() => {
renderBooks();
});