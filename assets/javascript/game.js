$( document ).ready(function(){
   
    
    //random number generator for when user clicks on crystals
    var num1= Math.floor(Math.random()*12+1)
    var num2= Math.floor(Math.random()*12+1)
    var num3= Math.floor(Math.random()*12+1)
    var num4= Math.floor(Math.random()*12+1)
   
  
   // winning guess number generator
   var Random=Math.floor(Math.random()*102+19)
    
   // how to display that random number
   $('#winningNumber').text(Random);

    
    // declaring variables to keep track 
    var playerTotal= 0; 
    var wins= 0;
    var losses = 0;
    
  
  $('#wins').text(wins);
  $('#losses').text(losses);
  
  // wins to the html gets updated
  function youWon(){
  alert("You won. :)");
    wins++; 
    $('#wins').text(wins);
    reset();
  }
  // losses to the html get updated
  function youLost(){
  alert ("You lost. :(");
    losses++;
    $('#losses').text(losses);
    reset()
  }
  // what happens when those crystals get clicked
  $('.green').on ('click', function(){
    playerTotal = playerTotal + num4;
    console.log("New playerTotal= " + playerTotal);
    $('#totalScore').text(playerTotal); 
      
          if (playerTotal == Random){
          youWon();
        }
        else if ( playerTotal > Random){
          youLost();
        }
  });   
  $('.yellow').on ('click', function(){
    playerTotal = playerTotal + num3;
    console.log("New playerTotal= " + playerTotal);
    $('#totalScore').text(playerTotal);

          if (playerTotal == Random){
          youWon();
        }
        else if ( playerTotal > Random){
          youLost();
        } 
  })  
     
    $('.blue').on ('click', function(){
      playerTotal = playerTotal + num2;
      console.log("New playerTotal= " + playerTotal);
      $('#totalScore').text(playerTotal); 
          if (playerTotal == Random){
            youWon();
          }
          else if ( playerTotal > Random){
            youLost();
          } 
    })  
    $('.red').on ('click', function(){
        playerTotal = playerTotal + num1;
        console.log("New playerTotal= " + playerTotal);
        $('#totalScore').text(playerTotal); 
              //Win & lose conditions
            if (playerTotal == Random){
              youWon();
            }
            else if ( playerTotal > Random){
              youLost();
            }   
      }) 
    

      // game gets reset
  function reset(){
    Random=Math.floor(Math.random()*102+19);
    console.log(Random)
    $('#winningNumber').text(Random);
    num1= Math.floor(Math.random()*12+1);
    num2= Math.floor(Math.random()*12+1);
    num3= Math.floor(Math.random()*12+1);
    num4= Math.floor(Math.random()*12+1);
    playerTotal= 0;
    $('#totalScore').text(playerTotal);
    } 
  }); 