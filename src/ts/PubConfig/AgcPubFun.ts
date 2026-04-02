import { MakeRandom } from '@/ts/PubFun/clsString';
let intAdditionalSeed = 1;
/// <summary>
/// 获取Android脚本中的ID，随机生成
/// </summary>
/// <returns>获取随机生成的Android脚本中的ID</returns>
export function AgcPubFun_getASPNETID(): string {
  const str1: string = MakeRandom(3, intAdditionalSeed++);
  const str2: string = MakeRandom(2, intAdditionalSeed++);
  const str3: string = MakeRandom(3, intAdditionalSeed++);

  const strResult = `${str1}-${str2}-${str3}`;
  return strResult;
}
