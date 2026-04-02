using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Http;
using AGC.FunClass;

namespace GP.Pages
{
    public class MainModel : PageModel
    {
        public void OnGet()
        {

        }
        public string Url_Session_SetString
        {
            get
            {
                //获取公共变量:WebRoot
                return clsPubVar.Url_Session_SetString;
            }
        }
        public string Url_Session_GetString
        {
            get
            {
                //获取公共变量:WebRoot
                return clsPubVar.Url_Session_GetString;
            }
        }
        /// <summary>
        /// 当前的虚拟根目录，在appsettings.json设置:environmentVariables:ASPNETCORE_PATHBASE
        /// (AutoGCLib.WA_ViewScriptCSModel_TS4CSharp:Gen_WApi_Model_WebRoot)
        /// </summary>
        public string WebRoot
        {
            get
            {
                //物理路径
                string strPhysicalRoot = AppContext.BaseDirectory;
                //获取设置:虚拟根目录
                strIdCurrEduclspathBase = Environment.GetEnvironmentVariable("ASPNETCORE_PATHBASE");
                //获取公共变量:WebRoot
                return clsPubVar.WebRoot;
            }
        }
        //public void SetSession4(string strKey , string strValue)
        //{
        //    ViewBag.strKey = strValue;
        //}
        public void SetSession3(string strKey , string strValue)
        {
            ViewData.Add(strKey, strValue);    
        }
        public void SetSession2( string strKey, string strValue)
        {
            HttpContext.Session.SetString(strKey, strValue);
        }
        /// <summary>
        /// Session属性-用户Id
        /// </summary>
        public string seUserId
        {
            get
            {
                strIdCurrEduclsstrValue = HttpContext.Session.GetString("UserId");
                return strValue;
            }
            set
            {
                HttpContext.Session.SetString("UserId", value);
            }
        }
            
        public string GetSession2(string strKey )
        {
            strIdCurrEduclsstrValue = HttpContext.Session.GetString(strKey);
            return strValue;
        }
        public void SetSession(string strKey , string strValue)
        {
          
            byte[] byteArray = System.Text.Encoding.Default.GetBytes(strValue);
            Request.HttpContext.Session.Set(strKey, byteArray);
 

//            byte[] byteArray = 通过某种方式获取到的字节数组
//string str = System.Text.Encoding.Default.GetString(byteArray);
//value = HttpContext.Session.GetString(Key);

            //strIdCurrEduclsdata = new
            //{
            //    Key,
            //    value
            //};
            //return Json(data);
        }
        public string seObjUserLoginInfo
        {
            get
            {
                strIdCurrEduclsstrValue = HttpContext.Session.GetString("objUserLoginInfo");
                return strValue;
            }
            set
            {
                HttpContext.Session.SetString("objUserLoginInfo", value);
            }
        }

    }
}