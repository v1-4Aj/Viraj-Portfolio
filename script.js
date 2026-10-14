

// /* intro to js
// 1. variables
// 2.function
// 3.pops ups
// 4.conditional statements
// 5.loops
// 6.error handling
// 7.event listeners
// 8.dom
// */
// //alert("welcome to my website :-) ");
// //let name = "viraj";
// let name = prompt("what is your name : ");
// let age = 18;
// //alert("welcome to my website " + name);
// // this is hardcoding where we beforehand give the input 
// //function def
// function add(a,b){
//   let num1 = a;
//   let num2 = b;
//   result = num1 + num2;
//   return result;
// }
// //function def
// //function greet(){
//   //alert("this is a greet function pop up!");
  
// //}
// //function call
// //greet();

// //function call add
// let answer = add(8,2);
// console.log(answer);
// //console.log to get the output in console just like cout or printf or print 
// //conditional statements
// //if(cond1){
//   //code will execute if cond1 is true 

// //else if (cond2){
//   //code will execute if cond2 is true 
// //}
// //else(cond3){
//   // code will execute if both of the cond are false
// //}
// //for loop 
// //for(intialization:condition:updation){
// //body of loop
// //statements to be executed
// //}
// for( let i=0;i<=10;i++){
//   console.log(i);
// }
// const control_of_toggle_btn = document.getElementById("toggle-theme");
// control_of_toggle_btn.addEventListener('click',function(){
//   console.log("toggle button was clicked!");
// });
// document.addEventListener('keydown',function(event){
//   console.log("keydown event triggered with :" + event.key);
// })// used function(event)as it stores the info it creates special data packets called an event object holds info about specific keypress therefore using event.key it extracts the name of key pressed this info is stored in event //
// window.addEventListener('resize',function(){
//   console.log("window was resized");
// });
// window.addEventListener('scroll',function(){
//   console.log("window was scroll:" );
// });
// const control_of_contact_form = document.getElementById("contact-me");
// control_of_contact_form.addEventListener('submit',function (e) {
//   e.preventDefault;//to prevent page from refreshing//
//   console.log("contact form was submitted");
// }//document.getElementById("contact-me.value"); to get the content that was submitted use .value//
// );
// function getuser(id){
//   const users = {
//     1: "viraj",
//     3:"manthan"
//   };
// if (!users[id]){
//   throw new Error(`No user found with the id${id}`);// use backtick wrna error aajayega 
// }
// return users[id];
// }
// function runbroken(){
//   console.log("fetching user 1:"+ getuser(1));
//   console.log("fetching user 2:"+ getuser(2));
//   console.log("fetching user 3 :"+ getuser(3));
// }
// function runhandled(){
//   const ids = [1,2,3];
//   ids.forEach(id=>{//each ka E capital wrna error and this method to use jb error ho toh pura code doesnt stop working instead error ko error btake it moves onto next execution//
//     try{
//       console.log("fetching user :"+id+ getuser(id));
//     }
//     catch (error){
//       console.log("could not find  user :"+id+ error.message);
//     }
//     finally{
//       console.log("done trying user : "+id);
//     }
//   });
//   console.log("processing completed!");
// }
// //ERROR 
// //tasks for javascript
// //1. make the toggle button work
// //2.make admin login button work
// //3.make contact me section capture user data and store in DB
// //4.make admin log in section work- check creds and show responses
// //5.fetch user messages from the DB

// // Task 2 
const control_of_Admin_btn = document.getElementById("Admin-btn");
const control_of_Admin_login= document.getElementById("Admin");
const control_of_user_response_section=document.getElementById("user");
control_of_Admin_btn.addEventListener('click',function(){
  control_of_Admin_login.style.display = "block";// from none to block 
// first we took the control of the admin section and admin button from html so that we can display the admin log in section when the admin log in button is clicked , also we used style.display as display is set to none in css//
}
);
//task make toggle button work
const toggle_theme_btn = document.getElementById("toggle-theme");
toggle_theme_btn.addEventListener('click',function(){
  document.body.classList.toggle("light-mode")//document.bodyThis tells the JavaScript engine exactly where to look on your website. It says: "Go find the main HTML <body> container (which holds the entire canvas of the webpage)."2. .classListThis tells the browser to look at the list of class names currently attached to that <body> tag. It's like checking the labels stuck to a box.3. .toggle("light-mode")This is the magic switch command. JavaScript checks the class list and makes a quick decision:If it DOES NOT see "light-mode": It instantly slaps the label on. (Your CSS sees this and swaps your paint buckets to the light theme!)If it ALREADY sees "light-mode": It instantly rips the label off. (Your CSS snaps back to your default premium dark theme!)
})
// making 3d look like scrolling
const deck = document.getElementById("deck-wrapper");
let scrollStopTimer;

// const deck = ...: Finds your new HTML wrapper on the screen and gives it a shortcut name (deck) so we can talk to it in code.let
//   scrollStopTimer;: Creates an empty timer box in memory. We will use this like a stopwatch to track the exact moment your finger stops scrolling.

window.addEventListener("scroll",function(){
  deck.classList.add("is-scrolling");
  clearTimeout(scrollStopTimer);
  scrollStopTimer= setTimeout(()=> {
    deck.classList.remove("is-scrolling");
  },150);
}); //window.addEventListener("scroll",function() Sets up a silent sensor watching your entire browser screen window framework. The exact millisecond your mouse wheel spins or your finger swipes the trackpad, the sensor fires
// deck.classList.add("is-scrolling");The script immediately slaps the .is-scrolling label onto your main container. The moment CSS sees this label, it activates all those 3D physics changes we looked at above!
// clearTimeout(scorllStopTimer) if the user is scrolling continuously, this line keeps hitting the reset button on our stopwatch so the website doesn't snap flat prematurely mid-scroll.
// setTimeout(..., 150);: This is our custom stopwatch delay rule. It tells the browser: "Wait exactly 150 milliseconds (a tiny fraction of a second) after the last detected scroll movement."deck.classList.remove("is-scrolling");: The moment that 150ms timer runs out, it means your finger has officially left the screen or trackpad. The script rips the .is-scrolling label away, and your website instantly and smoothly shifts back to flat 2D layout.
const sheet_url= "https://script.google.com/macros/s/AKfycbw5LQCuo8MY7RlQKF0u-WzT9ck0Tpsy4ZQ68FEq5dbaLiLIpaiXYuKRVSm3Jsq_4zg2/exec"
// API, or Application Programming Interface, is a set of rules and protocols that allows different software applications to communicate and share data with one another. the fromat we see in api's is JSON KEY VALUE PAIR
// methods in api  to get info from backend we use  GET in api  where as to send  we use POST api  is a bridge between fe and be 
// famous tool for api is POSTMAN

//task 3 capture info from contact me form.

const control_of_contact_form = document.getElementById("contact-me");

control_of_contact_form.addEventListener("submit",async function(event){
  let name = document.getElementById("input-name").value;
   let email = document.getElementById("input-email").value;
   let message  = document.getElementById("input-message").value;
   //let date = Date().toLocalString();

  try{
    let response = await fetch(
      sheet_url,
      {
        method: "POST",
        headers:{
          "Content-Type":
            "text/plain;charset=utf-8"
        },
        body: JSON.stringify({
          action:"save_message",//google appscript mae save_message likha hai agr same nai hua toh data wont be stored//
          name:name,
          email: email,
          msg:message
          
        })
        
      }
    );
  let result = await response.json();
  if(result.success){
    alert("Message submitted,will get back to you shortly!");
  }
  else{
    alert("message could not be saved ");
    
  }
  }
  catch(error){
    console.error(error);
    alert("There was a problem submitting the message!");
  }
});
//task make the admin login section work
let control_of_Admin_form = document.getElementById("Admin-form");//submit event happens at div not at section //
control_of_Admin_form.addEventListener("submit",async function(event){
  event.preventDefault();
  let Name = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  try{
    let response = await fetch(
      sheet_url,
      {
        method:"POST",
        headers:{
          "Content-type":
            "text/plain;charset=utf-8"
        },
        body: JSON.stringify({
          action:"login",
          username: Name,
          password: password
        })
      }
    );
    let result = await response.json();
    if(result.success){
      alert("LOGIN successfull");
      //admin log in should disappear and user responses should appear
      control_of_Admin_login.style.display="none";// none make it disappear
      control_of_user_response_section.style.display="block";//blockn makes it visible
      getUserMessages();
    
    }
    else{
      alert("ACESS DENIED");
    }
  }
  catch(error){
    console.error(error);
    alert("There was an error in loggin in!!");
  }
  
})
 async function getUserMessages() {
  try{
    let response = await fetch(
      sheet_url
    );

    let result = await response.json();

    if(!result.success){
      alert("Could not fetch the messages.");
      return; //the function will not run further once a return is encountered.
    }

    const control_of_user_messages_div = document.getElementById("user-messages");

    result.messages.forEach(
      responses => {
        let control_of_new_div = document.createElement("div");

        let nameParagraph = document.createElement("p");
        nameParagraph.textContent = "Name: " + responses.name;

        let emailParagraph = document.createElement("p");
        emailParagraph.textContent = "Email: " + responses.email;

        let messageParagraph = document.createElement("p");
        messageParagraph.textContent = "Message: " + responses.msg;

        let dateParagraph = document.createElement("p");
        dateParagraph.textContent = "Date: " + responses.date;

        let separater = document.createElement("hr");

        control_of_new_div.appendChild(nameParagraph);

        control_of_new_div.appendChild(emailParagraph);

        control_of_new_div.appendChild(messageParagraph);

        control_of_new_div.appendChild(dateParagraph);

        control_of_new_div.appendChild(separater);

        control_of_user_messages_div.appendChild(control_of_new_div);

        

        
      }
    )
  }

  catch(error) {
    console.error(error);
    alert("There was a problem in fetching messages from DB!");
  }
};