/* Manejo del DOM */
const championsList = document.getElementById('champions');
const select = document.getElementById('rol')
const sort = document.getElementById('sort')


// Llamando a los nombres de cada campeón
const lista = Object.entries(LOL.data)


const images = lista.map((campeon)=>{
    return '<img src="'+ campeon[1].img +'">'
})

const names = lista.map((campeon)=>{
    return campeon[1].name
})

championsCards = []

//objs de img y nombre para c/card
function inicio(){
for (let i = 0; i < images.length; i++) {
    const content = {Image: images[i], Name: names[i]};
    championsCards.push(content)
}
return championsCards
}

//creamos los cards
function cards(arrCampeones){
    championsList.innerHTML=""
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
        
        championsList.appendChild(card)
    }
}
 window.onload = ()=>{
        championsCards = inicio();
        cards(championsCards);
 }

sort.addEventListener('change', function selectSort(){
const nuevosCampeones = lol.sort(sort.value, championsCards)
cards(nuevosCampeones)
})

select.addEventListener('change', ()=>{
    championsList.innerHTML = lol.filter(select.value); 
})





/*
const bcd = lista.map(function(campeon){
    console.log(campeon)
    return campeon[1].info.attack ;
})
championsList.innerHTML= bcd
*/
