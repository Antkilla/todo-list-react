import { useEffect } from "react"

//useEffect a funct that takes 2 parameters:
//callback funct, the logic you want to run at times:
//and a dependency arr
useEffect(() => {
    //side effect logic here

    // optional cleanu[ logic


    return () => {
        //cleanup actions, executed before the effect runs
        //again or when the component unmounts
    };
},  [dependency1, dependency2,]);

//dependency arr determines when the "this effect" will run 
//3 options:
//1 leave off the dependency array entirely 
//      the effect will run anytime anything changes in your component 
//      use this cautiously/sparingly or not at all
//2 include an empty dependancy arr
//      effect only runs once: after the intial render of component 
//3 include var in your dependency arr
//      effect will run whenever any of the vars update

//real world ex: updating the doc(html) title when new unread  messages appear
useEffect(() => {
    //update the title with the # of unread messages
    document.title = `You have ${unreadMessages} unread messages`;
    //whenever the # of unread messages changes
},  [unreadMessages]);


//slideshow:changes slide every 3s
//whenever currentSlide changes, we create a new timer using setTimeout
//that waits 3s before calling the nextSlide funct
//reset timer each time a new slide appears 


useEffect(() => {
    //create timer called timer using setTimeout 
    //that calls nextSide afteer 3s
    const timer = setTimeout(() => {
        nextSlide();
    }, 3000);

    //before this effect runs again, it needs to clear out any existing timer
    return () => clearTimeout(timer);
    //this effect runs whenever currentSlide updates/changes
}, [currentSlide]);
