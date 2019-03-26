window.lol = {
  getNameAndImageOfChampion: (champions) => {
    return champions.map((obj) => {
      return { image: obj[1].splash, name: obj[1].name, rol: obj[1].tags, id: obj[1].id, attack: obj[1].info.attack, mana: obj[1].stats.mp, hp: obj[1].stats.hp }

    });
  },
  filterChampionsRoles: (rol, arr) => {
    const newArray = arr.map((obj) => {
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

  hpOfChampions: (arr) => {
    const nuevoarray = arr.map((obj) => {
      return obj.hp
    })
    return nuevoarray
  },

  adOfChampions: (arr) => {
    const nuevoarray = arr.map((obj) => {
      return obj.attack
    })
    return nuevoarray
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
    }
    return nuevoarray
  }
}