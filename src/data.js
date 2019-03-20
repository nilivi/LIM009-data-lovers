window.lol = {
  filter: (rol) => {
      let textoFiltrado = ""
      if (select.value == rol) {
          totalList.map(function (campeon) {
              if (campeon[1].tags[0] == rol || campeon[1].tags[1] == rol) {
                  textoFiltrado += '<img src="' + campeon[1].img + '">' + campeon[0] + "<br>";
              }
          })
      }
      return textoFiltrado
  },
  sort: (sortValue, arr) => {

    for (let i = 0; i < images.length; i++) {
      const content = {Image: images[i], Name: names[i]};
      championsCards.push(content)
    }
    return championsCards.sort();
    
    championsList.innerHTML=""
    for (let i = 0; i < championsCards.length; i++) {
        const card = document.createElement('div');
        const championName = document.createElement('div')
        const championImg = document.createElement('div')
        card.className = 'card'
        championName.className = 'championName'
        championImg.className = 'championImg';
        
        // championsCards.sort()
       

        championName.innerHTML = championsCards[i].Name
        championImg.innerHTML = championsCards[i].Image

        card.appendChild(championName)
        card.appendChild(championImg)
        
        championsList.appendChild(card)
    }
  }
}