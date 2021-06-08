const mongoose = require('mongodb');

export const connectDb = async () => {
    try {
        mongoose.connect('mongodb://localhost:27017/react-shoping-cart-db', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        });
        console.log("Connected to DB");

    } catch (error) {
        console.log(error.message)
    }
}