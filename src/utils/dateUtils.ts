import dayjs from "dayjs";
import "dayjs/locale/ko";
import isLeapYear from "dayjs/plugin/isLeapYear"; // 윤년 판단 플러그인

dayjs.extend(isLeapYear); // 플러그인 등록
dayjs.locale("ko");

class dateUtils {
  static getToDay(format = "YYYYMMDDHHmmss") {
    if (format) {
      return dayjs().format(format);
    }
    return dayjs().format();
  }

  static setDate(date: string, format = "YYYYMMDDHHmmss") {
    return dayjs(date).format(format);
  }
}

export default dateUtils;
