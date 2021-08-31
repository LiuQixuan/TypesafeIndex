/**
 * ------------------------------------
 * File: d:\My Documents\Documents\GitHub\IndexTypeSafe\scr\index.ts
 * Project: d:\My Documents\Documents\GitHub\IndexTypeSafe
 * Created Date: 2021-08-17  20:21:58
 * Author: LiuQixuan(liuqixuan@hotmail.com)
 * -----
 * Last Modified:  2021-08-31  17:52:55
 * Modified By: LiuQixuan
 * -----
 * Copyright 2020 - 2021 AIUSoft by LiuQixuan
 * ------------------------------------
 */

/**
 * getIndexTypesafeHandle return function named getIndexTypesafe
 * @type T target object's type
 * @type K key of target
 * @param isCaseSensitive case sensitive for index name
 * @returns function(targetObject,safeIndexForTargetObject,fallbackIndex)=>keyof targetObject
 */
export function getTypesafeIndexHandle<T, K = keyof T>({ isCaseSensitive = false }: { isCaseSensitive?: boolean } = {}){
  return (object: T, index: string, fallbackIndex = Object.keys(object)[0]) => {
    let safeIndex = isCaseSensitive ? index : index.toLowerCase()
    if (!Object.keys(object).includes(safeIndex)) {
      safeIndex = fallbackIndex
    }
    return safeIndex as unknown as K
  }
}

/**
 * getIndexTypesafeHandle return function named getIndexTypesafe
 * @type T target object's type
 * @type K key of target
 * @param object targetObject
 * @param isCaseSensitive case sensitive for index name
 * @returns function(safeIndexForTargetObject,fallbackIndex)=>keyof targetObject
 */
export function getTypesafeIndexBind<T, K = keyof T>(object: T, {isCaseSensitive = false}: {isCaseSensitive?: boolean} = {}) {
  return (index: string, fallbackIndex = Object.keys(object)[0]) => {
    let safeIndex = isCaseSensitive ? index : index.toLowerCase()
    if (!Object.keys(object).includes(safeIndex)) {
      safeIndex = fallbackIndex
    }
    return safeIndex as unknown as K
  }
}