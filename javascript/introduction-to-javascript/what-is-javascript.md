---
title: "what is javascript"
date: 2025-07-03
---

# what is javascript

**`just-in-time compiled `** - Дээд хэлээс хоёртын код руу ажиллах явцад хөрвүүлэгдэхийг хэлнэ . 1990 оны үед java хэл гарж ирснээр алдартай болсон .  
Бараа хадгалах just-it-time хэмээх арга байдаг . Зөвхөн бараа хэрэгтэй үед л захиалдаг . Үүнтэй адил зөвхөн ажилуулахдаа л эх кодыг хоёртын код руу хөрвүүлдэг ажээ \_
**`first-class-functions`** - Функцийг хувьсагчид хадгалах боломжтой хэлүүдийг хэлдэг . Үүнд `javascript ` , `python` , `ruby ` гэх хэл ордог ажээ .
**`compilation`**- Тодорхой программын хэл дээр бичсэн кодыг машины ойлгох хэл рүү хөрвүүлэх явцыг хэлнэ . Энэхүү ойлгогдох кодыг `binary code` эсвэл `machine code` хэмээдэг ажээ.

Javascript нь browser ийн хэл ч , nodejs , apache couchdb (no-sql database), adobe acrobat ашигладаг ажээ .

Javascript нь proto-typed , dynamic болон garbage-collected хэл .

Javascript нь хэрэглэгч болон сервер тал дээр ажиллах боломжтой .
Javascript нь java тай төстэй . Тийм ч учраас Livescript ээс Javascript болсон .

ECMAscript нь стандартжуулсан javascript .

## declarations

Javascript нь case-sensitive хэл юм . Тэгэхлээр та хувьсагч зарлахад name эсвэл Name хэмээх зарлахад өөр гэсэн үг .

unicode хэмээх бүх дэлхийн тэмдэгтийг агуулж чадах encoding javascript ашигладаг . Тэгэхлээр хувьсагчаа юу гэж ч нэрлэж болно .
Зааврыг statement хэмээн нэрлэдэг . Үүнийг төгсгөх болгондоо таслал тавьдаг .

## Variable scope

Global scope , module scope , local scope байдаг .

## Hoisting

var statement ээр зарлахаас хувьсагч ашиглавал зөвхөн зарласан хэмээх л hoisting хийгддэг э Харин function аар тодорхойлсон [eyword нь бүтэн `hoisting` хийгддэг .]

## Global variables

global variable is accessed by window object .

## constant

Constants are declared with const keyword . It prevents from redeclaration.

## data types

THere are 8 data types , 7 are primitives . The one not primitive is Object .

## dynamically typed

You can assign same variable different type data.

```
let num=8;
num = "hi"
```

## number +

when using `+` operator with number and a string , the nubmer will be converted to a string .
With all other operators except `+`, when the operands are number and string , numeric values will not be converted to string.

## ƒrom string

parseInt() , parseFloat() and Number() can be used to convert string to number .
You can also use `+unary operator. `

## literal

### array literal

literal represent values in javascript .
You can define an array like this :

```
const arr1=[1,2]
const arr2=[1,,1]
const arr3=[34,14,/*empty*/,/*empty*/,]
```

WHen array is created with emtpy element , it is called empty slot .
It will say 'undefined' when accessed by [], but will not be included in Array.map().

### boolean literal

Boolean has two literal values : 'true' and 'false'.

### tagged template

As we understand , it is a syntactic sugar for console.logg(.)

### Escaping characters

"\" will be used for escaping .

**Бид юуг сурсан вэ ?**

1.  8 data types
2.  number + string = string
3.  +unary
4.  tag template

**Юу сонирхолтой байсан вэ ?**

1. Special string for copyright.

**Юуг сурах вэ ?**

1. tag template
