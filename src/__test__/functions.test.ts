import { addTodo, changeTodo, removeAllTodos } from "../ts/functions";
import { Todo } from "../ts/models/Todo";

test("should add to list", () => {
  // Arrange
  let todoText: string = "lol";
  let todos: Todo[] = [];
  // Act
  addTodo(todoText, todos);
  // Assert
  expect(todos.length).toBe(+1);
});
test("Should return success:false", () => {
  // Arrange
  let todoText: string = "lo";
  let todos: Todo[] = [];
  // Act
  let results = addTodo(todoText, todos);
  // Assert
  expect(results.success).toBe(false);
});
test("Should return success:true", () => {
  // Arrange
  let todoText: string = "three";
  let todos: Todo[] = [];
  // Act
  let results = addTodo(todoText, todos);
  // Assert
  expect(results.success).toBe(true);
});
test("Should switch bool to true", () => {
  // Arrange
  let todo: Todo = new Todo("lol", false);
  // Act
  changeTodo(todo)
  // Assert
  expect(todo.done).toBe(todo.done = true);
});



test("Should add to list", () => {
  // Arrange
  let todoText: string = "lolol";
  let todos: Todo[] = [];
  // Act
  addTodo(todoText, todos);
  // Assert
  expect(todos.length).toBe(+ 1);
});
test("Should not add to list", () => {
  // Arrange
  let todoText: string = "lo";
  let todos: Todo[] = [];
  // Act
  addTodo(todoText, todos);
  // Assert
  expect(todos.length).toBe(0);
});

test("Should switch bool to false", () => {
  // Arrange
  let todo: Todo = new Todo("lol", true);
  // Act
  changeTodo(todo)
  // Assert
  expect(todo.done).toBe(todo.done = false);
});
test("Should erase list", () => {
  // Arrange
  let todos: Todo[] = [{text:"lol", done:false}, {text:"trollol", done:true} , {text:"hohoho", done:false}];
  // Act
  removeAllTodos(todos)
  // Assert
  expect(todos.length).toBe(0);
});



