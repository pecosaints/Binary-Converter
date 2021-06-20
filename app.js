//Binary Converter:
const BinNunInpt = document.querySelector("#BinNunInpt");
const displayInput = document.querySelector("#displayInput");
const convertBtn = document.querySelector("#convertBtn");
const resetBtn = document.querySelector("#resetBtn");

//Function for Conversion
convertBtn.addEventListener("click", function(){
  let num = BinNunInpt.value;
  function binaryToDecimal(val) {
    let sum = 0;
    let i = 0;
    if (num.length <= 8){
      while (i < val.length) {
          //if num is 100:
          //first iteration: 3 - 0 - 1 = position 2 = 0
          //second iteration: 3 - 1 - 1 = position 1 = 0
          //third iteration: 3 - 2 - 1 = position 0 = 1
        let bit = val.charAt(val.length - i - 1);
        if (parseInt(bit) == 0 || parseInt(bit) == 1) 
        {
        sum += parseInt(bit) * Math.pow(2, i);
        //if num is 100:
        //0 * 2 ** 0 = 0
        //0 * 2 ** 1 = 0
        // 1 * 2 ** 2 = 4
        }
        else
        {
          alert("Input a valid Number");
          sum = "";
          BinNunInpt.value = "";
          break;
        }
        i++;
      }
      return sum;
      //If number length is more then 8 digits.
    }else{
      alert("Input a number up to 8 binary digits.")
    }
  }

  displayInput.value = binaryToDecimal(num);
})

resetBtn.addEventListener("click", function(){
  displayInput.value = "";
  BinNunInpt.value = "";
})
