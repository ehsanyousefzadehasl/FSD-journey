var express = require('express');
var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

var ingredients = [
    {
        "id": "232kAk",
        "text": "Eggs"
    },
    {
        "id": "dkP345",
        "text": "Milk"
    },
    {
        "id": "dkcuu7",
        "text": "Bacon"
    },
    {
        "id": "73hdy",
        "text": "Frogs Legs"
    }
];

// post requests
app.post('/ingredients', function (request, response) {
    var ingredient = request.body;
    if (!ingredient || ingredient.text === "") {
        response.status(500).send({
            error: "Your ingredient must have text"
        });
    } else {
        ingredients.push(ingredient);
        response.status(200).send(ingredient);
    }
});



// get requests
app.get('/', function (request, response) {
    response.send("You are in the home!");
});

app.get('/ingredients', function (request, response) {
    response.send(ingredients);
});

app.get('/about', function (request, response) {
    response.send('Ingredients API, by Ehsan!');
});



// put requests
app.put('/ingredients/:ingredientId', function (request, response) {

    var ingredientId = request.params.ingredientId;
    var text = request.body.text;

    if (!text || text === "") {
        response.status(500).send({
            error: "You must provide ingredient text"
        });
    } else {
        var objectFound = false;
        for (var i = 0; i < ingredients.length; i++) {
            var ing = ingredients[i];
            
            if (ing.id === request.params.ingredientId) {
                ingredients[i].text = text;
                objectFound = true;
                break;
            }
        }
        if (objectFound === true){
            response.send(ingredients);   
        } else {
            response.status(500).send({
                error: "The ingredient could not be found!"
            });
        }
    }
});

app.listen(3000, function () {
    console.log("First API running on port 3000!");
});
