/* Manejo del DOM */

const championsList = document.getElementById('champions');
const select = document.getElementById('rol')
const sort = document.getElementById('sort')

// const rol = select.value

// Llamando a los nombres de cada campeón
const lista = Object.entries(LOL.data)

/*
const abc = lista.map(function(campeon){
    const abcd = campeon[0]+ "<br>" ;
    return abcd
})
abc.sort()
abc.reverse()
const abcd = abc.join("")
championsList.innerHTML= abcd
*/
sort.addEventListener('change', function selectSort(){
    let textoOrden = ""
    if(sort.value == 'az'){
        const abc = lista.map(function(campeon){
           return campeon[0]+ "<br>" ;

        })
        abc.sort()
        // abc.reverse()
        textoOrden = abc.join("")
        console.log(abc)
    } else if(sort.value == 'za'){
        const abc = lista.map(function(campeon){
           return campeon[0]+ "<br>" ;

        })
        abc.sort()
        abc.reverse()
        textoOrden = abc.join("")
        console.log(abc)
    }

    championsList.innerHTML = textoOrden
})



select.addEventListener('change', function selectRoles() {
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
)







/*
const bcd = lista.map(function(campeon){
    console.log(campeon)
    return campeon[1].info.attack ;
})
championsList.innerHTML= bcd
*/
