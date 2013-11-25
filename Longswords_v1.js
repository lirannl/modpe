//when a player uses
 function useItem(x, y, z, itemId, blockId, side)
 {
 //a diamond, gold, or iron sword
 if(itemId == 276,283,267)
 {
  var jumped = 0
 if(getPlayerZ()!=z&&getPlayerX!=x){
  if (getPlayerZ() < z&&getPlayerX()-x <= 2&&getPlayerX()-x >= -2){
  setVelZ(getPlayerEnt(),1) 
  var jumped = 1
  }
  else if(getPlayerZ() > z&&getPlayerX()-x <= 2&&getPlayerX()-x >= -2){
  setVelZ(getPlayerEnt(),-1) 
  var jumped = 1
  } 
  if(getPlayerX() < x&&getPlayerZ()-z <= 2&&getPlayerZ()-z >= -2){
  setVelX(getPlayerEnt(),1) 
  var jumped = 1
  }
  else if(getPlayerX() > x&&getPlayerZ()-z <= 2&&getPlayerZ()-z >= -2){
  setVelX(getPlayerEnt(),-1) 
  var jumped = 1}
  }
  if (jumped == 1){
  setVelY(getPlayerEnt(),0.4)
  var jumped = 0
  }
  else {setVelY(getPlayerEnt(),0.7)}
}
}
