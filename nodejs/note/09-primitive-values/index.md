---
title: primitive values
date: 2025-06-11T06:50:10.296Z
---

All types except Object define immutable values represented directly at the lowest level of the language . We refer to values of these types as primitive values .

All primitive types ,except `null`, can be tested by the `typeof` operator. `typeof null` returns "object" , so one has to use `===null` to test for null.

All primitive types, except `null` and `undefined`, have their corresponding object wrapper types, which provide useful methods for working with the primitive values . For example , the `Number` object provides methods like `toExponential`. When a property is accessed on a primitive value , Javascript automatically wraps the value into the corrsponding wrapper object and accesses the property on the object instead. However , accessing a property on `null` or `undefined` throws a `TypeError` exception , which necessitates the introduction of the `optional chaining `operator.
`precision` нь зөв илэрхийлэгдэх хүрээг илэрхийлнэ .
single precision нь 32 битээр , double precision нь 64 битээр илэрхийлэгддэг . Ихэнх хэл дээр энэ нь double төрлөөр илэрхийлэгддэг . `Number` нь 64 бит .

```
Positive values greater than Number.MAX_VALUE are converted to Infinity.
Positive values smaller than Number.MIN_VALUE are converted to 0.
Negative values smaller than -Number.MAX_VALUE are converted to -Infinity.
Negative values greater than -Number.MIN_VALUE are converted to -0.
```

-(2^53 -1) ээс 2^53-1 хооронд Number type integer алдаагүй зөв хадгалах чадвартай . Үүнээс цааш ойролцоо утгаар илэрхийлэгдэнэ .Гэхдээ яагаад ?
53 битэнд л тухайн тоог илэрхийлэх чадвартай . Үүнээс их болоод ирвэл least significant нь алга болон илэрхийлэгдэнэ .  
Жишээ нь 2^53 нь битээр 100.. гэх мэтчилэн 1ийн 53 ширхэг 0 байгаа . Тэгвэл энэ нь 53 битэнд хадгалахдахын тулд хамгийн ард талын 0 бит хасагдана .
2^53+1 нь 100..1 . 1 -1, 0 - 52 , 1- 1 ширхэг ордог . Тэгвэл хамгийн ард талын 1 хасагдана. Эндээс харахад `2^53 ===2^53+1` хоорондоо тэнцүү болно .

`Үүнийг хэрхэн шийдсэн вэ ?`

1. Хэрвээ багтаамжаас ихэсвэл автоматоор хадгалах багтаамжийг нэмэх (Python)
2. Өөр төрлийн төрөл ашиглах (Javascript -Bigint)
3. Өөр өөр төрлийн integer хадгалах төрлийг сонгох (Go , C++ ,C - 32int , 62int)
4. Энэ нь 2 тийн тооллоор илэрхийлж байгаа учир ийм алдаа гарж байгаа ажээ . Харин үүний оронд аравтын тоолллыг ашиглах ажээ .

```
0.1+0.2===0.3
```

Бодоод байсан хэрвээ ийм тохиолдол гарвал яах вэ ?

`Тэгвэл банкны систем яадаг вэ ?`
Банкны систем хэзээ ч binary floating ашигладаггүй хэмээлээ .

1. Хамгийн жижиг нэгжээр хадгалах . $1.20 ийг 120 болгон хадгална .
2. Decimal төрөл

`Өөр ямар dboule  төрлүүд байдаг вэ ?`

1. half precision
2. single precision
3. double precsion
   `NaN` `N`ot a `N`umber

bitwise operator оор үйлдэл хийхийн тулд javascript юуны түрүүнд 64 floating тоог 32 битийн integer болгодог ажээ .
Үйлдэл хийсний дараа үүнийг 64 бит floating тоо болгодог ажээ .
Бид bitwise operator ийг хэрэглэгчийн хандах эрхийг тодорхойлоход ашиглаж болох ажээ . Яг л unix систем дээр гардаг шиг .
1- 001 (execute)
2- 010 (write)
4- 100 (read)

3- 011 (execute + write)
гэх мэтчилэн хэрэглэгчид хандах эрхийн тоо л зөвхөн хадгална .
Дараа нь хэрвээ хэрэглэгч гүйцэтгэх эрхтэй гэдгийг шалгахдаа `bitwise and operator` ашиглаж болох ажээ .

```
USER=4
if(1 & USER){
    console.log('user can execute')
}
```

Гэхдээ `mdn` ээс санал болгож байгаагаар үүний оронд та `обьект` эсвэл `array` ашиглаж болно .

Мөн бид хэрэглэгч 365 өдрийн аль өдрүүдэд нэвтэрсэн вэ гэдгийг 32 битийн 12 ширхэг тоонд хадгалж болох ажээ .Зөвхөн хадгалах зай чухал үед л энэ аргыг ашиглах ажээ .

```
class YearlyStatusTracker {
  constructor() {
    // We need 12 integers to hold 365 bits (12 * 32 = 384)
    this.statusData = new Array(12).fill(0);
  }

  // Day is 1-365
  setStatus(day, isLoggedIn) {
    const dayIndex = day - 1; // Convert to 0-based index
    const arrayIndex = Math.floor(dayIndex / 32);
    const bitPosition = dayIndex % 32;

    if (isLoggedIn) {
      // Set the bit to 1 using bitwise OR
      this.statusData[arrayIndex] |= (1 << bitPosition);
    } else {
      // Set the bit to 0 using bitwise AND with a NOT mask
      this.statusData[arrayIndex] &= ~(1 << bitPosition);
    }
  }

  // Day is 1-365
  getStatus(day) {
    const dayIndex = day - 1;
    const arrayIndex = Math.floor(dayIndex / 32);
    const bitPosition = dayIndex % 32;

    // Check if the bit is set using bitwise AND
    return (this.statusData[arrayIndex] & (1 << bitPosition)) !== 0;
  }
}

const tracker = new YearlyStatusTracker();
// User logs in on day 3 and day 365
tracker.setStatus(3, true);
tracker.setStatus(365, true);

// Check status
console.log(`Login status for day 3: ${tracker.getStatus(3)}`);   // true
console.log(`Login status for day 4: ${tracker.getStatus(4)}`);   // false
console.log(`Login status for day 365: ${tracker.getStatus(365)}`); // true

// Now, let's see the storage size
const storageString_Optimized = JSON.stringify(tracker.statusData);
console.log(`Optimized data to be stored: ${storageString_Optimized}`);
console.log(`Size of optimized approach: ${storageString_Optimized.length} characters.`);
```

## Bigint type

2тийн тооллын 64 битээр тоо хадгалах үед mantissa ийн 53 бит дүүрэх үед чухал биш битийг устгаж эхэлдэг . Үүний жишээ доор харагдаж байна . Тийм учраас Number.MAX_SAFE_INTEGER дээр 1 ийг нэмсэн ч , 2 ийг нэмсэн ч тэнцүү байна .

```
// BigInt
const x = BigInt(Number.MAX_SAFE_INTEGER); // 9007199254740991n
x + 1n === x + 2n; // false because 9007199254740992n and 9007199254740993n are unequal

// Number
Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2; // true because both are 9007199254740992

```

`>>>` хэмээх operator bigint дээр ажиллаж болдоггүй ажээ .Үүнийг insigned shift operotar гэдэг ажээ . Тодорхой битийг зөөхөд эхний хэсгийн битүүдийг 0 битээр орлодог . Харин `>>` нь тэмдэгийн битийг хэвээр нь үлдээдэг .

`===` - stric equality or `==` - loose equality Чанга тэнцүү тооны утга болон төрлийг хооронд нь тэнцүүлдэг .Харин сул тэнцүү утгуудыг хооронд нь тэнцүүлдэг .

## string type

Сайн уу ? Интернет дээрх зүйлс зөвхөн 0 болон 1 ээр илэрхийлэгддэг . code unit болон unicode нь хоорондоо тусдаа ойлголт ажээ . unicode нь том жагсаалт ажээ . unicode ийг хийхэд code unit ийг ашигладаг . Зарим character ууд 2 unit code ашигладаг .
👍 энэхүү character ийг илэрхийлэхэд 2 unit code ордог . javascript ийн string type 16 битийн unicode ийг ашигладаг . Тэгэхлээр 2^16 ширхэг character ууд илэрхийлж чадна . Үүнээс илүү character уудыг "surrogate pair " хэмээх техник ашиглан хийсэн . Энэ нь биднийг хязгаараас даван илүү character илэрхийлэх боломж олгож байгаа . Энэхүү техникийг ашиглан thumb ийг илэрхийлсэн ажээ .
String ийн length property нь тухайн string д хэдэн unit code орсонг илэрхийлнэ . Хэрвээ та

```
console.log("👍") //2 хэвлэгдэнэ .
```

## beware of "string-typing " your code

Таслалаар тусгаарлан дата хадгалах нь тусгүй .

## Symbol type

Обьектын key г илэрхийлэхэд symbol ийг ашигладаг . Энэ нь key давхцахаас сэргийлдэг .

## Objects

### properties

Data property болон accessor property хэмээх хоёр төрлийнх байдаг.  
Object class ийн defineProperty хэмээх method ийг ашиглан property шинээр үүсгэх боломжтой . Data property үүсгэхдээ enumerable , configurable хэмээх тохиргоог хийх боломжтой . Map ийг Object ийн оронд ашиглаарай .

### Array and typed array

### Object

### Map ,Set , WeakMap, WeakSet

### Memory leak in javascript
