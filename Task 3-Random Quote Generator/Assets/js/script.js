var url="https://type.fit/api/quotes";
const response=await fetch(url);
const Quote_list = await response.json();
const randomIdx = Math.floor(Math.random()*Quote_list.length);
const quoteText=Quote_list[randomIdx].text;
const auth=Quote_list[randomIdx].author;
if(!auth) author = "Anonymous";
console.log (quoteText);
console.log (auth);