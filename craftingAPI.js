var CTID = 176
var ironCost = 4
var CTableInv = [[280,0,2],[265,0,1]];
var CTableInvSlot = new Array();
function addToCTable()
{
 var CTableInput = new Array();
 ModPE.readData([useItem.x,useItem.y,useItem.z])
 if (Player.getCarriedItem != 0)
 {
  CTableInput = [Player.getCarriedItem, Player.getCarriedItemData, Player.getCarriedItemCount]
  for (var i1=0; i1 < CTableInv.length; i1++) CTableInput[0]
  for (var i2=0; i2 < CTableInv.length; i2++) CTableInput[1]
  if (CTableInv[i1[0]] == CTableInput[0] && CTableInv[i2[1]] == CTableInput[1])
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
//add recipes here
//example (iron sword)
 ModPE.readData([useItem.x,useItem.y - 1,useItem.z])
//Search for iron in block's inventory                                              search for sticks in block's inventory
 if ((for (var i1=0; i1 < CTableInv.length; i1++) (CTableInv[[0]]) == 265) {success} && for (var i2=0; i2 < CTableInv.length; i2++) (CTableInv[[0]]) == 265) {success} && (CTableInv[i[2]] == 2))
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
   if (blockId == CTID && ((Level.getTile(x, y + 1, z) == 58))
   {
    addToCTable()
   }
   if (blockId == 58 && ((Level.getTile(x, y + 1, z) == 58)))
   {
    craft()
   }
 }
