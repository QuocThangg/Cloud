var DBconfigs = {
    localdb: {
        urldb: 'mongodb://localhost:27017/tqtmoto',
        dbname: "tqtmoto",
        dbusername: "",
        dbpassword: "",
    },

    clouddb: {
        urldb: "mongodb+srv://quocthang:0989282393@cluster0.ldk3d.mongodb.net/<dbname>?retryWrites=true&w=majority",
        dbname: "tqtm",
        dbusername: "",
        dbpassword: "",
    }

};

module.exports = DBconfigs.localdb;