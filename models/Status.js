var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new NoteSchema object
// This is similar to a Sequelize model
var StatusSchema = new Schema({
    // `title` is of type String
    
    Saved: Boolean
});

// This creates our model from the above schema, using mongoose's model method
var Status = mongoose.model("Status", StatusSchema);

// Export the Note model
module.exports = Status;