require("dotenv").config();
const path = require("path");
const express = require("express");

const userRoutes = require("./routes/users");
const Home = require("./routes/home")
const detailService = require("./routes/detailService")
const inicioSesion = require("./routes/inicioSesion")
const Registro = require("./routes/registro")
const Carrito = require("./routes/Carrito")

const app = express();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "../public")));

app.use("/users",userRoutes);

app.use("/",Home);

app.use("/servicio",detailService);

app.use("/inicio-sesion",inicioSesion);

app.use("/registro",Registro);

app.use("/carrito",Carrito);

app.listen(process.env.PORT, () => {
    console.log("Servidor escuchando en puerto: ", process.env.PORT);
});