import { format } from "date-fns";
import { TZDate } from "@date-fns/tz";
import { load } from "cheerio";
import hljs from "highlight.js";
import "highlight.js/styles/hybrid.css";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatDate = (date: string) =>
  format(new TZDate(date, "Asia/Tokyo"), "yyyy-MM-dd");

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
