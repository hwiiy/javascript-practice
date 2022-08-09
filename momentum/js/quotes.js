const quotes = [
    {
        quote : "Believe in yourself.",
        author :"unknown",
    },
    {
        quote : "Seize the day.",
        author : "unknown",
    },
    {
        quote : "Life is a journey.",
        author : "Ralph Waldo Emerson",
    },
    {
        quote : "Anyone who has never made a mistake has never tried anything new.",
        author : "Albert Einstein",
    },
    {
        quote : "If I had eight hours to chop down a tree, I'd spend six hours sharpening my ax.",
        author : "Abraham Lincoln",
    },
    {
        quote : "Well done is better than well said",
        author : "Benjamin Franklin",
    },
    {
        quote : "A goal without a plan is just a wish.",
        author : "Antoine de Saint-Exupéry",
    },
    {
        quote : "Life isn't about finding yourself. Life is about creating yourself.",
        author : "George Bernard Shaw",
    },
    {
        quote : "What we dwell on is who we become.",
        author : "Oprah Gaile Winfrey",
    },
    {
        quote : "Try not to become a man of success but a man of value.",
        author : "Albert Einstein",
    },
    
]

const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")


const todayQuote = quotes[Math.floor(Math.random() * quotes.length)]

console.log(todayQuote)

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;