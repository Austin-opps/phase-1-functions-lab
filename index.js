// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation){
     const hqLocation=42;
     const distanceInBlocks=
     Math.abs(pickupLocation-hqLocation)
  return distanceInBlocks
}

function distanceFromHqInFeet(pickupLocation) {
    const feetperBlock=264;
    const distanceInBlocks=
    distanceFromHqInBlocks(pickupLocation);
    const distanceinFeet=distanceInBlocks*feetperBlock;
    return distanceinFeet       
}
  
function distanceTravelledInFeet(start, destination) {
    const feetperBlock=264;
    const distanceInBlocks=Math.abs(destination-start);
    Math.abs(distanceInBlocks*feetperBlock);
    const distanceInFeet=distanceInBlocks*feetperBlock;
    return distanceInFeet


}
    
function calculatesFarePrice(start, destination) {
    const distanceInFeet = distanceTravelledInFeet(start, destination);
    let farePrice;
    if (distanceInFeet <401) {
      farePrice = 0;
    } else if (distanceInFeet > 400 && distanceInFeet < 2001) {
      farePrice = (distanceInFeet - 400) * 0.02;
    } else if (distanceInFeet > 2000 && distanceInFeet < 2501) {
      farePrice = 25;
    } else if(distanceInFeet>2500) {
      farePrice = 'cannot travel that far';
    }
    return farePrice;
  }

