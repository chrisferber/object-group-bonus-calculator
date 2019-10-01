const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

function bonusCalculator (employee) {
console.log('in bonusCalculator');
for (i=0; i<employees.length; i++) {
  if (employee.reviewRating == 3) {
let bonus = employee.annualSalary * .04;
return bonus;
  } else if (employee.reviewRating == 4) {
    bonus = employee.annualSalary * .06;
    return bonus;
  } else if (employee.reviewRating == 5) {
    bonus = (employee.annualSalary * .1)
    return bonus;
  }
  else {
    return 'no bonus';
  }
}


}

console.log(bonusCalculator(employees[0]));
console.log(bonusCalculator(employees[1]));
console.log(bonusCalculator(employees[2]));
console.log(bonusCalculator(employees[3]));
console.log(bonusCalculator(employees[4]));
console.log( employees );
