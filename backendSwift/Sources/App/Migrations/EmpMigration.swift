import Vapor
import Fluent

//generacion de modelo (migracion) en base de datos
struct CreateEmpleado: AsyncMigration {

    //dos funciones obligatorias
    //realizar una accion en base de datos
    func prepare(on database: Database) async throws {
        try await database.schema(Empleado.schema)
            //definicion del modelo
            .field(.id, .uuid, .required)
            .field("nombre", .string, .required)
            .field("email", .string, .required)
            .unique(on: "email") //evito que se entren emails duplicados en base
            .create() //genera el elemento
    }

    //rollback o deshacer accion en base de datos
    func revert(on database: Database) async throws {
        try await database.schema(Empleado.schema)
            .delete()
    }
}

//paso3 en configure.swift, (app.migration.add) colocar la estructura Empleado