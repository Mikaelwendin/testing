/**
 * @jest-environment jsdom
 */

import { IAddResponse } from "../ts/models/IAddResult";
import { Todo } from "../ts/models/Todo";
import * as functions from "./../ts/main";

test("Should fire clearTodos", () => {
  // Arrange
  let spy = jest.spyOn(functions, "clearTodos").mockReturnValue();
  document.body.innerHTML = `<button type="button" id="clearTodos">Rensa lista</button>`;
  functions.handleClearTodos();
  // Act
  document.getElementById("clearTodos")?.click();
  // Assert
  expect(spy).toHaveBeenCalled();
});

test("Should create html", () => {
  // Arrange
  let todos: Todo[] = [{ text: "testing", done: true }];
  document.body.innerHTML = ` <ul id="todos" class="todo"></ul> `;
  // Act
  functions.createHtml(todos);
  // Assert
  expect(document.querySelector("li")?.innerHTML).toBe("testing");
});

test("should fire createHtml", () => {
  // Arrange
  let todoText: string = "input";
  let todos: Todo[] = [];
  let spy = jest.spyOn(functions, "createHtml").mockReturnValue();
  // Act
  functions.createNewTodo(todoText, todos);
  // Assert
  expect(spy).toHaveBeenCalled();
});
/* test("should fire displayError", () => {
  // Arrange
  let todoText: string = "i";
  let todos: Todo[] = [];
  let spy = jest.spyOn(functions, "displayError").mockReturnValue();
  // Act
  functions.createNewTodo(todoText, todos);
  // Assert
  expect(spy).toHaveBeenCalled();
}); */

//Konflikt mellan två test här. båda funkar individuellt.

test("Should display error message", () => {
  // Arrange
  document.body.innerHTML = `<div id="error" class="error"></div>`;
  let error: string = "lol";
  let show: boolean = false;
  let errorContainer = document.getElementById("error") as HTMLDivElement;
  // Act
  functions.displayError(error, show);
  // Assert
  expect(errorContainer.innerHTML).toBe("lol");
});
test("Should add to classlist", () => {
  // Arrange
  document.body.innerHTML = `<div id="error" class="error"></div>`;
  let error: string = "lol";
  let show: boolean = true;
  let errorContainer = document.getElementById("error") as HTMLDivElement;
  // Act
  functions.displayError(error, show);
  // Assert
  expect(errorContainer.className).toBe("error show");
});
