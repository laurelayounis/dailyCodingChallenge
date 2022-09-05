/*

Your goal is to return multiplication table for number that is always an integer from 1 to 10.

For example, a multiplication table (string) for number == 5 looks like below:

1 * 5 = 5
2 * 5 = 10
3 * 5 = 15
4 * 5 = 20
5 * 5 = 25
6 * 5 = 30
7 * 5 = 35
8 * 5 = 40
9 * 5 = 45
10 * 5 = 50

*/

function multiTable(number) {
    return `1 * ${number} = ${1*number}
  2 * ${number} = ${2*number}
  3 * ${number} = ${3*number}
  4 * ${number} = ${4*number}
  5 * ${number} = ${5*number}
  6 * ${number} = ${6*number}
  7 * ${number} = ${7*number}
  8 * ${number} = ${8*number}
  9 * ${number} = ${9*number}
  10 * ${number} = ${10*number}`
  }