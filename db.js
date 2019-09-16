var mongoose = require('mongoose');
var Error_Log = require("./UserSchema");
mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true }, function (err) {
    if (err) {
        console.log('mongo db connection failed')
    }
});
//mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true });
// mongoose.connect("mongodb://<--Enter IP Address:PORT-->/<-Folder Name in which all files are present-->", {
//     useNewUrlParser: true
// });

module.exports = {
    readByErrorKeyword: eKey => {
        return new Promise((resolve, reject) => {
            var filter = { error_keyword: eKey };
            Error_Log.find(filter, function (err, data) {
                if (err) {
                    return reject({ status: "error", data: err });
                }
                return resolve({ status: "success", data: data });
            });
        });
    },
    readByErrorCode: eCode => {
        return new Promise((resolve, reject) => {
            var filter = { error_code: eCode };
            Error_Log.find(filter, function (err, data) {
                if (err) {
                    return reject({ status: "error", data: err });
                }
                return resolve({ status: "success", data: data });
            });
        });
    },


    createErrorLog: e_Log => {
        return new Promise((resolve, reject) => {
            var newError = new Error_Log(e_Log);
            newError.save(function (err, data) {
                if (err) {
                    return reject({ status: "error", data: err });
                }
                return resolve({ status: "success", data: data });
            });
        });
    }
};