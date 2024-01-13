import { Prisma } from '@prisma/client';
export declare enum UserScalarFieldEnum {
    id = "id",
    email = "email",
    name = "name",
    password = "password",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}
export declare enum TransactionIsolationLevel {
    ReadUncommitted = "ReadUncommitted",
    ReadCommitted = "ReadCommitted",
    RepeatableRead = "RepeatableRead",
    Serializable = "Serializable"
}
export declare enum SortOrder {
    asc = "asc",
    desc = "desc"
}
export declare enum QueryMode {
    'default' = "default",
    insensitive = "insensitive"
}
export declare enum PostScalarFieldEnum {
    id = "id",
    title = "title",
    content = "content",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    authorId = "authorId"
}
export declare class AggregatePost {
    _count?: InstanceType<typeof PostCountAggregate>;
    _min?: InstanceType<typeof PostMinAggregate>;
    _max?: InstanceType<typeof PostMaxAggregate>;
}
export declare class CreateManyPostArgs {
    data: Array<PostCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOnePostArgs {
    data: InstanceType<typeof PostCreateInput>;
}
export declare class DeleteManyPostArgs {
    where?: InstanceType<typeof PostWhereInput>;
}
export declare class DeleteOnePostArgs {
    where: Prisma.AtLeast<PostWhereUniqueInput, 'id'>;
}
export declare class FindFirstPostOrThrowArgs {
    where?: InstanceType<typeof PostWhereInput>;
    orderBy?: Array<PostOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<PostWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof PostScalarFieldEnum>;
}
export declare class FindFirstPostArgs {
    where?: InstanceType<typeof PostWhereInput>;
    orderBy?: Array<PostOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<PostWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof PostScalarFieldEnum>;
}
export declare class FindManyPostArgs {
    where?: InstanceType<typeof PostWhereInput>;
    orderBy?: Array<PostOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<PostWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof PostScalarFieldEnum>;
}
export declare class FindUniquePostOrThrowArgs {
    where: Prisma.AtLeast<PostWhereUniqueInput, 'id'>;
}
export declare class FindUniquePostArgs {
    where: Prisma.AtLeast<PostWhereUniqueInput, 'id'>;
}
export declare class PostAggregateArgs {
    where?: InstanceType<typeof PostWhereInput>;
    orderBy?: Array<PostOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<PostWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof PostCountAggregateInput>;
    _min?: InstanceType<typeof PostMinAggregateInput>;
    _max?: InstanceType<typeof PostMaxAggregateInput>;
}
export declare class PostCountAggregateInput {
    id?: true;
    title?: true;
    content?: true;
    createdAt?: true;
    updatedAt?: true;
    authorId?: true;
    _all?: true;
}
export declare class PostCountAggregate {
    id: number;
    title: number;
    content: number;
    createdAt: number;
    updatedAt: number;
    authorId: number;
    _all: number;
}
export declare class PostCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    title?: keyof typeof SortOrder;
    content?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    authorId?: keyof typeof SortOrder;
}
export declare class PostCreateManyAuthorInputEnvelope {
    data: Array<PostCreateManyAuthorInput>;
    skipDuplicates?: boolean;
}
export declare class PostCreateManyAuthorInput {
    id?: string;
    title: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class PostCreateManyInput {
    id?: string;
    title: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    authorId: string;
}
export declare class PostCreateNestedManyWithoutAuthorInput {
    create?: Array<PostCreateWithoutAuthorInput>;
    connectOrCreate?: Array<PostCreateOrConnectWithoutAuthorInput>;
    createMany?: InstanceType<typeof PostCreateManyAuthorInputEnvelope>;
    connect?: Array<Prisma.AtLeast<PostWhereUniqueInput, 'id'>>;
}
export declare class PostCreateOrConnectWithoutAuthorInput {
    where: Prisma.AtLeast<PostWhereUniqueInput, 'id'>;
    create: InstanceType<typeof PostCreateWithoutAuthorInput>;
}
export declare class PostCreateWithoutAuthorInput {
    id?: string;
    title: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class PostCreateInput {
    id?: string;
    title: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    author: InstanceType<typeof UserCreateNestedOneWithoutPostsInput>;
}
export declare class PostGroupByArgs {
    where?: InstanceType<typeof PostWhereInput>;
    orderBy?: Array<PostOrderByWithAggregationInput>;
    by: Array<keyof typeof PostScalarFieldEnum>;
    having?: InstanceType<typeof PostScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof PostCountAggregateInput>;
    _min?: InstanceType<typeof PostMinAggregateInput>;
    _max?: InstanceType<typeof PostMaxAggregateInput>;
}
export declare class PostGroupBy {
    id: string;
    title: string;
    content: string;
    createdAt: Date | string;
    updatedAt: Date | string;
    authorId: string;
    _count?: InstanceType<typeof PostCountAggregate>;
    _min?: InstanceType<typeof PostMinAggregate>;
    _max?: InstanceType<typeof PostMaxAggregate>;
}
export declare class PostListRelationFilter {
    every?: InstanceType<typeof PostWhereInput>;
    some?: InstanceType<typeof PostWhereInput>;
    none?: InstanceType<typeof PostWhereInput>;
}
export declare class PostMaxAggregateInput {
    id?: true;
    title?: true;
    content?: true;
    createdAt?: true;
    updatedAt?: true;
    authorId?: true;
}
export declare class PostMaxAggregate {
    id?: string;
    title?: string;
    content?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    authorId?: string;
}
export declare class PostMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    title?: keyof typeof SortOrder;
    content?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    authorId?: keyof typeof SortOrder;
}
export declare class PostMinAggregateInput {
    id?: true;
    title?: true;
    content?: true;
    createdAt?: true;
    updatedAt?: true;
    authorId?: true;
}
export declare class PostMinAggregate {
    id?: string;
    title?: string;
    content?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    authorId?: string;
}
export declare class PostMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    title?: keyof typeof SortOrder;
    content?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    authorId?: keyof typeof SortOrder;
}
export declare class PostOrderByRelationAggregateInput {
    _count?: keyof typeof SortOrder;
}
export declare class PostOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    title?: keyof typeof SortOrder;
    content?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    authorId?: keyof typeof SortOrder;
    _count?: InstanceType<typeof PostCountOrderByAggregateInput>;
    _max?: InstanceType<typeof PostMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof PostMinOrderByAggregateInput>;
}
export declare class PostOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    title?: keyof typeof SortOrder;
    content?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    authorId?: keyof typeof SortOrder;
    author?: InstanceType<typeof UserOrderByWithRelationInput>;
}
export declare class PostScalarWhereWithAggregatesInput {
    AND?: Array<PostScalarWhereWithAggregatesInput>;
    OR?: Array<PostScalarWhereWithAggregatesInput>;
    NOT?: Array<PostScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    title?: InstanceType<typeof StringWithAggregatesFilter>;
    content?: InstanceType<typeof StringWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    authorId?: InstanceType<typeof StringWithAggregatesFilter>;
}
export declare class PostScalarWhereInput {
    AND?: Array<PostScalarWhereInput>;
    OR?: Array<PostScalarWhereInput>;
    NOT?: Array<PostScalarWhereInput>;
    id?: InstanceType<typeof StringFilter>;
    title?: InstanceType<typeof StringFilter>;
    content?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    authorId?: InstanceType<typeof StringFilter>;
}
export declare class PostUncheckedCreateNestedManyWithoutAuthorInput {
    create?: Array<PostCreateWithoutAuthorInput>;
    connectOrCreate?: Array<PostCreateOrConnectWithoutAuthorInput>;
    createMany?: InstanceType<typeof PostCreateManyAuthorInputEnvelope>;
    connect?: Array<Prisma.AtLeast<PostWhereUniqueInput, 'id'>>;
}
export declare class PostUncheckedCreateWithoutAuthorInput {
    id?: string;
    title: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class PostUncheckedCreateInput {
    id?: string;
    title: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    authorId: string;
}
export declare class PostUncheckedUpdateManyWithoutAuthorNestedInput {
    create?: Array<PostCreateWithoutAuthorInput>;
    connectOrCreate?: Array<PostCreateOrConnectWithoutAuthorInput>;
    upsert?: Array<PostUpsertWithWhereUniqueWithoutAuthorInput>;
    createMany?: InstanceType<typeof PostCreateManyAuthorInputEnvelope>;
    set?: Array<Prisma.AtLeast<PostWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<PostWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<PostWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<PostWhereUniqueInput, 'id'>>;
    update?: Array<PostUpdateWithWhereUniqueWithoutAuthorInput>;
    updateMany?: Array<PostUpdateManyWithWhereWithoutAuthorInput>;
    deleteMany?: Array<PostScalarWhereInput>;
}
export declare class PostUncheckedUpdateManyWithoutAuthorInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class PostUncheckedUpdateManyInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    authorId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class PostUncheckedUpdateWithoutAuthorInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class PostUncheckedUpdateInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    authorId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class PostUpdateManyMutationInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class PostUpdateManyWithWhereWithoutAuthorInput {
    where: InstanceType<typeof PostScalarWhereInput>;
    data: InstanceType<typeof PostUpdateManyMutationInput>;
}
export declare class PostUpdateManyWithoutAuthorNestedInput {
    create?: Array<PostCreateWithoutAuthorInput>;
    connectOrCreate?: Array<PostCreateOrConnectWithoutAuthorInput>;
    upsert?: Array<PostUpsertWithWhereUniqueWithoutAuthorInput>;
    createMany?: InstanceType<typeof PostCreateManyAuthorInputEnvelope>;
    set?: Array<Prisma.AtLeast<PostWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<PostWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<PostWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<PostWhereUniqueInput, 'id'>>;
    update?: Array<PostUpdateWithWhereUniqueWithoutAuthorInput>;
    updateMany?: Array<PostUpdateManyWithWhereWithoutAuthorInput>;
    deleteMany?: Array<PostScalarWhereInput>;
}
export declare class PostUpdateWithWhereUniqueWithoutAuthorInput {
    where: Prisma.AtLeast<PostWhereUniqueInput, 'id'>;
    data: InstanceType<typeof PostUpdateWithoutAuthorInput>;
}
export declare class PostUpdateWithoutAuthorInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class PostUpdateInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    author?: InstanceType<typeof UserUpdateOneRequiredWithoutPostsNestedInput>;
}
export declare class PostUpsertWithWhereUniqueWithoutAuthorInput {
    where: Prisma.AtLeast<PostWhereUniqueInput, 'id'>;
    update: InstanceType<typeof PostUpdateWithoutAuthorInput>;
    create: InstanceType<typeof PostCreateWithoutAuthorInput>;
}
export declare class PostWhereUniqueInput {
    id?: string;
    AND?: Array<PostWhereInput>;
    OR?: Array<PostWhereInput>;
    NOT?: Array<PostWhereInput>;
    title?: InstanceType<typeof StringFilter>;
    content?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    authorId?: InstanceType<typeof StringFilter>;
    author?: InstanceType<typeof UserRelationFilter>;
}
export declare class PostWhereInput {
    AND?: Array<PostWhereInput>;
    OR?: Array<PostWhereInput>;
    NOT?: Array<PostWhereInput>;
    id?: InstanceType<typeof StringFilter>;
    title?: InstanceType<typeof StringFilter>;
    content?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    authorId?: InstanceType<typeof StringFilter>;
    author?: InstanceType<typeof UserRelationFilter>;
}
export declare class Post {
    id: string;
    title: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    authorId: string;
    author?: InstanceType<typeof User>;
}
export declare class UpdateManyPostArgs {
    data: InstanceType<typeof PostUpdateManyMutationInput>;
    where?: InstanceType<typeof PostWhereInput>;
}
export declare class UpdateOnePostArgs {
    data: InstanceType<typeof PostUpdateInput>;
    where: Prisma.AtLeast<PostWhereUniqueInput, 'id'>;
}
export declare class UpsertOnePostArgs {
    where: Prisma.AtLeast<PostWhereUniqueInput, 'id'>;
    create: InstanceType<typeof PostCreateInput>;
    update: InstanceType<typeof PostUpdateInput>;
}
export declare class AffectedRows {
    count: number;
}
export declare class DateTimeFieldUpdateOperationsInput {
    set?: Date | string;
}
export declare class DateTimeFilter {
    equals?: Date | string;
    in?: Array<Date> | Array<string>;
    notIn?: Array<Date> | Array<string>;
    lt?: Date | string;
    lte?: Date | string;
    gt?: Date | string;
    gte?: Date | string;
    not?: InstanceType<typeof NestedDateTimeFilter>;
}
export declare class DateTimeWithAggregatesFilter {
    equals?: Date | string;
    in?: Array<Date> | Array<string>;
    notIn?: Array<Date> | Array<string>;
    lt?: Date | string;
    lte?: Date | string;
    gt?: Date | string;
    gte?: Date | string;
    not?: InstanceType<typeof NestedDateTimeWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedDateTimeFilter>;
    _max?: InstanceType<typeof NestedDateTimeFilter>;
}
export declare class NestedDateTimeFilter {
    equals?: Date | string;
    in?: Array<Date> | Array<string>;
    notIn?: Array<Date> | Array<string>;
    lt?: Date | string;
    lte?: Date | string;
    gt?: Date | string;
    gte?: Date | string;
    not?: InstanceType<typeof NestedDateTimeFilter>;
}
export declare class NestedDateTimeWithAggregatesFilter {
    equals?: Date | string;
    in?: Array<Date> | Array<string>;
    notIn?: Array<Date> | Array<string>;
    lt?: Date | string;
    lte?: Date | string;
    gt?: Date | string;
    gte?: Date | string;
    not?: InstanceType<typeof NestedDateTimeWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedDateTimeFilter>;
    _max?: InstanceType<typeof NestedDateTimeFilter>;
}
export declare class NestedIntFilter {
    equals?: number;
    in?: Array<number>;
    notIn?: Array<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: InstanceType<typeof NestedIntFilter>;
}
export declare class NestedStringFilter {
    equals?: string;
    in?: Array<string>;
    notIn?: Array<string>;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    not?: InstanceType<typeof NestedStringFilter>;
}
export declare class NestedStringWithAggregatesFilter {
    equals?: string;
    in?: Array<string>;
    notIn?: Array<string>;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    not?: InstanceType<typeof NestedStringWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedStringFilter>;
    _max?: InstanceType<typeof NestedStringFilter>;
}
export declare class StringFieldUpdateOperationsInput {
    set?: string;
}
export declare class StringFilter {
    equals?: string;
    in?: Array<string>;
    notIn?: Array<string>;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    mode?: keyof typeof QueryMode;
    not?: InstanceType<typeof NestedStringFilter>;
}
export declare class StringWithAggregatesFilter {
    equals?: string;
    in?: Array<string>;
    notIn?: Array<string>;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    mode?: keyof typeof QueryMode;
    not?: InstanceType<typeof NestedStringWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedStringFilter>;
    _max?: InstanceType<typeof NestedStringFilter>;
}
export declare class AggregateUser {
    _count?: InstanceType<typeof UserCountAggregate>;
    _min?: InstanceType<typeof UserMinAggregate>;
    _max?: InstanceType<typeof UserMaxAggregate>;
}
export declare class CreateManyUserArgs {
    data: Array<UserCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneUserArgs {
    data: InstanceType<typeof UserCreateInput>;
}
export declare class DeleteManyUserArgs {
    where?: InstanceType<typeof UserWhereInput>;
}
export declare class DeleteOneUserArgs {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
export declare class FindFirstUserOrThrowArgs {
    where?: InstanceType<typeof UserWhereInput>;
    orderBy?: Array<UserOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof UserScalarFieldEnum>;
}
export declare class FindFirstUserArgs {
    where?: InstanceType<typeof UserWhereInput>;
    orderBy?: Array<UserOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof UserScalarFieldEnum>;
}
export declare class FindManyUserArgs {
    where?: InstanceType<typeof UserWhereInput>;
    orderBy?: Array<UserOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof UserScalarFieldEnum>;
}
export declare class FindUniqueUserOrThrowArgs {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
export declare class FindUniqueUserArgs {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
export declare class UpdateManyUserArgs {
    data: InstanceType<typeof UserUpdateManyMutationInput>;
    where?: InstanceType<typeof UserWhereInput>;
}
export declare class UpdateOneUserArgs {
    data: InstanceType<typeof UserUpdateInput>;
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
export declare class UpsertOneUserArgs {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    create: InstanceType<typeof UserCreateInput>;
    update: InstanceType<typeof UserUpdateInput>;
}
export declare class UserAggregateArgs {
    where?: InstanceType<typeof UserWhereInput>;
    orderBy?: Array<UserOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof UserCountAggregateInput>;
    _min?: InstanceType<typeof UserMinAggregateInput>;
    _max?: InstanceType<typeof UserMaxAggregateInput>;
}
export declare class UserCountAggregateInput {
    id?: true;
    email?: true;
    name?: true;
    password?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
}
export declare class UserCountAggregate {
    id: number;
    email: number;
    name: number;
    password: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
}
export declare class UserCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    email?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    password?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class UserCount {
    posts?: number;
}
export declare class UserCreateManyInput {
    id?: string;
    email: string;
    name: string;
    password: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class UserCreateNestedOneWithoutPostsInput {
    create?: InstanceType<typeof UserCreateWithoutPostsInput>;
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutPostsInput>;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
export declare class UserCreateOrConnectWithoutPostsInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    create: InstanceType<typeof UserCreateWithoutPostsInput>;
}
export declare class UserCreateWithoutPostsInput {
    id?: string;
    email: string;
    name: string;
    password: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class UserCreateInput {
    id?: string;
    email: string;
    name: string;
    password: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    posts?: InstanceType<typeof PostCreateNestedManyWithoutAuthorInput>;
}
export declare class UserGroupByArgs {
    where?: InstanceType<typeof UserWhereInput>;
    orderBy?: Array<UserOrderByWithAggregationInput>;
    by: Array<keyof typeof UserScalarFieldEnum>;
    having?: InstanceType<typeof UserScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof UserCountAggregateInput>;
    _min?: InstanceType<typeof UserMinAggregateInput>;
    _max?: InstanceType<typeof UserMaxAggregateInput>;
}
export declare class UserGroupBy {
    id: string;
    email: string;
    name: string;
    password: string;
    createdAt: Date | string;
    updatedAt: Date | string;
    _count?: InstanceType<typeof UserCountAggregate>;
    _min?: InstanceType<typeof UserMinAggregate>;
    _max?: InstanceType<typeof UserMaxAggregate>;
}
export declare class UserMaxAggregateInput {
    id?: true;
    email?: true;
    name?: true;
    password?: true;
    createdAt?: true;
    updatedAt?: true;
}
export declare class UserMaxAggregate {
    id?: string;
    email?: string;
    name?: string;
    password?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class UserMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    email?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    password?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class UserMinAggregateInput {
    id?: true;
    email?: true;
    name?: true;
    password?: true;
    createdAt?: true;
    updatedAt?: true;
}
export declare class UserMinAggregate {
    id?: string;
    email?: string;
    name?: string;
    password?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class UserMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    email?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    password?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class UserOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    email?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    password?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    _count?: InstanceType<typeof UserCountOrderByAggregateInput>;
    _max?: InstanceType<typeof UserMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof UserMinOrderByAggregateInput>;
}
export declare class UserOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    email?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    password?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    posts?: InstanceType<typeof PostOrderByRelationAggregateInput>;
}
export declare class UserRelationFilter {
    is?: InstanceType<typeof UserWhereInput>;
    isNot?: InstanceType<typeof UserWhereInput>;
}
export declare class UserScalarWhereWithAggregatesInput {
    AND?: Array<UserScalarWhereWithAggregatesInput>;
    OR?: Array<UserScalarWhereWithAggregatesInput>;
    NOT?: Array<UserScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    email?: InstanceType<typeof StringWithAggregatesFilter>;
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    password?: InstanceType<typeof StringWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}
export declare class UserUncheckedCreateWithoutPostsInput {
    id?: string;
    email: string;
    name: string;
    password: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class UserUncheckedCreateInput {
    id?: string;
    email: string;
    name: string;
    password: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    posts?: InstanceType<typeof PostUncheckedCreateNestedManyWithoutAuthorInput>;
}
export declare class UserUncheckedUpdateManyInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class UserUncheckedUpdateWithoutPostsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class UserUncheckedUpdateInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    posts?: InstanceType<typeof PostUncheckedUpdateManyWithoutAuthorNestedInput>;
}
export declare class UserUpdateManyMutationInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class UserUpdateOneRequiredWithoutPostsNestedInput {
    create?: InstanceType<typeof UserCreateWithoutPostsInput>;
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutPostsInput>;
    upsert?: InstanceType<typeof UserUpsertWithoutPostsInput>;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    update?: InstanceType<typeof UserUpdateToOneWithWhereWithoutPostsInput>;
}
export declare class UserUpdateToOneWithWhereWithoutPostsInput {
    where?: InstanceType<typeof UserWhereInput>;
    data: InstanceType<typeof UserUpdateWithoutPostsInput>;
}
export declare class UserUpdateWithoutPostsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class UserUpdateInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    posts?: InstanceType<typeof PostUpdateManyWithoutAuthorNestedInput>;
}
export declare class UserUpsertWithoutPostsInput {
    update: InstanceType<typeof UserUpdateWithoutPostsInput>;
    create: InstanceType<typeof UserCreateWithoutPostsInput>;
    where?: InstanceType<typeof UserWhereInput>;
}
export declare class UserWhereUniqueInput {
    id?: string;
    email?: string;
    AND?: Array<UserWhereInput>;
    OR?: Array<UserWhereInput>;
    NOT?: Array<UserWhereInput>;
    name?: InstanceType<typeof StringFilter>;
    password?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    posts?: InstanceType<typeof PostListRelationFilter>;
}
export declare class UserWhereInput {
    AND?: Array<UserWhereInput>;
    OR?: Array<UserWhereInput>;
    NOT?: Array<UserWhereInput>;
    id?: InstanceType<typeof StringFilter>;
    email?: InstanceType<typeof StringFilter>;
    name?: InstanceType<typeof StringFilter>;
    password?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    posts?: InstanceType<typeof PostListRelationFilter>;
}
export declare class User {
    id: string;
    email: string;
    name: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    posts?: Array<Post>;
    _count?: InstanceType<typeof UserCount>;
}
