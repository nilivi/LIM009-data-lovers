window.lol = {
  getNameAndImageOfChampion: (arrChampions) => {
    return arrChampions.map((obj) => {
      // console.log(obj[1].tags.toString().toLowerCase());
      return { image: obj[1].splash, name: obj[1].name, rol: obj[1].tags, id: obj[1].id, attack: obj[1].stats.attackdamage, mana: obj[1].stats.mp, hp: obj[1].stats.hp };
    });
  },
  filterChampionsRoles: (rol, arrChampions) => {
    const newArray = arrChampions.map((obj) => {
      return obj;
    });
    const abc = newArray.filter((championRol) => {
      return championRol.rol[0] === rol || championRol.rol[1] === rol;
    })
      .map((obj) => {
        return obj;
      });
    return abc;
  },
  filterChampionsMana: (arr, minNumber, maxNumber) => {
    const abc = arr.filter((obj) => {
      if (minNumber <= obj.mana && obj.mana <= maxNumber) {
        return obj.mana;
      }
    });
    return abc;
  },
  statOfChampions: (arr, est, value) => {
    const newArray = arr.map((statistic) => {
      if (est === 'ad') {
        return statistic.attack;
      } else if (est === 'hp') {
        return statistic.hp;
      }
    });
    const array = newArray.reduce((result, stat) => {
      if (value === 'max' && result < stat) {
        result = stat;
      } else if (value === 'min' && result > stat) {
        result = stat;
      }
      return result;
    });
    return array;
  },
  sortChampionsCards: (ordenCampeones, arr) => {
    const nuevoarray = arr.map(function(objCampeon) {
      return objCampeon;
    });
    if (ordenCampeones === 'az') {
      nuevoarray.sort(function(firstName, secondName) {
        if (firstName.name > secondName.name) {
          return 1;
        } else if (firstName.name < secondName.name) {
          return -1;
        } else {
          return 0;
        }
      });
    } else if (ordenCampeones === 'za') {
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