b = a
  .replace(
    /hsl\((.+)\) (.+)%/g,
    `hsla($1, calc(${1 / 15} * abcde)) calc($2px * 5 / 100)`
  )
  .replaceAll("\n", "");
i = 0;
while (Array.isArray(b.match(/abcde/g)) && b.match(/abcde/g).length > 0) {
  b = b.replace("abcde", 15 - i);
  i++;
}
c = "" + b;
b = b.replaceAll("5 /", "3 /");
c = c + ", transparent calc(100px * 5 / 100)";
b = b + ", transparent calc(100px * 3 / 100)";

lll = "linear-gradient(to ";
rrr = "),";

result = `${lll}right, ${c}${rrr}${lll}left, ${c}${rrr}${lll}top, ${b}${rrr}${lll}bottom, ${b}${rrr}`;
result = result.slice(0, -1) + ";";
