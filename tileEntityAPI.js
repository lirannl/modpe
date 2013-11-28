//enable retreival and extraction features
var enableInvMng = true
var dmgVal;
var i0;
var i1;
var itemExsistent;
var tileEntity = new Object();
function useItem( x, y, z, itemId, blockId, side )
{
 //add more properties here if needed
 dmgVal = level.getData(x, y, z)
 tileEntity = ModPE.readData( [ x , y, z, blockId, dmgVal ] )
 tileEntity.location = [ x, y, z ]
 tileEntity.tile = [ blockId, dmgVal ]
 ModPE.saveData([ x, y, z, blockId, dmgVal ], tileEntity )
 
 //Inventory management starts here
  if (enableInvMng == true)
 {
  input = [ Player.getCarriedItem(), Player.getCarriedItemData(), Player.getCarriedItemCount() ]
  if (input[0] != 0)
  {
//Checking if this combination of itemId:damageValue exists in the inventory
   i0 = tileEntity.inv.indexOf(input[0])
   i1 = tileEntity.inv.indexOf(input[1])
   if (i0 == i1)
   {
//add more of that item to that slot
   tileEntity.inv[i0[2]] += input[2]
   tileEntity.inv.push(input)
   ModPE.saveData([x, y, z, blockId], tileEntity)
   }
  }
  if (input == 0)
  {
  print(tileEntity.inv)
  }
//end of the built in inventory managment
 }
}
