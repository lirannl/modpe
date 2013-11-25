var pYaw = 0;
var zVel = 0;
var xVel = 0;
function useItem(x, y, z, itemId, blockId, side)
{
//if you tapped using an iron, gold, or diamond sword
  if(itemId == 276,283,267)
  {
  if(getPlayerZ()-z>=-1&&getPlayerZ()-z<=1&&getPlayerX()-x>=-1&&getPlayerX()-x<=1){
  setVelY(getPlayerEnt(),0.8)}
  else
   {
   //correcting the yaw
    pYaw = getYaw(getPlayerEnt())
    while (pYaw < 0) {
    pYaw = pYaw + 360;
    }
    while (pYaw > 360) {
    pYaw = pYaw - 360;
    }
//checking if the yaw is NOT between 90 to 270
    if((pYaw >= 90&&pYaw <= 270) == false){
     if(pYaw >= 0&&pYaw <= 90) {zVel = ((90-pYaw)/90)}
     else if(pYaw < 360&&pYaw >= 270) {zVel = ((pYaw-270)/90)}
    }
 //problematic part
    if((pYaw >= 90&&pYaw <= 270) == true){
     if(pYaw >= 90&&pYaw < 180){zVel = ((pYaw - 90)/90*-1)}} 
 //end of problematic part
 //debugging
    print(zVel);   
    }
   }
  }
}
