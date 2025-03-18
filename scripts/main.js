import { system, world } from "@minecraft/server";
import { updatePlayerTags } from "./tags.js";
import { updateDirectionScore, updateHealthScore } from "./score.js";
import "./events.js";

system.runInterval(() => {
    const players = world.getPlayers();
    players.forEach((player) => {
        updatePlayerTags(player);

        const scoreDir = "scoreDir";
        player.runCommandAsync(`scoreboard objectives add ${scoreDir} dummy`);
        const sDir = world.scoreboard.getObjective(scoreDir);
        updateDirectionScore(player, sDir);

        const scoreHealth = "Health";
        player.runCommandAsync(`scoreboard objectives add ${scoreHealth} dummy`);
        const sHealth = world.scoreboard.getObjective(scoreHealth);
        updateHealthScore(player, sHealth);
    });
});

