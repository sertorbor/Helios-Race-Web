import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import exampleRoutes from "./routes/exampleRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/example", exampleRoutes);

app.get("/", (req, res) => {
    res.json({ message: "¡Bienvenido a la API!" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
