window.onload = function(){
    let rainDrop = document.getElementById("rainDrop");
    let secondDrop = document.getElementById("secondDrop");
    let thirdDrop = document.getElementById("thirdDrop");
    let rainIntTwo = 0;
    let rainIntOne = 0;
    let rainIntThree = 0;
    let intToStringOne;
    let intToStringTwo;
    let intToStringThree;
    setInterval(function () {
     rainIntOne =  firstRandom(1, 100);
     

     intToStringOne = rainIntOne.toString();
     
     rainDrop.style.left = `${intToStringOne}%`;
     
     document.body.appendChild(rainDrop);
   
    }, 300);

    setInterval(function () {
        rainIntTwo = secondRandom(1,100);
        intToStringTwo = rainIntTwo.toString();
        secondDrop.style.left = `${intToStringTwo}%`;
        document.body.appendChild(secondDrop);
    }, 400)

    setInterval(function () {
        rainIntThree = thirdRandom(1,100);
        intToStringThree = rainIntThree.toString();
        thirdDrop.style.left = `${intToStringThree}%`;
        document.body.appendChild(thirdDrop);
    }, 500)

}

function firstRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function secondRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function thirdRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
