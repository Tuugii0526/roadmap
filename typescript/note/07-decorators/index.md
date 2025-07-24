---
title: "index"
date: 2025-07-14
---

# index

1. Одоо функцад нэмэлт ажиллагаа нэмэхэд `decorator` ашигладаг . Үүнд хэвлэх , сайжруулах гэх мэт . Олон төрлийн decorator байдаг ажээ . Мөн нэг чухал зүйл нь энэхүү техник нь туршилтад байгаа ажээ .

```
function log(
  target: Object,
  propertyKey: string | symbol,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(`Calling ${propertyKey} with arguments: ${args}`);
    return originalMethod.apply(this, args);
  };

  return descriptor;
}

class Calculator {
  @log
  add(a: number, b: number): number {
    return a + b;
  }
}

const calculator = new Calculator();
calculator.add(1, 2);
// Output: Calling add with arguments: 1,2
// Output: 3
```
