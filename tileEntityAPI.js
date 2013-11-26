//enable retreival and extraction features
var enableInvMng = true
//reading the damage value of a tile is not implemented yet
var dmgVal;
var tileEntity = new Object();
function useItem( x, y, z, itemId, blockId, side )
 { 
 //add more properties here if needed
 ModPE.readData( x , y, z, blockId )
 tileEntity.location = [ x, y, z ]
 tileEntity.tile = [ blockId, dmgVal ]
 tileEntity.inv = new Array()
 ModPE.saveData( x, y, z, blockId )
 //Inventory management starts here
  if (enableInvMng == true)
  {
  
  }
 }
 
 
