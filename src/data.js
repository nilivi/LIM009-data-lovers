window.lol = {
  getNameAndImageOfChampion: (arrChampions) => {
    return arrChampions.map((obj) => {
      return { image: obj[1].splash, name: obj[1].name, rol: obj[1].tags, id: obj[1].id, attack: obj[1].stats.attackdamage, mana: obj[1].stats.mp, hp: obj[1].stats.hp }
    });
  },
  filterChampionsRoles: (rol, arrChampions) => {
    const newArray = arrChampions.map((obj) => {
      return obj
    })
    const abc = newArray.filter((championRol) => {
      return championRol.rol[0] == rol || championRol.rol[1] == rol;
    })
      .map((obj) => {
        return obj
      })
    return abc
  },
  filterChampionsMana: (arr, minNumber, maxNumber) => {
    const abc = arr.filter((obj) => {
      if (minNumber <= obj.mana && obj.mana <= maxNumber) {
        return obj.mana
      }
    })
    return abc
  },
  statOfChampions: (arr, value, est) => {
    const newArray = arr.map((obj)=>{
      if(est=="ad"){
      return obj.attack
      } else if(est=="hp"){
        return obj.hp
      }
    })
    const array = newArray.reduce((max, stat)=>{
      if (value=="max" && max<stat){
        max=stat
      } else if(value=="min" && max>stat){
          max=stat
      }
      return max
    })
      return array
},
  sortChampionsCards: (ordenCampeones, arr) => {
    const nuevoarray = arr.map(function (objCampeon) {
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

    } else if (ordenCampeones == 'za') {
      nuevoarray.sort((a, b) =>{
        if (a.Name > b.Name) {
          return 1;
        }
        if (a.Name < b.Name) {
          return -1;
        }
        return 0;
      })
      nuevoarray.reverse()
    }
    return nuevoarray
  }
}