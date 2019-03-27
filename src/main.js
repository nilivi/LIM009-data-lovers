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
const welcomePage = document.getElementById('welcome-pg');
const tutPage = document.getElementById('tut-pg');
const championsPage = document.getElementById('champions-pg');
const btnInit = document.getElementById('btn-init');
const btnTut = document.getElementById('btn-tut');
const btnSearch = document.getElementById('btn-search');
const btnFilterSort = document.getElementById('btn-filter-sort');
const asideStats = document.getElementById('aside');

btnInit.addEventListener('click', funcHideAndShow)
btnTut.addEventListener('click', funcHideAndShow)

function funcHideAndShow() {
  welcomePage.classList.add('hide');
  tutPage.classList.add('hide');
  championsPage.classList.remove('hide')
}

btnFilterSort.addEventListener('click', funcHideAside)

function funcHideAside() {
  asideStats.classList.toggle('hide')
}

maxNumber.addEventListener('change', funcFilterAndSort);
maxNumber.addEventListener('keyup', funcFilterAndSort);
minNumber.addEventListener('change', funcFilterAndSort);
minNumber.addEventListener('keyup', funcFilterAndSort);

const championsListElement = document.getElementById('champions');

const printCardsOfChampions = (arrChampions) => {
  arrChampions.forEach((obj) => {
    const string = `
        <section class="card" id=${obj.id} name = "champs">
          <div ><img class="champion-img" src=${obj.image} alt=${obj.name}/></div>
          <div class="name-card">
          <div class="champion-name">${obj.name}</div>
          <div class="champion-mp"> MP: ${obj.mana}</div>
          </div>
        </section>
        `
    const div = document.createElement('div')
    div.innerHTML = string
    championsListElement.appendChild(div);
    printMainInfo(div);
  });
}

const printMainInfo = (div) => {

  const printName = div.querySelector("[name='champs']")
  printName.addEventListener('click', () => {
    const atribId = printName.getAttribute('id');
    let string = ''
    const arrPrintInfo = listOfChampions.filter((obj) => {
      console.log(obj)
      if (atribId == obj[1].id) {
        string += `
    <figure class="champ-img">
    <img class="champion-img"src=${obj[1].splash} alt=${obj[1].name}>
    </figure>
    <section class="info-gnrl">
    <div class="champ-name">${obj[1].name}</div>
    <div class="champ-rol">Rol: ${obj[1].tags}</div>
    <div class="champ-info">
    <ul>
    <il>"AD-attack:" ${obj[1].info.attack}</li>
    <il>"AP-magic:" ${obj[1].info.magic}</li>
    <il>"DEF-defense:" ${obj[1].info.defense}</li>
    <il>"DIF-difficulty:" ${obj[1].info.difficulty}</li>
    </ul>
    </section>
    <section class="info-stats">
    <div class="champ-descrip">"Descripción: " ${obj[1].blurb}</div>
    <h2 class="stat-title"> "Estadísticas" </h2>
    <table class="table-stat">
    <tr>
    <th> 
`
        const divInfo = document.createElement('div')
        divInfo.innerHTML = string
        divInfo.className = "info-champions"
        championsPage.appendChild(divInfo);
      }
    })
    championsListElement.classList.add('hide')
  })


}

window.onload = () => {
  printCardsOfChampions(arrNameAndImageOfChampions);
  funcFilterAndSort()
}


//ARROW FUNCTIONS

selectRoles.addEventListener('change', funcFilterAndSort)
sortChampions.addEventListener('change', funcFilterAndSort)

function funcFilterAndSort() {
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
}

function statOfChamps(arr) {
  minHp.innerHTML = Math.min.apply(null, lol.hpOfChampions(arr))
  maxHp.innerHTML = Math.max.apply(null, lol.hpOfChampions(arr))
  minAd.innerHTML = Math.min.apply(null, lol.adOfChampions(arr))
  maxAd.innerHTML = Math.max.apply(null, lol.adOfChampions(arr))
}

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