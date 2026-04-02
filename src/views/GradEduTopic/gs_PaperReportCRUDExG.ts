export async function gs_PaperReportCRUDEx_PageLoad() {
  // 在此处放置用户代码以初始化页面
  try {
    // gs_PaperReport_Edit.IdCurrEduClsStatic = clsPubLocalStorage.idCurrEduCls;
    //if (this.bolIsInitShow == false)  //
    //{
    //    this.objPager.InitShow(this.divName4Pager_ReportEdit);
    //    this.bolIsInitShow = true;  //
    //}

    try {
      // 使用动态导入加载函数代码块

      const { gs_PaperReportCRUDEx_Bind_PaperReportTree } = await import(
        '@/views/GradEduTopic/gs_PaperReportCRUDExF'
      );
      // 调用加载的函数
      await gs_PaperReportCRUDEx_Bind_PaperReportTree();
    } catch (error) {
      console.error('加载函数:gs_PaperReportCRUDEx_Bind_PaperReportTree时出现错误:', error);
    }
    try {
      // 使用动态导入加载函数代码块

      const { gs_PaperReportCRUDEx_Bind_PaperReportList } = await import(
        '@/views/GradEduTopic/gs_PaperReportCRUDExE'
      );
      // 调用加载的函数
      await gs_PaperReportCRUDEx_Bind_PaperReportList();
    } catch (error) {
      console.error('加载函数:[gs_PaperReportCRUDEx_Bind_PaperReportList]时出现错误:', error);
    }

    // await gs_PaperReportCRUDEx_Bind_PaperReportList();
  } catch (e:any) {
    const strMsg = `页面启动不成功,${e}.`;
    console.error('Error: ', strMsg);
    //console.trace();
    alert(strMsg);
  }
}
