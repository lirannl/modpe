var pYaw = 0;
var zVel = 0;
var xVel = 0;
//Determines how powerful the sword is, default is 1, 0 to disable the movement.
var moveAmp =1;
function useItem(x, y, z, itemId, blockId, side)
{
//if you tapped using an iron, gold, or diamond sword
  if ((itemId == 276) || (itemId ==283) || (itemId ==267)){
   if (getPlayerZ()-z >= -1 && getPlayerZ()-z <= 1 && getPlayerX()-x >= -1 && getPlayerX()-x <= 1)
   {
    setVelY(getPlayerEnt(),0.8)
   }
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
//z axis movement
    if((pYaw >= 90&&pYaw <= 270) == false){
     if(pYaw >= 0&&pYaw <= 90) {zVel = ((90-pYaw)/90)}
     else if(pYaw < 360&&pYaw >= 270) {zVel = ((pYaw-270)/90)}
    }
    if(pYaw >= 90&&pYaw <= 270) {
     if(pYaw >= 90&&pYaw < 180){zVel = (((pYaw - 90)/-90))} 
     else if(pYaw >180&&pYaw < 270) {zVel = ((90-pYaw+180)/-90)}
    }
//x axis movement
    if(pYaw >= 0&&pYaw <= 180) {
     if(pYaw > 0&&pYaw <= 90) {xVel = (pYaw/-90)}
     if(pYaw > 90&&pYaw < 180) {xVel = ((90-pYaw+90)/-90)}
    }
    if(pYaw >=180&&pYaw < 360) {
     if(pYaw >=180&&pYaw < 270){xVel = ((pYaw-180)/90)}
     if(pYaw >=270&&pYaw < 360){xVel = ((90-pYaw+270)/90)}
    } 
  setVelY(getPlayerEnt(),0.4)
  setVelZ(getPlayerEnt(),(zVel*moveAmp))
  setVelX(getPlayerEnt(),(xVel*moveAmp))
  }
  }
}
