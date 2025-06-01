import { format } from "date-fns";
import { TZDate } from "@date-fns/tz";
import { load } from "cheerio";
import hljs from "highlight.js";
import "highlight.js/styles/hybrid.css";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** shadcn/ui */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** 日付フォーマット */
export const formatDate = (date: string) =>
  format(new TZDate(date, "Asia/Tokyo"), "yyyy-MM-dd");

/** 年月のフォーマット */
export const formatMonth = (month: string) => month.split("-").map(String);

/** マークダウン解析 */
export const formatRichText = (richText: string) => {
  const $ = load(richText, null, false);
  const highlight = (text: string, lang?: string) => {
    if (!lang) return hljs.highlightAuto(text);
    try {
      return hljs.highlight(text, {
        language: lang?.replace(/^language-/, "") || "",
      });
    } catch (err) {
      console.log(err);
      return hljs.highlightAuto(text);
    }
  };
  $("pre code").each((_, elm) => {
    const lang = $(elm).attr("class");
    const res = highlight($(elm).text(), lang);
    $(elm).html(res.value);
  });
  return $.html();
};

/** 年月の配列 */
export const getMonthListFromStartToDate = (start: string): string[] => {
  const result: string[] = [];
  const [startYear, startMonth] = start.split("-").map(Number);

  const startDate = new Date(startYear, startMonth - 1); // 開始年月
  const currentDate = new Date(); // 現在年月

  let currentYear = startDate.getFullYear();
  let currentMonth = startDate.getMonth(); // 0から始まる月

  while (
    currentYear < currentDate.getFullYear() ||
    (currentYear === currentDate.getFullYear() &&
      currentMonth <= currentDate.getMonth())
  ) {
    // YYYY-MM 形式で年月をリストに追加
    const monthString = `${currentYear}-${String(currentMonth + 1).padStart(
      2,
      "0"
    )}`;
    result.push(monthString);

    // 翌月に移行
    currentMonth++;
    if (currentMonth > 11) {
      currentMonth = 0;
      currentYear++;
    }
  }

  return result;
};
