/* Manejo del DOM */

const championsList = document.getElementById('champions');
const select = document.getElementById('rol')
const sort = document.getElementById('sort')


// Llamando a los nombres de cada campeón
const lista = Object.entries(LOL.data)


sort.addEventListener('change', function selectSort() {
    let textoOrden = ""
    if (sort.value == 'az') {
        const championName = lista.map(function (campeon) {
            return '<img src="' + campeon[1].img + '">' + campeon[0] + "<br>";
        })
        championName.sort()
        textoOrden = championName.join("")
    } else if (sort.value == 'za') {
        const championName = lista.map(function (campeon) {
            return '<img src="' + campeon[1].img + '">' + campeon[0] + "<br>";
        })
        championName.sort()
        championName.reverse()
        textoOrden = championName.join("")
    }
    championsList.innerHTML = textoOrden
})



select.addEventListener('change', selectRoles)


function selectRoles() {
    let textoFiltrado = ""
    if (select.value == 'tank') {
        lista.map(function (campeon) {
            if (campeon[1].tags[0] == "Tank" || campeon[1].tags[1] == "Tank") {
                textoFiltrado += campeon[0] + "<br>";
            }
        })
    } else if (select.value == 'assassin') {
        lista.map(function (campeon) {
            if (campeon[1].tags[0] == "Assassin" || campeon[1].tags[1] == "Assassin") {
                textoFiltrado += campeon[0] + "<br>";
            }
        })
    } else if (select.value == 'mage') {
        lista.map(function (campeon) {
            if (campeon[1].tags[0] == "Mage" || campeon[1].tags[1] == "Mage") {
                textoFiltrado += campeon[0] + "<br>";
            }
        })
    } else if (select.value == 'fighter') {
        lista.map(function (campeon) {
            if (campeon[1].tags[0] == "Fighter" || campeon[1].tags[1] == "Fighter") {
                textoFiltrado += campeon[0] + "<br>";
            }
        })
    } else if (select.value == 'support') {
        lista.map(function (campeon) {
            if (campeon[1].tags[0] == "Support" || campeon[1].tags[1] == "Support") {
                textoFiltrado += campeon[0] + "<br>";
            }
        })
    }
    else if (select.value == 'marksman') {
        lista.map(function (campeon) {
            if (campeon[1].tags[0] == "Marksman" || campeon[1].tags[1] == "Marksman") {
                textoFiltrado += campeon[0] + "<br>";
            }
        })
    }

    championsList.innerHTML = textoFiltrado
}



/*
const bcd = lista.map(function(campeon){
    console.log(campeon)
    return campeon[1].info.attack ;
})
championsList.innerHTML= bcd
*/
