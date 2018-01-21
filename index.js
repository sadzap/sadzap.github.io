var database = firebase.database();
var query = "/";
var name = "Zakiah";
// firebase.database().ref(query).once('value').then(function(snapshot)) {
//     if (snapshot.val() === 1) {
//
//     }
// }
firebase.database().ref(query).update({ // query's position(root) in the database, key [name] gets value 510
    [name] : {
        age : 10,
        lvl : 5
    }
})
