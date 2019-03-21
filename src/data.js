window.lol = {
 getNameAndImageOfChampion : (champions) => {
  return champions.map((obj)=>{
   return {imagen: obj[1].img, name:obj[1].name}
  }); 
},
  
  sortChampionsCards: (ordenCampeones, arr) => {
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
    
    } 
    return nuevoarray
  }
}