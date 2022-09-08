      // Step 1
      let number = 10;
      function add7(num) {
          return num + 7;
      }
      console.log(add7(number));

      // Step 2
      function multiply( num1, num2){
          return num1 * num2;
      }
      console.log(multiply(2,3));

      // Step 3
      function capitalize(string){
          return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
      }
      console.log(capitalize("this should also work TEST"));

      // Step 4
      function lastLetter(string){
          return string.slice(string.length-1);
      }
      console.log(lastLetter("the last letter is zabczxcdf"));