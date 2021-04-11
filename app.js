const jokeText = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

jokeBtn.addEventListener("click", generateJokes);

generateJokes()

async function generateJokes(){
    const res = await fetch (
        "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&amount=10"
    );
    const data = await res.json();
    console.log(data);
    console.log(data.jokes);
    let joke = ""
    if (data.jokes[0].joke == undefined){
        joke = `${data.jokes[0].setup} <br /> ${data.jokes[0].delivery}`
    }else{
        joke = data.jokes[0].joke;
    }
    jokeText.innerHTML = joke;
}
