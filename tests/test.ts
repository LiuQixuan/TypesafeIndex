/**
 * ------------------------------------
 * File: d:\My Documents\Documents\GitHub\IndexTypeSafe\test\test.ts
 * Project: d:\My Documents\Documents\GitHub\IndexTypeSafe
 * Created Date: 2021-08-18  1:27:32
 * Author: LiuQixuan(liuqixuan@hotmail.com)
 * -----
 * Last Modified:  2021-08-18  12:58:33
 * Modified By: LiuQixuan
 * -----
 * Copyright 2020 - 2021 AIUSoft by LiuQixuan
 * ------------------------------------
 */

import type,{ Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest'
};
import getTypesafeIndexHandle from "../src/index"
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

describe('typesafe index tesxt', () => {
  it('test1', () => {
    console.log(obj["name"])
    console.log(obj[getTypesafeIndex("cd")])
  });
});


