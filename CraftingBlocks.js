var initialized = false;
var BLOCK_STAINED_CLAY = 187;
var colour = 0xf0f0f0
 function selevtLevelHook()
 {
  if (initialized) return;
   Block.defineBlock(BLOCK_STAINED_CLAY, "Crafting table", [6, [2, 11], 4, 4, 4, 4], 5)
   Block.setColor(BLOCK_STAINED_CLAY, colour);
   Block.setDestroyTime(BLOCK_STAINED_CLAY, 3000)
   Block.setExplosionResistance(BLOCK_STAINED_CLAY, 7)
  }
