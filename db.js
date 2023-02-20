const sql = require("mssql/msnodesqlv8");
var config = {
    server:process.env.DB_DEV_SERVER,
    database:process.env.DB_DEV_DATABASE,
    driver:process.env.DB_DEV_DRIVER,
    options:{
        trustedConnection:true
    }
}

sql/ConnectionError(config,function(err){
    if(err)console.log(err);
    var request = new sql.Request();
    request.query("select * from FarmInfo",function(err,records){
        if(err)console.log(err);
        else console.log(records);
    })
})