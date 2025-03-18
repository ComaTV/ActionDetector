/**
 * Updates the direction score for a player based on their rotation.
 * @param {Player} player - The player whose direction score is being updated.
 * @param {Objective} sDir - The scoreboard objective for direction.
 */
export function updateDirectionScore(player, sDir) {
    let rotation = player.getRotation();
    let grade = rotation.y;

    if (grade <= 10 && grade >= -10) sDir.setScore(player, 1);
    else if (grade >= 10 && grade < 170) {
        if (grade <= 80) sDir.setScore(player, 2);
        else if (grade < 100 && grade > 80) sDir.setScore(player, 3);
        else if (grade >= 100) sDir.setScore(player, 4);
    } else if (grade >= 170 || grade <= -170) sDir.setScore(player, 5);
    else if (grade < -10 && grade > -170) {
        if (grade < -100) sDir.setScore(player, 6);
        else if (grade >= -100 && grade <= -80) sDir.setScore(player, 7);
        else if (grade > -80) sDir.setScore(player, 8);
    }
}

/**
 * Updates the health score for a player.
 * @param {Player} player - The player whose health score is being updated.
 * @param {Objective} sHealth - The scoreboard objective for health.
 */
export function updateHealthScore(player, sHealth) {
    const health = player.getComponent("health");
    sHealth.setScore(player, health.currentValue);
}
