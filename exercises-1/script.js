setInterval(function () {

    const getMonth      = document.getElementById("month");
    const getWeek       = document.getElementById("week");
    const getPrepend    = document.getElementById("prepend");
    const getHours      =  document.getElementById("hours");
    const getMinutes    = document.getElementById("minutes");
    const getSeconds    = document.getElementById("seconds");
  
    //console.log(getMonth);
    //console.log(getWeek);
    //console.log(getPrepend);
    //console.log(getHours);
    //console.log(getMinutes);
    //console.log(getSeconds);
  
    const today = new Date();
    //console.log(today);
  
    const day = today.getDay();
    const month = today.getMonth();
  
    const daylist = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    //console.log(`Today is: ${daylist[day]}.`);
  
    const monthslist = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    //console.log(`Months: ${monthslist[day]}.`);
  
    let hour = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
  
    const prepend = (hour >= 12) ? " PM " : " AM ";
    //console.log(prepend);
      
    hour = (hour >= 12) ? hour - 12 : hour;
    //console.log(hour);
      
    if(hour < 10) {
      hour = "0" + hour
    }
    if(minutes < 10) {
      minutes = "0" + minutes
    }
    if(seconds < 10) {
      seconds = "0" + seconds
    }
  
    if (hour === 0 && prepend === " PM ") {
      if (minutes === 0 && seconds === 0) {
        hour = 12;
        prepend = " Noon ";
      } else {
        hour = 12;
        prepend = " AM ";
      }
    }
  
    if (hour === 0 && prepend === " AM ") {
      if (minutes === 0 && seconds === 0) {
        hour = 12;
        prepend = " Midnight ";
      } else {
        hour = 12;
        prepend = " AM ";
      }
    }
      
    // console.log(`Today is: ${monthslist[month]}, ${daylist[day]}, ${prepend} ${hour}:${minutes}:${seconds};`);
      
      getMonth.textContent = monthslist[month];
      getWeek.textContent = daylist[day];
      getPrepend.textContent = prepend;
      getHours.textContent = hour;
      getMinutes.textContent = minutes;
      getSeconds.textContent = seconds;
        
  }, 1000);