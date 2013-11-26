var CTID = 176
var ironCost = 4
var CTableInv = new Array();
var CTableInvSlot = new Array();
function addToCTable()
{
 var CTableInput = new Array();
 ModPE.readData([useItem.x,useItem.y,useItem.z])
 if (Player.getCarriedItem != 0)
 {
  CTableInput = [Player.getCarriedItem, Player.getCarriedItemData, Player.getCarriedItemCount]
  if ([CTableInput[0], CTableInput[1]] = [(for (var i=0; i < CTableInv.length; i++) CTableInput[0]),(for (var i=0; i < CTableInv.length; i++) CTableInput[1])])
  {
  CTableInv[i[2]] = CTableInv[i[2]] + CTableInput[2]
  }
  else {
   CTableInv.push(CTableInput)
  }
  ModPE.saveData([useItem.x,useItem.y,useItem.z], CTableInv)
 }
}
function craft()
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
   if (blockId == CTID && ((Level.getTile(x + 1, y, z) == 58) || (Level.getTile(x - 1, y, z) == 58)|| (Level.getTile(x, y, z + 1) == 58)||(Level.getTile(x, y, z - 1) == 58)))
   {
    addToCTable()
   }
   if (blockId == 58 && ((Level.getTile(x + 1, y, z) == 58) || (Level.getTile(x - 1, y, z) == 58)|| (Level.getTile(x, y, z + 1) == 58)||(Level.getTile(x, y, z - 1) == 58)))
   {
    craft()
   }
 }
