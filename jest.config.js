/**
 * ------------------------------------
 * File: d:\My Documents\Documents\GitHub\TypesafeIndex\jest.config.js
 * Project: d:\My Documents\Documents\GitHub\TypesafeIndex
 * Created Date: 2021-08-31  17:25:19
 * Author: LiuQixuan(liuqixuan@hotmail.com)
 * -----
 * Last Modified:  2021-08-31  17:34:32
 * Modified By: LiuQixuan
 * -----
 * Copyright 2020 - 2021 AIUSoft by LiuQixuan
 * ------------------------------------
 */

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  // testMatch: [ // glob 格式
  //   "**/__tests__/**/*.[jt]s?(x)",
  //   "**/?(*.)+(spec|test).[jt]s?(x)"
  // ],
  verbose: true,
  testMatch: ["**/test/**/*.[jt]s?(x)"],
  // 正则表达式格式，与 testMatch 互斥，不能同时声明
  // testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$',
};