import { table } from "console";
import fs from "fs/promises";
import { checkProgress } from "./utils.mjs";
/**
 *
 * @param {string} storePath
 * @param {'books' |'blogs'} category
 * @returns
 */
export async function read(storePath, category, progress = "") {
  console.log("PROGRESS:", progress);

  const storedString = await fs.readFile(storePath, "utf8");
  let data;
  if (storedString == "") {
    data = {};
  } else {
    data = JSON.parse(storedString);
  }

  const willReadThings = data[category] || [];
  willReadThings.sort((a, b) => Number(a.priority) - Number(b.priority));
  let progressCategorized;
  if (progress) {
    progressCategorized = willReadThings.filter(
      (read) => read.process == progress
    );
  } else {
    progressCategorized = willReadThings;
  }
  if (willReadThings) {
    console.log(`
${category}`);
    table(progressCategorized, [
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
