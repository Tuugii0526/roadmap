---
title: "expresions and operators"
date: 2025-07-05
---

# expresions and operators

1. and assignment `x&&= func()` : `x && x=func()` (works when x is truthy)
2. or assignement `x ||= func()` : `x || x=func()` ( works when x is falsy)
3. nullish assignment `x ??= func()` : `x ?? x = func()` (works when x is null or undefined)
4. logical operators are sometimes called `value selection operators`.
5. comma operator is used in for loop .
6. void operator returns undefined . It can be used with IFE .

```
void function (){ console.log('hi')}()
```

7. relational operators
   1. `in` opertator
   ```
   const user={name:"tuugii"}
    console.log("name" in user) // true
   ```
   2. `instanceof`
      catching exception
8. basic expression
   1. `this`: This is commonly used with functions . When you bind a function with an object , the `this` will be an object .

## Бид юу сурсан вэ ?

1. as logical operators valuate by truthy or falsy , it is called value selection operator .
2. and assignem , or asssignment , nullish assignment
3. void operator
4. in operator
5. instance for catching error
