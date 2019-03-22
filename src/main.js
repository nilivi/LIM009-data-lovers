// Llamando a los nombres de cada campeón
const lista = Object.entries(LOL.data);
const arrNameAndImageOfChampions = lol.getNameAndImageOfChampion(lista);

const selectRoles = document.getElementById('rol');
const sort = document.getElementById('sort');

const printCardsOfChampions = (arrChampions) => {
    const championsListElement = document.getElementById('champions');
    let string = '';
    arrChampions.forEach((obj) => {
        string += `
        <div class="card">
          <div class="championName">${obj.name}</div>
          </div class="championImg"><img src=${obj.image} alt=${obj.name}/></div>
        </div>
        `
    });
    championsListElement.innerHTML = string;
}

window.onload = () => {
    printCardsOfChampions(arrNameAndImageOfChampions);
}

sort.addEventListener('change', funcionOrden)
function funcionOrden(){
    const newChampionsArr = lol.sortChampionsCards(sort.value,arrNameAndImageOfChampions)
    printCardsOfChampions(newChampionsArr)
};

selectRoles.addEventListener('change', funcionFiltro)
function funcionFiltro () {
    const newChampionsArr = lol.filterChampionsRoles(selectRoles.value, arrNameAndImageOfChampions)
    printCardsOfChampions(newChampionsArr)
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