// Chapter#1

// #1 
// alert("Welcome!")

// #2
// var msg1="JavaScript ALert"
// var msg2="\n\nError! Please enter a valid password"
// alert(msg1+msg2)

// #3
// var msg1="JavaScript Alert"
// var msg2="\n\nWelcome to Js Land..."
// var msg3="\nHappy Coding!"
// alert(msg1+msg2+msg3)

// #4
// var msg1="JavaScipt ALert"
// var msg2="\n\nWelcome to Js Land..."
// var msg3="\n\nHappy Coding!"
// var msg4="\n\n▢ Prevent this page from making additional dialoges"

// alert(msg1+msg2)
// alert(msg1+msg3+msg4)

// #5
// Type this in browser's console

// var msg="Hello... I can run Js through my web browser's console"
// alert(msg)


// Chapter#2

// #1
// var username;

// #2
// var myName;
// myName ="Fahad Iqbal";

// #3
// var message;
// message ="Hello World!"
// alert(message)

// #4
// var name;
// name ="Jhone Doe"
// var age;
// age ="15 Years"
// var qualifucation
// qualifucation ="Certified Mobile Application Development"

// alert(name)
// alert(age)
// alert(qualifucation)

// #5

// var name = "PIZZA"
// var msg = ""
// for (var i = name.length ; i >= 1 ; i--) {
//     msg += name.slice(0,i) + "\n"
// }
// alert(msg)

// #6

// var email;
// email = " example@example.com"
// var fullLine;
// fullLine = "My email address is"

// alert(fullLine + email)

// #7

// var book;
// book = " A smarter way to learn JavaScript"
// var fullLine;
// fullLine = "I am trying to learn from the Book"

// alert(fullLine + book)

// #8

// var msg;
// msg = "Yah! I can write HTML content through JavaScript."

// document.write(msg)

// Chapter #3

// #1

// var age = " 15"
// var msg = "I am"
// var msg1 = " years old."

// alert(msg + age + msg1)

// #2

// var msg = "You have visited this site 14 times!"

// alert(msg)

// #3

// var msg1="My birth year is"
// var age=" 1990 </br>"
// var msg2="Data type of my declared variable is number"

// document.write(msg1+age)
// document.write(msg2)

// #4

// var name=prompt("Enter your Name")
// var product=prompt("Enter Product's Title")
// var quantity=prompt("Enter Quantity")

// var msg1=(" ordered")
// var msg3=(" on XYZ clothing store")

// document.write(name+msg1+quantity+product+msg3)

// Chapter #4

// #1

// var msg1="I am"
// var msg2=" learning JavaScript"
// var msg3=" from Saylani"

// document.write(msg1+msg2+msg3)

// #2

// Legal
// var msg="Hey!"
// var msg1="This"
// var msg_="is"
// var msgH="Fahad"
// var msg$="Iqbal"

// Illegal
// var 1msg="Hey!"
// var @msg="This"
// var 5msg="is"
// var -msg="Fahad"
// var #msg="Iqbal"

// #3

// var msg="Rules for naming JS variables </br></br>"

// var msg1="Variable names can only contain numbers, $ and _ . For example : $my_1stVariable </br>"
// var msg2="Variable must begin with a letter, $ or _ . For example : $name, _name or name </br>"
// var msg3="Variable names are case sensitive </br>"
// var msg4="Variable name should not be Js keywords </br>"

// document.write(msg+msg1+msg2+msg3+msg4)

// Chapter #5

// #1

// var firstValue=prompt("Enter First Value")
// var secondValue=prompt("Enter Second Value")
// var sign="+"

// msg1="Sum of "
// msg2=" and "
// msg3=" is "

// document.write(msg1+firstValue+msg2+secondValue+msg3+((+firstValue)+(+secondValue)))

// #2

// var val1=prompt("Enter First Value")
// var sign=prompt("Enter operation")
// var val2=prompt("Enter Second Value")

// msg1="Sum of "
// msg2=" and "
// msg3=" is "
// mtg1="Subtraction of "
// mug="Multiple of "
// mvg="Division of "

// console.log(val1+sign+val2)

// if (sign === "+"){
//     document.write(msg1+val1+msg2+val2+msg3+((+val1)+(+val2)))
// }
// else if(sign === "-"){
//     document.write(mtg1+val1+msg2+val2+msg3+(val1-val2))
// }
// else if (sign === "*"){
//     document.write(mug+val1+msg2+val2+msg3+val1*val2)
// }
// else if (sign === "/"){
//     document.write(mvg+val1+msg2+val2+msg3+val1/val2)
// }

// #3


// #4

// var val1=prompt("Enter no. of Tickets")
// var tick="600"
// var msg1="Total cost to buy "
// var msg2=" tickets to a movie is "
// var msg3="PKR"
// document.write(msg1+val1+msg2+(val1*tick)+msg3)

// #5

// for (var i = 1 ; i <= 10 ; i++) {
//     document.write("8 " + "x " + i + " = " + 8*i + "</br>")
// }

// #6

// var cel="30"
// msg1="°C is "
// msg2=" °F"
// document.write(cel+msg1+(cel*9/5+32)+msg2)

// var far="75"
// msg1="°F is "
// msg2="°C"
// document.write(far+msg1+(far-32*5/9)+msg2)

// #7

// var val1="750"
// var val2="3"
// var vl1="150"
// var vl2="7"
// var $ship="100"

// msg1="Price of item 1 is "
// msg2="Quantity of item 1 is "
// msg3="Price of item 2 is "
// msg4="Quantity of item 2 is "
// msg5="Shipping Charges "
// msg6="Total cost of your is "

// document.write(msg1+val1+"<br>"+msg2+val2+"<br>"+msg3+vl1+"<br>"+msg4+vl2+"<br>"+msg5+$ship)
// document.write("<br><br>"+msg6+((+val1*val2)+(+vl1*val2)+(+$ship)))

// #8

// var obt=prompt("Enter Obtained Marks")
// var tot=prompt("Enter Total Marks")

// msg1="Obtained Marks = "
// msg2="Total Marks = "
// msg3="Percentage = "

// document.write(msg1+obt+"<br>"+msg2+tot+"<br><br>"+msg3+(obt/tot*100))

// Chapter # 6 - 9

// #1

// msg="Result :"
// dot="..........................."
// sg="Now the value of a is : "
// msg1="The value of ++a is : 11"
// msg2="The value of a++ is : 11"
// msg3="The value of --a is : 11"
// msg4="The value of a-- is : 11"
// var val1="10"
// var val2="11"
// var val3="12"

// document.write(msg+"<br><br>"+dot+"<br><br>"+msg1+"<br>"+sg+"11"+"<br><br>"+msg2+"<br>"+sg+"12"+"<br><br>"+msg3+"<br>"+sg+"11"+"<br><br>"+msg4+"<br>"+sg+"10")

// #3

// var name=prompt("Enter your name")
// msg="Welcome! "

// document.write(msg+name)

// #5

// var val = prompt("Enter the value")

// if (val === "") {
//     for (var i = 1; i <= 10; i++) {
//         document.write("5 " + "x " + i + " = " + 5 * i + "</br>")
//     }
// }
// else if (val === "1","2","3","4","5","6","7","8","9","10") {
//     for (var i = 1; i <= 10; i++) {
//         document.write(val + " x " + i + " = " + val * i + "</br>")
//     }
// }

// #6

// var sub1=prompt("Enter First Subject")
// var sub2=prompt("Enter Second Subject")
// var sub3=prompt("Enter Third Subject")
// var tmark="100"
// var obtmark1=prompt("Enter Obtained marks of First Subject")
// var obtmark2=prompt("Enter Obtained marks of remaining two Subject")

// document.write("<table><tr><td>+sub1+</table></tr></td>");

// Chapter # 9 - 10

// #1

// var city=prompt("Enter City Name")

// if (city === "Karachi") {
//     alert("Welcome to City of Lights")
// }

// #2

// var gender=prompt("Enter your Gender")

// if (gender === "Male") {
//     alert("Welcome Sir!")
// }
// else if (gender === "Female") {
//      alert("Welcome Ma'am!")
// }

// #3

// var color=prompt("Enter Signal Color")
// var msg1="Must Stop"
// var msg2="Ready to Move"
// var msg3="Move now"

// if (color === "Red") {
//     document.write(color+" = "+msg1)
// }
// else if (color === "Yellow") {
//     document.write(color+" = "+msg2)
// }
// else if (color === "Green") {
//     document.write(color+" = "+msg3)
// }

// #4

// var a = 4;
// if (++a === 5){ 
//     alert("given condition for variable a is true"); 
// }

// var b = 82; 
// if (b++ === 83){ 
//     alert("given condition for variable b is true"); 
// }

//  var c = 12; 
//  if (c++ === 13){ 
//      alert("condition 1 is true"); 
// } 
//  if (c === 13){ 
//      alert("condition 2 is true"); 
// } 
//  if (++c < 14){ 
//      alert("condition 3 is true");
//  } 
//  if(c === 14){ 
//      alert("condition 4 is true"); 
// }

// var materialCost = 20000; 
// var laborCost = 2000; 
// var totalCost = materialCost + laborCost; 
// if (totalCost === laborCost + materialCost){ 
//     alert("The cost equals"); 
// } 

// if (true){ 
//     alert("True"); 
// } 
// if (false){ 
//     alert("False"); 
// } 

// if("car" < "cat"){ 
//     alert("car is smaller than cat"); 
// }

// #6

// var tmark=prompt("Enter Total Marks")
// var obtmark=prompt("Enter Obtained Marks")

// var g1="A-One"
// var g2="A"
// var g3="B"
// var g4="Fail"

// var r1="Excellent"
// var r2="Good"
// var r3="You need to improve"
// var r4="Sorry"
// var percen=((obtmark/tmark)*100)
// document.write("Marks Sheet"+"<br>"+"<br>"+"<br>"+"Total Marks"+" : "+tmark+"<br>"+"Marks Obtained"+" : "+obtmark+"<br>"+"Percentage"+" : "+percen+"%"+"<br>");
// if (percen === "80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100") {
//     document.write("Marks Sheet"+"<br>"+"<br>"+"<br>"+"Total Marks"+" : "+tmark+"<br>"+"Marks Obtained"+" : "+obtmark+"<br>"+"Percentage"+" : "+percen+"%"+"<br>"+"Grade"+" : "+g1+"<br>")
// }
// else if (percen === "70,71,72,73,74,75,76,77,78,79") {
//     document.write("Marks Sheet"+"<br>"+"<br>"+"<br>"+"Total Marks"+" : "+tmark+"<br>"+"Marks Obtained"+" : "+obtmark+"<br>"+"Percentage"+" : "+percen+"%"+"<br>"+"Grade"+" : "+g2)
// }

// #7

// var sc=prompt("Guess the Number : ")
// var sec="4"

// if (sc === sec){
//     alert("Bingo! Correct Answer")
// }
// else if (sc === "3"){
//     alert("Close enough to the correct answer")
// }

// #8

// var num=prompt("Enter Number : ")
// if (num / "3"){
//     alert(num/"3")
// }

// #9

// #10

// var temp=prompt("Enter Temprature : ")
// if (temp >= 40){
//     alert("It's too hot outside")
// }
// else if (temp >= 30){
//     alert("The Weather today is Normal")
// }
// else if (temp >= 20){
//     alert("Today’s Weather is cool")
// }
// else if (temp >= 10){
//     alert("OMG! Today’s weather is so Cool")
// }
// else if (temp < 10){
//     alert("It's freezing cold")
// }

// #11

// var val1=prompt("Enter First Value : ")
// var val2=prompt("Enter Second Value : ")
// var sign=prompt("Enter Operator : ")

// if (sign === "+") {
//     document.write(val1+" + "+val2+" = "+((+val1)+(+val2)))
// }
// else if (sign === "*") {
//     document.write(val1+" * "+val2+" = "+(val1*val2))
// }
// else if (sign === "-") {
//     document.write(val1+" - "+val2+" = "+(val1-val2))
// }
// else if (sign === "/") {
//     document.write(val1+" / "+val2+" / "+(val1/val2))
// }
// else if (sign === "%") {
//     document.write(val1+" % "+val2+" = "+((val1/val2)*100)+"%")
// }

// Chapter # 12 - 13

// #1

// var inp=prompt("Enter Number")

// if (inp = "65,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90"){
//     alert("Upper Case Letters")
// }
// else if (inp = "97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122"){
//     alert("Lower Case Letters")
// }
// else{
//     alert("Number")
// }

// #2

// var val1=prompt("Enter First Value")
// var val2=prompt("Enter Second Value")

// if (val1 > val2){
//     alert(val1+" is larger")
// }
// else if (val1 < val2){
//     alert(val2+" is larger")
// }
// else if (val1 === val2){
//     alert("Both values are equal")
// }

// #3

// var inp=prompt("Enter Value 0 - 10 (+/-)")

// if (inp = "1,2,3,4,5,6,7,8,9,10"){
//     alert("Positive!")
// }
// else if (inp = "-1,-2,-3,-5,-6,-7,-8,-9,-10"){
//     alert("Negative!")
// }
// else if (inp === "0"){
//     alert("Zero!")
// }

// #4

// var val=prompt("Enter Character")

// if (val === "a,e,i,o,u"){
//     alert("Vowel!")
// }
// else{
//     alert("False")
// }

// #5

// var pass=("fahad")

// var ent=prompt("Enter Password")

// if (ent === ("")){
//     alert("Enter Password")
// }
// else if (ent === pass){
//     alert("Correct! Your password matches the orignal one")
// }
// else{
//     alert("Wrong Password!")
// }

// #6

// var greeting; 
// var hour = 13; 
// if (hour < 18) { 
//     alert("Good day");
// } 
// else {
//     alert("Good evening"); 
// }

// #7

// var time=prompt("Enter Time (24-Hour)")

// if (time >= 0000 && time < 1200){
//     alert ("Good Morning!")
// }
// else if (time >= 1200 && time < 1700){
//     alert("Good Afternoon!")
// }
// else if (time >= 1700 && time < 2100){
//     alert("Good Evening!")
// }
// else if (time >= 2100 && time < 2359){
//     alert("Good Night!")
// }

// Chapter # 14 - 16

// #1

// var studentNames=[]

// #2

// var studentNames=[]

// #3

// var cities=["Karachi","Islamabad","Peshawar","Lahore"]

// #4

// var num=[1,2,3,4,5,6,7,8]

// #5

// var boo=[True,False]

// #6

//var mixedArray=["WhatsApp","Messenger",2,false]

// #7

// var qualifucation=["MBA","B.COM","B.SC","M.COM","BBA","M.PHIL"]
// var msg="Qualifications"

// document.write(msg+"<br><br>"+"1) "+qualifucation[0]+"<br>"+"2) "+qualifucation[1]+"<br>"+"3) "+qualifucation[2]+"<br>"+"4) "+qualifucation[3]+"<br>"+"5) "+qualifucation[4]+"<br>"+"6) "+qualifucation[5])

// #8

// var stud=["Ali","Bilal","Fahad"]
// var score=[320,250,440]
// var msg="Score of "

// document.write(msg+stud[0]+" is "+score[0]+". Percentage = "+(score[0]/500)*100+"%"+"<br>")
// document.write(msg+stud[1]+" is "+score[1]+". Percentage = "+(score[1]/500)*100+"%"+"<br>")
// document.write(msg+stud[2]+" is "+score[2]+". Percentage = "+(score[2]/500)*100+"%")

// #9

// var arr=["Blue"," Black"," Green"," Red"," Yellow"," Maroon"]

// console.log("Colors : "+arr)
// document.write("Colors : "+arr+"<br><br>")

// a)
// var addCol=prompt("Enter the color to add in the beginning : ")
// col.unshift(addCol)
// console.log(col)
// document.write("Colors : "+col+"<br><br>")

// b)
// var addCol1=prompt("Enter the color to add in the end : ")
// col.push(addCol1)
// console.log(col)
// document.write("Colors : "+col+"<br><br>")

// c)
// var addCol2=prompt("Enter two color to add in the beginning : ")
// col.unshift(addCol2)
// console.log(col)
// document.write("Colors : "+col+"<br><br>")

// d)
// var reMove=prompt("Delete the First Color i.e Blue : (Press OK)")
// col.shift()
// console.log(col)
// document.write("Colors : "+col+"<br><br>")

// e)
// var reMove=prompt("Delete the First Color i.e Blue : (Press OK)")
// col.pop()
// console.log(col)
// document.write("Colors : "+col+"<br><br>")

// f)
// var addCol=prompt("Enter the Index")
// var Col=prompt("Enter the Color")
// arr.splice(1,Col)
// console.log(arr)
// document.write("Colors : "+arr+"<br><br>")

// g)
// var addCol=prompt("Enter the Index")
// var Col=prompt("Enter the no. of Color(s)")
// arr.splice(addCol,Col)
// console.log(arr)
// document.write("Colors : "+arr+"<br><br>")

// #10

// var scores=[320,650,874,220,744,211];
// document.write("Scores of Students : "+scores+"<br><br>")
// scores.sort();
// document.write("Ordered Scores of Students : "+scores)

// #11

// var cities=[" Karachi"," Islamabad"," Lahore"," Quetta"," Peshawar"]
// document.write("Cities : "+cities+"<br><br>")
// var select=cities.slice(2,4)
// document.write("Selected Cities : "+select)

// #12

// var msg=["I'm","a","Professional"];
// document.write("Array :"+"<br>"+msg+"<br><br>");
// var msg1=msg.join();
// document.write("String :"+"<br>"+msg1)

// #13

// var dev=["Keyboard","Mouse","Printer","Monitor"];
// var dev0="Keyboard";
// var dev1="Mouse";
// var dev2="Printer";
// var dev3="Monitor";
// document.write("Devices :"+"<br>"+dev+"<br><br>")
// var msg$="Out : <br>"
// document.write(msg$+dev0+"<br>"+msg$+dev1+"<br>"+msg$+dev2+"<br>"+msg$+dev3+"<br>")

// #14

// var dev=["Keyboard","Mouse","Printer","Monitor"];
// var dev0="Keyboard";
// var dev1="Mouse";
// var dev2="Printer";
// var dev3="Monitor";
// document.write("Devices :"+"<br>"+dev+"<br><br>")
// var msg$="Out : <br>"
// document.write(msg$+dev3+"<br>"+msg$+dev2+"<br>"+msg$+dev1+"<br>"+msg$+dev0+"<br>")

// #15


// Chapter # 17-20

// #1
// var arr = [];

// #2
// var arr=[1123,1012,2101]
// document.write(arr[0]+"<br>"+arr[1]+"<br>"+arr[2])

// #3

// for (var i=1 ; i <= 10; i++){
//     document.write(i+"<br>")
// }

// #4

// var val=prompt("Enter a number to show it's multiplication table")
// var val1=prompt("Enter the length of table")
// for(var i=1 ; i<=val1 ; i++ ){
//     document.write(val+" x "+i+" = "+val*i+"<br>")
// }

// #5

// var arr=["Apple"," Banana"," Mango"," Orange"," Strawberry"]
// for(var i=0; i <=4; i++){
//     document.write(arr[i]+"<br>")
// }
// var msg="Element at Index "
// for(var i=0; i<=4; i++){
//     document.write("<br>"+msg+i+" is "+arr[i]+"<br>")
// }

// #6

// document.write("Counting :"+"<br><br>")
// for( var i=1; i<=10; i++){
//     document.write(i+",")
// }
// document.write("<br><br>"+"Reverse Counting :"+"<br><br>")
// for(var i=10; i>0; i--){
//     document.write(i+",")
// }
// document.write("<br><br>"+"Even Counting :"+"<br><br>")
// for(var i=0; i<=20; i++,i++){
//     document.write(i+",")
// }
// document.write("<br><br>"+"Odd Counting :"+"<br><br>")
// for(var i=1; i<=20; i++,i++){
//     document.write(i+",")
// }

// #7

// var sc=prompt("Welcome to ABC Bakery! What would you like to have?")
// var snack = ["Cake","Apple Pie","Cookie","Chips","Patties"]

// for (var i = 0; i < snack.length; i++){
//     if(snack[i] === sc){
//         alert(sc+" is avaiable at index "+i+" in our bakery")
//         break
//     }
//     else{
//         alert("We are sorry! "+sc+" is not available at index "+i)
//     }
// }

// #8

// var arr=[24,54,78,10,58,103,58,1]
// var max = Math.max(...arr);

// document.write("Array Numbers : "+arr+"<br><br>")
// document.write("The largest number is : "+max)

// #9

// var arr=[24,54,78,10,58,103,58,1]
// var max = Math.min(...arr);

// document.write("Array Numbers : "+arr+"<br><br>")
// document.write("The largest number is : "+max)

// #10

// function multiplesOf(numbers, number) {
//         var multiples = [];
//     for (var i = 0; i < numbers.length; i++) {
//         if (numbers[i] % number === 0) {
//             multiples.push(numbers[i]);
//         }
//     }

//     return multiples;
// }

// document.write(multiplesOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 5));

                         // Chapter # 21 - 25

// #1

// var firstName=prompt("Enter First Name")
// var lastName=prompt("Enter Last Name")
// var fullName=firstName+"&ensp;"+lastName
// document.write("Name : "+fullName)

// #2

// var pmodel=prompt("Enter your favorite phone model :")
// var length=pmodel.length
// document.write("My favorite phone is : "+pmodel+"<br>"+"Length of String : "+length)

// #3

// var val="Pakistani"
// var index = val.indexOf("n")
// document.write("String : "+val+"<br>"+"Index of 'n' : "+index)

// #4

// var val="Hello World";
// var index = val.lastIndexOf("l");
// document.write("String : "+val+"<br>"+"Last Index of 'l' : "+index)

// #5

// var val="Pakistani";
// var index = val.charAt(3);
// document.write("String : "+val+"<br>"+"Character at Index 3 : "+index)

// #6

// var firstName=prompt("Enter First Name");
// var lastName=prompt("Enter Last Name");
// var fullName=firstName.concat(lastName);
// document.write("Name : "+fullName)

// #7

// var city1="Hyderabad";
// var toAdd=city1.slice(5,9);
// document.write("City : "+city1+"<br>"+"After Replacement : Islam"+toAdd)

// #8

// var msg="Ali and Sami are best friends. They play cricket and football together."
// for (var i = 0; i < msg.length; i++){
//     if (msg.slice(i,i+3) === "and"){
//         msg = msg.slice(0,i) + "&" + msg.slice(i+3)
//     }
// }
// document.write(msg)

// #9

// var msg="472"
// document.write("Value : "+msg+"<br>"+"Type : String"+"<br><br>")
// var num=Number(msg)
// document.write("Value : "+msg+"<br>"+"Type : Number")

// #10

// var msg=prompt("Enter Text : ");
// document.write("User Input : "+msg+"<br><br>");
// var msg=msg.toUpperCase();
// document.write("Upper Case : "+msg);

// #11

// var msg=prompt("Enter Text : ");
// document.write("User Input : "+msg+"<br><br>");
// var firstChar=msg.slice(0,1);
// firstChar=firstChar.toUpperCase();
// var otherChar=msg.slice(1);
// otherChar=otherChar.toLowerCase();
// var msg=firstChar+otherChar;
// document.write("Title Text : "+msg)

// #12

// var num=35.36
// document.write("Number : "+num+"<br><br>")
// var text=num.toString()
// var text=text.replace(".","")
// document.write("Result : "+text)

// #13

// var msg=prompt("Enter Username : ");
// for (i = 0; i > msg.length; i++){
//     if (i === "64" ){
//         alert("Enter a valid Username")
//     }
// }

// #14

// var msg=prompt("Welcome to ABC Bakery. What do you want to order Sir/Ma'am?");
// var msg=msg.toUpperCase();
// var items=["cake","apple pie","cookie","chips","patties"];
// for (var i = 0; i < items.length; i++){
//     if(msg === items[i]){
//         alert("Available")
//         break
//     }
//     else{
//         alert("Not Available")
//     }
// }

// #15

// var input = prompt("Enter Password : (a. It should contain alphabets and numbers b. It should not start with a number c. It must at least 6 characters long)");
// var firstChar=input.charAt(0)
// for(i = 0; i < input.length; i++){
//     if (input.length >= 6 && firstChar === ){
//         alert("Password is Valid")
//         break
//     }
//     else{
//         alert("Password is not Valid")
//     }
// }

// #16

// var msg = "University of Karachi" ;
// var arr = msg.split("");
// for (var i = 0; i < arr.length; i++){
//     document.write(arr[i]+"<br>")
// }

// #17

// var input=prompt("Enter Text :")
// var input=input.toUpperCase();
// var lastChar = input.charAt(input.length - 1);
// document.write("User Input : "+input+"<br><br>"+"Last character of input : "+lastChar)

// #18

// var msg="the quick brown fox jumps over the lazy dog";
// var word="the";
// var occur = msg.split("the").length - 1;
// document.write("Text : "+msg+"<br>There are "+occur+" occurrence(s) of word "+word)


                         // Chapter # 26 - 30

// #1

// var num=prompt("Enter Positive Integer : ");
// var round=Math.round(num);
// var floor=Math.floor(num);
// var ceil=Math.ceil(num);
// document.write("Number : "+num+"<br>Round Off value : "+round+"<br>Floor Value : "+floor+"<br>Ceil Value : "+ceil)

// #2

// var num=prompt("Enter Negative Floating point : ");
// var round=Math.round(num);
// var floor=Math.floor(num);
// var ceil=Math.ceil(num);
// document.write("Number : "+num+"<br>Round Off value : "+round+"<br>Floor Value : "+floor+"<br>Ceil Value : "+ceil)

// #3

// var num=prompt("Enter a Number : ");
// var abs=Math.abs(num);
// document.write("The absolute value of "+num+" is "+abs);

// #4

// var random=Math.random();
// var improved=(random*6)+1;
// var dice=Math.floor(improved);
// document.write("Randome dice value : "+dice)

// #5

// var toss = Math.random() * 2;
// var floor = Math.floor(toss);
// if (floor === 0){
//     document.write(floor+"<br>Random coin value : Heads")
// }
// else{
//     document.write(floor+"<br>Random coin value : Tails")
// }

// #6

// var num = Math.random() * 100;
// var floor = Math.floor(num);
// document.write("Random number between 1 and 100 : "+floor)

// #7

// var val=prompt("Enter your weight in kilograms (Only Number)");
// var value=val*1
// var result=value+" Kilograms"
// document.write(result)

// #8

// var val = prompt("Enter Number")
// var num = Math.random() * 10;
// var floor = Math.floor(num);
// if (val === floor){
//     alert("Congragulations! Your number matches the secret number")
// }else{
//     alert("Try Again!")
// }




















//Let's do it in a functional way
const square = number => Math.pow(number, 2);
console.log( square(5) ); //For example five (5)

//Result 25
//Let's do it in a functional way
const cube = number => Math.pow(number, 3);
console.log( cube(3) ); //For example three (3)

//Result 27

const result = number => `The square of ${number} is ${Math.pow(number, 2)} and the cube is equal ${Math.pow(number, 3)}`;
console.log( result(3) ); //For example three (3)

//Result Square = 9 and Cube = 27
const sum = (num1, num2) => `The sum of ${num1} and ${num2} is equal to ${num1 + num2}`;
console.log( sum(5, 3) ); //For example five and three (5, 3)

//Result = 8
const cube = (num1, num2) => {
    let product = num1 * num2;
    return `The square of the product of ${num1} and ${num2} is equal to ${Math.pow(product, 3)}`;
  }
  console.log( cube(2, 3) ); //For example two and three (2, 3)
  
  //Result = 216
  //Let's do it in a functional way
const mark = (a, b) => `The final average is ${ (a + b) / 2 }`;
console.log( mark(7, 8) );

//Result = 7.5

const numbers = [0, 1, 2, 4, 7, 20, 36, 50, 312, 344, 21, 87, 33, 34, 81, 100];
const evens = numbers.filter( n => n % 2 === 0);
console.log(evens);

//Result = 0, 2, 4, 20, 36, 50, 312, 344, 34, 100


const numbers = [2, 3, 4, 5, 10, 33];
const squares = numbers.map( (n) => Math.pow(n, 2)); // You can do n * n too
console.log(squares);

//Result = 4, 9, 16, 25, 100, 1089

const names = ['German', 'Nicolas', 'Martin', 'Micaela', 'Mateo', 'Matias', 'John', 'Gonzalo', 'Esteban', 'Paula', 'Victoria', 'Bautista', 'Carolina', 'Analia', 'Edward', 'Mirtha'];
const foo = names.filter((name) => name.toUpperCase().startsWith('M'));
console.log(foo);

//Result = Martin, Micaela, Mateo, Matias, Mirtha

const emails = ['germancutraro@hotmail.com', 'germancutraro', 'johndoe@gmail.com', 'notAndEmail', 'trucky@gmail'];
const foo = emails.filter((email) => email.includes('@') && email.endsWith('.com'));
console.log(foo);

//Result = germancutraro@hotmail.com, johndoe@gmail.com
const tasks = [
    {task: 'Make a dessert', completed: true},
    {task: 'Listen a ton of Pink Floy songs', completed: true},
    {task: 'Travel to Australia', completed: false}, // :(
    {task: 'Be happy', completed: true}, // :)
    {task: 'Studying a lot', completed: true}, //Always
  ];
  const foo = tasks.filter(task => task.completed === true);
  for (a of foo) {
    console.log(a.task);
  }
  
  //Result = Make a dessert. Listen a ton of Pink Floy songs. Be happy. Studying a lot

  const persons = [
    {name: 'John', age: 27},
    {name: 'Nicholas', age: 16},
    {name: 'Adney', age: 15},
    {name: 'Anton', age: 46},
  ];
  const adults = persons.filter(person => person.age > 18);
  const names = adults.map(n => n.name); //You can use map for the new array generate by filter, or create a for loop like below
  // for (person of adults) {
  //   console.log(person.name);
  // }
  console.log(names);
  //Result = John - Anton

  const numbers = [5, 7, 33, 88, 92];
const even = numbers.find(num => num % 2 === 0);
console.log(even);

//88 because is the firts even number
const numbers = [1, 2, 3];
const numbers2 = [...numbers];
console.log(numbers2);

// [1, 2, 3]



































































/// Chap 58-67
// // 1
// // i,ii
// var element = document.getElementById("main-content");
// var a = element.childNodes;
// var text = "";
// for (var i=0; i<a.length; i++) {
//     text = text + a[i].nodeName + " "
// }
// document.write(text);

// // iii
// var y = document.getElementsByName("main-content");
// var b = document.getElementsByClassName("render");
// for (var j=0; j<b.length; j++) {
//     document.write(b[j].innerHTML + "<br>");
// }

// // iv, v
// var y = document.getElementById("first-name");
// y.setAttribute("value", "John Doe");
// var b = document.getElementById("last-name");
// b.setAttribute("value", "Michael");
// var y = document.getElementById("email");
// y.setAttribute("value", "john@yahoo.com");