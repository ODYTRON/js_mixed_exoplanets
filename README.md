* randnum.js

*** This program is made for the Fullstack engineer path of codecademy

** The randnum.js  is a program that it takes two names and two ages and returns the following in a 

single line format :

0. A greeting 
1. A hex color.
2. A lucky number.
3. An exoplanet.


*** 1. The hex color is the combination of two hex colors. if the first random color has same characters with the second, these characters are remain intact. If the first color has different characters with the second, these diffrent characters are replaced with random characters and the first color is returned modified according to these changes.
*** 2. The lucky number is resulting from the sum of two inserted ages divided with a random number between 1 and 1000  (randomnumber / sumage)
*** 3. The exoplanet is a random exoplanet from an array of aprox 400 exoplanets

The typical message on the screen will look like this : 

Dear Odytron & Odytron, the hex color of your relationship is #,F,C,6,0,2,F. The lucky number of your relationship is 3. The exoplanet to chant your results (color and number), is KMT-2018-BLG-2718 b
* To call the program simply console.log the below example replacing the values.
console.log(`Dear ${users('Odytron','Odytron')}, the hex color of your relationship is ${getFinalColor()}. The lucky number of your relationship is ${birthdateLucky(38,38)}. The exoplanet to chant your results (color and number), is ${randomExoplanet()}`);

* For improvements and ideas of other uses :
   gizmapps@gmail.com
