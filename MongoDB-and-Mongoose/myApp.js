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
const findPeopleByName = (personName, done) => {
  Person.find({name: personName},  (err, data) => {
    if (err) return done(err);
    // if (err) return console.error(err);
    done(null, data);
  });
};


// Task 6
const findOneByFood = (food, done) => {
  Person.findOne({favoriteFoods: food},  (err, data) => {
    if (err) return done(err);
    // if (err) return console.error(err);
    done(null, data);
  });
};


// Task 7
const findPersonById = (personId, done) => {
  Person.findById({_id: personId},  (err, data) => {
    if (err) return done(err);
    // if (err) return console.error(err);
    done(null, data);
  });
};


// Task 8
const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";
  
  Person.findById(personId, (err, data) => {
    if (err) return done(err);
    data.favoriteFoods.push(foodToAdd);
    data.save(function(err, data) {
      if (err) return done(err);
      // if (err) return console.error(err);
      done(null, data);
    });
  });
};


// Task 9
const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  Person.findOneAndUpdate(
    {name: personName}, 
    {$set:{age: ageToSet}}, 
    {new: true},
    (err, data) => {
      if (err) return done(err);
      // if (err) return console.error(err);
      done(null, data);
    }
  );
};


// Task 10
const removeById = (personId, done) => {
  Person.findByIdAndRemove({_id: personId},  (err, data) => {
    if (err) return done(err);
    // if (err) return console.error(err);
    done(null, data);
  });
};


// Task 11
const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  Person.remove({name: nameToRemove}, (err, data) => {
    if (err) return done(err);
    // if (err) return console.error(err);
    done(null, data);
  });
};


// Task 12
const queryChain = (done) => {
  const foodToSearch = "burrito";

  Person.find({food: foodToSearch})
        .sort({name: 1})              //1 for ascending	order and -1 for descending order.
        .limit(2)                     //return array which has 2 items in it.
        .select({age: 0})             //0 means false and thus hide age property.
        .exec((err, data) => {
          if (err) return done(err);
          // if (err) return console.error(err);
          done(null, data);
        });
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
