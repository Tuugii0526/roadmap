import fs from "fs/promises";
import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { BLOG_DATA } from "./utils.js";
/**
 *
 * @param {(newData)=>void} callback
 * @returns
 */
async function readInput(callback) {
  return new Promise(async (resolve) => {
    const rl = readline.createInterface({ input, output });
    rl.on("SIGINT", () => {
      rl.close();
      resolve({
        success: false,
      });
    });
    const blog_data = {};
    for (const [key, value] of Object.entries(BLOG_DATA)) {
      let input = "";
      while (!value.isValid(input)) {
        input = await rl.question(value.promptString);
      }
      blog_data[key] = input;
    }
    blog_data["updatedAt"] = new Date();
    blog_data["createdAt"] = new Date();
    callback(blog_data);
    rl.close();
    resolve({
      success: true,
    });
  });
}
/**
 *
 * @param {string} storePath
 * @param {'blogs' | 'books'} category
 * @returns
 */
export async function add(storePath, category) {
  const storedString = await fs.readFile(storePath, "utf8");
  let data;
  if (storedString == "") {
    data = {};
  } else {
    data = JSON.parse(storedString);
  }
  const previousArray = data[category] ?? [];
  const result = await readInput((newBlog) => {
    newBlog["id"] = previousArray.length + 1;
    previousArray.push(newBlog);
  });
  if (!result.success) {
    return {
      success: false,
    };
  }
  data[category] = previousArray;
  await fs.writeFile(storePath, JSON.stringify(data));
  return { success: true };
}
