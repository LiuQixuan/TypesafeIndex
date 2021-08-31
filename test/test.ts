/**
 * ------------------------------------
 * File: d:\My Documents\Documents\GitHub\IndexTypeSafe\test\test.ts
 * Project: d:\My Documents\Documents\GitHub\IndexTypeSafe
 * Created Date: 2021-08-18  1:27:32
 * Author: LiuQixuan(liuqixuan@hotmail.com)
 * -----
 * Last Modified:  2021-08-31  18:01:11
 * Modified By: LiuQixuan
 * -----
 * Copyright 2020 - 2021 AIUSoft by LiuQixuan
 * ------------------------------------
 */

import { getTypesafeIndexHandle, getTypesafeIndexBind } from "../src/index"

type KeyType = 'type'|'name'|'value'|'id'
type Obj = {
  [key in KeyType]: string
}

let obj:Obj = {
  type:"type",
  name:"name",
  value:"value",
  id:"id",
}

let getTypesafeIndex =  getTypesafeIndexHandle<typeof obj>().bind(null,obj)
//or getTypesafeIndex =  getTypesafeIndexHandle<typeof obj>({isCaseSensitive:true}).bind(null,obj)

describe('typesafe index test', () => {
  it('test1', () => {
    console.log(obj["name"])
    console.log(obj[getTypesafeIndex("cd")])
  });
});

getTypesafeIndex = getTypesafeIndexBind(obj)
//or getTypesafeIndex = getTypesafeIndexBind(obj,{isCaseSensitive:true})

describe('typesafe index test with auto bind',() =>{
  it('test2', () => {
    console.log(obj['name'])
    console.log(obj[getTypesafeIndex('name')])
  })
})
