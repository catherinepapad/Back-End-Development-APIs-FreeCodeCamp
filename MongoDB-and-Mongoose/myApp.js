require('dotenv').config();
let mongoose = require('mongoose');            // Task 1


// Task 1
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });


// Task 2
const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: Number,
  favoriteFoods: [String]
});

let Person = mongoose.model('Person', personSchema);;


// Task 3
const createAndSavePerson = (done) => {
  let person = new Person({
    name: 'John Smith',
    age: 30,
    favoriteFoods: ['pizza', 'burgers']
  });
  
  person.save(function(err, data) {
    if (err) return done(err);
    // if (err) return console.error(err);
    done(null, data);
  });
};


// Task 4
let arrayOfPeople = [{name: 'Mary Lewis', age: 25, favoriteFoods: ['chips', 'steak']}, {name: 'Bob Ross', age: 52, favoriteFoods: ['mexican']}, {name: 'Kylie Turner', age: 43, favoriteFoods: ['italian', 'pizza', 'pasta']}];
const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, (err, data) => {
    if (err) return done(err);
    // if (err) return console.error(err);
    done(null, data);
  });
};


// Task 5
let personName = 'Kylie Turner';
const findPeopleByName = (personName, done) => {
  Person.find({name: personName},  (err, data) => {
    if (err) return done(err);
    // if (err) return console.error(err);
    done(null, data);
  });
};





const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
