import { TodoRepository } from './todo.repository';
import {
  mocCreateTodoDto,
  mockResponseTodoDto,
  mockTodoId,
  mockUpdateTodoDto,
} from './todo.mock';

// setup
// run test
// assert
describe('TodoRepository', () => {
  let todoModel;
  let todoRepository;

  beforeAll(() => {
    todoModel = {
      create: () => null,
      find: () => null,
      findById: () => null,
      findByIdAndUpdate: () => null,
      findByIdAndDelete: () => null,
    };
    todoRepository = new TodoRepository(todoModel);
  });

  it('create', async () => {
    // setup
    const spyOnCreate = jest.spyOn(todoModel, 'create');

    // run test
    await todoRepository.create(mocCreateTodoDto);

    // assert
    expect(spyOnCreate).toBeCalledTimes(1);
  });

  it('findAll', async () => {
    // setup
    const spyOnFind = jest.spyOn(todoModel, 'find').mockImplementation(() => {
      return {
        exec: () => mockResponseTodoDto,
      };
    });

    // run test
    await todoRepository.findAll();

    // assert
    expect(spyOnFind).toBeCalled();
  });

  it('findById', async () => {
    // setup & mock
    jest.spyOn(todoModel, 'findById').mockImplementation(() => {
      return {
        exec: () => mockResponseTodoDto,
      };
    });

    // assert
    expect(await todoRepository.findById(mockTodoId)).toBe(mockResponseTodoDto);
  });

  it('update', async () => {
    // setup & mock
    jest.spyOn(todoModel, 'findByIdAndUpdate').mockImplementation(() => {
      return {
        exec: () => mockResponseTodoDto,
      };
    });

    // assert
    expect(await todoRepository.update(mockUpdateTodoDto)).toBe(
      mockResponseTodoDto,
    );
  });
  it('delete', async () => {
    // setup & mock
    jest.spyOn(todoModel, 'findByIdAndDelete').mockImplementation(() => {
      return {
        exec: () => {
          return 111;
        },
      };
    });

    // assert
    expect(await todoRepository.delete(mockTodoId)).toBe(mockResponseTodoDto);
  });
});
