
var { ref, get} = require('firebase/database')
var database = require('./firebase')

const getFromFirebase = () => {
  get(ref(database, 'cities/')).then((snapshot) => {
    if (snapshot.exists()) {
      console.log('ALL CITIES TEMPERATURES')
      console.log(snapshot.val());
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });
}

console.log(getFromFirebase())