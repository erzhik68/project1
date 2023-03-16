let money = +prompt("Ваш бюджет на месяц?", ""),
  time = prompt("Введите дату в формате YYYY-MM-DD", "");

const appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false,
};

for (let i = 0; i < 2; i++) {
  let question1 = prompt(
      "Введите обязательную статью расходов в этом месяце",
      ""
    ),
    question2 = prompt("Во сколько обойдется?", "");

  if (
    typeof question1 === "string" &&
    typeof question1 != null &&
    typeof question2 != null &&
    question1 != "" &&
    question2 != "" &&
    question1.length < 50
  ) {
    console.log("done");
    appData.expenses[question1] = question2;
  } else {
    continue;
  }
}

appData.moneyPerDay = appData.budget / 30;

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
  console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
  console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
  console.log("Высокий уровень достатка");
} else {
  console.log("Произошла ошибка");
}
