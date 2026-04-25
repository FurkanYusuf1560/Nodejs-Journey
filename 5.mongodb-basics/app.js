const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://furkan83cvk34_db_user:DombI6SjGC6XZcR4@cluster0.rpfqtad.mongodb.net/",
  )
  .then(() => console.log("Database connected successfully"))
  .catch((e) => console.log(e));

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  isActive: Boolean,
  tags: [String],
  createdAt: { type: Date, default: Date.now },
});

const User = mongoose.model("User", userSchema);

async function runQueryExamples() {
  try {
    //    const newUser = await User.create({
    //     name: 'John Doe',
    //      email: 'Doe1@gmail.com',
    //      age: '25',
    //      isActive: true,
    //      tags: ['developer'],
    //    });

    //  const newUser = new User({
    //   name: 'Yusuf',
    //   email: 'kandemir@gmail.com',
    //   age: '26',
    //   isActive: true,
    //   tags: ['developer', 'designer', 'manager'],
    // });

    // await newUser.save()

    //   console.log('Created new user', newUser);

    // const allUsers = await User.find({});

    // console.log(allUsers);
    
    // const getUserOfActiveFalse = await User.find({
    //     isActive : true
    // })

    // console.log(getUserOfActiveFalse);
    

    const getJohnDoeUser = await User.findOne({name : 'John Doe'});

    console.log(getJohnDoeUser);
    


  } catch (e) {
    console.log("Error ->", e);
  } finally {
    await mongoose.connection.close();
  }
}

runQueryExamples();
