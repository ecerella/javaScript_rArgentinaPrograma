import Fluent
import Vapor

func routes(_ app: Application) throws {
    //registro rutas de endpoints
    try app.register(collection: EmpleadoController())
}

//paso 7 build app o swift run