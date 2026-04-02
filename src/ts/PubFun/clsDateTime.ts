import { DateTime } from './DateTime';

import { Format, IsNullOrEmpty } from './clsString';
//String.prototype['IsNullOrEmpty'] = function (strSS) {
//    if (strSS == null) return true;
//    if (strSS.length == 0) return true;
//    //使用字符截取指定字符
//    return false;
//};

export class clsDateTime extends DateTime {
  constructor(strDateTimeStr: string) {
    super();
    //
    // TODO: 在此处添加构造函数逻辑
    //
    if (IsNullOrEmpty(strDateTimeStr) == true) {
      throw new Error('参数日期不能为空！');
    }
    let strYear = '';
    let strMonth = '';
    let strDay = '';
    let strHour = '';
    let strMinute = '';
    let strSecond = '';
    if (strDateTimeStr.length >= 4) {
      strYear = strDateTimeStr.substring(0, 4);
      strDateTimeStr = strDateTimeStr.substring(4);
      if (strDateTimeStr.substring(0, 1) == '-') {
        strDateTimeStr = strDateTimeStr.substring(1);
      } else if (strDateTimeStr.substring(0, 1) == '/') {
        strDateTimeStr = strDateTimeStr.substring(1);
      }
    }
    if (strDateTimeStr.length >= 2) {
      strMonth = strDateTimeStr.substring(0, 2);
      strDateTimeStr = strDateTimeStr.substring(2);
      if (strDateTimeStr.substring(0, 1) == '-') {
        strDateTimeStr = strDateTimeStr.substring(1);
      } else if (strDateTimeStr.substring(0, 1) == '/') {
        strDateTimeStr = strDateTimeStr.substring(1);
      }
    }
    if (strDateTimeStr.length >= 2) {
      strDay = strDateTimeStr.substring(0, 2);
      strDateTimeStr = strDateTimeStr.substring(2);

      if (strDateTimeStr.length > 0 && strDateTimeStr.substring(0, 1) == ' ') {
        strDateTimeStr = strDateTimeStr.substring(1);
      }
    }
    if (strDateTimeStr.length >= 2) {
      strHour = strDateTimeStr.substring(0, 2);
      strDateTimeStr = strDateTimeStr.substring(2);
      if (strDateTimeStr.length > 0 && strDateTimeStr.substring(0, 1) == ':') {
        strDateTimeStr = strDateTimeStr.substring(1);
      } else if (strDateTimeStr.length > 0 && strDateTimeStr.substring(0, 1) == ' ') {
        strDateTimeStr = strDateTimeStr.substring(1);
      }
    }
    if (strDateTimeStr.length >= 2) {
      strMinute = strDateTimeStr.substring(0, 2);
      strDateTimeStr = strDateTimeStr.substring(2);
      if (strDateTimeStr.length > 0 && strDateTimeStr.substring(0, 1) == ':') {
        strDateTimeStr = strDateTimeStr.substring(1);
      } else if (strDateTimeStr.length > 0 && strDateTimeStr.substring(0, 1) == ' ') {
        strDateTimeStr = strDateTimeStr.substring(1);
      }
    }
    if (strDateTimeStr.length >= 2) {
      strSecond = strDateTimeStr.substring(0, 2);
      strDateTimeStr = strDateTimeStr.substring(2);
    }

    this.year = Number(strYear);
    this.month = Number(strMonth);
    if (IsNullOrEmpty(strDay) == true) {
      this.Day = 0;
    } else {
      this.Day = Number(strDay);
    }
    if (IsNullOrEmpty(strHour) == true) {
      this.Hour = 0;
    } else {
      this.Hour = Number(strHour);
    }
    if (IsNullOrEmpty(strMinute) == true) {
      this.Minute = 0;
    } else {
      this.Minute = Number(strMinute);
    }
    if (IsNullOrEmpty(strSecond) == true) {
      this.Second = 0;
    } else {
      this.Second = Number(strSecond);
    }
  }
  public clsDateTime(objDate: Date) {
    this.year = objDate.getFullYear();
    this.month = objDate.getMonth() + 1;
    this.Day = objDate.getDate();
    this.week = objDate.getDay();
    this.Hour = objDate.getHours();
    this.Minute = objDate.getMinutes();
    this.Second = objDate.getSeconds();
  }

  public GetDateTime(): Date {
    const objDate: Date = new Date(
      this.year,
      this.month - 1,
      this.Day,
      this.Hour,
      this.Minute,
      this.Second,
    );
    return objDate;
  }

  /// <summary>
  /// 获取当前月的第1天的日期对象
  /// </summary>
  /// <param name="objDate">提供的日期对象</param>
  /// <returns></returns>
  public static GetFirstDayOfMonth(objDate: Date): Date {
    const objDateTime1st: Date = new Date(objDate.getFullYear(), objDate.getMonth(), 1);
    return objDateTime1st;
  }
  /// <summary>
  /// 获取当前月的第1行第1列的日期对象
  /// </summary>
  /// <param name="objDate">提供的日期对象</param>
  /// <returns>当前月的第1行第1列的日期对象</returns>
  //public static GetFirstRowColDayOfMonth2(objDate: Date): Date {
  //    const objDateTime1st: Date = new Date(objDate.getFullYear(), objDate.getMonth(), 1);
  //    intFirst1st: number = objDateTime1st.DayOfWeek;
  //    const objTargetDate: Date = objDateTime1st.Subtract(new TimeSpan(intFirst1st, 0, 0, 0));
  //    return objTargetDate;
  //}
  /// <summary>
  /// 获取当前月的第1行第1列的日期对象
  /// </summary>
  /// <param name="strDateStr8">提供的日期串</param>
  /// <returns>当前月的第1行第1列的日期对象</returns>
  //public static GetFirstRowColDayOfMonth(strDateStr8: string): Date {
  //    const objDate: Date = this.GetDateTimeByDateStr8(strDateStr8);
  //    const objDateTime1st: Date = new Date(objDate.getFullYear(), objDate.getMonth(), 1);
  //    intFirst1st: number = objDateTime1st.DayOfWeek;
  //    const objTargetDate: Date = objDateTime1st.Subtract(new TimeSpan(intFirst1st, 0, 0, 0));
  //    return objTargetDate;
  //}
  /// <summary>
  /// 获取当前周的第1天的日期对象
  /// </summary>
  /// <param name="objDate">提供的日期对象</param>
  /// <returns>当前周的第1天的日期对象</returns>
  //public static GetFirstDayOfWeek2(objDate: Date): Date {
  //    intFirst1st: number = objDate.DayOfWeek;
  //    const objTargetDate: Date = objDate.Subtract(new TimeSpan(intFirst1st, 0, 0, 0));
  //    return objTargetDate;
  //}

  /// <summary>
  /// 获取当前周的第1天的日期对象
  /// </summary>
  /// <param name="strDateStr8">提供的日期串</param>
  /// <returns>当前周的第1天的日期对象</returns>
  //public static GetFirstDayOfWeek(strDateStr8: string): Date {
  //    const objDate: Date = this.GetDateTimeByDateStr8(strDateStr8);
  //    intFirst1st: number = objDate.DayOfWeek;
  //    const objTargetDate: Date = objDate.Subtract(new TimeSpan(intFirst1st, 0, 0, 0));
  //    return objTargetDate;
  //}

  /// <summary>
  /// 获取所给日期的在年中的周序号
  /// </summary>
  /// <param name="strDateStr8">提供的日期字符串</param>
  /// <returns>在当前年的周序号</returns>
  //public static GetWeekNoByDateObj(strDateStr8: string): number {
  //    const objDate: Date = this.GetDateTimeByDateStr8(strDateStr8);
  //    return this.GetWeekNoByDateObj(objDate);
  //}

  /// <summary>
  /// 获取当天日期的在年中的周序号
  /// </summary>
  /// <returns>当天在当前年的周序号</returns>
  //public static GetWeekNoByCurrDate(): number {
  //    const objDate: Date = new Date();
  //    return this.GetWeekNoByDateObj(objDate);
  //}

  /// <summary>
  /// 获取当前年
  /// </summary>
  /// <returns>当前年</returns>
  public static GetCurrYear(): number {
    const objDate: Date = new Date();
    return objDate.getFullYear();
  }
  /// <summary>
  /// 获取所给日期的在年中的周序号
  /// </summary>
  /// <param name="objDate">提供的日期对象</param>
  /// <returns>在当前年的周序号</returns>
  //public static GetWeekNoByDateObj2(objDate: Date): number {
  //    //计算步骤：
  //    //1、获取当年1月1日的周序号
  //    //2、获取所给日期与1月1日的天数
  //    //3、计算周序号

  //    //1、获取当年1月1日的周序号
  //    const objDateTime1st: Date = new Date(objDate.getFullYear(), 1, 1);
  //    intWeekNo1st: number = objDateTime1st.DayOfWeek;

  //    //2、获取所给日期与1月1日的天数
  //    intDayOfYear: number = objDate.DayOfYear;
  //    //3、计算周序号
  //    intWeekNo: number = (intDayOfYear + intWeekNo1st + 7 - 1) / 7;
  //    return intWeekNo;
  //}

  /// <summary>
  /// 获取所给周序号的周第1天的日期对象
  /// </summary>
  /// <param name="intYear">提供的年</param>
  /// <param name="intWeekNo">提供的周序号</param>
  /// <returns>所给周序号的周第1天日期对象</returns>
  //public static GetFirstDateByWeekNo(intYear: number, number intWeekNo): Date {
  //    //计算步骤：
  //    //1、获取当年1月1日的周序号
  //    //2、获取所给日期与1月1日的天数
  //    //3、计算所给周序号第1天的日期

  //    //1、获取当年1月1日的周序号
  //    const objDateTime1st: Date = new Date(intYear, 1, 1);
  //    intWeekNo1st: number = objDateTime1st.DayOfWeek;

  //    //2、获取所给日期与1月1日的天数

  //    intDays: number = (intWeekNo - 1) * 7 - intWeekNo1st;
  //    //3、计算所给周序号第1天的日期
  //    const objDT1: Date = objDateTime1st.AddDays(intDays);
  //    return objDT1;
  //}

  /// <summary>
  /// 根据日期串获取日期对象
  /// </summary>
  /// <param name="strDateStr8">8位日期串</param>
  /// <returns></returns>
  public static GetDateTimeByDateStr8(strDateStr8: string): Date {
    let strYear = '',
      strMonth = '',
      strDay = '';
    if (strDateStr8.length >= 4) {
      strYear = strDateStr8.substring(0, 4);
      strDateStr8 = strDateStr8.substring(4);
    }
    if (strDateStr8.length >= 2) {
      strMonth = strDateStr8.substring(0, 2);
      strDateStr8 = strDateStr8.substring(2);
    }
    if (strDateStr8.length >= 2) {
      strDay = strDateStr8.substring(0, 2);
      strDateStr8 = strDateStr8.substring(2);
    }

    const intYear = Number(strYear);
    const intMonth = Number(strMonth);
    const intDay = Number(strDay);

    const objDate: Date = new Date(intYear, intMonth, intDay);
    return objDate;
  }

  /// <summary>
  /// 根据14位日期时间串，获取Date
  /// </summary>
  /// <param name="strDateStr14">14位日期时间串</param>
  /// <returns></returns>
  public static GetDateTimeByDateStr19(strDateStr14: string): Date {
    try {
      const objDate: clsDateTime = new clsDateTime(strDateStr14);
      const objDT: Date = objDate.GetDateTime();
      return objDT;
    } catch (e) {
      throw e;
    }
  }
  public static GetDateTimeByDateStr14(strDateStr14: string): Date {
    const objDate: clsDateTime = new clsDateTime(strDateStr14);
    const objDT: Date = objDate.GetDateTime();
    return objDT;
  }
  public static GetDateTimeByDateStr10(strDateStr10: string): Date {
    const objDate: clsDateTime = new clsDateTime(strDateStr10);
    const objDT: Date = objDate.GetDateTime();
    return objDT;
  }

  /// <summary>
  /// 功能：获取当前日期的字符串,共8位--更多。
  /// 日期格式：
  ///    日期的字符串的格式有三种：
  ///		0、YYYYMMDD。	例如20050120
  ///		1、YYYY-MM-DD	例如2005-01-20
  ///		2、YYYY/MM/DD	例如2005/01/20
  ///		3、YYYY年MM月DD日	例如2005年01月20日
  ///		4、YYYY年MM月DD日W	例如2005年01月20日星期三
  /// </summary>
  /// <param name="intFormat">日期格式，共有3种，传入参数0,1，2
  ///							参数不同，函数返回值就不同，
  ///							参见上面的日期格式
  ///	</param>
  /// <returns>返回当前日期的字符串</returns>
  public static getTodayStr(intFormat: number): string {
    let strToday: string;
    let strMonth, strDay: string;
    const intYear = new Date().getFullYear();
    const intMonth = new Date().getMonth() + 1;
    const intDay = new Date().getDate();
    const strYear = intYear.toString().trim();
    if (intMonth > 9) strMonth = intMonth.toString().trim();
    else strMonth = `0${intMonth.toString().trim()}`;
    if (intDay > 9) strDay = intDay.toString().trim();
    else strDay = `0${intDay.toString().trim()}`;
    strToday = strYear + strMonth + strDay;
    //strWeek = this.TransWeekFromEngToChs(new Date().DayOfWeek.toString());

    switch (intFormat) {
      case 0:
        strToday = strYear + strMonth + strDay;
        break;
      case 1:
        strToday = `${strYear}-${strMonth}-${strDay}`;
        break;
      case 2:
        strToday = `${strYear}/${strMonth}/${strDay}`;
        break;
      case 3:
        strToday = `${strYear}年${strMonth}月${strDay}日`;
        break;
      //case 4:
      //    strToday = strYear + "年" + strMonth + "月" + strDay + "日 " + strWeek;
      //    break;
    }
    return strToday;
  }
  private static TransWeekFromEngToChs(strEndWeek: string): string {
    if (strEndWeek == 'Friday') return '星期五';
    else if (strEndWeek == 'Monday') return '星期一';
    else if (strEndWeek == 'Saturday') return '星期六';
    else if (strEndWeek == 'Sunday') return '星期日';
    else if (strEndWeek == 'Thursday') return '星期四';
    else if (strEndWeek == 'Tuesday') return '星期二';
    else if (strEndWeek == 'Wednesday') return '星期三';
    else return '星期数据非法!';
  }
  /// <summary>
  /// 功能：获取当前日期时间的字符串，共14位
  /// 日期格式：
  ///    日期的字符串的格式有三种：
  ///		0、YYYYMMDDHHMMSS。	例如20050120213004
  ///		1、YYYY-MM-DDHHMMSS	例如2005-01-20213004
  ///		2、YYYY/MM/DDHHMMSS	例如2005/01/20213004
  /// </summary>
  /// <param name="intFormat">日期格式，共有3种，传入参数0,1，2
  ///							参数不同，函数返回值就不同，
  ///							参见上面的日期格式
  ///	</param>
  /// <returns>返回当前日期的字符串</returns>
  public static getTodayStr2(intFormat: number): string {
    let strToday: string;
    let strMonth, strDay: string;
    let strHour, strMinute, strSecond: string;

    const intYear = new Date().getFullYear();
    const intMonth = new Date().getMonth() + 1;
    const intDay = new Date().getDate();
    const intHour = new Date().getHours();
    const intMinute = new Date().getMinutes();
    const intSecond = new Date().getSeconds();

    const strYear = intYear.toString().trim();
    if (intMonth > 9) strMonth = intMonth.toString().trim();
    else strMonth = `0${intMonth.toString().trim()}`;
    if (intDay > 9) strDay = intDay.toString().trim();
    else strDay = `0${intDay.toString().trim()}`;

    if (intHour > 9) {
      strHour = intHour.toString().trim();
    } else {
      strHour = `0${intHour.toString().trim()}`;
    }
    if (intMinute > 9) {
      strMinute = intMinute.toString().trim();
    } else {
      strMinute = `0${intMinute.toString().trim()}`;
    }
    if (intSecond > 9) {
      strSecond = intSecond.toString().trim();
    } else {
      strSecond = `0${intSecond.toString().trim()}`;
    }

    strToday = strYear + strMonth + strDay + strHour + strMinute + strSecond;
    switch (intFormat) {
      case 0:
        strToday = strYear + strMonth + strDay + strHour + strMinute + strSecond;
        break;
      case 1:
        strToday = `${strYear}-${strMonth}-${strDay}${strHour}${strMinute}${strSecond}`;
        break;
      case 2:
        strToday = `${strYear}/${strMonth}/${strDay}${strHour}${strMinute}${strSecond}`;
        break;
    }
    return strToday;
  }

  /// <summary>
  /// 功能：获取当前日期时间的字符串
  /// 日期格式：
  ///    日期的字符串的格式有三种：
  ///		1、YYYYMMDDHHMMSS。	例如20050120113005
  ///		2、YYYY-MM-DD	例如2005-01-20 11:30:05
  ///		3、YYYY/MM/DD	例如2005/01/20 11:30:05
  /// </summary>
  /// <param name="intFormat">日期格式，共有3种，传入参数0,1，2
  ///							参数不同，函数返回值就不同，
  ///							参见上面的日期格式
  ///	</param>
  /// <returns>返回当前日期的字符串</returns>
  public static getTodayDateTimeStr(intFormat: number): string {
    let strToday: string;
    let strMonth, strDay: string;
    let strHour, strMinute, strSecond: string;

    const intYear = new Date().getFullYear();
    const intMonth = new Date().getMonth() + 1;
    const intDay = new Date().getDate();
    const intHour = new Date().getHours();
    const intMinute = new Date().getMinutes();
    const intSecond = new Date().getSeconds();

    const strYear = intYear.toString().trim();
    if (intMonth > 9) strMonth = intMonth.toString().trim();
    else strMonth = `0${intMonth.toString().trim()}`;
    if (intDay > 9) strDay = intDay.toString().trim();
    else strDay = `0${intDay.toString().trim()}`;

    if (intHour > 9) {
      strHour = intHour.toString().trim();
    } else {
      strHour = `0${intHour.toString().trim()}`;
    }
    if (intMinute > 9) {
      strMinute = intMinute.toString().trim();
    } else {
      strMinute = `0${intMinute.toString().trim()}`;
    }
    if (intSecond > 9) {
      strSecond = intSecond.toString().trim();
    } else {
      strSecond = `0${intSecond.toString().trim()}`;
    }

    strToday = strYear + strMonth + strDay + strHour + strMinute + strSecond;
    switch (intFormat) {
      case 0:
        strToday = strYear + strMonth + strDay + strHour + strMinute + strSecond;
        break;
      case 1:
        strToday = `${strYear}-${strMonth}-${strDay} ${strHour}:${strMinute}:${strSecond}`;
        break;
      case 2:
        strToday = `${strYear}/${strMonth}/${strDay} ${strHour}:${strMinute}:${strSecond}`;
        break;
    }
    return strToday;
  }
  /// <summary>
  /// 功能：获取当前月的字符串
  /// 月的格式：
  ///    月的字符串的格式有三种：
  ///		1、YYYYMM。	例如200501
  ///		2、YYYY-MM-DD	例如2005-01
  ///		3、YYYY/MM/DD	例如2005/01
  /// </summary>
  /// <param name="intFormat">月的格式，共有3种，传入参数0,1，2
  ///							参数不同，函数返回值就不同，
  ///							参见上面的月的格式
  ///	</param>
  /// <returns>返回当前月的字符串</returns>
  public static getCurrMonth2(intFormat: number): string {
    let strCurrMonth: string;
    let strMonth: string;

    const intYear = new Date().getFullYear();
    const intMonth = new Date().getMonth() + 1;
    const strYear = intYear.toString().trim();
    if (intMonth > 9) strMonth = intMonth.toString().trim();
    else strMonth = `0${intMonth.toString().trim()}`;
    strCurrMonth = strYear + strMonth;
    switch (intFormat) {
      case 0:
        strCurrMonth = strYear + strMonth;
        break;
      case 1:
        strCurrMonth = `${strYear}-${strMonth}`;
        break;
      case 2:
        strCurrMonth = `${strYear}/${strMonth}`;
        break;
    }
    return strCurrMonth;
  }

  /// <summary>
  /// 功能：获取当前月的数字
  /// </summary>
  /// <returns>返回当前月（整型）</returns>
  public static getCurrMonth(): number {
    //intYear = new  Date().getFullYear();
    const intMonth = new Date().getMonth() + 1;
    return intMonth;
  }
  /// <summary>
  /// 功能：获取当前时间的字符串
  /// 日期格式：
  ///    日期的字符串的格式有三种：
  ///		1、HHMMSS。	例如182505
  ///		2、HH:MM:SS	例如18:25:05
  /// </summary>
  /// <param name="intFormat">日期格式，共有2种，传入参数0,1
  ///							参数不同，函数返回值就不同，
  ///							参见上面的日期格式
  ///	</param>
  /// <returns>返回当前时间的字符串</returns>
  public static getCurrTime(intFormat: number): string {
    let strToday: string;
    let strHour, strMinute, strSecond: string;

    const intHour = new Date().getHours();
    const intMinute = new Date().getMinutes();
    const intSecond = new Date().getSeconds();

    if (intHour > 9) {
      strHour = intHour.toString().trim();
    } else {
      strHour = `0${intHour.toString().trim()}`;
    }
    if (intMinute > 9) {
      strMinute = intMinute.toString().trim();
    } else {
      strMinute = `0${intMinute.toString().trim()}`;
    }
    if (intSecond > 9) {
      strSecond = intSecond.toString().trim();
    } else {
      strSecond = `0${intSecond.toString().trim()}`;
    }

    strToday = strHour + strMinute + strSecond;
    switch (intFormat) {
      case 0:
        strToday = strHour + strMinute + strSecond;
        break;
      case 1:
        strToday = `${strHour}:${strMinute}:${strSecond}`;
        break;
    }
    return strToday;
  }

  /// <summary>
  /// 判断给定字符串是否是日期型数据
  /// </summary>
  /// <param name="strValue">需要判断的字符串</param>
  /// <returns>True/False</returns>
  public static IsDate(strValue: string): boolean {
    let strDate = '';
    if (strValue == '') return true;
    if (strValue.length < 8) {
      return false;
    }
    if (strValue.length == 8) {
      strDate = `${strValue.substring(0, 4)}-${strValue.substring(4, 2)}-${strValue.substring(
        6,
        2,
      )}`;
    } else {
      strDate = strValue;
    }
    try {
      const dt: Date = new Date(strDate);
      console.log(dt);
    } catch (objException) {
      return false;
    }
    return true;
  }

  /// <summary>
  /// 功能：获取所给标准日期的日期字符串
  /// 日期格式：
  ///    日期的字符串的格式有三种：
  ///		1、YYYYMMDD。	例如20050120
  ///		2、YYYY-MM-DD	例如2005-01-20
  ///		3、YYYY/MM/DD	例如2005/01/20
  /// </summary>
  /// <param name="dtTemp">所给标准日期</param>
  /// <param name="intFormat">日期格式,0:8位日期,1:10位横杠日期,2:10位斜杠日期</param>
  /// <returns>返回:指定格式的日期串</returns>
  public static getDateStr_d(dtTemp: Date, intFormat: number): string {
    let strDateStr: string;
    let strMonth, strDay: string;

    const intYear = dtTemp.getFullYear();
    const intMonth = dtTemp.getMonth() + 1;
    const intDay = dtTemp.getDate();
    const strYear = intYear.toString().trim();
    if (intMonth > 9) strMonth = intMonth.toString().trim();
    else strMonth = `0${intMonth.toString().trim()}`;
    if (intDay > 9) strDay = intDay.toString().trim();
    else strDay = `0${intDay.toString().trim()}`;
    strDateStr = strYear + strMonth + strDay;
    switch (intFormat) {
      case 0:
        strDateStr = strYear + strMonth + strDay;
        break;
      case 1:
        strDateStr = `${strYear}-${strMonth}-${strDay}`;
        break;
      case 2:
        strDateStr = `${strYear}/${strMonth}/${strDay}`;
        break;
    }
    return strDateStr;
  }

  /// <summary>
  /// 功能：获取所给日期串的日期字符串
  /// 日期格式：
  ///    日期的字符串的格式有三种：
  ///		1、YYYYMMDD。	例如20050120
  ///		2、YYYY-MM-DD	例如2005-01-20
  ///		3、YYYY/MM/DD	例如2005/01/20
  ///		4、YY-MM-DD	    例如05-01-20
  /// </summary>
  /// <param name="strDateTimeStr">所给的日期串</param>
  /// <param name="intFormat">日期格式,0:8位日期,1:10位横杠日期,2:10位斜杠日期，3:8位横杠日期,</param>
  /// <returns>返回:指定格式的日期串</returns>
  public static getDateStr(strDateTimeStr: string, intFormat: number): string {
    if (IsNullOrEmpty(strDateTimeStr)) return '00-00-00';
    let dtTemp: Date; //= clsDateTime.GetDateTimeByDateStr14(strDateTimeStr);
    if (strDateTimeStr.length == 19) {
      dtTemp = clsDateTime.GetDateTimeByDateStr19(strDateTimeStr);
    } else if (strDateTimeStr.length == 14) {
      dtTemp = clsDateTime.GetDateTimeByDateStr14(strDateTimeStr);
    } else if (strDateTimeStr.length == 10) {
      dtTemp = clsDateTime.GetDateTimeByDateStr10(strDateTimeStr);
    } else if (strDateTimeStr.length == 8) {
      dtTemp = clsDateTime.GetDateTimeByDateStr8(strDateTimeStr);
    } else {
      if (strDateTimeStr.length > 14) {
        dtTemp = clsDateTime.GetDateTimeByDateStr8(strDateTimeStr.substring(0, 14));
      } else if (strDateTimeStr.length > 10) {
        dtTemp = clsDateTime.GetDateTimeByDateStr8(strDateTimeStr.substring(0, 10));
      } else if (strDateTimeStr.length > 8) {
        dtTemp = clsDateTime.GetDateTimeByDateStr8(strDateTimeStr.substring(0, 8));
      } else {
        const strMsg: string = Format('日期串:{0}格式不正确！', strDateTimeStr);
        throw new Error(strMsg);
      }
    }
    let strDateStr: string;
    let strMonth, strDay: string;

    const intYear = dtTemp.getFullYear();
    const intMonth = dtTemp.getMonth() + 1;
    const intDay = dtTemp.getDate();
    const strYear = intYear.toString().trim();
    if (intMonth > 9) strMonth = intMonth.toString().trim();
    else strMonth = `0${intMonth.toString().trim()}`;
    if (intDay > 9) strDay = intDay.toString().trim();
    else strDay = `0${intDay.toString().trim()}`;
    strDateStr = strYear + strMonth + strDay;
    switch (intFormat) {
      case 0:
        strDateStr = strYear + strMonth + strDay;
        break;
      case 1:
        strDateStr = `${strYear}-${strMonth}-${strDay}`;
        break;
      case 2:
        strDateStr = `${strYear}/${strMonth}/${strDay}`;
        break;
      case 3:
        strDateStr = `${strYear.substring(2)}-${strMonth}-${strDay}`;
        break;
    }
    return strDateStr;
  }

  public static ChangeDateToDate8(strDate: string): string {
    const dtTime: Date = new Date(strDate);
    return this.ChangeDateToDate8_d(dtTime);
  }
  /// <summary>
  /// 把所给标准日期转换成8位日期
  /// </summary>
  /// <param name="dtDate">标准日期</param>
  /// <returns>8位日期</returns>
  public static ChangeDateToDate8_d(dtDate: Date): string {
    let strMonth, strDay: string;

    const iYear = dtDate.getFullYear();
    const iMonth = dtDate.getMonth() + 1;
    if (iMonth > 9) strMonth = iMonth.toString().trim();
    else strMonth = `0${iMonth.toString().trim()}`;
    const iDay = dtDate.getDate();
    if (iDay > 9) strDay = iDay.toString().trim();
    else strDay = `0${iDay.toString().trim()}`;
    const strDate = iYear.toString().trim() + strMonth + strDay;
    return strDate;
  }
  public static ChangeDateToDate14(strDate: string): string {
    const dtDate: Date = new Date(strDate);
    return this.ChangeDateToDate14_d(dtDate);
  }
  /// <summary>
  /// 把所给标准日期转换成14位日期时间
  /// </summary>
  /// <param name="dtDate">标准日期</param>
  /// <returns>14位日期时间串</returns>
  public static ChangeDateToDate14_d(dtDate: Date): string {
    let strMonth, strDay: string;

    const iYear = dtDate.getFullYear();
    const iMonth = dtDate.getMonth() + 1;
    if (iMonth > 9) strMonth = iMonth.toString().trim();
    else strMonth = `0${iMonth.toString().trim()}`;
    const iDay = dtDate.getDate();
    if (iDay > 9) strDay = iDay.toString().trim();
    else strDay = `0${iDay.toString().trim()}`;

    const strDateStr = iYear.toString().trim() + strMonth + strDay;

    let strHour, strMinute, strSecond: string;

    const intHour = dtDate.getHours();
    const intMinute = dtDate.getMinutes();
    const intSecond = dtDate.getSeconds();

    if (intHour > 9) {
      strHour = intHour.toString().trim();
    } else {
      strHour = `0${intHour.toString().trim()}`;
    }
    if (intMinute > 9) {
      strMinute = intMinute.toString().trim();
    } else {
      strMinute = `0${intMinute.toString().trim()}`;
    }
    if (intSecond > 9) {
      strSecond = intSecond.toString().trim();
    } else {
      strSecond = `0${intSecond.toString().trim()}`;
    }
    const strTimeStr: string = strHour + strMinute + strSecond;
    return strDateStr + strTimeStr;
  }

  /// <summary>
  /// 把8位日期转换成带斜杠"/"的函数
  /// </summary>
  /// <param name="strDate">所给的8位日期</param>
  /// <returns>返回的10位斜杠日期</returns>
  public static ChangeDateToDate10(strDate: string): string {
    let strTempt: string;
    let strResult = '';
    if (strDate.length == 0) return '';
    if (strDate.length != 8) return '';
    if (IsNullOrEmpty(strDate) == true) return '';

    strTempt = strDate.substring(0, 4);
    strResult += `${strTempt}/`;
    strTempt = strDate.substring(4, 2);
    strResult += `${strTempt}/`;
    strTempt = strDate.substring(6, 2);
    strResult += strTempt;

    return strResult;
  }

  /// <summary>
  /// 把8位日期转换成带斜杠"/","-"的函数
  /// </summary>
  /// <param name="strDate">所给的8位日期</param>
  /// <param name="intFormat">日期格式,0:8位日期,1:10位横杠日期,2:10位斜杠日期</param>
  /// <returns>返回的10位斜杠日期</returns>
  public static ChangeDateToDate10_f(strDate: string, intFormat: number): string {
    let strTempt: string;
    let strResult = '';
    if (strDate.length == 0) return '';
    if (strDate.length != 8) return '';
    if (IsNullOrEmpty(strDate) == true) return '';

    if (intFormat == 1) {
      strTempt = strDate.substring(0, 4);
      strResult += `${strTempt}-`;
      strTempt = strDate.substring(4, 2);
      strResult += `${strTempt}-`;
      strTempt = strDate.substring(6, 2);
      strResult += strTempt;
    } else if (intFormat == 2) {
      strTempt = strDate.substring(0, 4);
      strResult += `${strTempt}/`;
      strTempt = strDate.substring(4, 2);
      strResult += `${strTempt}/`;
      strTempt = strDate.substring(6, 2);
      strResult += strTempt;
    } else {
      strTempt = strDate.substring(0, 4);
      strResult += `${strTempt}/`;
      strTempt = strDate.substring(4, 2);

      strResult += `${strTempt}/`;
      strTempt = strDate.substring(6, 2);
      strResult += strTempt;
    }

    return strResult;
  }
  /// <summary>
  /// 把8位日期转换成带斜杠"年月日"的函数
  /// </summary>
  /// <param name="strDate">8位标准的日期串</param>
  /// <returns>带有年月日的标准日期串</returns>
  public static GetDateStrWithYMD(strDate: string): string {
    let strResult = '';
    if (IsNullOrEmpty(strDate)) {
      return '年   月   日';
    }
    if (strDate.length != 8) {
      return '日期格式不正确!';
    }
    strResult += strDate.substring(0, 4);
    strResult += '年';
    strResult += strDate.substring(4, 2);
    strResult += '月';
    strResult += strDate.substring(6, 2);
    strResult += '日';
    return strResult.toString();
  }
  /// <summary>
  /// 把8位日期转换成带斜杠"年月日"的函数,月日前不带“0”
  /// </summary>
  /// <param name="strDate">8位标准的日期串</param>
  /// <returns>带有年月日的标准日期串</returns>
  public static GetDateStrWithYMD2(strDate: string): string {
    let strResult = '';
    if (IsNullOrEmpty(strDate)) {
      return '年   月   日';
    }
    if (strDate.length != 8) {
      return '日期格式不正确!';
    }
    const intMonth = Number(strDate.substring(4, 2));
    const intDay: Number = Number(strDate.substring(6, 2));
    strResult = `${strDate.substring(0, 4)}年${intMonth}月${intDay}日`;

    return strResult.toString();
  }
  /// <summary>
  /// 把日期转换成带斜杠"年月日"的函数
  /// </summary>
  /// <returns>带有年月日的标准日期串</returns>
  public GetDateStrWithYMD(): string {
    let strResult = '';
    strResult += this.year.toString();
    strResult += '年';
    strResult += this.getMonthStr(this.month);
    strResult += '月';
    strResult += this.getDayStr(this.Day);
    strResult += '日';
    return strResult.toString();
  }
  public getMonthStr(intMonth: number): string {
    if (intMonth >= 10) return intMonth.toString();
    return `0${intMonth.toString()}`;
  }
  public getDayStr(intDay: number): string {
    if (intDay >= 10) return intDay.toString();
    return `0${intDay.toString()}`;
  }

  /// <summary>
  /// 把日期转换成带斜杠"/"的函数
  /// </summary>
  /// <returns>返回的10位斜杠日期</returns>
  public GetDateStr10(): string {
    let strResult = '';
    strResult += this.year.toString();
    strResult += '/';
    strResult += this.getMonthStr(this.month);
    strResult += '/';
    strResult += this.getDayStr(this.Day);
    strResult += '/';
    return strResult.toString();
  }
  /// <summary>
  /// 功能：获取当前日期对象的日期字符串
  /// 日期格式：
  ///    日期的字符串的格式有三种：
  ///		0、YYYYMMDD。	例如20050120
  ///		1、YYYY-MM-DD	例如2005-01-20
  ///		2、YYYY/MM/DD	例如2005/01/20
  ///		3、DD/MM/YYYY	例如01/20/2005
  ///		4、MM/DD/YYYY	例如20/01/2005
  /// </summary>
  /// <param name="intFormat">日期格式,0:8位日期,1:10位横杠日期,2:10位斜杠日期</param>
  /// <returns>返回:指定格式的日期串</returns>
  public getDateStr(intFormat: number): string {
    let strDateStr: string;
    let strMonth, strDay: string;

    const strYear = this.year.toString().trim();
    if (this.month > 9) strMonth = this.month.toString().trim();
    else strMonth = `0${this.month.toString().trim()}`;
    if (this.Day > 9) strDay = this.Day.toString().trim();
    else strDay = `0${this.Day.toString().trim()}`;
    strDateStr = strYear + strMonth + strDay;
    switch (intFormat) {
      case 0:
        strDateStr = strYear + strMonth + strDay;
        break;
      case 1:
        strDateStr = `${strYear}-${strMonth}-${strDay}`;
        break;
      case 2:
        strDateStr = `${strYear}/${strMonth}/${strDay}`;
        break;
      case 3:
        strDateStr = Format('{0}/{1}/{2}', strDay, strMonth, strYear);
        break;
      case 4:
        strDateStr = Format('{1}/{0}/{2}', strDay, strMonth, strYear);
        break;
    }
    return strDateStr;
  }

  /// <summary>
  /// 功能：获取所给标准日期的日期字符串
  /// 日期格式：
  ///    日期的字符串的格式有三种：
  ///		1、YYYYMMDD。	例如20050120
  ///		2、YYYY-MM-DD	例如2005-01-20
  ///		3、YYYY/MM/DD	例如2005/01/20
  ///		4、DD/MM/YYYY	例如20/01/2005
  ///		5、MM/DD/YYYY	例如01/20/2005
  ///		6、YYYYMM	    例如200501
  ///		7、YYYY年MM月 	例如2005年01月
  ///		8、YYYY年M月 	例如2005年1月
  ///		9、YYYY年MM月DD日	例如2005年01月20日
  ///		10、YYYY年M月D日	例如2005年1月20日
  /// </summary>
  /// <param name="strFormat">日期格式,0:8位日期,1:10位横杠日期,2:10位斜杠日期</param>
  /// <returns>返回:指定格式的日期串</returns>
  public getDateStr_s(strFormat: string): string {
    let strDateStr: string;
    let strMonth, strDay: string;

    const strYear = this.year.toString().trim();
    if (this.month > 9) strMonth = this.month.toString().trim();
    else strMonth = `0${this.month.toString().trim()}`;
    if (this.Day > 9) strDay = this.Day.toString().trim();
    else strDay = `0${this.Day.toString().trim()}`;
    strDateStr = strYear + strMonth + strDay;
    switch (strFormat) {
      case 'YYYYMMDD':
        strDateStr = strYear + strMonth + strDay;
        break;
      case 'YYYY-MM-DD':
        strDateStr = `${strYear}-${strMonth}-${strDay}`;
        break;
      case 'YYYY/MM/DD':
        strDateStr = `${strYear}/${strMonth}/${strDay}`;
        break;
      case 'DD/MM/YYYY':
        strDateStr = Format('{0}/{1}/{2}', strDay, strMonth, strYear);
        break;
      case 'MM/DD/YYYY':
        strDateStr = Format('{1}/{0}/{2}', strDay, strMonth, strYear);
        break;

      case 'YYYYMM':
        strDateStr = strYear + strMonth;
        break;
      case 'YYYY年MM月':
        strDateStr = `${strYear}年${strMonth}月`;
        break;
      case 'YYYY年M月':
        strDateStr = `${strYear}年${this.month.toString()}月`;
        break;
      case 'YYYY年MM月DD日':
        strDateStr = `${strYear}年${strMonth}月${strDay}日`;
        break;
      case 'YYYY年M月D日':
        strDateStr = `${strYear}年${this.month.toString()}月${this.Day.toString()}日`;
        break;
    }
    return strDateStr;
  }
  /// <summary>
  /// 获取8位日期串的行（Row，整型）列（Col，整型），用Row*10+Col返回
  /// </summary>
  /// <param name="strDate">8位日期串</param>
  /// <returns>行（Row，整型）列（Col，整型），用Row*10+Col返回</returns>
  //public static getRowColByDate(strDate: string): number {
  //    const objDate: Date = GetDateTimeByDateStr8(strDate);
  //    const objDateTime1st: Date = GetFirstDayOfMonth(objDate);
  //    const objDayOfWeek: DayOfWeek = objDate.DayOfWeek;
  //    intCol: number = objDayOfWeek;
  //    intCol1st: number = objDateTime1st.DayOfWeek;

  //    const objTimeSpan: TimeSpan = objDate.Subtract(objDateTime1st);
  //    intSpanDays: number = objTimeSpan.Days;
  //    intRow: number = (intSpanDays + intCol1st + 1) / 7;
  //    return intRow * 10 + intCol;
  //}
  /// <summary>
  /// 序号数字转换成英文
  /// </summary>
  /// <param name="intOrdinal">序号数字</param>
  /// <returns>转换后的英文</returns>
  public static GetEnglighOrdinalByNum(intOrdinal: number): string {
    let strDayEN = '';
    switch (intOrdinal) {
      case 1:
        strDayEN = 'first';
        break;
      case 2:
        strDayEN = 'second';
        break;
      case 3:
        strDayEN = 'third';
        break;
      case 4:
        strDayEN = 'fourth';
        break;
      case 5:
        strDayEN = 'fifth';
        break;
      case 6:
        strDayEN = 'sixth';
        break;
      case 7:
        strDayEN = 'seventh';
        break;
      case 8:
        strDayEN = 'eighth';
        break;
      case 9:
        strDayEN = 'ninth';
        break;
      case 10:
        strDayEN = 'tenth';
        break;
      case 11:
        strDayEN = 'eleventh';
        break;
      case 12:
        strDayEN = 'twelfth';
        break;
      case 13:
        strDayEN = 'thirteenth';
        break;
      case 14:
        strDayEN = 'fourteenth';
        break;
      case 15:
        strDayEN = 'fifteenth';
        break;
      case 16:
        strDayEN = 'sixteenth';
        break;
      case 17:
        strDayEN = 'seventeenth';
        break;
      case 18:
        strDayEN = 'eighteenth';
        break;
      case 19:
        strDayEN = 'ninteenth';
        break;
      case 20:
        strDayEN = Format('twentieth');
        break;
      case 21:
        strDayEN = 'twenty-first';
        break;
      case 22:
        strDayEN = 'twenty-second';
        break;
      case 23:
        strDayEN = 'twenty-third';
        break;
      case 24:
        strDayEN = 'twenty-fourth';
        break;
      case 25:
        strDayEN = 'twenty-fifth';
        break;
      case 26:
        strDayEN = 'twenty-sixth';
        break;
      case 27:
        strDayEN = 'twenty-seventh';
        break;
      case 28:
        strDayEN = 'twenty-eighth';
        break;
      case 29:
        strDayEN = 'twenty-ninth';
        break;
      case 30:
        strDayEN = 'thirtieth';
        break;

      case 31:
        strDayEN = 'thirty-first';
        break;
    }

    return strDayEN;
  }

  /// <summary>
  /// 获取英文月，通过数字得到英文月
  /// </summary>
  /// <returns>数字月份</returns>
  public static getEnglighMonthByNum(intMonth: number): string {
    let strMonthEN = '';
    switch (intMonth) {
      case 1:
        strMonthEN = 'January';
        break;
      case 2:
        strMonthEN = 'February';
        break;
      case 3:
        strMonthEN = 'March';
        break;
      case 4:
        strMonthEN = 'April';
        break;
      case 5:
        strMonthEN = 'May';
        break;
      case 6:
        strMonthEN = 'June';
        break;
      case 7:
        strMonthEN = 'July';
        break;
      case 8:
        strMonthEN = 'August';
        break;
      case 9:
        strMonthEN = 'September';
        break;
      case 10:
        strMonthEN = 'October';
        break;
      case 11:
        strMonthEN = 'November';
        break;
      case 12:
        strMonthEN = 'December';
        break;
    }
    return strMonthEN;
  }

  /// <summary>
  /// 获取英文日期, 例如： Novermber 15, 1990
  /// </summary>
  /// <returns></returns>
  public getEnglighDay_EN(): string {
    let strBirthDayEN = '';
    let strMonthEN = '';
    switch (this.month) {
      case 1:
        strMonthEN = 'January';
        break;
      case 2:
        strMonthEN = 'February';
        break;
      case 3:
        strMonthEN = 'March';
        break;
      case 4:
        strMonthEN = 'April';
        break;
      case 5:
        strMonthEN = 'May';
        break;
      case 6:
        strMonthEN = 'June';
        break;
      case 7:
        strMonthEN = 'July';
        break;
      case 8:
        strMonthEN = 'August';
        break;
      case 9:
        strMonthEN = 'September';
        break;
      case 10:
        strMonthEN = 'October';
        break;
      case 11:
        strMonthEN = 'November';
        break;
      case 12:
        strMonthEN = 'December';
        break;
    }
    strBirthDayEN = Format('{0} {1}, {2}', strMonthEN, this.Day, this.year);
    return strBirthDayEN;
  }

  /// <summary>
  /// 获取英文日期, 例如： Novermber 15, 1990
  /// </summary>
  /// <returns></returns>
  public getEnglighDay_EN2(): string {
    let strBirthDayEN = '';
    let strMonthEN = '';
    switch (this.month) {
      case 1:
        strMonthEN = 'January';
        break;
      case 2:
        strMonthEN = 'February';
        break;
      case 3:
        strMonthEN = 'March';
        break;
      case 4:
        strMonthEN = 'April';
        break;
      case 5:
        strMonthEN = 'May';
        break;
      case 6:
        strMonthEN = 'June';
        break;
      case 7:
        strMonthEN = 'July';
        break;
      case 8:
        strMonthEN = 'August';
        break;
      case 9:
        strMonthEN = 'September';
        break;
      case 10:
        strMonthEN = 'October';
        break;
      case 11:
        strMonthEN = 'November';
        break;
      case 12:
        strMonthEN = 'December';
        break;
    }
    strBirthDayEN = Format('{0} {1} {2}', strMonthEN, this.Day, this.year);
    return strBirthDayEN;
  }

  /// <summary>
  /// 获取英文的出生年月, 例如： 5th Novermber , 1990
  /// </summary>
  /// <returns></returns>
  public getBirthDay_EN(): string {
    let strBirthDayEN = '';
    let strMonthEN = '';
    switch (this.month) {
      case 1:
        strMonthEN = 'January';
        break;
      case 2:
        strMonthEN = 'February';
        break;
      case 3:
        strMonthEN = 'March';
        break;
      case 4:
        strMonthEN = 'April';
        break;
      case 5:
        strMonthEN = 'May';
        break;
      case 6:
        strMonthEN = 'June';
        break;
      case 7:
        strMonthEN = 'July';
        break;
      case 8:
        strMonthEN = 'August';
        break;
      case 9:
        strMonthEN = 'September';
        break;
      case 10:
        strMonthEN = 'October';
        break;
      case 11:
        strMonthEN = 'November';
        break;
      case 12:
        strMonthEN = 'December';
        break;
    }
    let strDayEN = '';
    switch (this.Day) {
      case 1:
        strDayEN = '1st';
        break;
      case 2:
        strDayEN = '2nd';
        break;
      case 3:
        strDayEN = '3rd';
        break;
      case 4:
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
      case 10:
      case 11:
      case 12:
      case 13:
      case 14:
      case 15:
      case 16:
      case 17:
      case 18:
      case 19:
      case 20:
        strDayEN = Format('{0}th', this.Day);
        break;
      case 21:
        strDayEN = '21st';
        break;
      case 22:
        strDayEN = '22nd';
        break;
      case 23:
        strDayEN = '23rd';
        break;
      case 24:
      case 25:
      case 26:
      case 27:
      case 28:
      case 29:
      case 30:
        strDayEN = Format('{0}th', this.Day);
        break;
      case 31:
        strDayEN = '31st';
        break;
    }
    strBirthDayEN = Format('{0} {1} {2}', strDayEN, strMonthEN, this.year);
    return strBirthDayEN;
  }

  /// <summary>
  /// 获取英文的出生年月, 例如：  Novermber 24 1990
  /// </summary>
  /// <returns></returns>
  public getBirthDay_EN2(): string {
    let strBirthDayEN = '';
    let strMonthEN = '';
    switch (this.month) {
      case 1:
        strMonthEN = 'January';
        break;
      case 2:
        strMonthEN = 'February';
        break;
      case 3:
        strMonthEN = 'March';
        break;
      case 4:
        strMonthEN = 'April';
        break;
      case 5:
        strMonthEN = 'May';
        break;
      case 6:
        strMonthEN = 'June';
        break;
      case 7:
        strMonthEN = 'July';
        break;
      case 8:
        strMonthEN = 'August';
        break;
      case 9:
        strMonthEN = 'September';
        break;
      case 10:
        strMonthEN = 'October';
        break;
      case 11:
        strMonthEN = 'November';
        break;
      case 12:
        strMonthEN = 'December';
        break;
    }
    let strDayEN = '';
    switch (this.Day) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
        strDayEN = Format('{0}', this.Day);
        break;
      case 10:
      case 11:
      case 12:
      case 13:
      case 14:
      case 15:
      case 16:
      case 17:
      case 18:
      case 19:
      case 20:
      case 21:
      case 22:
      case 23:
      case 24:
      case 25:
      case 26:
      case 27:
      case 28:
      case 29:
      case 30:
      case 31:
        strDayEN = Format('{0}', this.Day);
        break;
    }
    strBirthDayEN = Format('{0} {1} {2}', strMonthEN, strDayEN, this.year);
    return strBirthDayEN;
  }

  /// <summary>
  /// 获取英文的出生年月,其中带逗号 例如：  Novermber 24, 1990
  /// </summary>
  /// <returns></returns>
  public getBirthDay_EN3(): string {
    let strBirthDayEN = '';
    let strMonthEN = '';
    switch (this.month) {
      case 1:
        strMonthEN = 'January';
        break;
      case 2:
        strMonthEN = 'February';
        break;
      case 3:
        strMonthEN = 'March';
        break;
      case 4:
        strMonthEN = 'April';
        break;
      case 5:
        strMonthEN = 'May';
        break;
      case 6:
        strMonthEN = 'June';
        break;
      case 7:
        strMonthEN = 'July';
        break;
      case 8:
        strMonthEN = 'August';
        break;
      case 9:
        strMonthEN = 'September';
        break;
      case 10:
        strMonthEN = 'October';
        break;
      case 11:
        strMonthEN = 'November';
        break;
      case 12:
        strMonthEN = 'December';
        break;
    }
    let strDayEN = '';
    switch (this.Day) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
        strDayEN = Format('{0}', this.Day);
        break;
      case 10:
      case 11:
      case 12:
      case 13:
      case 14:
      case 15:
      case 16:
      case 17:
      case 18:
      case 19:
      case 20:
      case 21:
      case 22:
      case 23:
      case 24:
      case 25:
      case 26:
      case 27:
      case 28:
      case 29:
      case 30:
      case 31:
        strDayEN = Format('{0}', this.Day);
        break;
    }
    strBirthDayEN = Format('{0} {1}, {2}', strMonthEN, strDayEN, this.year);
    return strBirthDayEN;
  }
  public get Month_EN(): string {
    let strMonthEN = '';
    switch (this.month) {
      case 1:
        strMonthEN = 'January';
        break;
      case 2:
        strMonthEN = 'February';
        break;
      case 3:
        strMonthEN = 'March';
        break;
      case 4:
        strMonthEN = 'April';
        break;
      case 5:
        strMonthEN = 'May';
        break;
      case 6:
        strMonthEN = 'June';
        break;
      case 7:
        strMonthEN = 'July';
        break;
      case 8:
        strMonthEN = 'August';
        break;
      case 9:
        strMonthEN = 'September';
        break;
      case 10:
        strMonthEN = 'October';
        break;
      case 11:
        strMonthEN = 'November';
        break;
      case 12:
        strMonthEN = 'December';
        break;
    }
    return strMonthEN;
  }

  /// <summary>
  /// 检查6位年月是否正确
  /// 日期：20140410
  /// 编写人：潘以锋
  /// </summary>
  /// <param name="strYearMonth"></param>
  /// <returns></returns>
  public static CheckYearMonth6(strYearMonth: string): boolean {
    if (strYearMonth.length == 0) return true;
    if (strYearMonth == '无') return true;
    if (strYearMonth.length != 6) {
      const strMsg: string = Format(
        '年月:<{0}>长度不正确！应该为6位，但目前为:{1},不正确.',
        strYearMonth,
        strYearMonth.length,
      );
      throw new Error(strMsg);
    }
    const strYear: string = strYearMonth.substring(0, 4);
    try {
      this.CheckYear(strYear);
    } catch (objException) {
      const strMsg: string = Format(
        '年月:<{0}>中检查<年>:<{1}>不正确！错误：{2}',
        strYearMonth,
        strYear,
        objException,
      );
      throw new Error(strMsg);
    }

    const strMonth: string = strYearMonth.substring(4, 2);
    try {
      this.CheckMonth(strMonth);
    } catch (objException) {
      const strMsg: string = Format(
        '年月:<{0}>中检查<月>:<{1}>不正确！错误：{2}',
        strYearMonth,
        strMonth,
        objException,
      );
      throw new Error(strMsg);
    }

    return true;
  }

  /// <summary>
  /// 检查8位日期是否正确
  /// 日期：20140410
  /// 编写人：潘以锋
  /// </summary>
  /// <param name="strDate"></param>
  /// <returns></returns>
  public static CheckDate8(strDate: string): boolean {
    if (strDate.length == 0) return true;
    if (strDate == '无') return true;
    if (strDate.length != 8) {
      const strMsg: string = Format(
        '日期:<{0}>长度不正确！应该为8位，但目前为:{1},不正确.',
        strDate,
        strDate.length,
      );
      throw new Error(strMsg);
    }
    const strYear: string = strDate.substring(0, 4);
    try {
      this.CheckYear(strYear);
    } catch (objException) {
      const strMsg: string = Format(
        '日期:<{0}>中检查<年>:<{1}>不正确！错误：{2}',
        strDate,
        strYear,
        objException,
      );
      throw new Error(strMsg);
    }

    const strMonth: string = strDate.substring(4, 2);
    try {
      this.CheckMonth(strMonth);
    } catch (objException) {
      const strMsg: string = Format(
        '日期:<{0}>中检查<月>:<{1}>不正确！错误：{2}',
        strDate,
        strMonth,
        objException,
      );
      throw new Error(strMsg);
    }
    const strDay: string = strDate.substring(6, 2);
    try {
      this.CheckDay(strDay);
    } catch (objException) {
      const strMsg: string = Format(
        '日期:<{0}>中检查<日>:<{1}>不正确！错误：{2}',
        strDate,
        strDay,
        objException,
      );
      throw new Error(strMsg);
    }
    return true;
  }
  /// <summary>
  /// 检查年是否正确
  /// 日期：20140410
  /// 编写人：潘以锋
  /// </summary>
  /// <param name="strYear"></param>
  /// <returns></returns>
  public static CheckYear(strYear: string): boolean {
    if (strYear.length == 0) return true;
    let intYear = 0;
    try {
      intYear = Number(strYear);
    } catch (objException) {
      const strMsg: string = Format('<年>:<{0}>不正确！错误：{1}', strYear, objException);
      throw new Error(strMsg);
    }
    if (intYear < 1900) {
      const strMsg: string = Format('<年>:<{0}>小于1900,不正确！', intYear);
      throw new Error(strMsg);
    }
    if (intYear > 3000) {
      const strMsg: string = Format('<年>:<{0}>大于3000,不正确！', intYear);
      throw new Error(strMsg);
    }
    return true;
  }
  /// <summary>
  /// 检查月是否正确
  /// 日期：20140410
  /// 编写人：潘以锋
  /// </summary>
  /// <param name="strMonth"></param>
  /// <returns></returns>
  public static CheckMonth(strMonth: string): boolean {
    if (strMonth.length == 0) return true;
    let intMonth = 0;
    try {
      intMonth = Number(strMonth);
    } catch (objException) {
      const strMsg: string = Format('<月>:<{0}>不正确！错误：{1}', strMonth, objException);
      throw new Error(strMsg);
    }
    if (intMonth < 1) {
      const strMsg: string = Format('<月>:<{0}>小于1,不正确！', intMonth);
      throw new Error(strMsg);
    }
    if (intMonth > 12) {
      const strMsg: string = Format('<月>:<{0}>大于12,不正确！', intMonth);
      throw new Error(strMsg);
    }

    return true;
  }
  /// <summary>
  /// 检查日是否正确
  /// 日期：20140410
  /// 编写人：潘以锋
  /// </summary>
  /// <param name="strDay"></param>
  /// <returns></returns>
  public static CheckDay(strDay: string): boolean {
    if (strDay.length == 0) return true;
    let intDay = 0;
    try {
      intDay = Number(strDay);
    } catch (objException) {
      const strMsg: string = Format('<日>:<{0}>不正确！错误：{1}', strDay, objException);
      throw new Error(strMsg);
    }
    if (intDay < 1) {
      const strMsg: string = Format('<日>:<{0}>小于1,不正确！', intDay);
      throw new Error(strMsg);
    }
    if (intDay > 31) {
      const strMsg: string = Format('<日>:<{0}>大于31,不正确！', intDay);
      throw new Error(strMsg);
    }

    return true;
  }
  /// <summary>
  /// 根据标准的日期时间串(19位)获取一个简单化的日期时间串(14位)，例如原串：2020-07-05 12:33:44(19位),简化串：20-07-05 12:33(14位)
  /// 作者:潘以锋
  /// 日期：2020-08-07
  /// </summary>
  /// <param name="strDateTime19">标准的日期时间串(19位)</param>
  /// <returns>简化后的日期时间串(14位)</returns>
  public static GetDateTime_Sim(strDateTime19: string): string {
    if (strDateTime19 == null) return '';
    if (strDateTime19 == '') return '';
    if (strDateTime19.length < 8) {
      const strMsg = `原日期串:[${strDateTime19}]格式不正确！`;
      throw new Error(strMsg);
    }
    const strDateTime = clsDateTime.getDateStr(strDateTime19, 1);
    let strDateTimeSim: string = strDateTime.substring(2);
    if (strDateTimeSim.length > 14) {
      strDateTimeSim = strDateTimeSim.substring(0, 14);
    }
    return strDateTimeSim;
  }

  public static GetDate_Sim(strDateTime19: string): string {
    if (strDateTime19 == null) return '';
    if (strDateTime19 == '') return '';
    if (strDateTime19.length < 8) {
      const strMsg = `原日期串:[${strDateTime19}]格式不正确！`;
      throw new Error(strMsg);
    }
    let strDateSim: string = strDateTime19.substring(2);
    if (strDateSim.length > 14) {
      strDateSim = strDateSim.substring(0, 8);
    }
    return strDateSim;
  }
}

//    public static operator <= (objDTA: clsDateTime, objDTB: clsDateTime): boolean
//{
//    if (objDTA.year > objDTB.year) return false;
//    if (objDTA.getMonth() > objDTB.getMonth()) return false;
//    if (objDTA.getDate() > objDTB.getDate()) return false;
//    if (objDTA.getHours() > objDTB.getHours()) return false;
//    if (objDTA.getMinutes() > objDTB.getMinutes()) return false;
//    if (objDTA.getSeconds() > objDTB.getSeconds()) return false;
//    return true;

//}

//        public static operator < (objDTA: clsDateTime, objDTB: clsDateTime): boolean
//{
//    if (objDTA.year > objDTB.year) return false;
//    else if (objDTA.year < objDTB.year) return true;

//    if (objDTA.getMonth() > objDTB.getMonth()) return false;
//    else if (objDTA.getMonth() < objDTB.getMonth()) return true;

//    if (objDTA.getDate() > objDTB.getDate()) return false;
//    else if (objDTA.getDate() < objDTB.getDate()) return true;

//    if (objDTA.getHours() > objDTB.getHours()) return false;
//    else if (objDTA.getHours() < objDTB.getHours()) return true;

//    if (objDTA.getMinutes() > objDTB.getMinutes()) return false;
//    else if (objDTA.getMinutes() < objDTB.getMinutes()) return true;

//    if (objDTA.getSeconds() > objDTB.getSeconds()) return false;
//    else if (objDTA.getSeconds() < objDTB.getSeconds()) return true;
//    return false;

//}
//        public static operator >= (objDTA: clsDateTime, objDTB: clsDateTime): boolean
//{
//    if (objDTA.year < objDTB.year) return false;
//    if (objDTA.getMonth() < objDTB.getMonth()) return false;
//    if (objDTA.getDate() < objDTB.getDate()) return false;
//    if (objDTA.getHours() < objDTB.getHours()) return false;
//    if (objDTA.getMinutes() < objDTB.getMinutes()) return false;
//    if (objDTA.getSeconds() < objDTB.getSeconds()) return false;
//    return true;
//}

//        public static operator > (objDTA: clsDateTime, objDTB: clsDateTime): boolean
//{
//    if (objDTA.year < objDTB.year) return false;
//    else if (objDTA.year > objDTB.year) return true;

//    if (objDTA.getMonth() < objDTB.getMonth()) return false;
//    else if (objDTA.getMonth() > objDTB.getMonth()) return true;

//    if (objDTA.getDate() < objDTB.getDate()) return false;
//    else if (objDTA.getDate() > objDTB.getDate()) return true;

//    if (objDTA.getHours() < objDTB.getHours()) return false;
//    else if (objDTA.getHours() > objDTB.getHours()) return true;

//    if (objDTA.getMinutes() < objDTB.getMinutes()) return false;
//    else if (objDTA.getMinutes() > objDTB.getMinutes()) return true;

//    if (objDTA.getSeconds() < objDTB.getSeconds()) return false;
//    else if (objDTA.getSeconds() > objDTB.getSeconds()) return true;
//    return false;

//}
//        public static operator == (objDTA: clsDateTime, objDTB: clsDateTime): boolean
//{
//    if (objDTA.year != objDTB.year) return false;
//    if (objDTA.getMonth() != objDTB.getMonth()) return false;
//    if (objDTA.getDate() != objDTB.getDate()) return false;
//    if (objDTA.getHours() != objDTB.getHours()) return false;
//    if (objDTA.getMinutes() != objDTB.getMinutes()) return false;
//    if (objDTA.getSeconds() != objDTB.getSeconds()) return false;
//    return true;

//}
//        public static operator != (objDTA: clsDateTime, objDTB: clsDateTime): boolean
//{
//    if (objDTA.year == objDTB.year
//        && objDTA.getMonth() == objDTB.getMonth()
//        && objDTA.getDate() == objDTB.getDate()
//        && objDTA.getHours() == objDTB.getHours()
//        && objDTA.getMinutes() == objDTB.getMinutes()
//        && objDTA.getSeconds() == objDTB.getSeconds()) {
//        return false;
//    }
//    return true;

//}

/// <summary>
/// 根据标准的日期时间串(19位)获取一个简单化的日期时间串(14位)，例如原串：2020-07-05 12:33:44(19位),简化串：20-07-05 12:33(14位)
/// 作者:潘以锋
/// 日期：2020-08-07
/// </summary>
/// <param name="strDateTime19">标准的日期时间串(19位)</param>
/// <returns>简化后的日期时间串(14位)</returns>
export function DateTime_GetDateTimeSim(strDateTime19: string): string {
  if (strDateTime19 == '') return '';
  if (strDateTime19.length < 8) {
    const strMsg = `原日期串:[${strDateTime19}]格式不正确！`;
    throw new Error(strMsg);
  }
  let strDateTimeSim: string = strDateTime19.substring(2);
  if (strDateTimeSim.length > 14) {
    strDateTimeSim = strDateTimeSim.substring(0, 14);
  }
  return strDateTimeSim;
}

export function DateTime_GetDateTimeSim6(strDateTime19: string): string {
  if (strDateTime19 == '') return '';
  if (strDateTime19.length < 8) {
    const strMsg = `原日期串:[${strDateTime19}]格式不正确！`;
    throw new Error(strMsg);
  }
  let strDateTimeSim: string = strDateTime19.substring(2);
  if (strDateTimeSim.indexOf('-') > -1) {
    if (strDateTimeSim.length > 8) {
      strDateTimeSim = strDateTimeSim.substring(0, 8);
    }
  } else if (strDateTimeSim.indexOf('/') > -1) {
    if (strDateTimeSim.length > 8) {
      strDateTimeSim = strDateTimeSim.substring(0, 8);
    }
  } else if (strDateTimeSim.length > 6) {
    strDateTimeSim = strDateTimeSim.substring(0, 6);
  }
  return strDateTimeSim;
}
