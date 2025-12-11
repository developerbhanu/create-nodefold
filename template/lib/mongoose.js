import mongoose from 'mongoose';

export const connectDB = async (url) => {
    try {
        await mongoose.connect(url, {
            // your options here
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.log('Error connecting to MongoDB: ', error);
    }
}
