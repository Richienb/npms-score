import { Result } from "npms-api"

/**
 * Get the npms scores of a npm package.
 * @param name The module name to get the scores for.
 * @example
 * ```
 * const npmsScore = require("npms-score");
 *
 * (async () => {
 * 	await npmsScore("cross-spawn");
 * 	//=> { quality: 0.9995167144697813, popularity: 0.7509903024146316, maintenance: 0.9998891222511912 }
 * })()
 * ```
*/
declare async function npmsScore(name: string): Promise<Result.ScoreData["detail"]>

export = npmsScore
