let btncl = document.getElementById("btn1");
let btnfa = document.getElementById("btn2");

const getTemp = () => {
  let temp = document.getElementById("tempvalue").value;
  temp = parseFloat(temp);

  if (isNaN(temp)) {
    alert(" Not a valid input");
    return -1;
  }
  return temp;
};

const finalResult = (format, answer) => {
  let conversionresult = document.getElementById("result");
  let resultText = `The conversion value in ${format} is ${answer}`;
  conversionresult.innerHTML = resultText;
};

const convertToCelsius = () => {
  let temp = getTemp();
  if (temp === -1) return;
  let answer = +((temp - 32 * 5) / 9).toFixed(2);

  finalResult("celsius", answer);
};
btncl.addEventListener("click", convertToCelsius);

const convertToFarenheit = () => {
  let temp = getTemp();
  if (temp === -1) return;

  let answer = +((9 / 5) * temp + 32).toFixed(2);

  finalResult("Farenheit", answer);
};
btnfa.addEventListener("click", convertToFarenheit);
