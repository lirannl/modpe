var effectType
var effectDuration
var effectAmp
var second = 0
function modTick()
{
  if (second == 1 && effect[1] == "poison")
  {
   if (effectDuration > 0 && effectAmp > 0)
   {
    effectDuration += -1
    if (Entity.getHealth(getPlayerEnt()) > effectAmp)
    {
     Entity.setHealth( Entity.getHealth(getPlayerEnt()) - effectAmp)
    }
    if (Entity.getHealth(getPlayerEnt()) < effectAmp)
    {
     Entity.setHealth(getPlayerEnt(), 1)
    }
   }
  }
  if (second < 1)
  {
   second = second + 0.05
  }
  else
  {
   second = 0
  }
}
function procCmd(cmd);
{
  if (cmd.substring(0,6) == "/effect")
  {
   //setting effect[1] to the text between the space after /effect to the last letter before the next space
   effectType = cmd.substring(8, cmd.substring(8,cmd.length).search(" ") -1))
   effectDuration = Number(cmd.substring(9 + effectType.length, 9 + cmd.substring(9 + effectType.length, cmd.length).search(" ") - 1))
   effectAmp = Number(cmd.substring(10 + effectType.length + effectDuration.length, cmd.substring(10 + effectType.length + effectDuration.length, cmd.length).search(" ") - 1))
  }
}
