# Binary-Converter
A numeric converter from binary to decimal

# Introduction
Created as a learning project using HTML, CSS and JavaScript. The main goal of this project is to understand binary(base 2 numeral system), and provide an easy way of conversion for the decimal system(base 10).
For making this aplication i had to follow certain limitations:

<ul>
  <li>Arrays may not be used to contain the binary digits entered by the users.</li>
  <li>Determining the decimal equivalent of a particular binary digit in the sequence must be calculated using a single mathematical function, for example the natural logarithm. It's up to you to figure out which function to use.</li>
</ul>
  
# What Binary numbers are?

Binary is a base-2 numeral system whose symbols are expressed using only 1 or 0. It is the pillar of digital electronic circuitry by using logic gates, as 0 and 1 represents 1 pixel and stands for if the circuit is "on" or "off" working the same as how computers stores information.

# How does the conversion of binary to decimal works?

For converting <b>Binary</b> to <b>Decimal</b> we should consider the number length and its positions. For example, lets we the binary number 1011 equivalent to 11 in decimal scale. 
The number length is equal to 4, but the major position on its number is 3 as we count it as 3 - 2 - 1 - 0, making the last 1 in position 0 and the first 1 in position 3.
Now, we must consider what is the meaning of knowing the numbers positions. As we know, binary is a base-2 numeral system, so for move forward with the conversion we'll need to make the following calculus: 2 to the power of (number position) multiplied to the binary number.<br>
Having that in mind, we are able to convert binary to decimal.<br>
Lets retake our example: 1011 = 11<br>
(p. stands for Position)<br>
<b>1</b> (p.3) <b>0</b> (p.2) <b>1</b> (p.1) <b>1</b> (p.0)<br>
So pow(2,0) * 1 + pow(2,1) * 1 + pow(2,2) * 0 + pow(2,3) * 1 = 1 + 2 + 0 + 8 = 11

# Biggest Challenges

The biggest challenge of this project was coming up with a function, without the use of arrays that would invert the number positions for conversion, so for that i came up with a while loop that would take the number length and invert its positions. I stored it in a variable that contains the method charAt() that returns a new string consisting of the single code unit located at the specified offset into the string. and than i made the calculus for conversion.

function binaryToDecimal(val) {<br>
    let sum = 0;<br>
    let i = 0;<br>
    if (num.length <= 8){<br>
      while (i < val.length) {<br>
        let bit = val.charAt(val.length - i - 1);<br>
        //if num is 100:<br>
        //first iteration: 3 - 0 - 1 = position 2 = 0<br>
        //second iteration: 3 - 1 - 1 = position 1 = 0<br>
        //third iteration: 3 - 2 - 1 = position 0 = 1<br>
        if (parseInt(bit) == 0 || parseInt(bit) == 1) <br>
        {<br>
        sum += parseInt(bit) * Math.pow(2, i);<br>
        //if num is 100:<br>
        //0 * 2 ** 0 = 0<br>
        //0 * 2 ** 1 = 0<br>
        // 1 * 2 ** 2 = 4<br>
        }<br>
  
# Parameters

  <ol>
  <li>User can enter up to 8 binary digits in one input field</li>
  <li>User must be notified if anything other than a 0 or 1 was entered</li>
  <li>User views the results in a single output field containing the decimal (base 10) equivalent of the binary number that was entered</li>
  <li>User can enter a variable number of binary digits</li>  
  <li>Reset button to reset display</li>
</ol>

# Parameter Screenshots

![image](https://user-images.githubusercontent.com/80483432/122691204-936c9100-d204-11eb-9d26-6493b03f7ccd.png)

1-

![image](https://user-images.githubusercontent.com/80483432/122691297-2b6a7a80-d205-11eb-8195-71a7ced3dc60.png)

![image](https://user-images.githubusercontent.com/80483432/122691341-74baca00-d205-11eb-8087-1d7be2474f9d.png)

2-

![image](https://user-images.githubusercontent.com/80483432/122691360-9b790080-d205-11eb-921f-80780477b193.png)

3-

![image](https://user-images.githubusercontent.com/80483432/122691401-d9762480-d205-11eb-97e3-2a4aabb7e397.png)


# Link

https://pecosaints.github.io/Binary-Converter/

