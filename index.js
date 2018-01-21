var database = firebase.database();
var query = "/";
var name = "Zakiah";

firebase.database().ref(query).update({ // query's position(root) in the database, key [name] gets value 510
    [name] : {
        age : 10,
        lvl : 5
    }
})

query = "Zakiah";

firebase.database().ref(query).once('value').then(function(snapshot) {
    if (snapshot.val()) {
        console.log(snapshot.val());
    }
    else {
        console.log("Zakiah is ded.");
    }
}).catch(error => {
    console.log(error.message);
})
