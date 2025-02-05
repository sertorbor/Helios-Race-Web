// Aquí puedes definir un modelo de base de datos (ejemplo con MongoDB y Mongoose)
import mongoose from "mongoose";

const ExampleSchema = new mongoose.Schema({
    name: String,
    age: Number,
});

const Example = mongoose.model("Example", ExampleSchema);
export default Example;
