import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PacientesModel = runtime.Types.Result.DefaultSelection<Prisma.$PacientesPayload>;
export type AggregatePacientes = {
    _count: PacientesCountAggregateOutputType | null;
    _avg: PacientesAvgAggregateOutputType | null;
    _sum: PacientesSumAggregateOutputType | null;
    _min: PacientesMinAggregateOutputType | null;
    _max: PacientesMaxAggregateOutputType | null;
};
export type PacientesAvgAggregateOutputType = {
    id: number | null;
};
export type PacientesSumAggregateOutputType = {
    id: number | null;
};
export type PacientesMinAggregateOutputType = {
    id: number | null;
    nombre: string | null;
    apellido: string | null;
    fecha_de_nacimiento: Date | null;
    email: string | null;
    createAt: Date | null;
    updatedAt: Date | null;
};
export type PacientesMaxAggregateOutputType = {
    id: number | null;
    nombre: string | null;
    apellido: string | null;
    fecha_de_nacimiento: Date | null;
    email: string | null;
    createAt: Date | null;
    updatedAt: Date | null;
};
export type PacientesCountAggregateOutputType = {
    id: number;
    nombre: number;
    apellido: number;
    fecha_de_nacimiento: number;
    email: number;
    createAt: number;
    updatedAt: number;
    _all: number;
};
export type PacientesAvgAggregateInputType = {
    id?: true;
};
export type PacientesSumAggregateInputType = {
    id?: true;
};
export type PacientesMinAggregateInputType = {
    id?: true;
    nombre?: true;
    apellido?: true;
    fecha_de_nacimiento?: true;
    email?: true;
    createAt?: true;
    updatedAt?: true;
};
export type PacientesMaxAggregateInputType = {
    id?: true;
    nombre?: true;
    apellido?: true;
    fecha_de_nacimiento?: true;
    email?: true;
    createAt?: true;
    updatedAt?: true;
};
export type PacientesCountAggregateInputType = {
    id?: true;
    nombre?: true;
    apellido?: true;
    fecha_de_nacimiento?: true;
    email?: true;
    createAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type PacientesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PacientesWhereInput;
    orderBy?: Prisma.PacientesOrderByWithRelationInput | Prisma.PacientesOrderByWithRelationInput[];
    cursor?: Prisma.PacientesWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PacientesCountAggregateInputType;
    _avg?: PacientesAvgAggregateInputType;
    _sum?: PacientesSumAggregateInputType;
    _min?: PacientesMinAggregateInputType;
    _max?: PacientesMaxAggregateInputType;
};
export type GetPacientesAggregateType<T extends PacientesAggregateArgs> = {
    [P in keyof T & keyof AggregatePacientes]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePacientes[P]> : Prisma.GetScalarType<T[P], AggregatePacientes[P]>;
};
export type PacientesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PacientesWhereInput;
    orderBy?: Prisma.PacientesOrderByWithAggregationInput | Prisma.PacientesOrderByWithAggregationInput[];
    by: Prisma.PacientesScalarFieldEnum[] | Prisma.PacientesScalarFieldEnum;
    having?: Prisma.PacientesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PacientesCountAggregateInputType | true;
    _avg?: PacientesAvgAggregateInputType;
    _sum?: PacientesSumAggregateInputType;
    _min?: PacientesMinAggregateInputType;
    _max?: PacientesMaxAggregateInputType;
};
export type PacientesGroupByOutputType = {
    id: number;
    nombre: string;
    apellido: string;
    fecha_de_nacimiento: Date;
    email: string | null;
    createAt: Date;
    updatedAt: Date;
    _count: PacientesCountAggregateOutputType | null;
    _avg: PacientesAvgAggregateOutputType | null;
    _sum: PacientesSumAggregateOutputType | null;
    _min: PacientesMinAggregateOutputType | null;
    _max: PacientesMaxAggregateOutputType | null;
};
export type GetPacientesGroupByPayload<T extends PacientesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PacientesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PacientesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PacientesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PacientesGroupByOutputType[P]>;
}>>;
export type PacientesWhereInput = {
    AND?: Prisma.PacientesWhereInput | Prisma.PacientesWhereInput[];
    OR?: Prisma.PacientesWhereInput[];
    NOT?: Prisma.PacientesWhereInput | Prisma.PacientesWhereInput[];
    id?: Prisma.IntFilter<"Pacientes"> | number;
    nombre?: Prisma.StringFilter<"Pacientes"> | string;
    apellido?: Prisma.StringFilter<"Pacientes"> | string;
    fecha_de_nacimiento?: Prisma.DateTimeFilter<"Pacientes"> | Date | string;
    email?: Prisma.StringNullableFilter<"Pacientes"> | string | null;
    createAt?: Prisma.DateTimeFilter<"Pacientes"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Pacientes"> | Date | string;
    citas?: Prisma.CitaListRelationFilter;
};
export type PacientesOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    apellido?: Prisma.SortOrder;
    fecha_de_nacimiento?: Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    createAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    citas?: Prisma.CitaOrderByRelationAggregateInput;
};
export type PacientesWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.PacientesWhereInput | Prisma.PacientesWhereInput[];
    OR?: Prisma.PacientesWhereInput[];
    NOT?: Prisma.PacientesWhereInput | Prisma.PacientesWhereInput[];
    nombre?: Prisma.StringFilter<"Pacientes"> | string;
    apellido?: Prisma.StringFilter<"Pacientes"> | string;
    fecha_de_nacimiento?: Prisma.DateTimeFilter<"Pacientes"> | Date | string;
    email?: Prisma.StringNullableFilter<"Pacientes"> | string | null;
    createAt?: Prisma.DateTimeFilter<"Pacientes"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Pacientes"> | Date | string;
    citas?: Prisma.CitaListRelationFilter;
}, "id">;
export type PacientesOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    apellido?: Prisma.SortOrder;
    fecha_de_nacimiento?: Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    createAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.PacientesCountOrderByAggregateInput;
    _avg?: Prisma.PacientesAvgOrderByAggregateInput;
    _max?: Prisma.PacientesMaxOrderByAggregateInput;
    _min?: Prisma.PacientesMinOrderByAggregateInput;
    _sum?: Prisma.PacientesSumOrderByAggregateInput;
};
export type PacientesScalarWhereWithAggregatesInput = {
    AND?: Prisma.PacientesScalarWhereWithAggregatesInput | Prisma.PacientesScalarWhereWithAggregatesInput[];
    OR?: Prisma.PacientesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PacientesScalarWhereWithAggregatesInput | Prisma.PacientesScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Pacientes"> | number;
    nombre?: Prisma.StringWithAggregatesFilter<"Pacientes"> | string;
    apellido?: Prisma.StringWithAggregatesFilter<"Pacientes"> | string;
    fecha_de_nacimiento?: Prisma.DateTimeWithAggregatesFilter<"Pacientes"> | Date | string;
    email?: Prisma.StringNullableWithAggregatesFilter<"Pacientes"> | string | null;
    createAt?: Prisma.DateTimeWithAggregatesFilter<"Pacientes"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Pacientes"> | Date | string;
};
export type PacientesCreateInput = {
    nombre: string;
    apellido: string;
    fecha_de_nacimiento: Date | string;
    email?: string | null;
    createAt?: Date | string;
    updatedAt?: Date | string;
    citas?: Prisma.CitaCreateNestedManyWithoutPacienteInput;
};
export type PacientesUncheckedCreateInput = {
    id?: number;
    nombre: string;
    apellido: string;
    fecha_de_nacimiento: Date | string;
    email?: string | null;
    createAt?: Date | string;
    updatedAt?: Date | string;
    citas?: Prisma.CitaUncheckedCreateNestedManyWithoutPacienteInput;
};
export type PacientesUpdateInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    apellido?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha_de_nacimiento?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    citas?: Prisma.CitaUpdateManyWithoutPacienteNestedInput;
};
export type PacientesUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    apellido?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha_de_nacimiento?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    citas?: Prisma.CitaUncheckedUpdateManyWithoutPacienteNestedInput;
};
export type PacientesCreateManyInput = {
    id?: number;
    nombre: string;
    apellido: string;
    fecha_de_nacimiento: Date | string;
    email?: string | null;
    createAt?: Date | string;
    updatedAt?: Date | string;
};
export type PacientesUpdateManyMutationInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    apellido?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha_de_nacimiento?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PacientesUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    apellido?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha_de_nacimiento?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PacientesCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    apellido?: Prisma.SortOrder;
    fecha_de_nacimiento?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    createAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PacientesAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type PacientesMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    apellido?: Prisma.SortOrder;
    fecha_de_nacimiento?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    createAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PacientesMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    apellido?: Prisma.SortOrder;
    fecha_de_nacimiento?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    createAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PacientesSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type PacientesScalarRelationFilter = {
    is?: Prisma.PacientesWhereInput;
    isNot?: Prisma.PacientesWhereInput;
};
export type PacientesCreateNestedOneWithoutCitasInput = {
    create?: Prisma.XOR<Prisma.PacientesCreateWithoutCitasInput, Prisma.PacientesUncheckedCreateWithoutCitasInput>;
    connectOrCreate?: Prisma.PacientesCreateOrConnectWithoutCitasInput;
    connect?: Prisma.PacientesWhereUniqueInput;
};
export type PacientesUpdateOneRequiredWithoutCitasNestedInput = {
    create?: Prisma.XOR<Prisma.PacientesCreateWithoutCitasInput, Prisma.PacientesUncheckedCreateWithoutCitasInput>;
    connectOrCreate?: Prisma.PacientesCreateOrConnectWithoutCitasInput;
    upsert?: Prisma.PacientesUpsertWithoutCitasInput;
    connect?: Prisma.PacientesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PacientesUpdateToOneWithWhereWithoutCitasInput, Prisma.PacientesUpdateWithoutCitasInput>, Prisma.PacientesUncheckedUpdateWithoutCitasInput>;
};
export type PacientesCreateWithoutCitasInput = {
    nombre: string;
    apellido: string;
    fecha_de_nacimiento: Date | string;
    email?: string | null;
    createAt?: Date | string;
    updatedAt?: Date | string;
};
export type PacientesUncheckedCreateWithoutCitasInput = {
    id?: number;
    nombre: string;
    apellido: string;
    fecha_de_nacimiento: Date | string;
    email?: string | null;
    createAt?: Date | string;
    updatedAt?: Date | string;
};
export type PacientesCreateOrConnectWithoutCitasInput = {
    where: Prisma.PacientesWhereUniqueInput;
    create: Prisma.XOR<Prisma.PacientesCreateWithoutCitasInput, Prisma.PacientesUncheckedCreateWithoutCitasInput>;
};
export type PacientesUpsertWithoutCitasInput = {
    update: Prisma.XOR<Prisma.PacientesUpdateWithoutCitasInput, Prisma.PacientesUncheckedUpdateWithoutCitasInput>;
    create: Prisma.XOR<Prisma.PacientesCreateWithoutCitasInput, Prisma.PacientesUncheckedCreateWithoutCitasInput>;
    where?: Prisma.PacientesWhereInput;
};
export type PacientesUpdateToOneWithWhereWithoutCitasInput = {
    where?: Prisma.PacientesWhereInput;
    data: Prisma.XOR<Prisma.PacientesUpdateWithoutCitasInput, Prisma.PacientesUncheckedUpdateWithoutCitasInput>;
};
export type PacientesUpdateWithoutCitasInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    apellido?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha_de_nacimiento?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PacientesUncheckedUpdateWithoutCitasInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    apellido?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha_de_nacimiento?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PacientesCountOutputType = {
    citas: number;
};
export type PacientesCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    citas?: boolean | PacientesCountOutputTypeCountCitasArgs;
};
export type PacientesCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PacientesCountOutputTypeSelect<ExtArgs> | null;
};
export type PacientesCountOutputTypeCountCitasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CitaWhereInput;
};
export type PacientesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    apellido?: boolean;
    fecha_de_nacimiento?: boolean;
    email?: boolean;
    createAt?: boolean;
    updatedAt?: boolean;
    citas?: boolean | Prisma.Pacientes$citasArgs<ExtArgs>;
    _count?: boolean | Prisma.PacientesCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["pacientes"]>;
export type PacientesSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    apellido?: boolean;
    fecha_de_nacimiento?: boolean;
    email?: boolean;
    createAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["pacientes"]>;
export type PacientesSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    apellido?: boolean;
    fecha_de_nacimiento?: boolean;
    email?: boolean;
    createAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["pacientes"]>;
export type PacientesSelectScalar = {
    id?: boolean;
    nombre?: boolean;
    apellido?: boolean;
    fecha_de_nacimiento?: boolean;
    email?: boolean;
    createAt?: boolean;
    updatedAt?: boolean;
};
export type PacientesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nombre" | "apellido" | "fecha_de_nacimiento" | "email" | "createAt" | "updatedAt", ExtArgs["result"]["pacientes"]>;
export type PacientesInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    citas?: boolean | Prisma.Pacientes$citasArgs<ExtArgs>;
    _count?: boolean | Prisma.PacientesCountOutputTypeDefaultArgs<ExtArgs>;
};
export type PacientesIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type PacientesIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $PacientesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Pacientes";
    objects: {
        citas: Prisma.$CitaPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        nombre: string;
        apellido: string;
        fecha_de_nacimiento: Date;
        email: string | null;
        createAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["pacientes"]>;
    composites: {};
};
export type PacientesGetPayload<S extends boolean | null | undefined | PacientesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PacientesPayload, S>;
export type PacientesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PacientesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PacientesCountAggregateInputType | true;
};
export interface PacientesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Pacientes'];
        meta: {
            name: 'Pacientes';
        };
    };
    findUnique<T extends PacientesFindUniqueArgs>(args: Prisma.SelectSubset<T, PacientesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PacientesClient<runtime.Types.Result.GetResult<Prisma.$PacientesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PacientesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PacientesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PacientesClient<runtime.Types.Result.GetResult<Prisma.$PacientesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PacientesFindFirstArgs>(args?: Prisma.SelectSubset<T, PacientesFindFirstArgs<ExtArgs>>): Prisma.Prisma__PacientesClient<runtime.Types.Result.GetResult<Prisma.$PacientesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PacientesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PacientesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PacientesClient<runtime.Types.Result.GetResult<Prisma.$PacientesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PacientesFindManyArgs>(args?: Prisma.SelectSubset<T, PacientesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PacientesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PacientesCreateArgs>(args: Prisma.SelectSubset<T, PacientesCreateArgs<ExtArgs>>): Prisma.Prisma__PacientesClient<runtime.Types.Result.GetResult<Prisma.$PacientesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PacientesCreateManyArgs>(args?: Prisma.SelectSubset<T, PacientesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PacientesCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PacientesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PacientesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PacientesDeleteArgs>(args: Prisma.SelectSubset<T, PacientesDeleteArgs<ExtArgs>>): Prisma.Prisma__PacientesClient<runtime.Types.Result.GetResult<Prisma.$PacientesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PacientesUpdateArgs>(args: Prisma.SelectSubset<T, PacientesUpdateArgs<ExtArgs>>): Prisma.Prisma__PacientesClient<runtime.Types.Result.GetResult<Prisma.$PacientesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PacientesDeleteManyArgs>(args?: Prisma.SelectSubset<T, PacientesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PacientesUpdateManyArgs>(args: Prisma.SelectSubset<T, PacientesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PacientesUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PacientesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PacientesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PacientesUpsertArgs>(args: Prisma.SelectSubset<T, PacientesUpsertArgs<ExtArgs>>): Prisma.Prisma__PacientesClient<runtime.Types.Result.GetResult<Prisma.$PacientesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PacientesCountArgs>(args?: Prisma.Subset<T, PacientesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PacientesCountAggregateOutputType> : number>;
    aggregate<T extends PacientesAggregateArgs>(args: Prisma.Subset<T, PacientesAggregateArgs>): Prisma.PrismaPromise<GetPacientesAggregateType<T>>;
    groupBy<T extends PacientesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PacientesGroupByArgs['orderBy'];
    } : {
        orderBy?: PacientesGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PacientesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPacientesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PacientesFieldRefs;
}
export interface Prisma__PacientesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    citas<T extends Prisma.Pacientes$citasArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Pacientes$citasArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PacientesFieldRefs {
    readonly id: Prisma.FieldRef<"Pacientes", 'Int'>;
    readonly nombre: Prisma.FieldRef<"Pacientes", 'String'>;
    readonly apellido: Prisma.FieldRef<"Pacientes", 'String'>;
    readonly fecha_de_nacimiento: Prisma.FieldRef<"Pacientes", 'DateTime'>;
    readonly email: Prisma.FieldRef<"Pacientes", 'String'>;
    readonly createAt: Prisma.FieldRef<"Pacientes", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Pacientes", 'DateTime'>;
}
export type PacientesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PacientesSelect<ExtArgs> | null;
    omit?: Prisma.PacientesOmit<ExtArgs> | null;
    include?: Prisma.PacientesInclude<ExtArgs> | null;
    where: Prisma.PacientesWhereUniqueInput;
};
export type PacientesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PacientesSelect<ExtArgs> | null;
    omit?: Prisma.PacientesOmit<ExtArgs> | null;
    include?: Prisma.PacientesInclude<ExtArgs> | null;
    where: Prisma.PacientesWhereUniqueInput;
};
export type PacientesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PacientesSelect<ExtArgs> | null;
    omit?: Prisma.PacientesOmit<ExtArgs> | null;
    include?: Prisma.PacientesInclude<ExtArgs> | null;
    where?: Prisma.PacientesWhereInput;
    orderBy?: Prisma.PacientesOrderByWithRelationInput | Prisma.PacientesOrderByWithRelationInput[];
    cursor?: Prisma.PacientesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PacientesScalarFieldEnum | Prisma.PacientesScalarFieldEnum[];
};
export type PacientesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PacientesSelect<ExtArgs> | null;
    omit?: Prisma.PacientesOmit<ExtArgs> | null;
    include?: Prisma.PacientesInclude<ExtArgs> | null;
    where?: Prisma.PacientesWhereInput;
    orderBy?: Prisma.PacientesOrderByWithRelationInput | Prisma.PacientesOrderByWithRelationInput[];
    cursor?: Prisma.PacientesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PacientesScalarFieldEnum | Prisma.PacientesScalarFieldEnum[];
};
export type PacientesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PacientesSelect<ExtArgs> | null;
    omit?: Prisma.PacientesOmit<ExtArgs> | null;
    include?: Prisma.PacientesInclude<ExtArgs> | null;
    where?: Prisma.PacientesWhereInput;
    orderBy?: Prisma.PacientesOrderByWithRelationInput | Prisma.PacientesOrderByWithRelationInput[];
    cursor?: Prisma.PacientesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PacientesScalarFieldEnum | Prisma.PacientesScalarFieldEnum[];
};
export type PacientesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PacientesSelect<ExtArgs> | null;
    omit?: Prisma.PacientesOmit<ExtArgs> | null;
    include?: Prisma.PacientesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PacientesCreateInput, Prisma.PacientesUncheckedCreateInput>;
};
export type PacientesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PacientesCreateManyInput | Prisma.PacientesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PacientesCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PacientesSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PacientesOmit<ExtArgs> | null;
    data: Prisma.PacientesCreateManyInput | Prisma.PacientesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PacientesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PacientesSelect<ExtArgs> | null;
    omit?: Prisma.PacientesOmit<ExtArgs> | null;
    include?: Prisma.PacientesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PacientesUpdateInput, Prisma.PacientesUncheckedUpdateInput>;
    where: Prisma.PacientesWhereUniqueInput;
};
export type PacientesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PacientesUpdateManyMutationInput, Prisma.PacientesUncheckedUpdateManyInput>;
    where?: Prisma.PacientesWhereInput;
    limit?: number;
};
export type PacientesUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PacientesSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PacientesOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PacientesUpdateManyMutationInput, Prisma.PacientesUncheckedUpdateManyInput>;
    where?: Prisma.PacientesWhereInput;
    limit?: number;
};
export type PacientesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PacientesSelect<ExtArgs> | null;
    omit?: Prisma.PacientesOmit<ExtArgs> | null;
    include?: Prisma.PacientesInclude<ExtArgs> | null;
    where: Prisma.PacientesWhereUniqueInput;
    create: Prisma.XOR<Prisma.PacientesCreateInput, Prisma.PacientesUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PacientesUpdateInput, Prisma.PacientesUncheckedUpdateInput>;
};
export type PacientesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PacientesSelect<ExtArgs> | null;
    omit?: Prisma.PacientesOmit<ExtArgs> | null;
    include?: Prisma.PacientesInclude<ExtArgs> | null;
    where: Prisma.PacientesWhereUniqueInput;
};
export type PacientesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PacientesWhereInput;
    limit?: number;
};
export type Pacientes$citasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CitaSelect<ExtArgs> | null;
    omit?: Prisma.CitaOmit<ExtArgs> | null;
    include?: Prisma.CitaInclude<ExtArgs> | null;
    where?: Prisma.CitaWhereInput;
    orderBy?: Prisma.CitaOrderByWithRelationInput | Prisma.CitaOrderByWithRelationInput[];
    cursor?: Prisma.CitaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CitaScalarFieldEnum | Prisma.CitaScalarFieldEnum[];
};
export type PacientesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PacientesSelect<ExtArgs> | null;
    omit?: Prisma.PacientesOmit<ExtArgs> | null;
    include?: Prisma.PacientesInclude<ExtArgs> | null;
};
