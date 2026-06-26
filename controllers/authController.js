const getAllNotes = async(req,res)=>{
    res.status(200).json({msg:"getAllNotes"});
};

module.exports = {getAllNotes};