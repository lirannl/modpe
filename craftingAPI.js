var GUI;
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var CTID = 176
var ironCost = 4
function craft(input, iAmount, output, oAmount)
{
 
 
} 
function useItem(x,y,z,itemId,blockId,side)
 {
  if (blockId == 54 && side == 1)
   {
    if (Level.getTile(x, y, z+1) == 58 && Level.getTile(x, y, z-1) == 58 && Level.getTile(x+1, y, z) == 58 && Level.getTile(x-1, y, z) == 58)
    {
     if((getCarriedItem(getPlayerEnt() == 265) && (Player.getCarriedItemCount() >= ironCost))
     {
     var previousCount = Player.getCarriedItemCount()
      Entity.setCarriedItem(getPlayerEnt(), 0)
      Player.addItemInventory(265, previousCount - ironCost)
      Level.SetTile(x, y, z, CTID)
      Level.SetTile(x + 1, y, z, 0)
      Level.SetTile(x - 1, y, z, 0)
      Level.SetTile(x, y, z + 1, 0)
      Level.SetTile(x, y, z - 1, 0)
     }
    }
   }
   if (blockId == CTID)
   {
    craft()
   }
 }
