// <---------- Write a program that return your age in days. (take age as an input) ---------->

function calculateAge(age) {
    const daysInAYear = 365;
    
    const ageInDays = age * daysInAYear;
    
    return ageInDays;
  }
  
  const inputAge = parseInt(prompt("Enter your age:"));
  
  if (!isNaN(inputAge)) {
    const ageInDays = calculateAge(inputAge);
    console.log("Your age in days " + ageInDays + " days.");
  } else {
    console.log("Invalid input. Please enter a valid age as a number.");
}
  


// <------------ create a function that takes a number as an argument, increments the number by +1 and returns the result. (take number as an input) ------------->

function incrementNumber(number) {
    return number + 1;
  }
  
  const inputNumber = 7;
  const result = incrementNumber(inputNumber);
  console.log("The result after incrementing the number is: " + result);
  

// <--------- create a function that takes a number as an argument, increments the number by +1 and returns the result. (take number as an input) -------- >

// function decrementNumber(number) {
//     return number - 1;
//   }
  
//   const inputNumber = 7;
//   const result = decrementNumber(inputNumber);
//   console.log("The result after incrementing the number is: " + result);




// <---------- create a function that take a number and return square of a number ----------->

    // function squareNumber(number) {
    //     return number * number;
    //   }
    
    //   // Example usage:
    //   const inputNumber = 7; // You can change this number as needed
    //   const squaredResult = squareNumber(inputNumber);
    //   console.log("The square of the number is: " + squaredResult);



// <--------- create a function that tells current time in year-month-date format.------->

function getCurrentDateTime() {
    const now = new Date();
  
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const date = String(now.getDate()).padStart(2, '0');
  
    const currentTime = `${year}-${month}-${date}`;
    return currentTime;
  }
  
  const currentDateTime = getCurrentDateTime();
  console.log(currentDateTime);
  


// <-------- create a function that tells current time from date object in H:i:s format ------->


function getCurrentTime() {
    const now = new Date();
  
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
  
    return `${hours}:${minutes}:${seconds}`;
  }
  
  const currentTime = getCurrentTime();
  console.log(currentTime);
  