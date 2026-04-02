/*
 * 功能：定义一个字典类
 * 版本：2019-07-24-01
 * 作者：潘以锋
 * */

export class Dictionary {
  constructor() {}
  //strIdCurrEduclsuserInfo: { [index: string]: string } = {}
  public elements: { [key: string]: string } = {};
  //Length of Dictionary
  length(): number {
    let intCount = 0;
    for (const k in this.elements) {
      console.log(k);
      intCount++;
    }
    return intCount;
  }
  //Check whether the Dictionary is empty
  isEmpty(): boolean {
    return this.length() < 1;
  }
  //remove all elements from the Dictionary
  removeAll(): void {
    this.elements = {}; //new  Array();
  }
  //get specify element of the dictionary
  element(index: number) {
    let rlt = '';
    if (index >= 0 && index < this.length()) {
      rlt = this.elements[index];
    }
    return rlt;
  }
  //check whether the Dictionary contains this key
  Exists(key: any): boolean {
    let rlt = false;
    try {
      //for (let k in map) {
      //    egret.log(map[k]);
      //}
      //for (i = 0, iLen = this.length(); i < iLen; i++) {
      //    if (this.elements[i].key == key) {
      //        rlt = true;
      //        break;
      //    }
      //}
      for (const k in this.elements) {
        if (k == key) {
          rlt = true;
          break;
        }
      }
    } catch (ex) {}
    return rlt;
  }
  //check whether the Dictionary contains this value
  containsValue(value: string) {
    let rlt = false;
    try {
      //for (let k in map) {
      //    egret.log(map[k]);
      //}
      for (const k in this.elements) {
        if (this.elements[k] == value) {
          rlt = true;
          break;
        }
      }
    } catch (ex) {}
    return rlt;
  }
  //remove this key from the Dictionary
  remove(key: any) {
    let rlt = false;
    try {
      //for (let k in map) {
      //    egret.log(map[k]);
      //}
      for (const k in this.elements) {
        if (k === key) {
          //this.elements.splice(k, 1);
          delete this.elements[k];
          rlt = true;
          break;
        }
      }
    } catch (ex) {}
    return rlt;
  }
  //add this key/value to the Dictionary,if key is exists,replace the value
  add(key: any, value: any) {
    this.remove(key);
    this.elements[key] = value;
  }
  //add this key/value to the Dictionary,if key is exists,append value
  set(key: any, value: any) {
    const arr: string = this.getItem(key);
    if (arr != null) {
      if (typeof arr == 'object') {
        //arr.unshift.apply(arr, value);
        value = arr;
      } else {
        const array: Array<string> = [];
        array.push(arr);
        // array.unshift.apply(array, value);
        array.unshift(value);
        value = array;
      }
      this.remove(key);
    }
    this.elements[key] = value;
  }
  //get value of the key
  getItem(key: any) {
    let rlt = '';
    try {
      //for (let k in map) {
      //    egret.log(map[k]);
      //}
      for (const k in this.elements) {
        if (k == key) {
          rlt = this.elements[k];
          break;
        }
      }
    } catch (ex) {}
    return rlt;
  }
  maxValue() {
    let rlt = '';

    let intMax = 0;
    for (const k in this.elements) {
      rlt = this.elements[k];
      if (Number(rlt) > intMax) intMax = Number(rlt);
    }
    return intMax;
  }
  //get all keys of the dictionary
  keys() {
    const arr: Array<string> = [];
    //for (let k in map) {
    //    egret.log(map[k]);
    //}
    for (const k in this.elements) {
      arr.push(k);
    }
    return arr;
  }
  //get all values of the dictionary
  values() {
    const arr: Array<string> = [];
    //for (let k in map) {
    //    egret.log(map[k]);
    //}
    for (const k in this.elements) {
      arr.push(this.elements[k]);
    }
    return arr;
  }
  //get all values of the dictionary
  getParamText(): string {
    let strParamText = '';
    //for (let k in map) {
    //    egret.log(map[k]);
    //}
    for (const k in this.elements) {
      if (strParamText === '') {
        strParamText = `${k}=${this.elements[k]}`;
      } else {
        strParamText += `&${k}=${this.elements[k]}`;
      }
    }
    return strParamText;
  }
}
