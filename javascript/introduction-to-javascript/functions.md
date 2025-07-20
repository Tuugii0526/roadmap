---
title: "functions"
date: 2025-07-04
---

# functions

1. Функцад обьект эсвэл array дамжуулаад үүнд үйлдэл хийвэл энэ нь гадна талын обьект болон array д өөрчлөлт оруулна .
2. function expressions

```
const hi = function (){
    return 'hi how are doing ?'
}

const good= function goodFunction(){
    return "good"
}
```

3. function is an object , which have call and apply methods .
4. recursion is a function stack .
5. Immediately invoked function expression has benefits .

```
const userProfile = (function (){
    loginCount=0;
    const login=()=>{
        loginCount++;
        console.log(`User logins ; Total logins:${loginCount}`)
    }
    return {login}
})()
userProfile.login();
userProfile.login();
console.log(userProfile.loginCount) //undefined
userProfile.loginCount=999
userProfile.login() // User logins ; Total logins:3
```

Үүнээс харвал loginCount хувьсагчийг нууц болгож байна . Бид энэхүү ижил үр дүнд `factory function` , `class` , `es6 module ` хэмээх аргуудаар хүрж болох ажээ .

6. closure ,multiple nested functions ,name conflicts can be found in closure -- when it happens , the outer variable will take precedence .
7. array-like arguments object

```function myConcat(numbers){
   let sum=0;
   for(let i=0;i<numbers.length;i++){
    sum+=numbers[i]
   }
   return sum
}
```

Үндсэн аргумент дээр нэмж хэдэн төрлийн аргумент авахаа мэдэхгүй үүнийг ашиглах ажээ.

8. default parameters

```
function sum(a,b=3){
    return a+b
}
```

9. rest parameters

```
function sum(...num){
    sum=0
    for(let i=0;i<num.length;i++)
    {
        sum+=num[i]
    }
    return sum
}

```

10. arrow functions
    Arraw function did appear due to two reasons. THe first is **no further function keyword to define a function** , the second is **no separate this** .

No separate this example:

```
function Person() {
  this.age = 0;

  setInterval(() => {
    this.age++; // `this` properly refers to the person object
  }, 1000);
}

const p = new Person();

```

### Бид юу сурсан вэ ?

1. array-like argument object
2. ...rest_parameters for calculating `нэмэх үйлдэл хийхэд амар юм байна `, магадгүй түүхээ хадгалж болох юм байна .
3.
4. arrow function creation reasons (no function further , no separate this ) : `(timer for which increases 1 second)`
5. closure `Функцаар орж ирсэн name ийг өөрчлөөд байсан`

### Бид юуг ойлгоогүй вэ ?

Яагаад arrow function ийн example дээр тусад this тодорхойлж байгаа вэ ?

### Бид цаашид яах вэ ?

rest parameters болон closure тооцоогоо амар хийе .

```
const math = (function () {
  const history = [];
  return {
    cal: function (...nums) {
      let sum = 0;
      for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
      }
      history.push({ sum, nums: nums });
      sum = 0;
    },
    report: function () {
      console.log(history);
    },
  };
})();
```
