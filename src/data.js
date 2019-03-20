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
  sort: (ordenCampeones, arr) => {
    const nuevoarray = arr.map(function(objCampeon){
      return objCampeon
    })
    if (ordenCampeones == 'az') {

      nuevoarray.sort(function (a, b) {
        if (a.Name > b.Name) {
          return 1;
        }
        if (a.Name < b.Name) {
          return -1;
        }
        // a must be equal to b
        return 0;
      })
     
    } else if (ordenCampeones == 'za'){
      nuevoarray.sort(function (a, b) {
        if (a.Name > b.Name) {
          return 1;
        }
        if (a.Name < b.Name) {
          return -1;
        }
        // a must be equal to b
        return 0;
      })
      nuevoarray.reverse()
    
    } else if (ordenCampeones == 'mp'){      
      nuevoarray.sort()
      console.log('hasfsafsaa')

    }
    return nuevoarray
  }
}