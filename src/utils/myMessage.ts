import { ElMessage } from 'element-plus';
export class message {
  public static warning(strMsg: string) {
    ElMessage.warning({
      message: strMsg,
      duration: 1000, // 设置持续显示时间（以毫秒为单位）
    });
  }
  public static info(strMsg: string) {
    ElMessage.info({
      message: strMsg,
      duration: 1000, // 设置持续显示时间（以毫秒为单位）
    });
  }
  public static success(strMsg: string) {
    ElMessage.success({
      message: strMsg,
      duration: 1000, // 设置持续显示时间（以毫秒为单位）
    });
  }
  public static error(strMsg: string) {
    ElMessage.error({
      message: strMsg,
      duration: 1000, // 设置持续显示时间（以毫秒为单位）
    });
  }
}
