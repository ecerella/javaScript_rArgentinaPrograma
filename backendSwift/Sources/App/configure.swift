
import Fluent
import FluentSQLiteDriver
import Vapor

// configures your application
public func configure(_ app: Application) throws {
    // uncomment to serve files from /Public folder
    app.middleware.use(FileMiddleware(publicDirectory: 
        app.directory.publicDirectory))

    app.databases.use(.sqlite(.file("db.sqlite")), as: .sqlite)

    app.migrations.add(CreateEmpleado()) //enlace a createEmpleado creacion de base

    // register routes
    try routes(app)
}

//paso4 consola, vapor run migrate.
//paso5 crear un controlador de empleado (empleadoController)
