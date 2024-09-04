import Vapor
import Fluent

//modelo logico base de datos

final class Empleado: Model, Content, @unchecked Sendable{ //cambio Content por @unchecked Sendable

    //defino nombre de tabla en base de datos
    static let schema: String = "empleado"

    //propiedades de elementos en base de datos
    @ID(key: .id) var id:UUID?
    //campos nombre y defino elemento
    @Field(key: "nombre") var nombre:String
    @Field(key: "email") var email:String

    init() {} //protocolo de ejecucion de implementacion por defecto

    //init convencional (constructor)
    init(id:UUID? = nil, nombre:String, email:String) {
        self.id = id
        self.nombre = nombre
        self.email = email
    }
}

//paso 2 migracion (empMigration.swift)