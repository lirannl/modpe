var effect = new array()
function modTick()
{
  if (effect[1] == "poison")
  {
   if (effect[2] > 0 && effect[3] > 0)
   {
    
   }
  }
}
function procCmd(cmd);
{
  if (cmd.substring(0,6) == "/effect")
  {
   //setting effect[1] to the text between the space after /effect to the last letter before the next space
   effect[1] = cmd.substring(8, cmd.substring(8,cmd.length).search(" ") -1))
   effect[2] = Number(cmd.substring(9 + effect[1].length, 9 + cmd.substring(9 + effect[1].length, cmd.length).search(" ") - 1))
   effect[3] = Number(cmd.substring(10 + effect[1].length + effect[2].length, cmd.substring(10 + effect[1].length + effect[2].length, cmd.length).search(" ") - 1))
  }
}
