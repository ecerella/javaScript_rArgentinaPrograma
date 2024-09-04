import Vapor
import Fluent

//generar coleccion de entradas
struct EmpleadoController:RouteCollection {
    //raiz de acceso de rutas del sistema boot
    func boot(routes: RoutesBuilder) throws {
        //elementos, puntos de entrada a grupo de direcciones de api
        let app = routes.grouped("api")
        app.post("create", use: create) //responde sobre create
        app.get("getAll", use: queryAll)
        app.get("queryEmail", use: queryEmail)
    }

    //agrego @Sendable para evitar error en post y get????
    @Sendable func create(req:Request) async throws -> HTTPStatus {
        //endpoint recibe json con datos de empleado
        let newEmpleado = try req.content.decode(Empleado.self)
        //graba las entradas en base de datos
        try await newEmpleado.save(on: req.db)
        //devuelve status tipo created
        return .created
    }

    @Sendable func queryAll(req:Request) async throws -> [Empleado] {
        //traigo de entradas de empleados una query del total
        try await Empleado.query(on: req.db)
            .all()
    }

    @Sendable func queryEmail(req:Request) async throws -> Empleado {
        //recupero email a buscar
        guard let email = req.query[String.self, at:"email"] else {
            throw Abort(.notFound)
        }
        if let empleado = try await Empleado.query(on: req.db)
            .filter(\.$email == email)
            .first() {
                return empleado
            } else {
                throw Abort(.notFound)
            }
    }
}

//paso6 registrar en routes el empleado controller