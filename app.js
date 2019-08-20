

let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {

    let kittySchema = new mongoose.Schema({
        name:String
    })

    kittySchema.methods.speak = function () {
        var greeting = this.name
          ? "Meow name is " + this.name
          : "I don't have a name";
        console.log(greeting);
      }

    const Kitten = mongoose.model('Kitten', kittySchema);

    let silence = new Kitten({name:"silence"})

    console.log(silence.name)

    let fluffy = new Kitten({ name: 'fluffy' });
    fluffy.speak(); // "Meow name is fluffy"

    fluffy.save(function (err, fluffy) {
        if (err){
            return console.error(err);
        }
        fluffy.speak();
      });

    Kitten.find(function (err, kittens) {
        if (err) return console.error(err);
        console.log(kittens);
        
      })
  // we're connected!

  console.log("conectamos ao banco de dados")
});