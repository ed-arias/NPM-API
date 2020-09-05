const ICrud = require("./../interfaces/ICrud")

class ContextStrategy extends ICrud {
    constructor(strategy){
        super()
        this._dataBase = strategy
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
    isConnected(){
        this._dataBase.isConnected()
    }
}

module.exports = ContextStrategy