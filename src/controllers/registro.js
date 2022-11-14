const registro = (req,res) => {
    return res.status(200).render("pages/registro.ejs")
};

module.exports = {
    registro
}