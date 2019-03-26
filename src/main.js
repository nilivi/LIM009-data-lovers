// Llamando a los nombres de cada campeón
const listOfChampions = Object.entries(LOL.data);
const arrNameAndImageOfChampions = lol.getNameAndImageOfChampion(listOfChampions);
const selectRoles = document.getElementById('rol');
const sortChampions = document.getElementById('sort');
const championsInfo = document.getElementById("champions-info");
const minNumber = document.getElementById('min-number');
const maxNumber = document.getElementById('max-number');
const minHp = document.getElementById('hp-min');
const maxHp = document.getElementById('hp-max');
const minAd = document.getElementById('ad-min');
const maxAd = document.getElementById('ad-max');

const welcomePage= document.getElementById('welcome-pg');
const tutPage= document.getElementById('tut-pg');
const championsPage= document.getElementById('champions-pg');
const btnInit = document.getElementById('btn-init');
const btnTut = document.getElementById('btn-tut');

btnInit.addEventListener('click', funcHideAndShow)
btnTut.addEventListener('click', funcHideAndShow)

function funcHideAndShow () {
  welcomePage.classList.add('hide'),
  championsPage.classList.remove('hide')
}
// const champs = document.getElementsByName('champs')
// console.log(champs)
// champs.addEventListener('click', ()=>{
//   alert('hola')
// })


maxNumber.addEventListener('keyup', funcFilterAndSort);
minNumber.addEventListener('keyup', funcFilterAndSort);


const printMainInfo = (arrChamp) =>{
  let string = '';

  arrChamp.forEach((obj)=>{
    const name = document.getElementById(obj[1].id)
  // name.addEventListener('click', ()=>{
  string += `
  <div class="card" id="${obj[1].id}">
    <div class="champion-name">asdsaALKFMALKFMLASFMdad</div>
    </div class="champion-img">asdnsaldnalsdk</div>
  </div>
  `
  championsInfo.innerHTML=string

// })
})
}

// printMainInfo(listOfChampions);

//const namesChamps = document.getElementsByName("champs").value
// namesChamps.addEventListener('click', ()=>{
//   console.log('hola')
// })


const printCardsOfChampions = (arrChampions) => {

  const championsListElement = document.getElementById('champions');
  let string = '';
  arrChampions.forEach((obj) => {
    string += `
        <section class="card" id=${obj.id} name = "champs">
          <div ><img class="champion-img" src=${obj.image} alt=${obj.name}/></div>
          <div class="champion-name">${obj.name}</div>
          <div class="champion-mp"> MP: ${obj.mana}</div>

        </section>
        `
  });
  championsListElement.innerHTML = string;
}

window.onload = () => {
  printCardsOfChampions(arrNameAndImageOfChampions);
  funcFilterAndSort()
} 


//ARROW FUNCTIONS

selectRoles.addEventListener('change', funcFilterAndSort)
sortChampions.addEventListener('change', funcFilterAndSort)

function funcFilterAndSort (){
   let newChampionsArr = arrNameAndImageOfChampions
  if (selectRoles.value !== "default") {
    newChampionsArr = lol.filterChampionsRoles(selectRoles.value, arrNameAndImageOfChampions)
    newChampionsArr = lol.sortChampionsCards(sortChampions.value, newChampionsArr)
    newChampionsArr = lol.sortChampionsCards(sortChampions.value, newChampionsArr)
    newChampionsArr = lol.filterChampionsMana(newChampionsArr, minNumber.value, maxNumber.value)
    printCardsOfChampions(newChampionsArr)
    statOfChamps(newChampionsArr)
  }
  newChampionsArr = lol.sortChampionsCards(sortChampions.value, newChampionsArr)
  newChampionsArr = lol.filterChampionsMana(newChampionsArr, minNumber.value, maxNumber.value)
  printCardsOfChampions(newChampionsArr)
  statOfChamps(newChampionsArr)
console.log(Math.min.apply(null,lol.adOfChampions(newChampionsArr)));
 
}

function statOfChamps (arr){
  minHp.innerHTML= Math.min.apply(null, lol.hpOfChampions(arr))
  maxHp.innerHTML= Math.max.apply(null, lol.hpOfChampions(arr))
  minAd.innerHTML= Math.min.apply(null, lol.adOfChampions(arr))
  maxAd.innerHTML= Math.max.apply(null, lol.adOfChampions(arr))
}
console.log(maxHp)

/*
const bcd = lista.map(function(campeon){
    console.log(campeon)
    return campeon[1].info.attack ;
})
championsList.innerHTML= bcd
*/



//const getNameAndImageOfChampion = champios => champios.map(obj =>( {imagen:obj[1].img, name: obj[1].name}))
/*console.log(getNameAndImageOfChampion(lista))
const images = lista.map((campeon)=>{
    return '<img src="'+ campeon[1].img +'">'
})
const names = lista.map((campeon)=>{
    return campeon[1].name
})
*/

/*championsCards = []

//objs de img y nombre para c/card
function inicio(){
for (let i = 0; i < images.length; i++) {
    const content = {Image: images[i], Name: names[i]};
    championsCards.push(content)
}
return championsCards
}
*/

//creamos los cards para cada champion
/*const printCardsOfChampions =  (arrCampeones) =>{
    championsListElement.innerHTML=""
    for (let i = 0; i < arrCampeones.length; i++) {
        const card = document.createElement('div');
        const championName = document.createElement('div')
        const championImg = document.createElement('div')
        card.className = 'card'
        championName.className = 'championName'
        championImg.className = 'championImg';

        // championsCards.sort()

        championName.innerHTML = arrCampeones[i].Name
        championImg.innerHTML = arrCampeones[i].Image

        card.appendChild(championName)
        card.appendChild(championImg)

        championsListElement.appendChild(card)
    }
}*/