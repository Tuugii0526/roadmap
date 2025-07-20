const red = "\x1b[31m";
const green = "\x1b[32m";
const yellow = "\x1b[33m";
const blue = "\x1b[34m";
const magenta = "\x1b[35m";
const cyan = "\x1b[36m";
const white = "\x1b[37m";
const reset = "\x1b[0m";
export const CONSTRAINTS = {
  "array.includes": (array, input) => array.includes(input),
  "is.empty.string": (input) => input == "",
};
export const BLOG_DATA = {
  name: {
    isValid: (input) => !CONSTRAINTS["is.empty.string"](input),
    promptString: blue + "name: " + reset,
  },
  url: {
    isValid: (input) => !CONSTRAINTS["is.empty.string"](input),
    promptString: "url : ",
  },
  priority: {
    isValid: (input) => CONSTRAINTS["array.includes"](["1", "2", "3"], input),
    promptString: green + "priority(1,2,3):" + reset,
  },
  process: {
    isValid: (input) =>
      CONSTRAINTS["array.includes"](["todo", "progress", "done"], input),
    promptString: "process(done,todo,progress):",
  },
};
