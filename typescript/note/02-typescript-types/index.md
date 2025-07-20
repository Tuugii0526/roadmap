---
title: "index"
date: 2025-07-13
---

# index

Бидний хэрэглэж байсан учрыг нь ойлгоогүй type ууд:

1. Interface

```
interface Car{
    name:string,
    model:string
}

```

2. Tuple

```
type numberString= [number,string]
```

3. Enum
   Суурь ахын хэлж байснаар constants үүсгэхэд үүнийг ашигладаг ажээ .

4. `any` болон `unknown` хоёрын ялгаа
   any дотор юу ч хадгалж бөгөөд уншихдаа ч шууд уншина . Харин unknown дотор та юу ч хадгалж болох ч үүнийг ашиглахын тулд заавал баталгаажуулах ёстой.
5. `never`
   exhaustiveness checking буюу switch case дээр үүнийг ашигладаг хэмээлээ .
6. `as const`
   Бид үүнийг яг таг readonly type тодорхойлоход ашигладаг .Гэхдээ зарим нэг сул тал байгаа нь deeply mutable , not strict on function return .
7. `non null`
   Бид `!` ийг энэ нь `null` биш шүү гэдгийг илтгэхэд ашигладаг .

```

let name: string | null = null;

// we use the non-null assertion operator to tell the compiler that name will never be null
let nameLength = name!.length;
```

8.`satisfies`
Энэ төрлийнх шүү хэмээн дөхүүлхэд ашигладаг .
[satisfies](./static/image.png)
