var database = firebase.database();
var query = "/characters/"; // root
var name = "Zakiah";

firebase.database().ref(query).update({ // query's position(root) in the database, key [name] gets value 510
    [name] : {
        age : 10,
        lvl : 5
    }
})

name = "Kenyu Diggitt";

firebase.database().ref(query).update({
    [name] : {
        age : 69,
        lvl : 4
    }
})

name = "Your character";
query = "Kenyu Diggitt";

firebase.database().ref(query).once('value').then(function(snapshot) {
    if (snapshot.val()) {
        console.log(snapshot.val());
    }
    else {
        console.log([name] + " is ded.");
    }
}).catch(error => {
    console.log(error.message);
})
