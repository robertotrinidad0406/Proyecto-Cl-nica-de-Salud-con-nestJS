export declare const Rol: {
    readonly recepcionista: "recepcionista";
    readonly medico: "medico";
    readonly gerencia: "gerencia";
};
export type Rol = (typeof Rol)[keyof typeof Rol];
export declare const EstadoCita: {
    readonly programada: "programada";
    readonly en_espera: "en_espera";
    readonly completada: "completada";
    readonly cancelada: "cancelada";
};
export type EstadoCita = (typeof EstadoCita)[keyof typeof EstadoCita];
