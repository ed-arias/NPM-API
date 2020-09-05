const ICrud = require("../interfaces/ICrud")

class DataBaseStrategy {
    constructor() {
        //super()
        this._dataBase = null
    }

    set setDataBaseStrategy(dataBase){
        this._dataBase = dataBase   
    }

    get getDataBaseStrategy(){
        return this._dataBase
    }

    // connect() {
    //     this._dataBase.connect()
    // }
    isConnected() {
        this._dataBase.isConnected()
    }
    create(item) {
        this._dataBase.create(item)
    }
    read(query) {
        this._dataBase.read(query)
    }
    update(id, item) {
        this._dataBase.update(id, item)
    }
    remove(id) {
        this._dataBase.remove(id)
    }
}

module.exports = DataBaseStrategy