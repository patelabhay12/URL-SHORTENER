var url = prompt("Please enter your URL", "<URL goes here>");
const obj = {};
const urlShortener = (longURL = '') => {
   let shortURL = "myt.lb/" + longURL.replace(/[^a-z]/g,'').slice(-4);
   if(!obj[shortURL]){
      obj[shortURL] = longURL;
   };
   return shortURL;
   }
   const urlRedirector = (shortURL = '') => {
   return obj[shortURL];
};
const short = urlShortener(url);
const original = urlRedirector(short);
console.log(short);

