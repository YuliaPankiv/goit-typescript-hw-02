/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum IsWeekend  {Saturday, Sunday};

function isWeekend(dayWeek): boolean {
return  dayWeek===IsWeekend.Saturday  || dayWeek===IsWeekend.Sunday? true:false
}