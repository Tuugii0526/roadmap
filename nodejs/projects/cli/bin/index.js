#!/usr/bin/env node
import path from "path";
import { read } from "../lib/read.mjs";
import { add } from "../lib/add.mjs";
import { checkProgress } from "../lib/utils.mjs";
const dirname = import.meta.dirname;
const storePath = path.join(dirname, "store.json");
const args = process.argv.slice(2);
switch (args[0]) {
  case "-ag": {
    await add(storePath, "blogs");
    break;
  }
  case "-ak": {
    await add(storePath, "books");
    break;
  }
  case "-rk": {
    if (args[1]) {
      await read(storePath, "books", checkProgress(args[2]));
      break;
    } else {
      await read(storePath, "books");
      break;
    }
  }
  case "-rg": {
    if (args[1]) {
      await read(storePath, "blogs", checkProgress(args[2]));
      break;
    } else {
      await read(storePath, "blogs");
      break;
    }
  }
  case "-uk": {
    if (isNaN(args[1])) {
      console.log("provide id");
      break;
    }
    if (args[2] == "-process" && ["-t", "-p", "-d"].includes(args[3])) {
    } else {
      console.log("try again");
      break;
    }
  }
  default: {
    console.log(`readme:
      -ag   :adding blog
      -ak   :adding book
      -rk [-t,-p,-d] :read books
      -rg [-t,-p,-d] :read blogs 
      -uk [id] -process [-t,-p,-d] :update book process
      -ug [id] -process [-t,-p,-d] :update blog process 
      -uk [id] -priority [1,2,3] :update book priority
      -ug [id] -priotiy [1,2,3] :update blog priority`);
    break;
  }
}
checkProgress(args[3]);
