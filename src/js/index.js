//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";
import SecondCounter from "./component/secondCounter.jsx";


//import your own components
let one = 0;
let two =0;
let three = 0;
let four = 0;
let five = 0;
let six =0;

setInterval(() => {
    one++;
    if(one > 9){
      one = 0;
      two++;
    }

    if(two > 9){
        two = 0;
        three++;
      }

      if(three > 9){
        three = 0;
        four++;
      }
      if(four > 9){
        four = 0;
        five++;
      }
      if(five > 9){
        five = 0;
        six++;
      }
      

     console.log(six,five,four, three, two, one);
    
     ReactDOM.render(
        <SecondCounter one={one} two={two} three={three} four={four} five={five} six={six}/>,
        document.querySelector("#app")
      );
    }, 1000);