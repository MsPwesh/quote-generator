// const text=document.getElementById("quote");
// const author=document.getElementById("author");

// let intervalId;
// async function myInterval() {
    
//     var url="https://type.fit/api/quotes";    

//     // fetch the data from api
//     const response= await fetch(url);

//     //convert response to json and store it in quotes array
//     const allQuotes = await response.json();

//     // Generates a random number between 0 and the length of the quotes array
//     const indx = Math.floor(Math.random()*allQuotes.length);

//     //Store the quote present at the randomly generated index
//     const quote=allQuotes[indx].text;

//     //Store the author of the respective quote
//     const auth =allQuotes[indx].author;

//     if(auth==null)
//     {
//         author.innerHTML = "Anonymous";
//     } else {
//         author.innerHTML = "~ "+auth;
//     }

//     //function to dynamically display the quote and the author
//     text.innerHTML=quote;
// }

// function
//    setInterval(())

 var myQuotes = [
       "The sun is shining brighter",
       "Toyota",
       "May and Must be Flexible",
       "Async functions let us write promise-based code as if it were synchronous",
       "Just one small positive thought in the morning can change your whole day",
       "Opportunities don't happen, you create them.",
       "Love your family, work super hard, live your passion.",
       "It is never too late to be what you might have been.",
];

function quotes(){
    setInterval(()=>{

        var theQuotes= Math.floor(Math.random()* myQuotes.length);
        document.getElementById('quote').innerHTML=(myQuotes[theQuotes]);
    },3000);
}
// Timer on the quote generator
function joy(){
let time = 60
let ourTimer = setInterval(() =>{
    document.getElementById("timer").innerHTML = --time;
    if (time == 0){
        clearInterval(ourTimer);
    }
},3000);
}

function myStartFunction() {
    joy()
    quotes()
    // myQuotes = setInterval(myInterval, 2000);
}

function myStopFunction() {
    location.reload(''); // clearInterval(intervalId);
}
