const API_URL = "https://striveschool-api.herokuapp.com/books";

// Selezioniamo il contenitore delle card
const booksContainer = document.getElementById("books-container");

// Funzione per ottenere i dati dall'API
fetch(API_URL)
    .then(response => response.json())  // Convertiamo la risposta in JSON
    .then(books => {
        books.forEach(book => createBookCard(book)); // Creiamo una card per ogni libro
    })
    .catch(error => console.error("Errore nel recupero dei libri:", error));

// Funzione per creare una card
function createBookCard(book) {
    // Creiamo un elemento div con classi Bootstrap
    const col = document.createElement("div");
    col.classList.add("col-md-4", "mb-4");
      // Struttura della card
      col.innerHTML = `
      <div class="card">
          <img src="${book.img}" class="card-img-top" alt="${book.title}">
          <div class="card-body">
              <h5 class="card-title">${book.title}</h5>
              <p class="card-text">Prezzo: ${book.price}€</p>
              <button class="btn btn-danger scarta-btn">Scarta</button>
              <button class="btn btn-success buy-btn">Buy</button>
          </div>
      </div>
  `;

  // Aggiungiamo la card al container
  booksContainer.appendChild(col);

  // Aggiungiamo l'evento al pulsante "Scarta"
  col.querySelector(".scarta-btn").addEventListener("click", function () {
      col.remove(); // Rimuove la card dal DOM
  });

  // Pulsante Buy
  col.querySelector(".buy-btn").addEventListener("click", function(){
    alert(`Hai acquistato il libro: "${book.title}" per ${book.price}€`);
});
}