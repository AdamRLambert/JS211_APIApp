

let arrayOfCharacters = [];


window.onload = function () {
  marvelHeroes();
};

const marvelHeroes = () => {
  fetch(
    "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=b6ee4cfcd4590b47387704abfa0173bb&hash=a3eb62b52f12026ffed981182864d0c3"
  )
    .then((res) => res.json())
    .then((post) => (arrayOfCharacters = post.data.results))
    .then(() => console.log("hellothere", arrayOfCharacters));
};


let has = [];
let wants = [];
const displayAll = () => {
  const allPosts = document.getElementById("all-characters");
  arrayOfCharacters.map((post, index) => {
    console.log("index", index, "post", post);
    const li = document.createElement("li");
    const dontHave = document.createElement("button")
    dontHave.innerHTML = 'Dont Have'
    dontHave.addEventListener ('click',function(){movedToDontHaves(post)})
    const have = document.createElement("button")
    have.innerHTML = 'Have'
    have.addEventListener ('click',function(){movedToHaves(post)})
    const img = document.createElement("img");
    img.src = `${post.thumbnail.path}.${post.thumbnail.extension}`;
    //  img.src = post.thumbnail.path + "." + post.thumbnail.extension   same as the line above
    const text = document.createTextNode(`#${index}, Title: ${post.name}:`);
    li.appendChild(text);
    li.append(img);
    li.append(dontHave)
    li.append(have)
    allPosts.append(li);
  });
};


const movedToHaves = (character) => {
  if (has.includes(character)) {
return } else { 
  has.push(character) 

}
  
  const haves = document.getElementById("haves");
  haves.innerHTML=null;
displayHaves();
console.log(has)
}

const movedToDontHaves = (character) => {
  if (wants.includes(character)) {
    return} else{
   
    wants.push(character) 
  }
  const haveNots = document.getElementById("have-nots");
  haveNots.innerHTML=null;
  displayDontHaves();
  console.log(wants)
}

const displayHaves = () => {
  const haves = document.getElementById("haves");
  has.map((post, index) => {
    const li = document.createElement("li");
    const img = document.createElement("img");
    img.src = `${post.thumbnail.path}.${post.thumbnail.extension}`;
    const text = document.createTextNode(`#${index}, Title: ${post.name}:`);
    li.appendChild(text);
    li.append(img);
    haves.append(li);
  })
  
}
const displayDontHaves = () => {
  const haveNots = document.getElementById("have-nots");
  wants.map((post, index) => {
    const li = document.createElement("li");
    const img = document.createElement("img");
    img.src = `${post.thumbnail.path}.${post.thumbnail.extension}`;
    const text = document.createTextNode(`#${index}, Title: ${post.name}:`);
    li.appendChild(text);
    li.append(img);
    haveNots.append(li);
  })
}