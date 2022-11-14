const InicioSesion = (req,res) => {
    return res.status(200).render("pages/login.ejs")
};

module.exports = {
    InicioSesion
}