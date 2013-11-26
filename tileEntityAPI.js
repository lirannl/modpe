//enable retreival and extraction features
var enableInvMng = true
//reading the damage value of a tile is not implemented yet, but I have this value as a dummy for now.
var dmgVal;
var tileEntity = new Object();
function useItem( x, y, z, itemId, blockId, side )
 { 
 //add more properties here if needed
 tileEntity = ModPE.readData( [x , y, z, blockId] )
 tileEntity.location = [ x, y, z ]
 tileEntity.tile = [ blockId, dmgVal ]
 tileEntity.inv = new Array()
 ModPE.saveData( x, y, z, blockId, tileEntity )
 //Inventory management starts here
  if (enableInvMng == true)
  {
  input = [ Player.getCarriedItem(), Player.getCarriedItemData(), Player.getCarriedItemCount() ]
  
  }
 }
 
 
