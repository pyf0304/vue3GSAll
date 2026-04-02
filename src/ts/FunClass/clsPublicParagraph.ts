/*-- -- -- -- -- -- -- -- -- -- --
类名:clsSchoolYearEN
表名:schoolYear(01120134)
生成代码版本:2020.05.28.1
生成日期:2020/06/02 14:25:35
生成者:
工程名称:问卷调查
工程ID:0112
相关数据库:tzar.tpddns.cn,19433EduHigh_Jsie
PrjDataBaseId:0122
模块中文名:系统参数
模块英文名:SysPara
框架-层名:实体层(EntityLayer)
编程语言:TypeScript
== == == == == == == == == == == == 
*/
/// <summary>
/// 学年(schoolYear)
/// (AutoGCLib.EntityLayer4TypeScript:GeneCode)
/// </summary>

import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clsPublicParagraph extends clsGeneralTab {
  public AttributeName = [
    'TextId',
    'TextValue',
    'NewTextValue',
    'IsTag',
    'IsChange',
    'LocationOne',
    'LocationTwo',
  ];
  //以下是属性变量

  /// <summary>
  /// 构造函数
  /// (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClassConstructor1)
  /// </summary>
  constructor() {
    super();
  }
  private mstrTextId = ''; //顺序Id
  private mstrTextValue = ''; //文本
  private mstrNewTextValue = ''; //新文本
  private mbolIsTag = false; //是否标签
  private mbolIsChange = false; //是否改变
  private mstrLocationOne = ''; //位置1
  private mstrLocationTwo = ''; //位置2

  //顺序Id
  public get TextId() {
    return this.mstrTextId;
  }
  public set TextId(value: string) {
    this.mstrTextId = value;
    this.hmProperty['TextId'] = true;
  }

  //文本
  public get TextValue() {
    return this.mstrTextValue;
  }
  //文本
  public set TextValue(value: string) {
    this.mstrTextValue = value;
    this.hmProperty['TextValue'] = true;
  }

  //新文本
  public get NewTextValue() {
    return this.mstrNewTextValue;
  }
  //新文本
  public set NewTextValue(value: string) {
    this.mstrNewTextValue = value;
    this.hmProperty['NewTextValue'] = true;
  }

  //是否标签
  public get IsTag() {
    return this.mbolIsTag;
  }
  //是否标签
  public set IsTag(value: boolean) {
    this.mbolIsTag = value;
    this.hmProperty['IsTag'] = true;
  }

  //是否改变
  public get IsChange() {
    return this.mbolIsChange;
  }
  //是否改变
  public set IsChange(value: boolean) {
    this.mbolIsChange = value;
    this.hmProperty['IsChange'] = true;
  }

  //位置1
  public get LocationOne() {
    return this.mstrLocationOne;
  }
  //位置1
  public set LocationOne(value: string) {
    this.mstrLocationOne = value;
    this.hmProperty['LocationOne'] = true;
  }
  //位置2
  public get LocationTwo() {
    return this.mstrLocationTwo;
  }
  //位置2
  public set LocationTwo(value: string) {
    this.mstrLocationTwo = value;
    this.hmProperty['LocationTwo'] = true;
  }

  public SetCondFldValue(strFldName: string, strFldValue: any, strComparisonOp: string): void {
    this.SetFldValue(strFldName, strFldValue);

    if (Object.prototype.hasOwnProperty.call(this.dicFldComparisonOp, strFldName) == false) {
      this.dicFldComparisonOp[strFldName] = strComparisonOp;
    } else {
      this.dicFldComparisonOp[strFldName] = strComparisonOp;
    }
    this.sfFldComparisonOp = JSON.stringify(this.dicFldComparisonOp);
  }

  //通过获取的标签内容 分段截取存入对象列表 ，循环输出比对原有数据，赋值新的数据到属性字段；
  //2个参数，一个原始带标签的数据(用来分段截取)，一个比对后带部分标签的数据（用来循环比对截取后的对象列表）返回拼接后字符串；
  public static GetNewStringList(strText: string, strNewText: string): string {
    //1.通过标签数据获取，分段截取的对象列表数据；
    const arrOldLst: Array<clsPublicParagraph> = this.SaveObjListByString(strText);

    //2.过滤标签后，赋值改变的新的对象列表
    const arrNewList: Array<clsPublicParagraph> = this.GetDataList(arrOldLst, strNewText);

    //定义一个接受拼接字符串变量
    let strNewTextContent = '';
    //先循环不带标签的数据；
    for (let i = 0; i < arrNewList.length; i++) {
      //通过获取的新的标签内容;
      const strTabNewContent: string = arrNewList[i].NewTextValue;
      const strTextId = arrNewList[i].TextId;

      const Paragraph = arrOldLst.find((c) => c.TextId == strTextId);
      if (Paragraph != null) {
        Paragraph.NewTextValue = strTabNewContent;
      }
    }

    //把对象数据组合成 新的字符串
    for (let i = 0; i < arrOldLst.length; i++) {
      //如果是标签就取Textvalue；
      if (arrOldLst[i].IsTag == true) {
        strNewTextContent += arrOldLst[i].TextValue;
      } else {
        strNewTextContent += arrOldLst[i].NewTextValue;
      }
    }

    ////测试弹出数据；
    //strIdCurrEduclsstrMsg: string = strNewTextContent;
    //alert(strMsg);
    return strNewTextContent;
  }

  //根据老的标签字符串，格式化后，循环数据存放对象列表；
  public static SaveObjListByString(strText: string): Array<clsPublicParagraph> {
    //用来记录是标签开始，还是结束；
    // const Ismark = false;
    let strTextValue = ''; //用来接收循环的数据组合；
    let NumId = 0;
    //声明一个临时对象列表
    const arrObjLst: Array<clsPublicParagraph> = new Array<clsPublicParagraph>();
    //循环标签字符串，这里循环的是老的标签数据；
    for (let i = 0; i < strText.length; i++) {
      //首先判断标签符号是否是<
      if (strText[i] == '<') {
        //判断临时数据是否为"" ;为空则说明数据已经被处理，是起始数据；不为空，则说明是标签中间内容部分
        if (strTextValue != '') {
          NumId++;
          //不等于空，则说明是标签内容部分，结束，那么需要插入到对象列表；
          const objPublicParagraph: clsPublicParagraph = new clsPublicParagraph();
          objPublicParagraph.TextId = String(NumId);
          objPublicParagraph.TextValue = strTextValue; //把数据存放到对象；
          objPublicParagraph.IsTag = false;

          arrObjLst.push(objPublicParagraph);

          //清空临时变量数据；
          strTextValue = '';

          //将数据插入对象列表后，更改为true，因为是标签
          //   Ismark = true;
          //将字符存放到临时数据 ，进行组合 ：这里组合是因为循环到<标签，但是临时存放数据已经结束；但是未存放到对象列表；
          //所以存放之后，还需要重新存放 < 标签，作为下一个对象的开始部分；
          strTextValue += strText[i];
        } else {
          //等于空，说明是开始，
          //   Ismark = true;
          //将字符存放到临时数据 ，进行组合
          strTextValue += strText[i];
        }
      } else if (strText[i] == '>') {
        //如果是结束标签；那么ismark改为false；把临时数据存入对象，清空临时数据存放
        strTextValue += strText[i];
        NumId++;
        const objPublicParagraph: clsPublicParagraph = new clsPublicParagraph();
        objPublicParagraph.TextId = String(NumId);
        objPublicParagraph.TextValue = strTextValue; //把数据存放到对象；
        objPublicParagraph.IsTag = true;

        arrObjLst.push(objPublicParagraph);

        // Ismark = false;
        strTextValue = '';
      } else {
        //不是<>标签，那么字符继续组合存放
        strTextValue += strText[i];
      }
    }

    ////调用数据比对转换
    //strIdCurrEduclsstrNewTextValue = '测试一大段数据不同<span style="color:red;">小小</span>的颜色显示';
    //this.GetDataList(arrObjLst, strNewTextValue);

    return arrObjLst;
  }

  //获取存放的对象列表arr，需要比对的新的字符串strNewTextValue；过滤标签数据，循环输出比对
  public static GetDataList(
    arr: Array<clsPublicParagraph>,
    strNewTextValue: string,
  ): Array<clsPublicParagraph> {
    // strNewTextValue = '测试一大段数据不同<span style="color:red;">小小</span>的颜色显示';

    //先过滤掉标签数据不是标签的；
    const arrObjLst_New: Array<clsPublicParagraph> = arr.filter((x) => x.IsTag == false);
    // let objParagraph: clsPublicParagraph;
    console.log(arrObjLst_New);
    //循环得到的标签内容数据
    for (let i = 0; i < arrObjLst_New.length; i++) {
      //通过获取的标签内容 再次循环 和新的数据比对 字符比对
      const strTabContent: string = arrObjLst_New[i].TextValue;
      const strTextId = arrObjLst_New[i].TextId;

      //定义一个字符组合变量;用来存放for循环输出的数据；
      let strNewTextTabContent = '';
      //循环内容
      for (let j = 0; j < strTabContent.length; j++) {
        //循环读取每段的单个字符
        const strSinger = strTabContent[j];

        //用得到的字符去 比对转换后的带标签的字符串；
        for (let k = 0; k < strNewTextValue.length; k++) {
          //如果比对的字符相等；
          if (strSinger == strNewTextValue[k]) {
            //相等，那么就存放到变量
            strNewTextTabContent += strSinger;
            //获取当前字符的位置
            const index = strNewTextValue.indexOf(strNewTextValue[k]);
            //那么截取这个字符之后的数据
            strNewTextValue = strNewTextValue.substring(index + 1, strNewTextValue.length);
            break;
          } else {
            //如果比对不相等；且出现<，说明被更改，出现了标签数据；
            if (strNewTextValue[k] == '<') {
              //那么截取第二个>前面的内容，这样就能得到一个完整的标签数据
              //index = strNewTextValue.indexOf(">", strNewTextValue.indexOf(">") + 1);//先得到第二个字符位置

              //方法逻辑调整、所以只取单个html标签 例如:<>
              const index = strNewTextValue.indexOf('>', strNewTextValue.indexOf('>')); //先得到第一个字符位置

              //截取从开始到第二个字符之前的数据，因为截取的是>之前的数据，所以自动加上>;
              const c = `${strNewTextValue.substring(0, index)}>`;

              //要拼接到 循环strNewTextValue[k] 后面位置 待定----------；
              strNewTextTabContent += c;

              //操作完成后，截取第二个>之后的字符 +1代表不包含>
              //strNewTextValue = strNewTextValue.substring(index + 1, strNewTextValue.length);//6
              //这里下标不+1，因为for循环执行第二次会读取下一个字符；+1会出现位置不一致；
              strNewTextValue = strNewTextValue.substring(index, strNewTextValue.length); //6
              //因为是标签数据，所以不用break；继续比对
              //break;
            } else {
              //如果不等于标签符<,且又不等于，说明原来数据被替换 或删除了；  待定---------------
              //被删除了，所以这里临时变量不做修改；
              break;
            }
          }
        }
      }
      //如果老的对象循环完，但是新的数据还有的情况 需要继续判断
      if (i + 1 == arrObjLst_New.length) {
        //如果新数据还存在的情况下，需要拼接到临时对象、直接拼接；
        if (strNewTextValue.length > 0) {
          strNewTextTabContent += strNewTextValue;
        }
      }

      //当跳出当前循环体 说明一段内容比对完毕，这里个时候 需要把组合的新内容 存放到循环的对象列表字段中
      //改变list中某个元素值
      const Paragraph = arrObjLst_New.find((c) => c.TextId == strTextId);
      if (Paragraph != null) {
        Paragraph.NewTextValue = strNewTextTabContent;
      }
    }

    ////组合后的数据
    //this.GetNewDataList(arrObjLst_New, arr);

    return arrObjLst_New;
  }
}
