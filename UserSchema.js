var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Error_Log = new Schema({
    error_keyword: String,
    error_code: String,
    ref_URL: String
});

Error_Log.index({ error_keyword: 1 });
Error_Log.index({ error_code: 1 });

module.exports = mongoose.model("error", Error_Log);
