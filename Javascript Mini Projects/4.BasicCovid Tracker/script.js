
let jsonDate;
const cases = document.getElementById('cases')
const newcases = document.getElementById('newcases')
const deaths = document.getElementById('deaths')
const recovered = document.getElementById('recovered')
let num
async function getCovidapi(){
    const result = await fetch('https://api.covid19api.com/summary')
    // console.log(result)
    jsonDate = await result.json()
    console.log(jsonDate)
    // num = jsonDate.Global.NewDeaths
    // console.log(num)
    addingData();
}

getCovidapi();

// setInterval(3000,getCovidapi())

const btn = document.querySelector('button')
btn.addEventListener('click',()=>{
    addingData()
})

function addingData(){
    if(jsonDate !== undefined){
        cases.innerHTML = jsonDate.Global.TotalConfirmed
        newcases.innerHTML = jsonDate.Global.NewConfirmed
        deaths.innerHTML = jsonDate.Global.TotalDeaths
        recovered.innerHTML = jsonDate.Global.TotalRecovered 

    }
}

// addingData()