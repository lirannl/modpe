var GUI;
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var initialized = false;
var CTID = 187;
var ironCost = 4;
var previousCount;

function selectLevelHook() 
 {
 if (initialized) return;
 Block.defineBlock(CTID, "Crafting table", [6, [2, 11], 4, 4, 4, 4], 4)
 Block.setDestroyTime(CTID, 3000)
function useItem(x,y,z,itemID,blockId,side)
 {
  if (blockId == 54 && side == 1)
   {
    if (Level.getTile(x, y, z+1) == 58 && Level.getTile(x, y, z-1) == 58 && Level.getTile(x+1, y, z) == 58 && Level.getTile(x-1, y, z) == 58)
    {
     if((getCarriedItem(getPlayerEnt() == 265) && (Player.getCarriedItemCount() >= ironCost))
     {
      previousCount = Player.getCarriedItemCount()
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
 // if (blockId == CTID)
 //  {
