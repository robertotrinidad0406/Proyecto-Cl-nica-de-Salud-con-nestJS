import * as runtime from "@prisma/client/runtime/client";
export const PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export const PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export const PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export const PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export const PrismaClientValidationError = runtime.PrismaClientValidationError;
export const sql = runtime.sqltag;
export const empty = runtime.empty;
export const join = runtime.join;
export const raw = runtime.raw;
export const Sql = runtime.Sql;
export const Decimal = runtime.Decimal;
export const getExtensionContext = runtime.Extensions.getExtensionContext;
export const prismaVersion = {
    client: "7.10.1",
    engine: "d1b3f377ca835d73fd50954a5e22128b9ebdd6b8"
};
export const NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
export const DbNull = runtime.DbNull;
export const JsonNull = runtime.JsonNull;
export const AnyNull = runtime.AnyNull;
export const ModelName = {
    Users: 'Users',
    Pacientes: 'Pacientes',
    Especialidad: 'Especialidad',
    Medico: 'Medico',
    Cita: 'Cita'
};
export const TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
export const UsersScalarFieldEnum = {
    id: 'id',
    nombre: 'nombre',
    apellido: 'apellido',
    email: 'email',
    contrasena: 'contrasena',
    telefono: 'telefono',
    rol: 'rol',
    createAt: 'createAt',
    updatedAt: 'updatedAt'
};
export const PacientesScalarFieldEnum = {
    id: 'id',
    nombre: 'nombre',
    apellido: 'apellido',
    fecha_de_nacimiento: 'fecha_de_nacimiento',
    email: 'email',
    createAt: 'createAt',
    updatedAt: 'updatedAt'
};
export const EspecialidadScalarFieldEnum = {
    id: 'id',
    nombre: 'nombre',
    descripcion: 'descripcion',
    createAt: 'createAt'
};
export const MedicoScalarFieldEnum = {
    id: 'id',
    NumeroLicencia: 'NumeroLicencia',
    userId: 'userId',
    EspecialidadId: 'EspecialidadId',
    createAt: 'createAt',
    updatedAt: 'updatedAt'
};
export const CitaScalarFieldEnum = {
    id: 'id',
    fechaHora: 'fechaHora',
    Motivo: 'Motivo',
    estado: 'estado',
    PacientesId: 'PacientesId',
    medicoId: 'medicoId',
    createAt: 'createAt',
    updatedAt: 'updatedAt'
};
export const SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
export const QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
export const NullsOrder = {
    first: 'first',
    last: 'last'
};
export const defineExtension = runtime.Extensions.defineExtension;
//# sourceMappingURL=prismaNamespace.js.map