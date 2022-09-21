/*
The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

The two arrays are not empty and are the same length. Return the score for this array of answers, 
giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

If the score < 0, return 0.

For example:

checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0

P 2 inputs: first an array of letters that are the correct answers
            second an array of letters that are the students answers
    both are arrays of letters(a, b, c, d), the second may contain empty elements, 
R   a positive number (the student score after comparing the answers)
E   assert.strictEqual(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]), 6);
    assert.strictEqual(checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]), 7);
P

first we need to iterate through both arrays
we need to be able to be able to compare the arrays
we need to be able to add up the points of the arrays
we need to be able to add up the points: +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer

iterate through the array,
use conditional : 
---correct answer
if index[0] === index[0] add 4 points,  
--incorrect answer
index[0] !==index[0] minus one pt, 
--blank
index[0] === ''  add 0 points

we have 4 indexes so we will need to compare index[0] index[1] index[2] index[3]

*/

function checkExam(correctAnswers, studentAnswers) {
    //start with a score of 0
    var score = 0;
      //loop through the array of correct answer
      for(var i = 0; i < correctAnswers.length; i++) { 
          //if the answer matches the students answer add 4 to the score
          if(correctAnswers[i] === studentAnswers[i]){
          score += 4;
          }
          //if the student has an empty string for an answer, add nothing to the score
          else if(studentAnswers[i] === ""){
          score -= 0;
          }
          //if the student has an answer that is not correct and not an empty string, deduct 1 point from their score
          else {
          score -= 1
          }
      }
      //if the score is a negative number (below 0), just return 0 as the score
      if(score < 0){
      score = 0;
      };
      return score;
    };