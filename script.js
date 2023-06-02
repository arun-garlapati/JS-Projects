const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote'); 
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

let apiQuotes = [];

// get new quote
function newQuote(){
    //pick a random quote from the apiQuoteArray
    const quote = apiQuotes[Math.floor(Math.random()*apiQuotes.length)];
    // check if Author name is null and if it is null replace that  with null
    if (!quote.author) {
        authorText.textContent = 'Unknown';
        } else {
        authorText.textContent = quote.author;
        }

        // Check Quote length to determine styling
        if (quote.text.length > 80){
            quoteText.classList.add('long-quote');
        }
        else {
            quoteText.classList.remove('long-quote');
        }
    quoteText.textContent = quote.text;
}

//GET QUOTES FROM API


async function getQuotes() {
    const apiUrl = 'https://type.fit/api/quotes';

    try{
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } 
    catch (error){

    }
}

// Tweet quote
function tweetQuote(){
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}


//Event Listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

getQuotes();