const noteModel = require("../models/Notes");

exports.createNote = async (req, res) => {
    try {
        const { title, content } = req.body;
        const newNote = await noteModel.create({
            title,
            content,
            user: req.user._id
        });
        res.status(201).json(newNote);
    } catch (err) {
        res.status(500).send("Failed to create note");
    }
};

exports.getNotes = async (req, res) => {
    try {
        const notes = await noteModel.find({ user: req.user._id });
        res.json(notes);
    } catch (err) {
        res.status(500).send("Failed to fetch notes");
    }
};

exports.updateNote = async (req, res) => {
    try {
        const { title, content } = req.body;
        const updatedNote = await noteModel.findOneAndUpdate(
            { _id: req.params.id, user: req.user._id },
            { title, content },
            { new: true }
        );
        if (!updatedNote) return res.status(404).send("Note not found or unauthorized");
        res.json(updatedNote);
    } catch (err) {
        res.status(500).send("Failed to update note");
    }
};

exports.deleteNote = async (req, res) => {
    try {
        const deletedNote = await noteModel.findOneAndDelete({
            _id: req.params.id,
            user: req.user._id
        });
        if (!deletedNote) return res.status(404).send("Note not found or unauthorized");
        res.send("Note deleted successfully");
    } catch (err) {
        res.status(500).send("Failed to delete note");
    }
};

