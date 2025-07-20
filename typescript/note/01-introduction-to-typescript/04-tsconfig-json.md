---
title: "04 tsconfig json"
date: 2025-07-13
---

# 04 tsconfig json

Жишээ тохиргоо :

```
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "strict": true,
    "outDir": "./dist",
    "rootDir": "./src",
  },
  "exclude": ["node_modules"],
  "include": ["src"]
}
```

Энэ нь биднийг typescript compiler д ойлгуулахад тустай .
