import { Tags } from "./constants.js";

/**
 * Updates player tags based on their current state.
 * @param {Player} player - The player whose tags are being updated.
 */
export function updatePlayerTags(player) {
    if (player.isSneaking) player.addTag(Tags.s);
    else player.removeTag(Tags.s);

    if (player.isJumping) player.addTag(Tags.j);
    else player.removeTag(Tags.j);

    if (player.isSprinting) player.addTag(Tags.sp);
    else player.removeTag(Tags.sp);

    if (player.isInWater) player.addTag(Tags.w);
    else player.removeTag(Tags.w);

    if (player.isFlying) player.addTag(Tags.f);
    else player.removeTag(Tags.f);

    if (player.isSleeping) player.addTag(Tags.sl);
    else player.removeTag(Tags.sl);

    player.removeTag(Tags.bIF);
    player.removeTag(Tags.bIC);
    player.removeTag(Tags.bICh);
}
