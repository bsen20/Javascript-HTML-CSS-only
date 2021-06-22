const setup = document.getElementById('setup')
const punch = document.getElementById('punchline')
const btn = document.querySelector('button')
async function getRandomJokes(){
    const url = "https://official-joke-api.appspot.com/random_joke"
    const response = await fetch(url)
    const result = await response.json()
    // console.log(result)
    changeDom(result);
}
function changeDom(result){
    console.log(result)
    punch.innerHTML = result.punchline;
    setup.innerHTML = result.setup;
}
btn.addEventListener('click',getRandomJokes)
getRandomJokes()