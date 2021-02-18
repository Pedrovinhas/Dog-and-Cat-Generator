const catButton = document.getElementById('cat');
const dogButton = document.getElementById('dog');
const imgDog = document.getElementById('cachorro');
const imgCat = document.getElementById('gatinho');

catButton.addEventListener('click', getRandomCat);
dogButton.addEventListener('click', getRandomDog);


function getRandomCat () {
    fetch('https://aws.random.cat/meow')
    .then (res => res.json())
    .then ( data => {
        imgCat.innerHTML = `<img src="${data.file}"/>`
    })
} 

function getRandomDog () {
    fetch('https://random.dog/woof.json')
    .then (res => res.json())
    .then ( data => {
        imgDog.innerHTML = `<img src="${data.url}"/>`
    })
}    