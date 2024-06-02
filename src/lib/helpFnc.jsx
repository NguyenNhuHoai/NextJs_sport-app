import { formatDate } from "date-fns";
export function formatDay(data) {
  const dateFormat = formatDate(data, "dd/MM/yyyy");
  return dateFormat;
}

export function formatString(string) {
  const newString = string.split("").splice(0, 50).join("");
  return newString + "...";
}

export function formatMoney(number) {
  const formatter = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  const result = formatter.format(number);
  return result;
}

export function calculateSales(price, sale) {
  if (sale === 0) return price;
  const calculate = price - (price * sale) / 100;
  return Math.round(calculate * 100) / 100;
}
