const path = require("path")

const ServiceSelect = (req,res) => {
    const { id }  = req.params;
    if(!id){
        return res.status(404).sendFile(path.join(__dirname,"../../public/html/404.html"));
    }
    console.log(id)
    return res.status(200).render("pages/serviceDetail.ejs", { id })
};

module.exports = {
    ServiceSelect
}