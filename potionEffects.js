var effect = new array()
var duration
//name of effect - change this

function modTick()
{
  if effect[1] == "poison"
  {
    
  }
}
function procCmd(cmd);
{
  if cmd.substring(0,5) == "/effect"
  {
   effect[1] = cmd.substring(7, Number(cmd.substring(7,cmd.length).search(" ")))
   effect[2] = Number(cmd.substring(8 + effect[1].length, cmd.substring(8 + effect[1].length).search(" ") + 1))
   effect[3] = Number(cmd.substring())
  }
}
