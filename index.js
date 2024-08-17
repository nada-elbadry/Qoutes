var quotes=
[
    {
        quote:"You only live once, but if you do it right, once is enough",
        author:"― Mae West",
    },
    {
        quote:"Be the change that you wish to see in the world",
        author:"― Mahatma Gandhi",
    },
    {
        quote:"if you tell the truth, you don't have to remember anything",
        author:"― Mark Twain",
    },
    {
        quote:"It is better to be hated for what you are than to be loved for what you are not.”",
        author:"― Andre Gide, Autumn Leaves",
    },
    {
        quote:"Always forgive your enemies; nothing annoys them so much",
        author:"― Oscar Wilde",
    },
    {
        quote:"Live as if you were to die tomorrow. Learn as if you were to live foreve",
        author:"― Mahatma Gandhi",
    },
    {
        quote:"We accept the love we think we deserve.",
        author:"― Ralph Waldo Emerson",
    },
]
var lastIndex;
 var displayQuotes=[];
function getQuotes()
{
if(displayQuotes==quotes )
    {displayQuotes=[];}
{
    do
    {
        var newGeneratedNumber = Math.floor( Math.random()*quotes.length);
    }
    while( lastIndex==newGeneratedNumber||displayQuotes.includes(newGeneratedNumber))
        newGeneratedNumber==lastIndex
        displayQuotes.push(newGeneratedNumber);
   lastIndex=newGeneratedNumber;
console.log(newGeneratedNumber );
console.log(displayQuotes);
   document.getElementById("quote").innerHTML=quotes[newGeneratedNumber].quote;
   document.getElementById("author").innerHTML=quotes[newGeneratedNumber].author;
   typing(quotes[newGeneratedNumber].quote,"quote")
}
}
//typed js
function typing(string,place)
{
    var typed = new Typed(`${place}`, {
        strings: [string],
        typeSpeed: 50,
        showCursor:false,
      });
    
}
