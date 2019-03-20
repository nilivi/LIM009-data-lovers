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
  sort: (sortValue, orderArr) => {
      let textoOrden = ""
      if (sortValue == 'az') {
          orderArr.sort()
          textoOrden = orderArr.join("")
      } else if (sortValue == 'za') {
          orderArr.sort()
          orderArr.reverse()
          textoOrden = orderArr.join("")
      }
      return textoOrden
  }
}