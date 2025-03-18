import { Tags } from "./constants.js";
import { system, world } from "@minecraft/server";

world.afterEvents.itemUse.subscribe(({ source, itemStack }) => {
    source.addTag(Tags.u);
    source.removeTag(Tags.a);
    source.sendMessage("Use!");
    if (itemStack.typeId == "minecraft:stick") source.runCommand('/scriptevent script:tags');
});

world.afterEvents.playerInteractWithBlock.subscribe(({ block, player }) => {
    player.runCommand('/scriptevent script:tags');
    if (block.typeId == "minecraft:furnace") player.addTag(Tags.bIF);
    if (block.typeId == "minecraft:crafting_table") player.addTag(Tags.bIC);
    if (block.typeId == "minecraft:chest") player.addTag(Tags.bICh);
});

system.afterEvents.scriptEventReceive.subscribe(({ sourceEntity, id }) => {
    if (id == "script:swing"){
        sourceEntity.sendMessage("Attack!");
        sourceEntity.addTag(Tags.a);
        sourceEntity.removeTag(Tags.u);
    }
    if (id == "script:tags"){
        sourceEntity.getTags().forEach(tag => {
            console.warn(tag);
        });
    }
});
