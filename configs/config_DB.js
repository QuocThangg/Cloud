var DBconfigs = {
    localdb: {
        urldb: 'mongodb://localhost:27017/tqtgearvn',
        dbname: "tqtgearvn",
        dbusername: "",
        dbpassword: "",
    },

    clouddb: {
        urldb: "mongodb+srv://db02:mrZs7pMNx6PccYSD@cluster0.q8a6f.mongodb.net/newshop?retryWrites=true&w=majority",
        dbname: "newshop",
        dbusername: "",
        dbpassword: "",
    }

};

module.exports = DBconfigs.localdb;