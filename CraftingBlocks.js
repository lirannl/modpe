var initialized = false;

function selectLevelHook() { //This is called before the first world is loaded
        if (!initialized) { //if we have not set up our custom block
                // define a block with ID 176, name "Crafting table", and the following textures
                // in the order (bottom, top, south, north, west, east).
                // in this case, the side textures are the same, and the top/bottom textures are different.
                Block.defineBlock(176, "Crafting table", [[0, 6], [2, 11], [0, 4], [0, 4], [0, 4], [0, 4]], 5);
                initialized = true;
        }
}
