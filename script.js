
let quotes=[

    'Life is what happens when you are busy making other plans. (John Lennon)',
    'The way to get started is to quit talking and begin doing. (Walt Disney)',
    'Always remember that you are absolutely unique. Just like everyone else. (Margaret Mead)',
    'The future belongs to those who believe in the beauty of their dreams. (Eleanor Roosevelt)',
    'Tell me and I forget. Teach me and I remember. Involve me and I learn. (Benjamin Franklin)',
    'It is during our darkest moments that we must focus to see the light. (Aristotle)',
    'Whoever is happy will make others happy too. (Anne Frank)',
    'You will face many defeats in life, but never let yourself be defeated. (Maya Angelou)',
    'In the end, it is not the years in your life that count. It is the life in your years. (Abraham Lincoln)',
    'Never let the fear of striking out keep you from playing the game. (Babe Ruth)',
    'Life is either a daring adventure or nothing at all. (Helen Keller)',
    'Programming is like sex. One mistake and you have to support it for the rest of your life. (Michael Sinz)',
    'Deleted code is debugged code. (Jeff Sickel)',
    'If life were predictable it would cease to be life and be without flavor. (Eleanor Roosevelt)',
    'Life is a succession of lessons which must be lived to be understood. (Ralph Waldo Emerson)',
    'You only live once, but if you do it right, once is enough. (Mae West)',
    'The greatest glory in living lies not in never falling, but in rising every time we fall. (Nelson Mandela)',
    'Life is really simple, but we insist on making it complicated. (Confucius)',
    'There are only two kinds of programming languages: those people always bitch about and those nobody uses. (Bjarne Stroustrup)',
    'Do not let making a living prevent you from making a life. (John Wooden)',
    'I find that the harder I work, the more luck I seem to have. (Thomas Jefferson)',
    'I never dreamed about success, I worked for it. (Estee Lauder)',
    'I failed my way to success. (Thomas Edison)',
    'It is better to fail in originality than to succeed in imitation. (Herman Melville)'

];


// let btn=document.querySelector('.btn');
// btn.addEventListener('click', displayQuote);

function displayQuote(){
//create an index of a random number 
//convert it into between 0 to length of quotes[]
let index=Math.floor(Math.random()*quotes.length);

//display the quote of that index
let div=document.querySelector('#quote');
let quote=`<div class="card">

<p>${quotes[index]}</p>

</div>

`;
div.innerHTML=quote;

}


//const h2 = document.createElement('h2');
// h2.textContent = "This content added by JavaScript";
// document.querySelector('body').appendChild(h2);

