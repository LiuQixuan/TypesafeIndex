# TypesafeIndex/在typescript使用类型安全的索引

[TOC]

## Introduce/简介

用于将string类型转换为目标对象的键类型,从而在使用vscode编写typescript程序时遇到的string无法作为目标对象的索引的报错.

Used to convert the String type to the key type of object, so that solve vscode problems of TypeScript index type, like that "string" cannot be used to index type "targetObj".


## Feature/特性:

1. 主要用于typescript的类型检查支持,将string类型索引键类型为枚举型的对象
2. 用于检查键值是否在目标对象中,如果不在返回指定索引值
3. 可设置索引是否是大小写敏感,默认大小写不敏感.

## Usage/用法

/**
 * getTypesafeIndexHandle return function named getTypesafeIndex
 * @type T target object's type
 * @type K key of target
 * @param isCaseSensitive case sensitive for index name
 * @returns function(targetObject,safeIndexForTargetObject,fallbackIndex)=>keyof targetObject
 */


** TypeScript **
```Typescript
import getTypesafeIndexHandle from "typesafeindex"
type KeyType = 'type'|'name'|'value'|'id'
type Obj = {
  [key in KeyType]: string
}

let obj:Obj = {
  id:"id",
  type:"type",
  name:"name",
  value:"value",
}
let key:string = 'name'
const getTypesafeIndex = getTypesafeIndexHandle<typeof obj>().bind(null,obj) // if need case sensitive code like that`getTypesafeIndexHandle<typeof obj>(true).bind(null,obj)`
console.log(obj[getTypesafeIndex(key)]) //Ok Typesafe.
console.log(obj[getTypesafeIndex('uuid','id')]) //OK uuid not in obj's property,but fallback value is enable return fallback value 'id',default fallback value is frist enumable property of target object.
console.log(obj[getTypesafeIndex('Name')]) //Ok defalt case is not sensitive.
```

** JavaScript **
```Javascript
//ES6 Module
import getTypesafeIndexHandle from "typesafeindex"
//CMD
const getTypesafeIndexHandle = reqriue("typesafeindex")


let obj:Obj = {
  type:"type",
  name:"name",
  value:"value",
  id:"id",
}
let key:string = 'name'
const getTypesafeIndex = getTypesafeIndexHandle().bind(null,obj)
console.log(obj[getTypesafeIndex(key)])
```

## Test/测试

基本输出测试
```shell
npm run test
```

## Notice/注意

仅用于对TypeScript开启索引类型检查的情况,如果不使用TypeScript 或 关闭了索引检查,那么该库仅用于检查键值是否在目标对象中,如果不在返回指定索引值.参数用于设置是否对索引大小写敏感.

## Advance/优势
支持泛型,可以使用更少的参数实现类型支持.
提供对键值大小写敏感的选项,可以忽略键的大小写问题,无顾略的使用索引.
## Version/版本日志

-  ✅v0.0.1 TypesafeIndex.
