//enable retreival and extraction features
var enableInvMng = true
var tileEntity = new Object();
function useItem( x, y, z, itemId, blockId, side )
 { 
 //add more properties here if needed
 level.getData( x, y, z )
 tileEntity = ModPE.readData( [x , y, z, blockId, dmgVal] )
 tileEntity.location = [ x, y, z ]
 tileEntity.tile = [ blockId, blockDmg ]
 tileEntity.inv = new Array()
 ModPE.saveData( x, y, z, blockId, tileEntity )
 //Inventory management starts here
  if (enableInvMng == true)
  {
  input = [ Player.getCarriedItem(), Player.getCarriedItemData(), Player.getCarriedItemCount() ]
  
  }
 }
 
 
