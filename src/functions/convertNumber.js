export function convertNumber(n) {
  const numWithComma = n.toLocaleString();
  const arr = numWithComma.split(",");
  const l = arr.length;

  if (l == 5) {
    return arr[0] + "." + arr[1].slice(0, 2) + "T";
  } else if (l == 4) {
    return arr[0] + "." + arr[1].slice(0, 2) + "B";
  } else if (l == 3) {
    return arr[0] + "." + arr[1].slice(0, 2) + "M";
  } else if (l == 2) {
    return arr[0] + "." + arr[1].slice(0, 2) + "K";
  } else {
    return numWithComma;
  }
}
