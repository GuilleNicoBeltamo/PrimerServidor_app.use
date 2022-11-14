const User = require("../models/User")
const path = require("path")

const getUserByID = (req,res)=> {
    const { id }  = req.params;
    const user = User.find((us) => us.id == id);
    if(!user){
        return res.status(404).sendFile(path.join(__dirname,"../../public/html/404.html"));
    }
    return res.status(200).render("pages/serviceDetail.ejs", { id })
};

module.exports = {
    getUserByID
}