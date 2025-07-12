import mongoose from "mongoose";

const connectToDatabase = async () => {
    // try{
    //     await mongoose.connect(process.env.MONGODB_URL)
    // } catch(error){
    //     console.log(error)
    // }

    mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((e) => {
        console.log("Error connecting to MongoDB", e);
    });
}

export default connectToDatabase; 