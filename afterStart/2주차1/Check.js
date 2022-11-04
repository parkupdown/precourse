export default function Check({ number }) {
  if (number.length !== 3) {
    throw new Error("3글자");
  }
  if ([...new Set(value.split(""))].length !== 3) {
    throw new Error("중복");
  }
  if (/^[1-9]*$/g.test(value) === false) {
    throw new Error("0안됌");
  }
}
