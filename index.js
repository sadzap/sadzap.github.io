var database = firebase.database();
var query = "/characters/"; // root
var name = "Zakiah";

database.ref(query).update({ // query's position(root) in the database, key [name] gets value 510
    [name] : {
        age : 10,
        lvl : 5
    }
})

name = "Kenyu Diggitt";

database.ref(query).update({
    [name] : {
        age : 69,
        lvl : 4
    }
})

name = "Your character";
query = "Kenyu Diggitt";

database.ref("/characters/" + query).once('value').then(function(snapshot) { // make sure to add path in ref()
    if (snapshot.val()) {
        console.log(snapshot.val());
    }
    else {
        console.log([name] + " is ded.");
    }
}).catch(error => {
    console.log(error.message);
})
