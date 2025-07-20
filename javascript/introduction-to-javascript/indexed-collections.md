---
title: "indexed collections"
date: 2025-07-06
---

# indexed collections

1. Array.of
2. As array in javascript is an object , you can get values using property accessors . For example :

```
const arr=[1,2]
arr["length"]
```

3. const arr=[]
   arr[3.4]="3.4"
4. length special

```
const cats = [];
cats[30] = ["Dusty"];
console.log(cats.length); // 31
```

```
const cats = ["Dusty", "Misty", "Twiggy"];
console.log(cats.length); // 3

cats.length = 2;
console.log(cats); // [ 'Dusty', 'Misty' ] - Twiggy has been removed

cats.length = 0;
console.log(cats); // []; the cats array is empty

cats.length = 3;
console.log(cats); // [ <3 empty items> ]

```

5. `making use of comma operator`

```
If you know that none of the elements in your array evaluate to false in a boolean context—if your array consists only of DOM nodes, for example—you can use a more efficient idiom:

js
Copy to Clipboard
const divs = document.getElementsByTagName("div");
for (let i = 0, div; (div = divs[i]); i++) {
  /* Process div in some way */
}
```

6. manually undefined vs not in iterating over array
7. Object.groupBy , Map.groupBy
8. Array like objects

```
Working with array-like objects
Some JavaScript objects, such as the NodeList returned by document.getElementsByTagName() or the arguments object made available within the body of a function, look and behave like arrays on the surface but do not share all of their methods. The arguments object provides a length attribute but does not implement array methods like forEach().

Array methods cannot be called directly on array-like objects.

js
Copy to Clipboard
function printArguments() {
  arguments.forEach((item) => {
    console.log(item);
  }); // TypeError: arguments.forEach is not a function
}
But you can call them indirectly using Function.prototype.call().

js
Copy to Clipboard
function printArguments() {
  Array.prototype.forEach.call(arguments, (item) => {
    console.log(item);
  });
}
Array prototype methods can be used on strings as well, since they provide sequential access to their characters in a similar way to arrays:

js
Copy to Clipboard
Array.prototype.forEach.call("a string", (chr) => {
  console.log(chr);
});
```

9. performance
   1. unshift() or shift() is less good than push() or pop()
   2. new Array(3) vs new Array(1,2)
   3. methods that create new arrays have memory implication

### Бид юу сурсан вэ ?

1.  Array.of ашиглан 1 урттай элемент үүсгэх
2.  arr["length"]
3.  length special way , for creation or deletion
4.  undefined -iterator
5.  Object.groupBy , Map.groupBy
6.  unshift , shift
7.  memory space
