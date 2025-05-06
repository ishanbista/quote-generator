const quotes={
    science:[
        "Science is a way of thinking much more than it is a body of knowledge. – Carl Sagan",
    "The important thing is to never stop questioning. – Albert Einstein",
    "Somewhere, something incredible is waiting to be known. – Carl Sagan"

    ],
    motivational:[
        "Don’t watch the clock; do what it does. Keep going. – Sam Levenson",
        "It always seems impossible until it's done. – Nelson Mandela",
        "Start where you are. Use what you have. Do what you can. – Arthur Ashe"
    ],
    inspiration:[
        "The only way to do great work is to love what you do.- Steve Jobs",
        "The future belongs to those who believe in the beauty of their dreams.-Eleanor Roosevelt",
        "Success is not final, failure is not fatal: It is the courage to continue that counts.-Winston Churchill"
    ]
};

let currentCategory= 'science';
let currentIndex=0;

const quoteText= document.getElementById('quote-text');
const categorySelect = document.getElementById('category');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const randomBtn = document.getElementById('random');
const themeToggle = document.getElementById('theme-toggle');
const decreaseFont = document.getElementById('decrease-font');
const increaseFont = document.getElementById('increase-font');

let fontSize= 1.2;

function updateQuote(){
    const categoryQuotes= quotes[currentCategory];
    quoteText.textContent= categoryQuotes[currentIndex];
}

categorySelect.addEventListener('change', () =>{
    currentCategory= categorySelect.value;
    currentIndex=0;
    updateQuote();
});

nextBtn.addEventListener('click', () => {
    const categoryQuotes = quotes[currentCategory];
    currentIndex = (currentIndex + 1) % categoryQuotes.length;
    updateQuote();
  });

  prevBtn.addEventListener('click', () => {
    const categoryQuotes = quotes[currentCategory];
    currentIndex = (currentIndex - 1 + categoryQuotes.length) % categoryQuotes.length;
    updateQuote();
  });

  randomBtn.addEventListener('click', () => {
    const categoryQuotes = quotes[currentCategory];
    currentIndex = Math.floor(Math.random() * categoryQuotes.length);
    updateQuote();
  });

  themeToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark', themeToggle.checked);
  });

  increaseFont.addEventListener('click', () => {
    fontSize += 0.1;
    quoteText.style.fontSize = `${fontSize}rem`;
  });

  decreaseFont.addEventListener('click', () => {
    if (fontSize > 0.6) {
      fontSize -= 0.1;
      quoteText.style.fontSize = `${fontSize}rem`;
    }
  });

  window.onload = updateQuote;
