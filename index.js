  function distanceFromHqInBlocks(blocks) {
    if (blocks>=42) {
      return  blocks - 42;
    } else {
      return 42 -blocks;
    }
  }

  function distanceFromHqInFeet(blocks) {
     return distanceFromHqInBlocks(blocks)*264;
  }
    
  function distanceTravelledInFeet(start, destination) {
    if (destination>=start) {
      return  (destination - start) * 264;
    } else {
      return (start - destination) * 264;
    }
  }


  
  function calculatesFarePrice(start, destination) {
    const distanceInFeet = distanceTravelledInFeet(start, destination);
    if (distanceInFeet <= 400) {
      return 0; 

    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
      return ((distanceInFeet - 400) * 0.02);

    } else if (distanceInFeet > 2000 && distanceInFeet < 2500) {
      return 25; 

    } else if (distanceInFeet >= 2500) {
      return 'cannot travel that far'; 
    }
  }
  