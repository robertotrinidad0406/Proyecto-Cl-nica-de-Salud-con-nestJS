import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type UsersModel = runtime.Types.Result.DefaultSelection<Prisma.$UsersPayload>;
export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null;
    _avg: UsersAvgAggregateOutputType | null;
    _sum: UsersSumAggregateOutputType | null;
    _min: UsersMinAggregateOutputType | null;
    _max: UsersMaxAggregateOutputType | null;
};
export type UsersAvgAggregateOutputType = {
    id: number | null;
};
export type UsersSumAggregateOutputType = {
    id: number | null;
};
export type UsersMinAggregateOutputType = {
    id: number | null;
    nombre: string | null;
    apellido: string | null;
    email: string | null;
    contrasena: string | null;
    telefono: string | null;
    rol: $Enums.Rol | null;
    createAt: Date | null;
    updatedAt: Date | null;
};
export type UsersMaxAggregateOutputType = {
    id: number | null;
    nombre: string | null;
    apellido: string | null;
    email: string | null;
    contrasena: string | null;
    telefono: string | null;
    rol: $Enums.Rol | null;
    createAt: Date | null;
    updatedAt: Date | null;
};
export type UsersCountAggregateOutputType = {
    id: number;
    nombre: number;
    apellido: number;
    email: number;
    contrasena: number;
    telefono: number;
    rol: number;
    createAt: number;
    updatedAt: number;
    _all: number;
};
export type UsersAvgAggregateInputType = {
    id?: true;
};
export type UsersSumAggregateInputType = {
    id?: true;
};
export type UsersMinAggregateInputType = {
    id?: true;
    nombre?: true;
    apellido?: true;
    email?: true;
    contrasena?: true;
    telefono?: true;
    rol?: true;
    createAt?: true;
    updatedAt?: true;
};
export type UsersMaxAggregateInputType = {
    id?: true;
    nombre?: true;
    apellido?: true;
    email?: true;
    contrasena?: true;
    telefono?: true;
    rol?: true;
    createAt?: true;
    updatedAt?: true;
};
export type UsersCountAggregateInputType = {
    id?: true;
    nombre?: true;
    apellido?: true;
    email?: true;
    contrasena?: true;
    telefono?: true;
    rol?: true;
    createAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type UsersAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UsersWhereInput;
    orderBy?: Prisma.UsersOrderByWithRelationInput | Prisma.UsersOrderByWithRelationInput[];
    cursor?: Prisma.UsersWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | UsersCountAggregateInputType;
    _avg?: UsersAvgAggregateInputType;
    _sum?: UsersSumAggregateInputType;
    _min?: UsersMinAggregateInputType;
    _max?: UsersMaxAggregateInputType;
};
export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
    [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUsers[P]> : Prisma.GetScalarType<T[P], AggregateUsers[P]>;
};
export type UsersGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UsersWhereInput;
    orderBy?: Prisma.UsersOrderByWithAggregationInput | Prisma.UsersOrderByWithAggregationInput[];
    by: Prisma.UsersScalarFieldEnum[] | Prisma.UsersScalarFieldEnum;
    having?: Prisma.UsersScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UsersCountAggregateInputType | true;
    _avg?: UsersAvgAggregateInputType;
    _sum?: UsersSumAggregateInputType;
    _min?: UsersMinAggregateInputType;
    _max?: UsersMaxAggregateInputType;
};
export type UsersGroupByOutputType = {
    id: number;
    nombre: string;
    apellido: string;
    email: string | null;
    contrasena: string;
    telefono: string;
    rol: $Enums.Rol;
    createAt: Date;
    updatedAt: Date;
    _count: UsersCountAggregateOutputType | null;
    _avg: UsersAvgAggregateOutputType | null;
    _sum: UsersSumAggregateOutputType | null;
    _min: UsersMinAggregateOutputType | null;
    _max: UsersMaxAggregateOutputType | null;
};
export type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UsersGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UsersGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UsersGroupByOutputType[P]>;
}>>;
export type UsersWhereInput = {
    AND?: Prisma.UsersWhereInput | Prisma.UsersWhereInput[];
    OR?: Prisma.UsersWhereInput[];
    NOT?: Prisma.UsersWhereInput | Prisma.UsersWhereInput[];
    id?: Prisma.IntFilter<"Users"> | number;
    nombre?: Prisma.StringFilter<"Users"> | string;
    apellido?: Prisma.StringFilter<"Users"> | string;
    email?: Prisma.StringNullableFilter<"Users"> | string | null;
    contrasena?: Prisma.StringFilter<"Users"> | string;
    telefono?: Prisma.StringFilter<"Users"> | string;
    rol?: Prisma.EnumRolFilter<"Users"> | $Enums.Rol;
    createAt?: Prisma.DateTimeFilter<"Users"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Users"> | Date | string;
    medico?: Prisma.XOR<Prisma.MedicoNullableScalarRelationFilter, Prisma.MedicoWhereInput> | null;
};
export type UsersOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    apellido?: Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    contrasena?: Prisma.SortOrder;
    telefono?: Prisma.SortOrder;
    rol?: Prisma.SortOrder;
    createAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    medico?: Prisma.MedicoOrderByWithRelationInput;
};
export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    email?: string;
    AND?: Prisma.UsersWhereInput | Prisma.UsersWhereInput[];
    OR?: Prisma.UsersWhereInput[];
    NOT?: Prisma.UsersWhereInput | Prisma.UsersWhereInput[];
    nombre?: Prisma.StringFilter<"Users"> | string;
    apellido?: Prisma.StringFilter<"Users"> | string;
    contrasena?: Prisma.StringFilter<"Users"> | string;
    telefono?: Prisma.StringFilter<"Users"> | string;
    rol?: Prisma.EnumRolFilter<"Users"> | $Enums.Rol;
    createAt?: Prisma.DateTimeFilter<"Users"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Users"> | Date | string;
    medico?: Prisma.XOR<Prisma.MedicoNullableScalarRelationFilter, Prisma.MedicoWhereInput> | null;
}, "id" | "email">;
export type UsersOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    apellido?: Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    contrasena?: Prisma.SortOrder;
    telefono?: Prisma.SortOrder;
    rol?: Prisma.SortOrder;
    createAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.UsersCountOrderByAggregateInput;
    _avg?: Prisma.UsersAvgOrderByAggregateInput;
    _max?: Prisma.UsersMaxOrderByAggregateInput;
    _min?: Prisma.UsersMinOrderByAggregateInput;
    _sum?: Prisma.UsersSumOrderByAggregateInput;
};
export type UsersScalarWhereWithAggregatesInput = {
    AND?: Prisma.UsersScalarWhereWithAggregatesInput | Prisma.UsersScalarWhereWithAggregatesInput[];
    OR?: Prisma.UsersScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UsersScalarWhereWithAggregatesInput | Prisma.UsersScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Users"> | number;
    nombre?: Prisma.StringWithAggregatesFilter<"Users"> | string;
    apellido?: Prisma.StringWithAggregatesFilter<"Users"> | string;
    email?: Prisma.StringNullableWithAggregatesFilter<"Users"> | string | null;
    contrasena?: Prisma.StringWithAggregatesFilter<"Users"> | string;
    telefono?: Prisma.StringWithAggregatesFilter<"Users"> | string;
    rol?: Prisma.EnumRolWithAggregatesFilter<"Users"> | $Enums.Rol;
    createAt?: Prisma.DateTimeWithAggregatesFilter<"Users"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Users"> | Date | string;
};
export type UsersCreateInput = {
    nombre: string;
    apellido: string;
    email?: string | null;
    contrasena: string;
    telefono: string;
    rol: $Enums.Rol;
    createAt?: Date | string;
    updatedAt?: Date | string;
    medico?: Prisma.MedicoCreateNestedOneWithoutUserInput;
};
export type UsersUncheckedCreateInput = {
    id?: number;
    nombre: string;
    apellido: string;
    email?: string | null;
    contrasena: string;
    telefono: string;
    rol: $Enums.Rol;
    createAt?: Date | string;
    updatedAt?: Date | string;
    medico?: Prisma.MedicoUncheckedCreateNestedOneWithoutUserInput;
};
export type UsersUpdateInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    apellido?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contrasena?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.StringFieldUpdateOperationsInput | string;
    rol?: Prisma.EnumRolFieldUpdateOperationsInput | $Enums.Rol;
    createAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    medico?: Prisma.MedicoUpdateOneWithoutUserNestedInput;
};
export type UsersUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    apellido?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contrasena?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.StringFieldUpdateOperationsInput | string;
    rol?: Prisma.EnumRolFieldUpdateOperationsInput | $Enums.Rol;
    createAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    medico?: Prisma.MedicoUncheckedUpdateOneWithoutUserNestedInput;
};
export type UsersCreateManyInput = {
    id?: number;
    nombre: string;
    apellido: string;
    email?: string | null;
    contrasena: string;
    telefono: string;
    rol: $Enums.Rol;
    createAt?: Date | string;
    updatedAt?: Date | string;
};
export type UsersUpdateManyMutationInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    apellido?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contrasena?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.StringFieldUpdateOperationsInput | string;
    rol?: Prisma.EnumRolFieldUpdateOperationsInput | $Enums.Rol;
    createAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UsersUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    apellido?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contrasena?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.StringFieldUpdateOperationsInput | string;
    rol?: Prisma.EnumRolFieldUpdateOperationsInput | $Enums.Rol;
    createAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UsersCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    apellido?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    contrasena?: Prisma.SortOrder;
    telefono?: Prisma.SortOrder;
    rol?: Prisma.SortOrder;
    createAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UsersAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type UsersMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    apellido?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    contrasena?: Prisma.SortOrder;
    telefono?: Prisma.SortOrder;
    rol?: Prisma.SortOrder;
    createAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UsersMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    apellido?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    contrasena?: Prisma.SortOrder;
    telefono?: Prisma.SortOrder;
    rol?: Prisma.SortOrder;
    createAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UsersSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type UsersScalarRelationFilter = {
    is?: Prisma.UsersWhereInput;
    isNot?: Prisma.UsersWhereInput;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type EnumRolFieldUpdateOperationsInput = {
    set?: $Enums.Rol;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type UsersCreateNestedOneWithoutMedicoInput = {
    create?: Prisma.XOR<Prisma.UsersCreateWithoutMedicoInput, Prisma.UsersUncheckedCreateWithoutMedicoInput>;
    connectOrCreate?: Prisma.UsersCreateOrConnectWithoutMedicoInput;
    connect?: Prisma.UsersWhereUniqueInput;
};
export type UsersUpdateOneRequiredWithoutMedicoNestedInput = {
    create?: Prisma.XOR<Prisma.UsersCreateWithoutMedicoInput, Prisma.UsersUncheckedCreateWithoutMedicoInput>;
    connectOrCreate?: Prisma.UsersCreateOrConnectWithoutMedicoInput;
    upsert?: Prisma.UsersUpsertWithoutMedicoInput;
    connect?: Prisma.UsersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UsersUpdateToOneWithWhereWithoutMedicoInput, Prisma.UsersUpdateWithoutMedicoInput>, Prisma.UsersUncheckedUpdateWithoutMedicoInput>;
};
export type UsersCreateWithoutMedicoInput = {
    nombre: string;
    apellido: string;
    email?: string | null;
    contrasena: string;
    telefono: string;
    rol: $Enums.Rol;
    createAt?: Date | string;
    updatedAt?: Date | string;
};
export type UsersUncheckedCreateWithoutMedicoInput = {
    id?: number;
    nombre: string;
    apellido: string;
    email?: string | null;
    contrasena: string;
    telefono: string;
    rol: $Enums.Rol;
    createAt?: Date | string;
    updatedAt?: Date | string;
};
export type UsersCreateOrConnectWithoutMedicoInput = {
    where: Prisma.UsersWhereUniqueInput;
    create: Prisma.XOR<Prisma.UsersCreateWithoutMedicoInput, Prisma.UsersUncheckedCreateWithoutMedicoInput>;
};
export type UsersUpsertWithoutMedicoInput = {
    update: Prisma.XOR<Prisma.UsersUpdateWithoutMedicoInput, Prisma.UsersUncheckedUpdateWithoutMedicoInput>;
    create: Prisma.XOR<Prisma.UsersCreateWithoutMedicoInput, Prisma.UsersUncheckedCreateWithoutMedicoInput>;
    where?: Prisma.UsersWhereInput;
};
export type UsersUpdateToOneWithWhereWithoutMedicoInput = {
    where?: Prisma.UsersWhereInput;
    data: Prisma.XOR<Prisma.UsersUpdateWithoutMedicoInput, Prisma.UsersUncheckedUpdateWithoutMedicoInput>;
};
export type UsersUpdateWithoutMedicoInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    apellido?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contrasena?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.StringFieldUpdateOperationsInput | string;
    rol?: Prisma.EnumRolFieldUpdateOperationsInput | $Enums.Rol;
    createAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UsersUncheckedUpdateWithoutMedicoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    apellido?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contrasena?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.StringFieldUpdateOperationsInput | string;
    rol?: Prisma.EnumRolFieldUpdateOperationsInput | $Enums.Rol;
    createAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UsersSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    apellido?: boolean;
    email?: boolean;
    contrasena?: boolean;
    telefono?: boolean;
    rol?: boolean;
    createAt?: boolean;
    updatedAt?: boolean;
    medico?: boolean | Prisma.Users$medicoArgs<ExtArgs>;
}, ExtArgs["result"]["users"]>;
export type UsersSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    apellido?: boolean;
    email?: boolean;
    contrasena?: boolean;
    telefono?: boolean;
    rol?: boolean;
    createAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["users"]>;
export type UsersSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    apellido?: boolean;
    email?: boolean;
    contrasena?: boolean;
    telefono?: boolean;
    rol?: boolean;
    createAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["users"]>;
export type UsersSelectScalar = {
    id?: boolean;
    nombre?: boolean;
    apellido?: boolean;
    email?: boolean;
    contrasena?: boolean;
    telefono?: boolean;
    rol?: boolean;
    createAt?: boolean;
    updatedAt?: boolean;
};
export type UsersOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nombre" | "apellido" | "email" | "contrasena" | "telefono" | "rol" | "createAt" | "updatedAt", ExtArgs["result"]["users"]>;
export type UsersInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    medico?: boolean | Prisma.Users$medicoArgs<ExtArgs>;
};
export type UsersIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type UsersIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $UsersPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Users";
    objects: {
        medico: Prisma.$MedicoPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        nombre: string;
        apellido: string;
        email: string | null;
        contrasena: string;
        telefono: string;
        rol: $Enums.Rol;
        createAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["users"]>;
    composites: {};
};
export type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UsersPayload, S>;
export type UsersCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UsersCountAggregateInputType | true;
};
export interface UsersDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Users'];
        meta: {
            name: 'Users';
        };
    };
    findUnique<T extends UsersFindUniqueArgs>(args: Prisma.SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UsersClient<runtime.Types.Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UsersClient<runtime.Types.Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends UsersFindFirstArgs>(args?: Prisma.SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma.Prisma__UsersClient<runtime.Types.Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UsersClient<runtime.Types.Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends UsersFindManyArgs>(args?: Prisma.SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends UsersCreateArgs>(args: Prisma.SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma.Prisma__UsersClient<runtime.Types.Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends UsersCreateManyArgs>(args?: Prisma.SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends UsersCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UsersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends UsersDeleteArgs>(args: Prisma.SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma.Prisma__UsersClient<runtime.Types.Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends UsersUpdateArgs>(args: Prisma.SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma.Prisma__UsersClient<runtime.Types.Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends UsersDeleteManyArgs>(args?: Prisma.SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends UsersUpdateManyArgs>(args: Prisma.SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends UsersUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UsersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends UsersUpsertArgs>(args: Prisma.SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma.Prisma__UsersClient<runtime.Types.Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends UsersCountArgs>(args?: Prisma.Subset<T, UsersCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UsersCountAggregateOutputType> : number>;
    aggregate<T extends UsersAggregateArgs>(args: Prisma.Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>;
    groupBy<T extends UsersGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UsersGroupByArgs['orderBy'];
    } : {
        orderBy?: UsersGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: UsersFieldRefs;
}
export interface Prisma__UsersClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    medico<T extends Prisma.Users$medicoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Users$medicoArgs<ExtArgs>>): Prisma.Prisma__MedicoClient<runtime.Types.Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface UsersFieldRefs {
    readonly id: Prisma.FieldRef<"Users", 'Int'>;
    readonly nombre: Prisma.FieldRef<"Users", 'String'>;
    readonly apellido: Prisma.FieldRef<"Users", 'String'>;
    readonly email: Prisma.FieldRef<"Users", 'String'>;
    readonly contrasena: Prisma.FieldRef<"Users", 'String'>;
    readonly telefono: Prisma.FieldRef<"Users", 'String'>;
    readonly rol: Prisma.FieldRef<"Users", 'Rol'>;
    readonly createAt: Prisma.FieldRef<"Users", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Users", 'DateTime'>;
}
export type UsersFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsersSelect<ExtArgs> | null;
    omit?: Prisma.UsersOmit<ExtArgs> | null;
    include?: Prisma.UsersInclude<ExtArgs> | null;
    where: Prisma.UsersWhereUniqueInput;
};
export type UsersFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsersSelect<ExtArgs> | null;
    omit?: Prisma.UsersOmit<ExtArgs> | null;
    include?: Prisma.UsersInclude<ExtArgs> | null;
    where: Prisma.UsersWhereUniqueInput;
};
export type UsersFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsersSelect<ExtArgs> | null;
    omit?: Prisma.UsersOmit<ExtArgs> | null;
    include?: Prisma.UsersInclude<ExtArgs> | null;
    where?: Prisma.UsersWhereInput;
    orderBy?: Prisma.UsersOrderByWithRelationInput | Prisma.UsersOrderByWithRelationInput[];
    cursor?: Prisma.UsersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UsersScalarFieldEnum | Prisma.UsersScalarFieldEnum[];
};
export type UsersFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsersSelect<ExtArgs> | null;
    omit?: Prisma.UsersOmit<ExtArgs> | null;
    include?: Prisma.UsersInclude<ExtArgs> | null;
    where?: Prisma.UsersWhereInput;
    orderBy?: Prisma.UsersOrderByWithRelationInput | Prisma.UsersOrderByWithRelationInput[];
    cursor?: Prisma.UsersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UsersScalarFieldEnum | Prisma.UsersScalarFieldEnum[];
};
export type UsersFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsersSelect<ExtArgs> | null;
    omit?: Prisma.UsersOmit<ExtArgs> | null;
    include?: Prisma.UsersInclude<ExtArgs> | null;
    where?: Prisma.UsersWhereInput;
    orderBy?: Prisma.UsersOrderByWithRelationInput | Prisma.UsersOrderByWithRelationInput[];
    cursor?: Prisma.UsersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UsersScalarFieldEnum | Prisma.UsersScalarFieldEnum[];
};
export type UsersCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsersSelect<ExtArgs> | null;
    omit?: Prisma.UsersOmit<ExtArgs> | null;
    include?: Prisma.UsersInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UsersCreateInput, Prisma.UsersUncheckedCreateInput>;
};
export type UsersCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.UsersCreateManyInput | Prisma.UsersCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UsersCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsersSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UsersOmit<ExtArgs> | null;
    data: Prisma.UsersCreateManyInput | Prisma.UsersCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UsersUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsersSelect<ExtArgs> | null;
    omit?: Prisma.UsersOmit<ExtArgs> | null;
    include?: Prisma.UsersInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UsersUpdateInput, Prisma.UsersUncheckedUpdateInput>;
    where: Prisma.UsersWhereUniqueInput;
};
export type UsersUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.UsersUpdateManyMutationInput, Prisma.UsersUncheckedUpdateManyInput>;
    where?: Prisma.UsersWhereInput;
    limit?: number;
};
export type UsersUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsersSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UsersOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UsersUpdateManyMutationInput, Prisma.UsersUncheckedUpdateManyInput>;
    where?: Prisma.UsersWhereInput;
    limit?: number;
};
export type UsersUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsersSelect<ExtArgs> | null;
    omit?: Prisma.UsersOmit<ExtArgs> | null;
    include?: Prisma.UsersInclude<ExtArgs> | null;
    where: Prisma.UsersWhereUniqueInput;
    create: Prisma.XOR<Prisma.UsersCreateInput, Prisma.UsersUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.UsersUpdateInput, Prisma.UsersUncheckedUpdateInput>;
};
export type UsersDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsersSelect<ExtArgs> | null;
    omit?: Prisma.UsersOmit<ExtArgs> | null;
    include?: Prisma.UsersInclude<ExtArgs> | null;
    where: Prisma.UsersWhereUniqueInput;
};
export type UsersDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UsersWhereInput;
    limit?: number;
};
export type Users$medicoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MedicoSelect<ExtArgs> | null;
    omit?: Prisma.MedicoOmit<ExtArgs> | null;
    include?: Prisma.MedicoInclude<ExtArgs> | null;
    where?: Prisma.MedicoWhereInput;
};
export type UsersDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsersSelect<ExtArgs> | null;
    omit?: Prisma.UsersOmit<ExtArgs> | null;
    include?: Prisma.UsersInclude<ExtArgs> | null;
};
