export function getCookie(key: string) {
  const b = document.cookie.match("(^|;)\\S*" + key + "\\S*=\\S*([^;]+)");

  return b ? b.pop() : "";
}

export function currencyFormat(amount: number) {
  return "$" + (amount / 100).toFixed(2);
}
