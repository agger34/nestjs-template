
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface CreateTodoDto {
    title?: Nullable<string>;
    description?: Nullable<string>;
}

export interface IQuery {
    todos(): Nullable<Nullable<Todo>[]> | Promise<Nullable<Nullable<Todo>[]>>;
    todo(id: string): Nullable<Todo> | Promise<Nullable<Todo>>;
}

export interface Todo {
    id?: Nullable<string>;
    title?: Nullable<string>;
    description?: Nullable<string>;
    status?: Nullable<string>;
    createdAt?: Nullable<string>;
    updatedAt?: Nullable<string>;
}

export interface IMutation {
    createTodo(createTodoDto?: Nullable<CreateTodoDto>): Nullable<Todo> | Promise<Nullable<Todo>>;
}

type Nullable<T> = T | null;
