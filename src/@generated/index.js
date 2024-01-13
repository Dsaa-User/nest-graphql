"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var PostScalarWhereWithAggregatesInput_1, PostScalarWhereInput_1, PostWhereInput_1, NestedDateTimeFilter_1, NestedDateTimeWithAggregatesFilter_1, NestedIntFilter_1, NestedStringFilter_1, NestedStringWithAggregatesFilter_1, UserScalarWhereWithAggregatesInput_1, UserWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostUpdateManyWithWhereWithoutAuthorInput = exports.PostUpdateManyMutationInput = exports.PostUncheckedUpdateInput = exports.PostUncheckedUpdateWithoutAuthorInput = exports.PostUncheckedUpdateManyInput = exports.PostUncheckedUpdateManyWithoutAuthorInput = exports.PostUncheckedUpdateManyWithoutAuthorNestedInput = exports.PostUncheckedCreateInput = exports.PostUncheckedCreateWithoutAuthorInput = exports.PostUncheckedCreateNestedManyWithoutAuthorInput = exports.PostScalarWhereInput = exports.PostScalarWhereWithAggregatesInput = exports.PostOrderByWithRelationInput = exports.PostOrderByWithAggregationInput = exports.PostOrderByRelationAggregateInput = exports.PostMinOrderByAggregateInput = exports.PostMinAggregate = exports.PostMinAggregateInput = exports.PostMaxOrderByAggregateInput = exports.PostMaxAggregate = exports.PostMaxAggregateInput = exports.PostListRelationFilter = exports.PostGroupBy = exports.PostGroupByArgs = exports.PostCreateInput = exports.PostCreateWithoutAuthorInput = exports.PostCreateOrConnectWithoutAuthorInput = exports.PostCreateNestedManyWithoutAuthorInput = exports.PostCreateManyInput = exports.PostCreateManyAuthorInput = exports.PostCreateManyAuthorInputEnvelope = exports.PostCountOrderByAggregateInput = exports.PostCountAggregate = exports.PostCountAggregateInput = exports.PostAggregateArgs = exports.FindUniquePostArgs = exports.FindUniquePostOrThrowArgs = exports.FindManyPostArgs = exports.FindFirstPostArgs = exports.FindFirstPostOrThrowArgs = exports.DeleteOnePostArgs = exports.DeleteManyPostArgs = exports.CreateOnePostArgs = exports.CreateManyPostArgs = exports.AggregatePost = exports.PostScalarFieldEnum = exports.QueryMode = exports.SortOrder = exports.TransactionIsolationLevel = exports.UserScalarFieldEnum = void 0;
exports.UserMaxAggregate = exports.UserMaxAggregateInput = exports.UserGroupBy = exports.UserGroupByArgs = exports.UserCreateInput = exports.UserCreateWithoutPostsInput = exports.UserCreateOrConnectWithoutPostsInput = exports.UserCreateNestedOneWithoutPostsInput = exports.UserCreateManyInput = exports.UserCount = exports.UserCountOrderByAggregateInput = exports.UserCountAggregate = exports.UserCountAggregateInput = exports.UserAggregateArgs = exports.UpsertOneUserArgs = exports.UpdateOneUserArgs = exports.UpdateManyUserArgs = exports.FindUniqueUserArgs = exports.FindUniqueUserOrThrowArgs = exports.FindManyUserArgs = exports.FindFirstUserArgs = exports.FindFirstUserOrThrowArgs = exports.DeleteOneUserArgs = exports.DeleteManyUserArgs = exports.CreateOneUserArgs = exports.CreateManyUserArgs = exports.AggregateUser = exports.StringWithAggregatesFilter = exports.StringFilter = exports.StringFieldUpdateOperationsInput = exports.NestedStringWithAggregatesFilter = exports.NestedStringFilter = exports.NestedIntFilter = exports.NestedDateTimeWithAggregatesFilter = exports.NestedDateTimeFilter = exports.DateTimeWithAggregatesFilter = exports.DateTimeFilter = exports.DateTimeFieldUpdateOperationsInput = exports.AffectedRows = exports.UpsertOnePostArgs = exports.UpdateOnePostArgs = exports.UpdateManyPostArgs = exports.Post = exports.PostWhereInput = exports.PostWhereUniqueInput = exports.PostUpsertWithWhereUniqueWithoutAuthorInput = exports.PostUpdateInput = exports.PostUpdateWithoutAuthorInput = exports.PostUpdateWithWhereUniqueWithoutAuthorInput = exports.PostUpdateManyWithoutAuthorNestedInput = void 0;
exports.User = exports.UserWhereInput = exports.UserWhereUniqueInput = exports.UserUpsertWithoutPostsInput = exports.UserUpdateInput = exports.UserUpdateWithoutPostsInput = exports.UserUpdateToOneWithWhereWithoutPostsInput = exports.UserUpdateOneRequiredWithoutPostsNestedInput = exports.UserUpdateManyMutationInput = exports.UserUncheckedUpdateInput = exports.UserUncheckedUpdateWithoutPostsInput = exports.UserUncheckedUpdateManyInput = exports.UserUncheckedCreateInput = exports.UserUncheckedCreateWithoutPostsInput = exports.UserScalarWhereWithAggregatesInput = exports.UserRelationFilter = exports.UserOrderByWithRelationInput = exports.UserOrderByWithAggregationInput = exports.UserMinOrderByAggregateInput = exports.UserMinAggregate = exports.UserMinAggregateInput = exports.UserMaxOrderByAggregateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const class_transformer_1 = require("class-transformer");
const graphql_4 = require("@nestjs/graphql");
const graphql_5 = require("@nestjs/graphql");
const graphql_6 = require("@nestjs/graphql");
const Validator = require("class-validator");
const graphql_7 = require("@nestjs/graphql");
var UserScalarFieldEnum;
(function (UserScalarFieldEnum) {
    UserScalarFieldEnum["id"] = "id";
    UserScalarFieldEnum["email"] = "email";
    UserScalarFieldEnum["name"] = "name";
    UserScalarFieldEnum["password"] = "password";
    UserScalarFieldEnum["createdAt"] = "createdAt";
    UserScalarFieldEnum["updatedAt"] = "updatedAt";
})(UserScalarFieldEnum = exports.UserScalarFieldEnum || (exports.UserScalarFieldEnum = {}));
var TransactionIsolationLevel;
(function (TransactionIsolationLevel) {
    TransactionIsolationLevel["ReadUncommitted"] = "ReadUncommitted";
    TransactionIsolationLevel["ReadCommitted"] = "ReadCommitted";
    TransactionIsolationLevel["RepeatableRead"] = "RepeatableRead";
    TransactionIsolationLevel["Serializable"] = "Serializable";
})(TransactionIsolationLevel = exports.TransactionIsolationLevel || (exports.TransactionIsolationLevel = {}));
var SortOrder;
(function (SortOrder) {
    SortOrder["asc"] = "asc";
    SortOrder["desc"] = "desc";
})(SortOrder = exports.SortOrder || (exports.SortOrder = {}));
var QueryMode;
(function (QueryMode) {
    QueryMode["default"] = "default";
    QueryMode["insensitive"] = "insensitive";
})(QueryMode = exports.QueryMode || (exports.QueryMode = {}));
var PostScalarFieldEnum;
(function (PostScalarFieldEnum) {
    PostScalarFieldEnum["id"] = "id";
    PostScalarFieldEnum["title"] = "title";
    PostScalarFieldEnum["content"] = "content";
    PostScalarFieldEnum["createdAt"] = "createdAt";
    PostScalarFieldEnum["updatedAt"] = "updatedAt";
    PostScalarFieldEnum["authorId"] = "authorId";
})(PostScalarFieldEnum = exports.PostScalarFieldEnum || (exports.PostScalarFieldEnum = {}));
(0, graphql_7.registerEnumType)(PostScalarFieldEnum, { name: 'PostScalarFieldEnum', description: undefined });
(0, graphql_7.registerEnumType)(QueryMode, { name: 'QueryMode', description: undefined });
(0, graphql_7.registerEnumType)(SortOrder, { name: 'SortOrder', description: undefined });
(0, graphql_7.registerEnumType)(TransactionIsolationLevel, { name: 'TransactionIsolationLevel', description: undefined });
(0, graphql_7.registerEnumType)(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined });
let AggregatePost = class AggregatePost {
};
__decorate([
    (0, graphql_1.Field)(() => PostCountAggregate, { nullable: true })
], AggregatePost.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => PostMinAggregate, { nullable: true })
], AggregatePost.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => PostMaxAggregate, { nullable: true })
], AggregatePost.prototype, "_max", void 0);
AggregatePost = __decorate([
    (0, graphql_2.ObjectType)()
], AggregatePost);
exports.AggregatePost = AggregatePost;
let CreateManyPostArgs = class CreateManyPostArgs {
};
__decorate([
    (0, graphql_1.Field)(() => [PostCreateManyInput], { nullable: false }),
    (0, class_transformer_1.Type)(() => PostCreateManyInput)
], CreateManyPostArgs.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], CreateManyPostArgs.prototype, "skipDuplicates", void 0);
CreateManyPostArgs = __decorate([
    (0, graphql_3.ArgsType)()
], CreateManyPostArgs);
exports.CreateManyPostArgs = CreateManyPostArgs;
let CreateOnePostArgs = class CreateOnePostArgs {
};
__decorate([
    (0, graphql_1.Field)(() => PostCreateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => PostCreateInput)
], CreateOnePostArgs.prototype, "data", void 0);
CreateOnePostArgs = __decorate([
    (0, graphql_3.ArgsType)()
], CreateOnePostArgs);
exports.CreateOnePostArgs = CreateOnePostArgs;
let DeleteManyPostArgs = class DeleteManyPostArgs {
};
__decorate([
    (0, graphql_1.Field)(() => PostWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => PostWhereInput)
], DeleteManyPostArgs.prototype, "where", void 0);
DeleteManyPostArgs = __decorate([
    (0, graphql_3.ArgsType)()
], DeleteManyPostArgs);
exports.DeleteManyPostArgs = DeleteManyPostArgs;
let DeleteOnePostArgs = class DeleteOnePostArgs {
};
__decorate([
    (0, graphql_1.Field)(() => PostWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => PostWhereUniqueInput)
], DeleteOnePostArgs.prototype, "where", void 0);
DeleteOnePostArgs = __decorate([
    (0, graphql_3.ArgsType)()
], DeleteOnePostArgs);
exports.DeleteOnePostArgs = DeleteOnePostArgs;
let FindFirstPostOrThrowArgs = class FindFirstPostOrThrowArgs {
};
__decorate([
    (0, graphql_1.Field)(() => PostWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => PostWhereInput)
], FindFirstPostOrThrowArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [PostOrderByWithRelationInput], { nullable: true })
], FindFirstPostOrThrowArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => PostWhereUniqueInput, { nullable: true })
], FindFirstPostOrThrowArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindFirstPostOrThrowArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindFirstPostOrThrowArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [PostScalarFieldEnum], { nullable: true })
], FindFirstPostOrThrowArgs.prototype, "distinct", void 0);
FindFirstPostOrThrowArgs = __decorate([
    (0, graphql_3.ArgsType)()
], FindFirstPostOrThrowArgs);
exports.FindFirstPostOrThrowArgs = FindFirstPostOrThrowArgs;
let FindFirstPostArgs = class FindFirstPostArgs {
};
__decorate([
    (0, graphql_1.Field)(() => PostWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => PostWhereInput)
], FindFirstPostArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [PostOrderByWithRelationInput], { nullable: true })
], FindFirstPostArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => PostWhereUniqueInput, { nullable: true })
], FindFirstPostArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindFirstPostArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindFirstPostArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [PostScalarFieldEnum], { nullable: true })
], FindFirstPostArgs.prototype, "distinct", void 0);
FindFirstPostArgs = __decorate([
    (0, graphql_3.ArgsType)()
], FindFirstPostArgs);
exports.FindFirstPostArgs = FindFirstPostArgs;
let FindManyPostArgs = class FindManyPostArgs {
};
__decorate([
    (0, graphql_1.Field)(() => PostWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => PostWhereInput)
], FindManyPostArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [PostOrderByWithRelationInput], { nullable: true })
], FindManyPostArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => PostWhereUniqueInput, { nullable: true })
], FindManyPostArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindManyPostArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindManyPostArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [PostScalarFieldEnum], { nullable: true })
], FindManyPostArgs.prototype, "distinct", void 0);
FindManyPostArgs = __decorate([
    (0, graphql_3.ArgsType)()
], FindManyPostArgs);
exports.FindManyPostArgs = FindManyPostArgs;
let FindUniquePostOrThrowArgs = class FindUniquePostOrThrowArgs {
};
__decorate([
    (0, graphql_1.Field)(() => PostWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => PostWhereUniqueInput)
], FindUniquePostOrThrowArgs.prototype, "where", void 0);
FindUniquePostOrThrowArgs = __decorate([
    (0, graphql_3.ArgsType)()
], FindUniquePostOrThrowArgs);
exports.FindUniquePostOrThrowArgs = FindUniquePostOrThrowArgs;
let FindUniquePostArgs = class FindUniquePostArgs {
};
__decorate([
    (0, graphql_1.Field)(() => PostWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => PostWhereUniqueInput)
], FindUniquePostArgs.prototype, "where", void 0);
FindUniquePostArgs = __decorate([
    (0, graphql_3.ArgsType)()
], FindUniquePostArgs);
exports.FindUniquePostArgs = FindUniquePostArgs;
let PostAggregateArgs = class PostAggregateArgs {
};
__decorate([
    (0, graphql_1.Field)(() => PostWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => PostWhereInput)
], PostAggregateArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [PostOrderByWithRelationInput], { nullable: true })
], PostAggregateArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => PostWhereUniqueInput, { nullable: true })
], PostAggregateArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], PostAggregateArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], PostAggregateArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => PostCountAggregateInput, { nullable: true })
], PostAggregateArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => PostMinAggregateInput, { nullable: true })
], PostAggregateArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => PostMaxAggregateInput, { nullable: true })
], PostAggregateArgs.prototype, "_max", void 0);
PostAggregateArgs = __decorate([
    (0, graphql_3.ArgsType)()
], PostAggregateArgs);
exports.PostAggregateArgs = PostAggregateArgs;
let PostCountAggregateInput = class PostCountAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], PostCountAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], PostCountAggregateInput.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], PostCountAggregateInput.prototype, "content", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], PostCountAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], PostCountAggregateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], PostCountAggregateInput.prototype, "authorId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], PostCountAggregateInput.prototype, "_all", void 0);
PostCountAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], PostCountAggregateInput);
exports.PostCountAggregateInput = PostCountAggregateInput;
let PostCountAggregate = class PostCountAggregate {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], PostCountAggregate.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], PostCountAggregate.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], PostCountAggregate.prototype, "content", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], PostCountAggregate.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], PostCountAggregate.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], PostCountAggregate.prototype, "authorId", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], PostCountAggregate.prototype, "_all", void 0);
PostCountAggregate = __decorate([
    (0, graphql_2.ObjectType)()
], PostCountAggregate);
exports.PostCountAggregate = PostCountAggregate;
let PostCountOrderByAggregateInput = class PostCountOrderByAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], PostCountOrderByAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], PostCountOrderByAggregateInput.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], PostCountOrderByAggregateInput.prototype, "content", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], PostCountOrderByAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], PostCountOrderByAggregateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], PostCountOrderByAggregateInput.prototype, "authorId", void 0);
PostCountOrderByAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], PostCountOrderByAggregateInput);
exports.PostCountOrderByAggregateInput = PostCountOrderByAggregateInput;
let PostCreateManyAuthorInputEnvelope = class PostCreateManyAuthorInputEnvelope {
};
__decorate([
    (0, graphql_1.Field)(() => [PostCreateManyAuthorInput], { nullable: false }),
    (0, class_transformer_1.Type)(() => PostCreateManyAuthorInput)
], PostCreateManyAuthorInputEnvelope.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], PostCreateManyAuthorInputEnvelope.prototype, "skipDuplicates", void 0);
PostCreateManyAuthorInputEnvelope = __decorate([
    (0, graphql_5.InputType)()
], PostCreateManyAuthorInputEnvelope);
exports.PostCreateManyAuthorInputEnvelope = PostCreateManyAuthorInputEnvelope;
let PostCreateManyAuthorInput = class PostCreateManyAuthorInput {
};
__decorate([
    (0, graphql_6.HideField)()
], PostCreateManyAuthorInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    Validator.MinLength(2),
    Validator.MaxLength(20),
    Validator.IsNotEmpty()
], PostCreateManyAuthorInput.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    Validator.IsNotEmpty()
], PostCreateManyAuthorInput.prototype, "content", void 0);
__decorate([
    (0, graphql_6.HideField)()
], PostCreateManyAuthorInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_6.HideField)()
], PostCreateManyAuthorInput.prototype, "updatedAt", void 0);
PostCreateManyAuthorInput = __decorate([
    (0, graphql_5.InputType)()
], PostCreateManyAuthorInput);
exports.PostCreateManyAuthorInput = PostCreateManyAuthorInput;
let PostCreateManyInput = class PostCreateManyInput {
};
__decorate([
    (0, graphql_6.HideField)()
], PostCreateManyInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    Validator.MinLength(2),
    Validator.MaxLength(20),
    Validator.IsNotEmpty()
], PostCreateManyInput.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    Validator.IsNotEmpty()
], PostCreateManyInput.prototype, "content", void 0);
__decorate([
    (0, graphql_6.HideField)()
], PostCreateManyInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_6.HideField)()
], PostCreateManyInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_6.HideField)()
], PostCreateManyInput.prototype, "authorId", void 0);
PostCreateManyInput = __decorate([
    (0, graphql_5.InputType)()
], PostCreateManyInput);
exports.PostCreateManyInput = PostCreateManyInput;
let PostCreateNestedManyWithoutAuthorInput = class PostCreateNestedManyWithoutAuthorInput {
};
__decorate([
    (0, graphql_1.Field)(() => [PostCreateWithoutAuthorInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => PostCreateWithoutAuthorInput)
], PostCreateNestedManyWithoutAuthorInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [PostCreateOrConnectWithoutAuthorInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => PostCreateOrConnectWithoutAuthorInput)
], PostCreateNestedManyWithoutAuthorInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => PostCreateManyAuthorInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => PostCreateManyAuthorInputEnvelope)
], PostCreateNestedManyWithoutAuthorInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [PostWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => PostWhereUniqueInput)
], PostCreateNestedManyWithoutAuthorInput.prototype, "connect", void 0);
PostCreateNestedManyWithoutAuthorInput = __decorate([
    (0, graphql_5.InputType)()
], PostCreateNestedManyWithoutAuthorInput);
exports.PostCreateNestedManyWithoutAuthorInput = PostCreateNestedManyWithoutAuthorInput;
let PostCreateOrConnectWithoutAuthorInput = class PostCreateOrConnectWithoutAuthorInput {
};
__decorate([
    (0, graphql_1.Field)(() => PostWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => PostWhereUniqueInput)
], PostCreateOrConnectWithoutAuthorInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => PostCreateWithoutAuthorInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => PostCreateWithoutAuthorInput)
], PostCreateOrConnectWithoutAuthorInput.prototype, "create", void 0);
PostCreateOrConnectWithoutAuthorInput = __decorate([
    (0, graphql_5.InputType)()
], PostCreateOrConnectWithoutAuthorInput);
exports.PostCreateOrConnectWithoutAuthorInput = PostCreateOrConnectWithoutAuthorInput;
let PostCreateWithoutAuthorInput = class PostCreateWithoutAuthorInput {
};
__decorate([
    (0, graphql_6.HideField)()
], PostCreateWithoutAuthorInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    Validator.MinLength(2),
    Validator.MaxLength(20),
    Validator.IsNotEmpty()
], PostCreateWithoutAuthorInput.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    Validator.IsNotEmpty()
], PostCreateWithoutAuthorInput.prototype, "content", void 0);
__decorate([
    (0, graphql_6.HideField)()
], PostCreateWithoutAuthorInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_6.HideField)()
], PostCreateWithoutAuthorInput.prototype, "updatedAt", void 0);
PostCreateWithoutAuthorInput = __decorate([
    (0, graphql_5.InputType)()
], PostCreateWithoutAuthorInput);
exports.PostCreateWithoutAuthorInput = PostCreateWithoutAuthorInput;
let PostCreateInput = class PostCreateInput {
};
__decorate([
    (0, graphql_6.HideField)()
], PostCreateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    Validator.MinLength(2),
    Validator.MaxLength(20),
    Validator.IsNotEmpty()
], PostCreateInput.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    Validator.IsNotEmpty()
], PostCreateInput.prototype, "content", void 0);
__decorate([
    (0, graphql_6.HideField)()
], PostCreateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_6.HideField)()
], PostCreateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserCreateNestedOneWithoutPostsInput, { nullable: false })
], PostCreateInput.prototype, "author", void 0);
PostCreateInput = __decorate([
    (0, graphql_5.InputType)()
], PostCreateInput);
exports.PostCreateInput = PostCreateInput;
let PostGroupByArgs = class PostGroupByArgs {
};
__decorate([
    (0, graphql_1.Field)(() => PostWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => PostWhereInput)
], PostGroupByArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [PostOrderByWithAggregationInput], { nullable: true })
], PostGroupByArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => [PostScalarFieldEnum], { nullable: false })
], PostGroupByArgs.prototype, "by", void 0);
__decorate([
    (0, graphql_1.Field)(() => PostScalarWhereWithAggregatesInput, { nullable: true })
], PostGroupByArgs.prototype, "having", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], PostGroupByArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], PostGroupByArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => PostCountAggregateInput, { nullable: true })
], PostGroupByArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => PostMinAggregateInput, { nullable: true })
], PostGroupByArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => PostMaxAggregateInput, { nullable: true })
], PostGroupByArgs.prototype, "_max", void 0);
PostGroupByArgs = __decorate([
    (0, graphql_3.ArgsType)()
], PostGroupByArgs);
exports.PostGroupByArgs = PostGroupByArgs;
let PostGroupBy = class PostGroupBy {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], PostGroupBy.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], PostGroupBy.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], PostGroupBy.prototype, "content", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], PostGroupBy.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], PostGroupBy.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], PostGroupBy.prototype, "authorId", void 0);
__decorate([
    (0, graphql_1.Field)(() => PostCountAggregate, { nullable: true })
], PostGroupBy.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => PostMinAggregate, { nullable: true })
], PostGroupBy.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => PostMaxAggregate, { nullable: true })
], PostGroupBy.prototype, "_max", void 0);
PostGroupBy = __decorate([
    (0, graphql_2.ObjectType)()
], PostGroupBy);
exports.PostGroupBy = PostGroupBy;
let PostListRelationFilter = class PostListRelationFilter {
};
__decorate([
    (0, graphql_1.Field)(() => PostWhereInput, { nullable: true })
], PostListRelationFilter.prototype, "every", void 0);
__decorate([
    (0, graphql_1.Field)(() => PostWhereInput, { nullable: true })
], PostListRelationFilter.prototype, "some", void 0);
__decorate([
    (0, graphql_1.Field)(() => PostWhereInput, { nullable: true })
], PostListRelationFilter.prototype, "none", void 0);
PostListRelationFilter = __decorate([
    (0, graphql_5.InputType)()
], PostListRelationFilter);
exports.PostListRelationFilter = PostListRelationFilter;
let PostMaxAggregateInput = class PostMaxAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], PostMaxAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], PostMaxAggregateInput.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], PostMaxAggregateInput.prototype, "content", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], PostMaxAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], PostMaxAggregateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], PostMaxAggregateInput.prototype, "authorId", void 0);
PostMaxAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], PostMaxAggregateInput);
exports.PostMaxAggregateInput = PostMaxAggregateInput;
let PostMaxAggregate = class PostMaxAggregate {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], PostMaxAggregate.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], PostMaxAggregate.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], PostMaxAggregate.prototype, "content", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], PostMaxAggregate.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], PostMaxAggregate.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], PostMaxAggregate.prototype, "authorId", void 0);
PostMaxAggregate = __decorate([
    (0, graphql_2.ObjectType)()
], PostMaxAggregate);
exports.PostMaxAggregate = PostMaxAggregate;
let PostMaxOrderByAggregateInput = class PostMaxOrderByAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], PostMaxOrderByAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], PostMaxOrderByAggregateInput.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], PostMaxOrderByAggregateInput.prototype, "content", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], PostMaxOrderByAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], PostMaxOrderByAggregateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], PostMaxOrderByAggregateInput.prototype, "authorId", void 0);
PostMaxOrderByAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], PostMaxOrderByAggregateInput);
exports.PostMaxOrderByAggregateInput = PostMaxOrderByAggregateInput;
let PostMinAggregateInput = class PostMinAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], PostMinAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], PostMinAggregateInput.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], PostMinAggregateInput.prototype, "content", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], PostMinAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], PostMinAggregateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], PostMinAggregateInput.prototype, "authorId", void 0);
PostMinAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], PostMinAggregateInput);
exports.PostMinAggregateInput = PostMinAggregateInput;
let PostMinAggregate = class PostMinAggregate {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], PostMinAggregate.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], PostMinAggregate.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], PostMinAggregate.prototype, "content", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], PostMinAggregate.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], PostMinAggregate.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], PostMinAggregate.prototype, "authorId", void 0);
PostMinAggregate = __decorate([
    (0, graphql_2.ObjectType)()
], PostMinAggregate);
exports.PostMinAggregate = PostMinAggregate;
let PostMinOrderByAggregateInput = class PostMinOrderByAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], PostMinOrderByAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], PostMinOrderByAggregateInput.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], PostMinOrderByAggregateInput.prototype, "content", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], PostMinOrderByAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], PostMinOrderByAggregateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], PostMinOrderByAggregateInput.prototype, "authorId", void 0);
PostMinOrderByAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], PostMinOrderByAggregateInput);
exports.PostMinOrderByAggregateInput = PostMinOrderByAggregateInput;
let PostOrderByRelationAggregateInput = class PostOrderByRelationAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], PostOrderByRelationAggregateInput.prototype, "_count", void 0);
PostOrderByRelationAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], PostOrderByRelationAggregateInput);
exports.PostOrderByRelationAggregateInput = PostOrderByRelationAggregateInput;
let PostOrderByWithAggregationInput = class PostOrderByWithAggregationInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], PostOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], PostOrderByWithAggregationInput.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], PostOrderByWithAggregationInput.prototype, "content", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], PostOrderByWithAggregationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], PostOrderByWithAggregationInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], PostOrderByWithAggregationInput.prototype, "authorId", void 0);
__decorate([
    (0, graphql_1.Field)(() => PostCountOrderByAggregateInput, { nullable: true })
], PostOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => PostMaxOrderByAggregateInput, { nullable: true })
], PostOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    (0, graphql_1.Field)(() => PostMinOrderByAggregateInput, { nullable: true })
], PostOrderByWithAggregationInput.prototype, "_min", void 0);
PostOrderByWithAggregationInput = __decorate([
    (0, graphql_5.InputType)()
], PostOrderByWithAggregationInput);
exports.PostOrderByWithAggregationInput = PostOrderByWithAggregationInput;
let PostOrderByWithRelationInput = class PostOrderByWithRelationInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], PostOrderByWithRelationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], PostOrderByWithRelationInput.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], PostOrderByWithRelationInput.prototype, "content", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], PostOrderByWithRelationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], PostOrderByWithRelationInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], PostOrderByWithRelationInput.prototype, "authorId", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserOrderByWithRelationInput, { nullable: true })
], PostOrderByWithRelationInput.prototype, "author", void 0);
PostOrderByWithRelationInput = __decorate([
    (0, graphql_5.InputType)()
], PostOrderByWithRelationInput);
exports.PostOrderByWithRelationInput = PostOrderByWithRelationInput;
let PostScalarWhereWithAggregatesInput = PostScalarWhereWithAggregatesInput_1 = class PostScalarWhereWithAggregatesInput {
};
__decorate([
    (0, graphql_1.Field)(() => [PostScalarWhereWithAggregatesInput_1], { nullable: true })
], PostScalarWhereWithAggregatesInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [PostScalarWhereWithAggregatesInput_1], { nullable: true })
], PostScalarWhereWithAggregatesInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [PostScalarWhereWithAggregatesInput_1], { nullable: true })
], PostScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringWithAggregatesFilter, { nullable: true })
], PostScalarWhereWithAggregatesInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringWithAggregatesFilter, { nullable: true })
], PostScalarWhereWithAggregatesInput.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringWithAggregatesFilter, { nullable: true })
], PostScalarWhereWithAggregatesInput.prototype, "content", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeWithAggregatesFilter, { nullable: true })
], PostScalarWhereWithAggregatesInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeWithAggregatesFilter, { nullable: true })
], PostScalarWhereWithAggregatesInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringWithAggregatesFilter, { nullable: true })
], PostScalarWhereWithAggregatesInput.prototype, "authorId", void 0);
PostScalarWhereWithAggregatesInput = PostScalarWhereWithAggregatesInput_1 = __decorate([
    (0, graphql_5.InputType)()
], PostScalarWhereWithAggregatesInput);
exports.PostScalarWhereWithAggregatesInput = PostScalarWhereWithAggregatesInput;
let PostScalarWhereInput = PostScalarWhereInput_1 = class PostScalarWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [PostScalarWhereInput_1], { nullable: true })
], PostScalarWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [PostScalarWhereInput_1], { nullable: true })
], PostScalarWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [PostScalarWhereInput_1], { nullable: true })
], PostScalarWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], PostScalarWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], PostScalarWhereInput.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], PostScalarWhereInput.prototype, "content", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFilter, { nullable: true })
], PostScalarWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFilter, { nullable: true })
], PostScalarWhereInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], PostScalarWhereInput.prototype, "authorId", void 0);
PostScalarWhereInput = PostScalarWhereInput_1 = __decorate([
    (0, graphql_5.InputType)()
], PostScalarWhereInput);
exports.PostScalarWhereInput = PostScalarWhereInput;
let PostUncheckedCreateNestedManyWithoutAuthorInput = class PostUncheckedCreateNestedManyWithoutAuthorInput {
};
__decorate([
    (0, graphql_1.Field)(() => [PostCreateWithoutAuthorInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => PostCreateWithoutAuthorInput)
], PostUncheckedCreateNestedManyWithoutAuthorInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [PostCreateOrConnectWithoutAuthorInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => PostCreateOrConnectWithoutAuthorInput)
], PostUncheckedCreateNestedManyWithoutAuthorInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => PostCreateManyAuthorInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => PostCreateManyAuthorInputEnvelope)
], PostUncheckedCreateNestedManyWithoutAuthorInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [PostWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => PostWhereUniqueInput)
], PostUncheckedCreateNestedManyWithoutAuthorInput.prototype, "connect", void 0);
PostUncheckedCreateNestedManyWithoutAuthorInput = __decorate([
    (0, graphql_5.InputType)()
], PostUncheckedCreateNestedManyWithoutAuthorInput);
exports.PostUncheckedCreateNestedManyWithoutAuthorInput = PostUncheckedCreateNestedManyWithoutAuthorInput;
let PostUncheckedCreateWithoutAuthorInput = class PostUncheckedCreateWithoutAuthorInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], PostUncheckedCreateWithoutAuthorInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    Validator.MinLength(2),
    Validator.MaxLength(20),
    Validator.IsNotEmpty()
], PostUncheckedCreateWithoutAuthorInput.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    Validator.IsNotEmpty()
], PostUncheckedCreateWithoutAuthorInput.prototype, "content", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], PostUncheckedCreateWithoutAuthorInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], PostUncheckedCreateWithoutAuthorInput.prototype, "updatedAt", void 0);
PostUncheckedCreateWithoutAuthorInput = __decorate([
    (0, graphql_5.InputType)()
], PostUncheckedCreateWithoutAuthorInput);
exports.PostUncheckedCreateWithoutAuthorInput = PostUncheckedCreateWithoutAuthorInput;
let PostUncheckedCreateInput = class PostUncheckedCreateInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], PostUncheckedCreateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    Validator.MinLength(2),
    Validator.MaxLength(20),
    Validator.IsNotEmpty()
], PostUncheckedCreateInput.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    Validator.IsNotEmpty()
], PostUncheckedCreateInput.prototype, "content", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], PostUncheckedCreateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], PostUncheckedCreateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], PostUncheckedCreateInput.prototype, "authorId", void 0);
PostUncheckedCreateInput = __decorate([
    (0, graphql_5.InputType)()
], PostUncheckedCreateInput);
exports.PostUncheckedCreateInput = PostUncheckedCreateInput;
let PostUncheckedUpdateManyWithoutAuthorNestedInput = class PostUncheckedUpdateManyWithoutAuthorNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => [PostCreateWithoutAuthorInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => PostCreateWithoutAuthorInput)
], PostUncheckedUpdateManyWithoutAuthorNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [PostCreateOrConnectWithoutAuthorInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => PostCreateOrConnectWithoutAuthorInput)
], PostUncheckedUpdateManyWithoutAuthorNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [PostUpsertWithWhereUniqueWithoutAuthorInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => PostUpsertWithWhereUniqueWithoutAuthorInput)
], PostUncheckedUpdateManyWithoutAuthorNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => PostCreateManyAuthorInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => PostCreateManyAuthorInputEnvelope)
], PostUncheckedUpdateManyWithoutAuthorNestedInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [PostWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => PostWhereUniqueInput)
], PostUncheckedUpdateManyWithoutAuthorNestedInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [PostWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => PostWhereUniqueInput)
], PostUncheckedUpdateManyWithoutAuthorNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [PostWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => PostWhereUniqueInput)
], PostUncheckedUpdateManyWithoutAuthorNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [PostWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => PostWhereUniqueInput)
], PostUncheckedUpdateManyWithoutAuthorNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [PostUpdateWithWhereUniqueWithoutAuthorInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => PostUpdateWithWhereUniqueWithoutAuthorInput)
], PostUncheckedUpdateManyWithoutAuthorNestedInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [PostUpdateManyWithWhereWithoutAuthorInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => PostUpdateManyWithWhereWithoutAuthorInput)
], PostUncheckedUpdateManyWithoutAuthorNestedInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [PostScalarWhereInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => PostScalarWhereInput)
], PostUncheckedUpdateManyWithoutAuthorNestedInput.prototype, "deleteMany", void 0);
PostUncheckedUpdateManyWithoutAuthorNestedInput = __decorate([
    (0, graphql_5.InputType)()
], PostUncheckedUpdateManyWithoutAuthorNestedInput);
exports.PostUncheckedUpdateManyWithoutAuthorNestedInput = PostUncheckedUpdateManyWithoutAuthorNestedInput;
let PostUncheckedUpdateManyWithoutAuthorInput = class PostUncheckedUpdateManyWithoutAuthorInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], PostUncheckedUpdateManyWithoutAuthorInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], PostUncheckedUpdateManyWithoutAuthorInput.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], PostUncheckedUpdateManyWithoutAuthorInput.prototype, "content", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], PostUncheckedUpdateManyWithoutAuthorInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], PostUncheckedUpdateManyWithoutAuthorInput.prototype, "updatedAt", void 0);
PostUncheckedUpdateManyWithoutAuthorInput = __decorate([
    (0, graphql_5.InputType)()
], PostUncheckedUpdateManyWithoutAuthorInput);
exports.PostUncheckedUpdateManyWithoutAuthorInput = PostUncheckedUpdateManyWithoutAuthorInput;
let PostUncheckedUpdateManyInput = class PostUncheckedUpdateManyInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], PostUncheckedUpdateManyInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], PostUncheckedUpdateManyInput.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], PostUncheckedUpdateManyInput.prototype, "content", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], PostUncheckedUpdateManyInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], PostUncheckedUpdateManyInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], PostUncheckedUpdateManyInput.prototype, "authorId", void 0);
PostUncheckedUpdateManyInput = __decorate([
    (0, graphql_5.InputType)()
], PostUncheckedUpdateManyInput);
exports.PostUncheckedUpdateManyInput = PostUncheckedUpdateManyInput;
let PostUncheckedUpdateWithoutAuthorInput = class PostUncheckedUpdateWithoutAuthorInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], PostUncheckedUpdateWithoutAuthorInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], PostUncheckedUpdateWithoutAuthorInput.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], PostUncheckedUpdateWithoutAuthorInput.prototype, "content", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], PostUncheckedUpdateWithoutAuthorInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], PostUncheckedUpdateWithoutAuthorInput.prototype, "updatedAt", void 0);
PostUncheckedUpdateWithoutAuthorInput = __decorate([
    (0, graphql_5.InputType)()
], PostUncheckedUpdateWithoutAuthorInput);
exports.PostUncheckedUpdateWithoutAuthorInput = PostUncheckedUpdateWithoutAuthorInput;
let PostUncheckedUpdateInput = class PostUncheckedUpdateInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], PostUncheckedUpdateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], PostUncheckedUpdateInput.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], PostUncheckedUpdateInput.prototype, "content", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], PostUncheckedUpdateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], PostUncheckedUpdateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], PostUncheckedUpdateInput.prototype, "authorId", void 0);
PostUncheckedUpdateInput = __decorate([
    (0, graphql_5.InputType)()
], PostUncheckedUpdateInput);
exports.PostUncheckedUpdateInput = PostUncheckedUpdateInput;
let PostUpdateManyMutationInput = class PostUpdateManyMutationInput {
};
__decorate([
    (0, graphql_6.HideField)()
], PostUpdateManyMutationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], PostUpdateManyMutationInput.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], PostUpdateManyMutationInput.prototype, "content", void 0);
__decorate([
    (0, graphql_6.HideField)()
], PostUpdateManyMutationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_6.HideField)()
], PostUpdateManyMutationInput.prototype, "updatedAt", void 0);
PostUpdateManyMutationInput = __decorate([
    (0, graphql_5.InputType)()
], PostUpdateManyMutationInput);
exports.PostUpdateManyMutationInput = PostUpdateManyMutationInput;
let PostUpdateManyWithWhereWithoutAuthorInput = class PostUpdateManyWithWhereWithoutAuthorInput {
};
__decorate([
    (0, graphql_1.Field)(() => PostScalarWhereInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => PostScalarWhereInput)
], PostUpdateManyWithWhereWithoutAuthorInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => PostUpdateManyMutationInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => PostUpdateManyMutationInput)
], PostUpdateManyWithWhereWithoutAuthorInput.prototype, "data", void 0);
PostUpdateManyWithWhereWithoutAuthorInput = __decorate([
    (0, graphql_5.InputType)()
], PostUpdateManyWithWhereWithoutAuthorInput);
exports.PostUpdateManyWithWhereWithoutAuthorInput = PostUpdateManyWithWhereWithoutAuthorInput;
let PostUpdateManyWithoutAuthorNestedInput = class PostUpdateManyWithoutAuthorNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => [PostCreateWithoutAuthorInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => PostCreateWithoutAuthorInput)
], PostUpdateManyWithoutAuthorNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [PostCreateOrConnectWithoutAuthorInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => PostCreateOrConnectWithoutAuthorInput)
], PostUpdateManyWithoutAuthorNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [PostUpsertWithWhereUniqueWithoutAuthorInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => PostUpsertWithWhereUniqueWithoutAuthorInput)
], PostUpdateManyWithoutAuthorNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => PostCreateManyAuthorInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => PostCreateManyAuthorInputEnvelope)
], PostUpdateManyWithoutAuthorNestedInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [PostWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => PostWhereUniqueInput)
], PostUpdateManyWithoutAuthorNestedInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [PostWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => PostWhereUniqueInput)
], PostUpdateManyWithoutAuthorNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [PostWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => PostWhereUniqueInput)
], PostUpdateManyWithoutAuthorNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [PostWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => PostWhereUniqueInput)
], PostUpdateManyWithoutAuthorNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [PostUpdateWithWhereUniqueWithoutAuthorInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => PostUpdateWithWhereUniqueWithoutAuthorInput)
], PostUpdateManyWithoutAuthorNestedInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [PostUpdateManyWithWhereWithoutAuthorInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => PostUpdateManyWithWhereWithoutAuthorInput)
], PostUpdateManyWithoutAuthorNestedInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [PostScalarWhereInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => PostScalarWhereInput)
], PostUpdateManyWithoutAuthorNestedInput.prototype, "deleteMany", void 0);
PostUpdateManyWithoutAuthorNestedInput = __decorate([
    (0, graphql_5.InputType)()
], PostUpdateManyWithoutAuthorNestedInput);
exports.PostUpdateManyWithoutAuthorNestedInput = PostUpdateManyWithoutAuthorNestedInput;
let PostUpdateWithWhereUniqueWithoutAuthorInput = class PostUpdateWithWhereUniqueWithoutAuthorInput {
};
__decorate([
    (0, graphql_1.Field)(() => PostWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => PostWhereUniqueInput)
], PostUpdateWithWhereUniqueWithoutAuthorInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => PostUpdateWithoutAuthorInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => PostUpdateWithoutAuthorInput)
], PostUpdateWithWhereUniqueWithoutAuthorInput.prototype, "data", void 0);
PostUpdateWithWhereUniqueWithoutAuthorInput = __decorate([
    (0, graphql_5.InputType)()
], PostUpdateWithWhereUniqueWithoutAuthorInput);
exports.PostUpdateWithWhereUniqueWithoutAuthorInput = PostUpdateWithWhereUniqueWithoutAuthorInput;
let PostUpdateWithoutAuthorInput = class PostUpdateWithoutAuthorInput {
};
__decorate([
    (0, graphql_6.HideField)()
], PostUpdateWithoutAuthorInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], PostUpdateWithoutAuthorInput.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], PostUpdateWithoutAuthorInput.prototype, "content", void 0);
__decorate([
    (0, graphql_6.HideField)()
], PostUpdateWithoutAuthorInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_6.HideField)()
], PostUpdateWithoutAuthorInput.prototype, "updatedAt", void 0);
PostUpdateWithoutAuthorInput = __decorate([
    (0, graphql_5.InputType)()
], PostUpdateWithoutAuthorInput);
exports.PostUpdateWithoutAuthorInput = PostUpdateWithoutAuthorInput;
let PostUpdateInput = class PostUpdateInput {
};
__decorate([
    (0, graphql_6.HideField)()
], PostUpdateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], PostUpdateInput.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], PostUpdateInput.prototype, "content", void 0);
__decorate([
    (0, graphql_6.HideField)()
], PostUpdateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_6.HideField)()
], PostUpdateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserUpdateOneRequiredWithoutPostsNestedInput, { nullable: true })
], PostUpdateInput.prototype, "author", void 0);
PostUpdateInput = __decorate([
    (0, graphql_5.InputType)()
], PostUpdateInput);
exports.PostUpdateInput = PostUpdateInput;
let PostUpsertWithWhereUniqueWithoutAuthorInput = class PostUpsertWithWhereUniqueWithoutAuthorInput {
};
__decorate([
    (0, graphql_1.Field)(() => PostWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => PostWhereUniqueInput)
], PostUpsertWithWhereUniqueWithoutAuthorInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => PostUpdateWithoutAuthorInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => PostUpdateWithoutAuthorInput)
], PostUpsertWithWhereUniqueWithoutAuthorInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => PostCreateWithoutAuthorInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => PostCreateWithoutAuthorInput)
], PostUpsertWithWhereUniqueWithoutAuthorInput.prototype, "create", void 0);
PostUpsertWithWhereUniqueWithoutAuthorInput = __decorate([
    (0, graphql_5.InputType)()
], PostUpsertWithWhereUniqueWithoutAuthorInput);
exports.PostUpsertWithWhereUniqueWithoutAuthorInput = PostUpsertWithWhereUniqueWithoutAuthorInput;
let PostWhereUniqueInput = class PostWhereUniqueInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], PostWhereUniqueInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => [PostWhereInput], { nullable: true })
], PostWhereUniqueInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [PostWhereInput], { nullable: true })
], PostWhereUniqueInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [PostWhereInput], { nullable: true })
], PostWhereUniqueInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], PostWhereUniqueInput.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], PostWhereUniqueInput.prototype, "content", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFilter, { nullable: true })
], PostWhereUniqueInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFilter, { nullable: true })
], PostWhereUniqueInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], PostWhereUniqueInput.prototype, "authorId", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserRelationFilter, { nullable: true })
], PostWhereUniqueInput.prototype, "author", void 0);
PostWhereUniqueInput = __decorate([
    (0, graphql_5.InputType)()
], PostWhereUniqueInput);
exports.PostWhereUniqueInput = PostWhereUniqueInput;
let PostWhereInput = PostWhereInput_1 = class PostWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [PostWhereInput_1], { nullable: true })
], PostWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [PostWhereInput_1], { nullable: true })
], PostWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [PostWhereInput_1], { nullable: true })
], PostWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], PostWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], PostWhereInput.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], PostWhereInput.prototype, "content", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFilter, { nullable: true })
], PostWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFilter, { nullable: true })
], PostWhereInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], PostWhereInput.prototype, "authorId", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserRelationFilter, { nullable: true })
], PostWhereInput.prototype, "author", void 0);
PostWhereInput = PostWhereInput_1 = __decorate([
    (0, graphql_5.InputType)()
], PostWhereInput);
exports.PostWhereInput = PostWhereInput;
let Post = class Post {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false, description: 'The unique ID of the post.' })
], Post.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false, description: 'Title of the post.' })
], Post.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false, description: 'Content of the post.' })
], Post.prototype, "content", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false, description: 'Date and time when this post was created.' })
], Post.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false, description: 'Date and time when this post was updated.' })
], Post.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], Post.prototype, "authorId", void 0);
__decorate([
    (0, graphql_1.Field)(() => User, { nullable: false })
], Post.prototype, "author", void 0);
Post = __decorate([
    (0, graphql_2.ObjectType)()
], Post);
exports.Post = Post;
let UpdateManyPostArgs = class UpdateManyPostArgs {
};
__decorate([
    (0, graphql_1.Field)(() => PostUpdateManyMutationInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => PostUpdateManyMutationInput)
], UpdateManyPostArgs.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => PostWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => PostWhereInput)
], UpdateManyPostArgs.prototype, "where", void 0);
UpdateManyPostArgs = __decorate([
    (0, graphql_3.ArgsType)()
], UpdateManyPostArgs);
exports.UpdateManyPostArgs = UpdateManyPostArgs;
let UpdateOnePostArgs = class UpdateOnePostArgs {
};
__decorate([
    (0, graphql_1.Field)(() => PostUpdateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => PostUpdateInput)
], UpdateOnePostArgs.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => PostWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => PostWhereUniqueInput)
], UpdateOnePostArgs.prototype, "where", void 0);
UpdateOnePostArgs = __decorate([
    (0, graphql_3.ArgsType)()
], UpdateOnePostArgs);
exports.UpdateOnePostArgs = UpdateOnePostArgs;
let UpsertOnePostArgs = class UpsertOnePostArgs {
};
__decorate([
    (0, graphql_1.Field)(() => PostWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => PostWhereUniqueInput)
], UpsertOnePostArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => PostCreateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => PostCreateInput)
], UpsertOnePostArgs.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => PostUpdateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => PostUpdateInput)
], UpsertOnePostArgs.prototype, "update", void 0);
UpsertOnePostArgs = __decorate([
    (0, graphql_3.ArgsType)()
], UpsertOnePostArgs);
exports.UpsertOnePostArgs = UpsertOnePostArgs;
let AffectedRows = class AffectedRows {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], AffectedRows.prototype, "count", void 0);
AffectedRows = __decorate([
    (0, graphql_2.ObjectType)()
], AffectedRows);
exports.AffectedRows = AffectedRows;
let DateTimeFieldUpdateOperationsInput = class DateTimeFieldUpdateOperationsInput {
};
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], DateTimeFieldUpdateOperationsInput.prototype, "set", void 0);
DateTimeFieldUpdateOperationsInput = __decorate([
    (0, graphql_5.InputType)()
], DateTimeFieldUpdateOperationsInput);
exports.DateTimeFieldUpdateOperationsInput = DateTimeFieldUpdateOperationsInput;
let DateTimeFilter = class DateTimeFilter {
};
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], DateTimeFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [Date], { nullable: true })
], DateTimeFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [Date], { nullable: true })
], DateTimeFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], DateTimeFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], DateTimeFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], DateTimeFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], DateTimeFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedDateTimeFilter, { nullable: true })
], DateTimeFilter.prototype, "not", void 0);
DateTimeFilter = __decorate([
    (0, graphql_5.InputType)()
], DateTimeFilter);
exports.DateTimeFilter = DateTimeFilter;
let DateTimeWithAggregatesFilter = class DateTimeWithAggregatesFilter {
};
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], DateTimeWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [Date], { nullable: true })
], DateTimeWithAggregatesFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [Date], { nullable: true })
], DateTimeWithAggregatesFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], DateTimeWithAggregatesFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], DateTimeWithAggregatesFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], DateTimeWithAggregatesFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], DateTimeWithAggregatesFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedDateTimeWithAggregatesFilter, { nullable: true })
], DateTimeWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntFilter, { nullable: true })
], DateTimeWithAggregatesFilter.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedDateTimeFilter, { nullable: true })
], DateTimeWithAggregatesFilter.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedDateTimeFilter, { nullable: true })
], DateTimeWithAggregatesFilter.prototype, "_max", void 0);
DateTimeWithAggregatesFilter = __decorate([
    (0, graphql_5.InputType)()
], DateTimeWithAggregatesFilter);
exports.DateTimeWithAggregatesFilter = DateTimeWithAggregatesFilter;
let NestedDateTimeFilter = NestedDateTimeFilter_1 = class NestedDateTimeFilter {
};
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], NestedDateTimeFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [Date], { nullable: true })
], NestedDateTimeFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [Date], { nullable: true })
], NestedDateTimeFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], NestedDateTimeFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], NestedDateTimeFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], NestedDateTimeFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], NestedDateTimeFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedDateTimeFilter_1, { nullable: true })
], NestedDateTimeFilter.prototype, "not", void 0);
NestedDateTimeFilter = NestedDateTimeFilter_1 = __decorate([
    (0, graphql_5.InputType)()
], NestedDateTimeFilter);
exports.NestedDateTimeFilter = NestedDateTimeFilter;
let NestedDateTimeWithAggregatesFilter = NestedDateTimeWithAggregatesFilter_1 = class NestedDateTimeWithAggregatesFilter {
};
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], NestedDateTimeWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [Date], { nullable: true })
], NestedDateTimeWithAggregatesFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [Date], { nullable: true })
], NestedDateTimeWithAggregatesFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], NestedDateTimeWithAggregatesFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], NestedDateTimeWithAggregatesFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], NestedDateTimeWithAggregatesFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], NestedDateTimeWithAggregatesFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedDateTimeWithAggregatesFilter_1, { nullable: true })
], NestedDateTimeWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntFilter, { nullable: true })
], NestedDateTimeWithAggregatesFilter.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedDateTimeFilter, { nullable: true })
], NestedDateTimeWithAggregatesFilter.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedDateTimeFilter, { nullable: true })
], NestedDateTimeWithAggregatesFilter.prototype, "_max", void 0);
NestedDateTimeWithAggregatesFilter = NestedDateTimeWithAggregatesFilter_1 = __decorate([
    (0, graphql_5.InputType)()
], NestedDateTimeWithAggregatesFilter);
exports.NestedDateTimeWithAggregatesFilter = NestedDateTimeWithAggregatesFilter;
let NestedIntFilter = NestedIntFilter_1 = class NestedIntFilter {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], NestedIntFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_4.Int], { nullable: true })
], NestedIntFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_4.Int], { nullable: true })
], NestedIntFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], NestedIntFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], NestedIntFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], NestedIntFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], NestedIntFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntFilter_1, { nullable: true })
], NestedIntFilter.prototype, "not", void 0);
NestedIntFilter = NestedIntFilter_1 = __decorate([
    (0, graphql_5.InputType)()
], NestedIntFilter);
exports.NestedIntFilter = NestedIntFilter;
let NestedStringFilter = NestedStringFilter_1 = class NestedStringFilter {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true })
], NestedStringFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true })
], NestedStringFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringFilter.prototype, "contains", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringFilter.prototype, "startsWith", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringFilter.prototype, "endsWith", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedStringFilter_1, { nullable: true })
], NestedStringFilter.prototype, "not", void 0);
NestedStringFilter = NestedStringFilter_1 = __decorate([
    (0, graphql_5.InputType)()
], NestedStringFilter);
exports.NestedStringFilter = NestedStringFilter;
let NestedStringWithAggregatesFilter = NestedStringWithAggregatesFilter_1 = class NestedStringWithAggregatesFilter {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true })
], NestedStringWithAggregatesFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true })
], NestedStringWithAggregatesFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringWithAggregatesFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringWithAggregatesFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringWithAggregatesFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringWithAggregatesFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringWithAggregatesFilter.prototype, "contains", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringWithAggregatesFilter.prototype, "startsWith", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringWithAggregatesFilter.prototype, "endsWith", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedStringWithAggregatesFilter_1, { nullable: true })
], NestedStringWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntFilter, { nullable: true })
], NestedStringWithAggregatesFilter.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedStringFilter, { nullable: true })
], NestedStringWithAggregatesFilter.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedStringFilter, { nullable: true })
], NestedStringWithAggregatesFilter.prototype, "_max", void 0);
NestedStringWithAggregatesFilter = NestedStringWithAggregatesFilter_1 = __decorate([
    (0, graphql_5.InputType)()
], NestedStringWithAggregatesFilter);
exports.NestedStringWithAggregatesFilter = NestedStringWithAggregatesFilter;
let StringFieldUpdateOperationsInput = class StringFieldUpdateOperationsInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringFieldUpdateOperationsInput.prototype, "set", void 0);
StringFieldUpdateOperationsInput = __decorate([
    (0, graphql_5.InputType)()
], StringFieldUpdateOperationsInput);
exports.StringFieldUpdateOperationsInput = StringFieldUpdateOperationsInput;
let StringFilter = class StringFilter {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true })
], StringFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true })
], StringFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringFilter.prototype, "contains", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringFilter.prototype, "startsWith", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringFilter.prototype, "endsWith", void 0);
__decorate([
    (0, graphql_1.Field)(() => QueryMode, { nullable: true })
], StringFilter.prototype, "mode", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedStringFilter, { nullable: true })
], StringFilter.prototype, "not", void 0);
StringFilter = __decorate([
    (0, graphql_5.InputType)()
], StringFilter);
exports.StringFilter = StringFilter;
let StringWithAggregatesFilter = class StringWithAggregatesFilter {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true })
], StringWithAggregatesFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true })
], StringWithAggregatesFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringWithAggregatesFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringWithAggregatesFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringWithAggregatesFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringWithAggregatesFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringWithAggregatesFilter.prototype, "contains", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringWithAggregatesFilter.prototype, "startsWith", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringWithAggregatesFilter.prototype, "endsWith", void 0);
__decorate([
    (0, graphql_1.Field)(() => QueryMode, { nullable: true })
], StringWithAggregatesFilter.prototype, "mode", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedStringWithAggregatesFilter, { nullable: true })
], StringWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntFilter, { nullable: true })
], StringWithAggregatesFilter.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedStringFilter, { nullable: true })
], StringWithAggregatesFilter.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedStringFilter, { nullable: true })
], StringWithAggregatesFilter.prototype, "_max", void 0);
StringWithAggregatesFilter = __decorate([
    (0, graphql_5.InputType)()
], StringWithAggregatesFilter);
exports.StringWithAggregatesFilter = StringWithAggregatesFilter;
let AggregateUser = class AggregateUser {
};
__decorate([
    (0, graphql_1.Field)(() => UserCountAggregate, { nullable: true })
], AggregateUser.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserMinAggregate, { nullable: true })
], AggregateUser.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserMaxAggregate, { nullable: true })
], AggregateUser.prototype, "_max", void 0);
AggregateUser = __decorate([
    (0, graphql_2.ObjectType)()
], AggregateUser);
exports.AggregateUser = AggregateUser;
let CreateManyUserArgs = class CreateManyUserArgs {
};
__decorate([
    (0, graphql_1.Field)(() => [UserCreateManyInput], { nullable: false }),
    (0, class_transformer_1.Type)(() => UserCreateManyInput)
], CreateManyUserArgs.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], CreateManyUserArgs.prototype, "skipDuplicates", void 0);
CreateManyUserArgs = __decorate([
    (0, graphql_3.ArgsType)()
], CreateManyUserArgs);
exports.CreateManyUserArgs = CreateManyUserArgs;
let CreateOneUserArgs = class CreateOneUserArgs {
};
__decorate([
    (0, graphql_1.Field)(() => UserCreateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => UserCreateInput)
], CreateOneUserArgs.prototype, "data", void 0);
CreateOneUserArgs = __decorate([
    (0, graphql_3.ArgsType)()
], CreateOneUserArgs);
exports.CreateOneUserArgs = CreateOneUserArgs;
let DeleteManyUserArgs = class DeleteManyUserArgs {
};
__decorate([
    (0, graphql_1.Field)(() => UserWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => UserWhereInput)
], DeleteManyUserArgs.prototype, "where", void 0);
DeleteManyUserArgs = __decorate([
    (0, graphql_3.ArgsType)()
], DeleteManyUserArgs);
exports.DeleteManyUserArgs = DeleteManyUserArgs;
let DeleteOneUserArgs = class DeleteOneUserArgs {
};
__decorate([
    (0, graphql_1.Field)(() => UserWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => UserWhereUniqueInput)
], DeleteOneUserArgs.prototype, "where", void 0);
DeleteOneUserArgs = __decorate([
    (0, graphql_3.ArgsType)()
], DeleteOneUserArgs);
exports.DeleteOneUserArgs = DeleteOneUserArgs;
let FindFirstUserOrThrowArgs = class FindFirstUserOrThrowArgs {
};
__decorate([
    (0, graphql_1.Field)(() => UserWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => UserWhereInput)
], FindFirstUserOrThrowArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UserOrderByWithRelationInput], { nullable: true })
], FindFirstUserOrThrowArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserWhereUniqueInput, { nullable: true })
], FindFirstUserOrThrowArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindFirstUserOrThrowArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindFirstUserOrThrowArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UserScalarFieldEnum], { nullable: true })
], FindFirstUserOrThrowArgs.prototype, "distinct", void 0);
FindFirstUserOrThrowArgs = __decorate([
    (0, graphql_3.ArgsType)()
], FindFirstUserOrThrowArgs);
exports.FindFirstUserOrThrowArgs = FindFirstUserOrThrowArgs;
let FindFirstUserArgs = class FindFirstUserArgs {
};
__decorate([
    (0, graphql_1.Field)(() => UserWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => UserWhereInput)
], FindFirstUserArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UserOrderByWithRelationInput], { nullable: true })
], FindFirstUserArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserWhereUniqueInput, { nullable: true })
], FindFirstUserArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindFirstUserArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindFirstUserArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UserScalarFieldEnum], { nullable: true })
], FindFirstUserArgs.prototype, "distinct", void 0);
FindFirstUserArgs = __decorate([
    (0, graphql_3.ArgsType)()
], FindFirstUserArgs);
exports.FindFirstUserArgs = FindFirstUserArgs;
let FindManyUserArgs = class FindManyUserArgs {
};
__decorate([
    (0, graphql_1.Field)(() => UserWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => UserWhereInput)
], FindManyUserArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UserOrderByWithRelationInput], { nullable: true })
], FindManyUserArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserWhereUniqueInput, { nullable: true })
], FindManyUserArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindManyUserArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindManyUserArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UserScalarFieldEnum], { nullable: true })
], FindManyUserArgs.prototype, "distinct", void 0);
FindManyUserArgs = __decorate([
    (0, graphql_3.ArgsType)()
], FindManyUserArgs);
exports.FindManyUserArgs = FindManyUserArgs;
let FindUniqueUserOrThrowArgs = class FindUniqueUserOrThrowArgs {
};
__decorate([
    (0, graphql_1.Field)(() => UserWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => UserWhereUniqueInput)
], FindUniqueUserOrThrowArgs.prototype, "where", void 0);
FindUniqueUserOrThrowArgs = __decorate([
    (0, graphql_3.ArgsType)()
], FindUniqueUserOrThrowArgs);
exports.FindUniqueUserOrThrowArgs = FindUniqueUserOrThrowArgs;
let FindUniqueUserArgs = class FindUniqueUserArgs {
};
__decorate([
    (0, graphql_1.Field)(() => UserWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => UserWhereUniqueInput)
], FindUniqueUserArgs.prototype, "where", void 0);
FindUniqueUserArgs = __decorate([
    (0, graphql_3.ArgsType)()
], FindUniqueUserArgs);
exports.FindUniqueUserArgs = FindUniqueUserArgs;
let UpdateManyUserArgs = class UpdateManyUserArgs {
};
__decorate([
    (0, graphql_1.Field)(() => UserUpdateManyMutationInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => UserUpdateManyMutationInput)
], UpdateManyUserArgs.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => UserWhereInput)
], UpdateManyUserArgs.prototype, "where", void 0);
UpdateManyUserArgs = __decorate([
    (0, graphql_3.ArgsType)()
], UpdateManyUserArgs);
exports.UpdateManyUserArgs = UpdateManyUserArgs;
let UpdateOneUserArgs = class UpdateOneUserArgs {
};
__decorate([
    (0, graphql_1.Field)(() => UserUpdateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => UserUpdateInput)
], UpdateOneUserArgs.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => UserWhereUniqueInput)
], UpdateOneUserArgs.prototype, "where", void 0);
UpdateOneUserArgs = __decorate([
    (0, graphql_3.ArgsType)()
], UpdateOneUserArgs);
exports.UpdateOneUserArgs = UpdateOneUserArgs;
let UpsertOneUserArgs = class UpsertOneUserArgs {
};
__decorate([
    (0, graphql_1.Field)(() => UserWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => UserWhereUniqueInput)
], UpsertOneUserArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserCreateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => UserCreateInput)
], UpsertOneUserArgs.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserUpdateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => UserUpdateInput)
], UpsertOneUserArgs.prototype, "update", void 0);
UpsertOneUserArgs = __decorate([
    (0, graphql_3.ArgsType)()
], UpsertOneUserArgs);
exports.UpsertOneUserArgs = UpsertOneUserArgs;
let UserAggregateArgs = class UserAggregateArgs {
};
__decorate([
    (0, graphql_1.Field)(() => UserWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => UserWhereInput)
], UserAggregateArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UserOrderByWithRelationInput], { nullable: true })
], UserAggregateArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserWhereUniqueInput, { nullable: true })
], UserAggregateArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], UserAggregateArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], UserAggregateArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserCountAggregateInput, { nullable: true })
], UserAggregateArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserMinAggregateInput, { nullable: true })
], UserAggregateArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserMaxAggregateInput, { nullable: true })
], UserAggregateArgs.prototype, "_max", void 0);
UserAggregateArgs = __decorate([
    (0, graphql_3.ArgsType)()
], UserAggregateArgs);
exports.UserAggregateArgs = UserAggregateArgs;
let UserCountAggregateInput = class UserCountAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserCountAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserCountAggregateInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserCountAggregateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserCountAggregateInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserCountAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserCountAggregateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserCountAggregateInput.prototype, "_all", void 0);
UserCountAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], UserCountAggregateInput);
exports.UserCountAggregateInput = UserCountAggregateInput;
let UserCountAggregate = class UserCountAggregate {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], UserCountAggregate.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], UserCountAggregate.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], UserCountAggregate.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], UserCountAggregate.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], UserCountAggregate.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], UserCountAggregate.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], UserCountAggregate.prototype, "_all", void 0);
UserCountAggregate = __decorate([
    (0, graphql_2.ObjectType)()
], UserCountAggregate);
exports.UserCountAggregate = UserCountAggregate;
let UserCountOrderByAggregateInput = class UserCountOrderByAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserCountOrderByAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserCountOrderByAggregateInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserCountOrderByAggregateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserCountOrderByAggregateInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserCountOrderByAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserCountOrderByAggregateInput.prototype, "updatedAt", void 0);
UserCountOrderByAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], UserCountOrderByAggregateInput);
exports.UserCountOrderByAggregateInput = UserCountOrderByAggregateInput;
let UserCount = class UserCount {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], UserCount.prototype, "posts", void 0);
UserCount = __decorate([
    (0, graphql_2.ObjectType)()
], UserCount);
exports.UserCount = UserCount;
let UserCreateManyInput = class UserCreateManyInput {
};
__decorate([
    (0, graphql_6.HideField)()
], UserCreateManyInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    Validator.IsEmail()
], UserCreateManyInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    Validator.MinLength(2),
    Validator.MaxLength(20),
    Validator.IsAlpha(),
    Validator.IsNotEmpty()
], UserCreateManyInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    Validator.MinLength(6),
    Validator.MaxLength(15),
    Validator.IsAlphanumeric()
], UserCreateManyInput.prototype, "password", void 0);
__decorate([
    (0, graphql_6.HideField)()
], UserCreateManyInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_6.HideField)()
], UserCreateManyInput.prototype, "updatedAt", void 0);
UserCreateManyInput = __decorate([
    (0, graphql_5.InputType)()
], UserCreateManyInput);
exports.UserCreateManyInput = UserCreateManyInput;
let UserCreateNestedOneWithoutPostsInput = class UserCreateNestedOneWithoutPostsInput {
};
__decorate([
    (0, graphql_1.Field)(() => UserCreateWithoutPostsInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => UserCreateWithoutPostsInput)
], UserCreateNestedOneWithoutPostsInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserCreateOrConnectWithoutPostsInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => UserCreateOrConnectWithoutPostsInput)
], UserCreateNestedOneWithoutPostsInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserWhereUniqueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => UserWhereUniqueInput)
], UserCreateNestedOneWithoutPostsInput.prototype, "connect", void 0);
UserCreateNestedOneWithoutPostsInput = __decorate([
    (0, graphql_5.InputType)()
], UserCreateNestedOneWithoutPostsInput);
exports.UserCreateNestedOneWithoutPostsInput = UserCreateNestedOneWithoutPostsInput;
let UserCreateOrConnectWithoutPostsInput = class UserCreateOrConnectWithoutPostsInput {
};
__decorate([
    (0, graphql_1.Field)(() => UserWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => UserWhereUniqueInput)
], UserCreateOrConnectWithoutPostsInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserCreateWithoutPostsInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => UserCreateWithoutPostsInput)
], UserCreateOrConnectWithoutPostsInput.prototype, "create", void 0);
UserCreateOrConnectWithoutPostsInput = __decorate([
    (0, graphql_5.InputType)()
], UserCreateOrConnectWithoutPostsInput);
exports.UserCreateOrConnectWithoutPostsInput = UserCreateOrConnectWithoutPostsInput;
let UserCreateWithoutPostsInput = class UserCreateWithoutPostsInput {
};
__decorate([
    (0, graphql_6.HideField)()
], UserCreateWithoutPostsInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    Validator.IsEmail()
], UserCreateWithoutPostsInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    Validator.MinLength(2),
    Validator.MaxLength(20),
    Validator.IsAlpha(),
    Validator.IsNotEmpty()
], UserCreateWithoutPostsInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    Validator.MinLength(6),
    Validator.MaxLength(15),
    Validator.IsAlphanumeric()
], UserCreateWithoutPostsInput.prototype, "password", void 0);
__decorate([
    (0, graphql_6.HideField)()
], UserCreateWithoutPostsInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_6.HideField)()
], UserCreateWithoutPostsInput.prototype, "updatedAt", void 0);
UserCreateWithoutPostsInput = __decorate([
    (0, graphql_5.InputType)()
], UserCreateWithoutPostsInput);
exports.UserCreateWithoutPostsInput = UserCreateWithoutPostsInput;
let UserCreateInput = class UserCreateInput {
};
__decorate([
    (0, graphql_6.HideField)()
], UserCreateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    Validator.IsEmail()
], UserCreateInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    Validator.MinLength(2),
    Validator.MaxLength(20),
    Validator.IsAlpha(),
    Validator.IsNotEmpty()
], UserCreateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    Validator.MinLength(6),
    Validator.MaxLength(15),
    Validator.IsAlphanumeric()
], UserCreateInput.prototype, "password", void 0);
__decorate([
    (0, graphql_6.HideField)()
], UserCreateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_6.HideField)()
], UserCreateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_6.HideField)()
], UserCreateInput.prototype, "posts", void 0);
UserCreateInput = __decorate([
    (0, graphql_5.InputType)()
], UserCreateInput);
exports.UserCreateInput = UserCreateInput;
let UserGroupByArgs = class UserGroupByArgs {
};
__decorate([
    (0, graphql_1.Field)(() => UserWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => UserWhereInput)
], UserGroupByArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UserOrderByWithAggregationInput], { nullable: true })
], UserGroupByArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UserScalarFieldEnum], { nullable: false })
], UserGroupByArgs.prototype, "by", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserScalarWhereWithAggregatesInput, { nullable: true })
], UserGroupByArgs.prototype, "having", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], UserGroupByArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], UserGroupByArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserCountAggregateInput, { nullable: true })
], UserGroupByArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserMinAggregateInput, { nullable: true })
], UserGroupByArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserMaxAggregateInput, { nullable: true })
], UserGroupByArgs.prototype, "_max", void 0);
UserGroupByArgs = __decorate([
    (0, graphql_3.ArgsType)()
], UserGroupByArgs);
exports.UserGroupByArgs = UserGroupByArgs;
let UserGroupBy = class UserGroupBy {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], UserGroupBy.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], UserGroupBy.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], UserGroupBy.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], UserGroupBy.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], UserGroupBy.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], UserGroupBy.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserCountAggregate, { nullable: true })
], UserGroupBy.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserMinAggregate, { nullable: true })
], UserGroupBy.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserMaxAggregate, { nullable: true })
], UserGroupBy.prototype, "_max", void 0);
UserGroupBy = __decorate([
    (0, graphql_2.ObjectType)()
], UserGroupBy);
exports.UserGroupBy = UserGroupBy;
let UserMaxAggregateInput = class UserMaxAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserMaxAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserMaxAggregateInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserMaxAggregateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserMaxAggregateInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserMaxAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserMaxAggregateInput.prototype, "updatedAt", void 0);
UserMaxAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], UserMaxAggregateInput);
exports.UserMaxAggregateInput = UserMaxAggregateInput;
let UserMaxAggregate = class UserMaxAggregate {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserMaxAggregate.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserMaxAggregate.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserMaxAggregate.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserMaxAggregate.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], UserMaxAggregate.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], UserMaxAggregate.prototype, "updatedAt", void 0);
UserMaxAggregate = __decorate([
    (0, graphql_2.ObjectType)()
], UserMaxAggregate);
exports.UserMaxAggregate = UserMaxAggregate;
let UserMaxOrderByAggregateInput = class UserMaxOrderByAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserMaxOrderByAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserMaxOrderByAggregateInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserMaxOrderByAggregateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserMaxOrderByAggregateInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserMaxOrderByAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserMaxOrderByAggregateInput.prototype, "updatedAt", void 0);
UserMaxOrderByAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], UserMaxOrderByAggregateInput);
exports.UserMaxOrderByAggregateInput = UserMaxOrderByAggregateInput;
let UserMinAggregateInput = class UserMinAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserMinAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserMinAggregateInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserMinAggregateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserMinAggregateInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserMinAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserMinAggregateInput.prototype, "updatedAt", void 0);
UserMinAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], UserMinAggregateInput);
exports.UserMinAggregateInput = UserMinAggregateInput;
let UserMinAggregate = class UserMinAggregate {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserMinAggregate.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserMinAggregate.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserMinAggregate.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserMinAggregate.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], UserMinAggregate.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], UserMinAggregate.prototype, "updatedAt", void 0);
UserMinAggregate = __decorate([
    (0, graphql_2.ObjectType)()
], UserMinAggregate);
exports.UserMinAggregate = UserMinAggregate;
let UserMinOrderByAggregateInput = class UserMinOrderByAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserMinOrderByAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserMinOrderByAggregateInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserMinOrderByAggregateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserMinOrderByAggregateInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserMinOrderByAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserMinOrderByAggregateInput.prototype, "updatedAt", void 0);
UserMinOrderByAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], UserMinOrderByAggregateInput);
exports.UserMinOrderByAggregateInput = UserMinOrderByAggregateInput;
let UserOrderByWithAggregationInput = class UserOrderByWithAggregationInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserOrderByWithAggregationInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserOrderByWithAggregationInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserOrderByWithAggregationInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserOrderByWithAggregationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserOrderByWithAggregationInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserCountOrderByAggregateInput, { nullable: true })
], UserOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserMaxOrderByAggregateInput, { nullable: true })
], UserOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserMinOrderByAggregateInput, { nullable: true })
], UserOrderByWithAggregationInput.prototype, "_min", void 0);
UserOrderByWithAggregationInput = __decorate([
    (0, graphql_5.InputType)()
], UserOrderByWithAggregationInput);
exports.UserOrderByWithAggregationInput = UserOrderByWithAggregationInput;
let UserOrderByWithRelationInput = class UserOrderByWithRelationInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserOrderByWithRelationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserOrderByWithRelationInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserOrderByWithRelationInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserOrderByWithRelationInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserOrderByWithRelationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserOrderByWithRelationInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => PostOrderByRelationAggregateInput, { nullable: true })
], UserOrderByWithRelationInput.prototype, "posts", void 0);
UserOrderByWithRelationInput = __decorate([
    (0, graphql_5.InputType)()
], UserOrderByWithRelationInput);
exports.UserOrderByWithRelationInput = UserOrderByWithRelationInput;
let UserRelationFilter = class UserRelationFilter {
};
__decorate([
    (0, graphql_1.Field)(() => UserWhereInput, { nullable: true })
], UserRelationFilter.prototype, "is", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserWhereInput, { nullable: true })
], UserRelationFilter.prototype, "isNot", void 0);
UserRelationFilter = __decorate([
    (0, graphql_5.InputType)()
], UserRelationFilter);
exports.UserRelationFilter = UserRelationFilter;
let UserScalarWhereWithAggregatesInput = UserScalarWhereWithAggregatesInput_1 = class UserScalarWhereWithAggregatesInput {
};
__decorate([
    (0, graphql_1.Field)(() => [UserScalarWhereWithAggregatesInput_1], { nullable: true })
], UserScalarWhereWithAggregatesInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UserScalarWhereWithAggregatesInput_1], { nullable: true })
], UserScalarWhereWithAggregatesInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UserScalarWhereWithAggregatesInput_1], { nullable: true })
], UserScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringWithAggregatesFilter, { nullable: true })
], UserScalarWhereWithAggregatesInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringWithAggregatesFilter, { nullable: true })
], UserScalarWhereWithAggregatesInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringWithAggregatesFilter, { nullable: true })
], UserScalarWhereWithAggregatesInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringWithAggregatesFilter, { nullable: true })
], UserScalarWhereWithAggregatesInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeWithAggregatesFilter, { nullable: true })
], UserScalarWhereWithAggregatesInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeWithAggregatesFilter, { nullable: true })
], UserScalarWhereWithAggregatesInput.prototype, "updatedAt", void 0);
UserScalarWhereWithAggregatesInput = UserScalarWhereWithAggregatesInput_1 = __decorate([
    (0, graphql_5.InputType)()
], UserScalarWhereWithAggregatesInput);
exports.UserScalarWhereWithAggregatesInput = UserScalarWhereWithAggregatesInput;
let UserUncheckedCreateWithoutPostsInput = class UserUncheckedCreateWithoutPostsInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserUncheckedCreateWithoutPostsInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    Validator.IsEmail()
], UserUncheckedCreateWithoutPostsInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    Validator.MinLength(2),
    Validator.MaxLength(20),
    Validator.IsAlpha(),
    Validator.IsNotEmpty()
], UserUncheckedCreateWithoutPostsInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    Validator.MinLength(6),
    Validator.MaxLength(15),
    Validator.IsAlphanumeric()
], UserUncheckedCreateWithoutPostsInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], UserUncheckedCreateWithoutPostsInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], UserUncheckedCreateWithoutPostsInput.prototype, "updatedAt", void 0);
UserUncheckedCreateWithoutPostsInput = __decorate([
    (0, graphql_5.InputType)()
], UserUncheckedCreateWithoutPostsInput);
exports.UserUncheckedCreateWithoutPostsInput = UserUncheckedCreateWithoutPostsInput;
let UserUncheckedCreateInput = class UserUncheckedCreateInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserUncheckedCreateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    Validator.IsEmail()
], UserUncheckedCreateInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    Validator.MinLength(2),
    Validator.MaxLength(20),
    Validator.IsAlpha(),
    Validator.IsNotEmpty()
], UserUncheckedCreateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    Validator.MinLength(6),
    Validator.MaxLength(15),
    Validator.IsAlphanumeric()
], UserUncheckedCreateInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], UserUncheckedCreateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], UserUncheckedCreateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => PostUncheckedCreateNestedManyWithoutAuthorInput, { nullable: true })
], UserUncheckedCreateInput.prototype, "posts", void 0);
UserUncheckedCreateInput = __decorate([
    (0, graphql_5.InputType)()
], UserUncheckedCreateInput);
exports.UserUncheckedCreateInput = UserUncheckedCreateInput;
let UserUncheckedUpdateManyInput = class UserUncheckedUpdateManyInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateManyInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateManyInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateManyInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateManyInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateManyInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateManyInput.prototype, "updatedAt", void 0);
UserUncheckedUpdateManyInput = __decorate([
    (0, graphql_5.InputType)()
], UserUncheckedUpdateManyInput);
exports.UserUncheckedUpdateManyInput = UserUncheckedUpdateManyInput;
let UserUncheckedUpdateWithoutPostsInput = class UserUncheckedUpdateWithoutPostsInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateWithoutPostsInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateWithoutPostsInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateWithoutPostsInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateWithoutPostsInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateWithoutPostsInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateWithoutPostsInput.prototype, "updatedAt", void 0);
UserUncheckedUpdateWithoutPostsInput = __decorate([
    (0, graphql_5.InputType)()
], UserUncheckedUpdateWithoutPostsInput);
exports.UserUncheckedUpdateWithoutPostsInput = UserUncheckedUpdateWithoutPostsInput;
let UserUncheckedUpdateInput = class UserUncheckedUpdateInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => PostUncheckedUpdateManyWithoutAuthorNestedInput, { nullable: true })
], UserUncheckedUpdateInput.prototype, "posts", void 0);
UserUncheckedUpdateInput = __decorate([
    (0, graphql_5.InputType)()
], UserUncheckedUpdateInput);
exports.UserUncheckedUpdateInput = UserUncheckedUpdateInput;
let UserUpdateManyMutationInput = class UserUpdateManyMutationInput {
};
__decorate([
    (0, graphql_6.HideField)()
], UserUpdateManyMutationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUpdateManyMutationInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUpdateManyMutationInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUpdateManyMutationInput.prototype, "password", void 0);
__decorate([
    (0, graphql_6.HideField)()
], UserUpdateManyMutationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_6.HideField)()
], UserUpdateManyMutationInput.prototype, "updatedAt", void 0);
UserUpdateManyMutationInput = __decorate([
    (0, graphql_5.InputType)()
], UserUpdateManyMutationInput);
exports.UserUpdateManyMutationInput = UserUpdateManyMutationInput;
let UserUpdateOneRequiredWithoutPostsNestedInput = class UserUpdateOneRequiredWithoutPostsNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => UserCreateWithoutPostsInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => UserCreateWithoutPostsInput)
], UserUpdateOneRequiredWithoutPostsNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserCreateOrConnectWithoutPostsInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => UserCreateOrConnectWithoutPostsInput)
], UserUpdateOneRequiredWithoutPostsNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserUpsertWithoutPostsInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => UserUpsertWithoutPostsInput)
], UserUpdateOneRequiredWithoutPostsNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserWhereUniqueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => UserWhereUniqueInput)
], UserUpdateOneRequiredWithoutPostsNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserUpdateToOneWithWhereWithoutPostsInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => UserUpdateToOneWithWhereWithoutPostsInput)
], UserUpdateOneRequiredWithoutPostsNestedInput.prototype, "update", void 0);
UserUpdateOneRequiredWithoutPostsNestedInput = __decorate([
    (0, graphql_5.InputType)()
], UserUpdateOneRequiredWithoutPostsNestedInput);
exports.UserUpdateOneRequiredWithoutPostsNestedInput = UserUpdateOneRequiredWithoutPostsNestedInput;
let UserUpdateToOneWithWhereWithoutPostsInput = class UserUpdateToOneWithWhereWithoutPostsInput {
};
__decorate([
    (0, graphql_1.Field)(() => UserWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => UserWhereInput)
], UserUpdateToOneWithWhereWithoutPostsInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserUpdateWithoutPostsInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => UserUpdateWithoutPostsInput)
], UserUpdateToOneWithWhereWithoutPostsInput.prototype, "data", void 0);
UserUpdateToOneWithWhereWithoutPostsInput = __decorate([
    (0, graphql_5.InputType)()
], UserUpdateToOneWithWhereWithoutPostsInput);
exports.UserUpdateToOneWithWhereWithoutPostsInput = UserUpdateToOneWithWhereWithoutPostsInput;
let UserUpdateWithoutPostsInput = class UserUpdateWithoutPostsInput {
};
__decorate([
    (0, graphql_6.HideField)()
], UserUpdateWithoutPostsInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUpdateWithoutPostsInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUpdateWithoutPostsInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUpdateWithoutPostsInput.prototype, "password", void 0);
__decorate([
    (0, graphql_6.HideField)()
], UserUpdateWithoutPostsInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_6.HideField)()
], UserUpdateWithoutPostsInput.prototype, "updatedAt", void 0);
UserUpdateWithoutPostsInput = __decorate([
    (0, graphql_5.InputType)()
], UserUpdateWithoutPostsInput);
exports.UserUpdateWithoutPostsInput = UserUpdateWithoutPostsInput;
let UserUpdateInput = class UserUpdateInput {
};
__decorate([
    (0, graphql_6.HideField)()
], UserUpdateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUpdateInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUpdateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUpdateInput.prototype, "password", void 0);
__decorate([
    (0, graphql_6.HideField)()
], UserUpdateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_6.HideField)()
], UserUpdateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_6.HideField)()
], UserUpdateInput.prototype, "posts", void 0);
UserUpdateInput = __decorate([
    (0, graphql_5.InputType)()
], UserUpdateInput);
exports.UserUpdateInput = UserUpdateInput;
let UserUpsertWithoutPostsInput = class UserUpsertWithoutPostsInput {
};
__decorate([
    (0, graphql_1.Field)(() => UserUpdateWithoutPostsInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => UserUpdateWithoutPostsInput)
], UserUpsertWithoutPostsInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserCreateWithoutPostsInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => UserCreateWithoutPostsInput)
], UserUpsertWithoutPostsInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => UserWhereInput)
], UserUpsertWithoutPostsInput.prototype, "where", void 0);
UserUpsertWithoutPostsInput = __decorate([
    (0, graphql_5.InputType)()
], UserUpsertWithoutPostsInput);
exports.UserUpsertWithoutPostsInput = UserUpsertWithoutPostsInput;
let UserWhereUniqueInput = class UserWhereUniqueInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserWhereUniqueInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    Validator.IsEmail()
], UserWhereUniqueInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UserWhereInput], { nullable: true })
], UserWhereUniqueInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UserWhereInput], { nullable: true })
], UserWhereUniqueInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UserWhereInput], { nullable: true })
], UserWhereUniqueInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], UserWhereUniqueInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], UserWhereUniqueInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFilter, { nullable: true })
], UserWhereUniqueInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFilter, { nullable: true })
], UserWhereUniqueInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => PostListRelationFilter, { nullable: true })
], UserWhereUniqueInput.prototype, "posts", void 0);
UserWhereUniqueInput = __decorate([
    (0, graphql_5.InputType)()
], UserWhereUniqueInput);
exports.UserWhereUniqueInput = UserWhereUniqueInput;
let UserWhereInput = UserWhereInput_1 = class UserWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [UserWhereInput_1], { nullable: true })
], UserWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UserWhereInput_1], { nullable: true })
], UserWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UserWhereInput_1], { nullable: true })
], UserWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], UserWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], UserWhereInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], UserWhereInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], UserWhereInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFilter, { nullable: true })
], UserWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFilter, { nullable: true })
], UserWhereInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => PostListRelationFilter, { nullable: true })
], UserWhereInput.prototype, "posts", void 0);
UserWhereInput = UserWhereInput_1 = __decorate([
    (0, graphql_5.InputType)()
], UserWhereInput);
exports.UserWhereInput = UserWhereInput;
let User = class User {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false, description: 'The unique ID of the user.' })
], User.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], User.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false, description: 'Nama' })
], User.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], User.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false, description: 'Date and time when this user was created.' })
], User.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], User.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => [Post], { nullable: true })
], User.prototype, "posts", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserCount, { nullable: false })
], User.prototype, "_count", void 0);
User = __decorate([
    (0, graphql_2.ObjectType)()
], User);
exports.User = User;
//# sourceMappingURL=index.js.map