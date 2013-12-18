var effect[] ;
var second = 0 ;
function procCmd(cmd)
{
  if (cmd.substring(0,6) == "/effect")
  {
   //extracting the parameters from the command
   effect = cmd.split(" ")
  }
}
function modTick();
{
  if (second == 1 && effect[1] == "poison")
  {
   if (effect[2] > 0 && effect[3] > 0)
   {
    effect[2] += -1
    if (Entity.getHealth(getPlayerEnt()) > effect[3])
    {
     Entity.setHealth( Entity.getHealth(getPlayerEnt()) - effect[3])
    }
    if (Entity.getHealth(getPlayerEnt()) <= effect[3])
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
