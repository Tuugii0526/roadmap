import { table } from "console";
import fs from "fs/promises";
/**
 *
 * @param {string} storePath
 * @param {'books' |'blogs'} category
 * @returns
 */
export async function read(storePath, category) {
  const storedString = await fs.readFile(storePath, "utf8");
  let data;
  if (storedString == "") {
    data = {};
  } else {
    data = JSON.parse(storedString);
  }

  const willReadThings = data[category];
  if (willReadThings) {
    console.log(`
${category}`);
    table(willReadThings, [
      "id",
      "name",
      "url",
      "priority",
      "process",
      "updatedAt",
      "createdAt",
    ]);
  } else {
    console.log("yet full...");
  }
}
