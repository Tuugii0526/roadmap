#!/usr/bin/env node
import path from "path";
import { read } from "../lib/read.mjs";
import { add } from "../lib/add.mjs";
const dirname = import.meta.dirname;
const storePath = path.join(dirname, "store.json");
const args = process.argv;
switch (args[2]) {
  case "-ag": {
    await add(storePath, "blogs");
    break;
  }
  case "-ak": {
    await add(storePath, "books");
    break;
  }
  case "-r": {
    await read(storePath, "books");
    break;
  }

  // case ''
  default: {
    console.log(`readme:
      -ag   adding blog
      -ak   adding book
      -r blogs read blogs
      -r books `);
    break;
  }
}
