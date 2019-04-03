window.lol = {
  getNameAndImageOfChampion: (arrChampions) => {
    return arrChampions.map((obj) => {
      return { image: obj[1].splash, name: obj[1].name, rol: obj[1].tags, id: obj[1].id, attack: obj[1].stats.attackdamage, mana: obj[1].stats.mp, hp: obj[1].stats.hp };
    });
  },
  filterChampionsRoles: (rol, arrChampions) => {
    const newArray = arrChampions.map((elem) => {
      return elem;
    });
    const arrFiltered = newArray.filter((championRol) => {
      return championRol.rol[0] === rol || championRol.rol[1] === rol;
    });
    return arrFiltered;
  },
  filterChampionsMana: (arr, minNumber, maxNumber) => {
    const arrFiltered = arr.filter((elem) => {
      if (minNumber <= elem.mana && elem.mana <= maxNumber) {
        return elem.mana;
      }
    });
    return arrFiltered;
  },
  statOfChampions: (arr, caract, value) => {
    const newArray = arr.map((statistic) => {
      if (caract === 'ad') {
        return statistic.attack;
      } else if (caract === 'hp') {
        return statistic.hp;
      }
    });
    const number = newArray.reduce((result, stat) => { // (valor previo, valor actual)
      if (value === 'max' && result < stat) {
        result = stat;
      } else if (value === 'min' && result > stat) {
        result = stat;
      }
      return result;
    });
    return number;
  },
  sortChampionsCards: (sortChamps, arr) => {
    const nuevoarray = arr.map(function (objCampeon) {
      return objCampeon;
    });
    if (sortChamps === 'az') {
      nuevoarray.sort(function (firstName, secondName) {
        if (firstName.name > secondName.name) {
          return 1;
        } else if (firstName.name < secondName.name) {
          return -1;
        } else {
          return 0;
        }
      });
    } else if (sortChamps === 'za') {
      nuevoarray.sort((firstName, secondName) => {
        if (firstName.name > secondName.name) {
          return -1;
        } else if (firstName.name < secondName.name) {
          return 1;
        } else {
          return 0;
        }
      });
    }
    return nuevoarray;
  }
};