---
title: Javascript data types and data structures
date: "2025-06-02T09:18:34.670Z"
---

## Dynamic and weak typing

Javascript нь динамик буюу хувьсамтгай хэл. Жишээ нь

```
let foo;
foo=2
foo='3'
```

foo хувьсагч анх number төрлийнх байж байгаад дараа нь string төрөл болж байна .
Javascript нь сул төрөлжсөн буюу typed хэл. Өөр өөр төрлийн хувьсагчууд дээр үйлдэл хийж байхад алдаа заах бус далдаар(implicit) төрөл хувиргадаг .

```
const foo=42
const result=foo+"1"
console.log(result) //"421"
```
