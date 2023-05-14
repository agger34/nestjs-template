// import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

// @Schema()
// export class Todo {
//   @Prop()
//   title: string;

//   @Prop()
//   description: string;

//   @Prop()
//   status: string;
// }

// export const TodoSchema = SchemaFactory.createForClass(Todo).set(
//   'timestamps',
//   true,
// );

// // another declare TodoSchema

// // export const TodoSchema = new mongoose.Schema(
// //   {
// //     title: String,
// //     description: String,
// //     status: String,
// //   },
// //   {
// //     timestamps: true,
// //   },
// // );

import * as dynamoose from 'dynamoose';

export const TODO_SCHEMA_NAME = 'Todo';
export const TODO_TABLE_NAME = 'todo';

export const TodoSchema = new dynamoose.Schema(
  {
    id: {
      type: String,
      hashKey: true,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);
