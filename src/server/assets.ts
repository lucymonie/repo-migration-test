import fs from 'fs';
import { logger } from 'logger';

type AssetMapping = { [key: string]: string } | null;

function getAssetMappings(): AssetMapping {
    if (process.env.NODE_ENV !== "production") {
        return null;
    }

    const manifestLocation = process.env.ASSETS_MANIFEST;

    if (!manifestLocation) {
        logger.error("Environment variable ASSETS_MANIFEST not set");
        throw new Error("Environment variable ASSETS_MANIFEST not set");
    }

    try {
        return JSON.parse(fs.readFileSync(manifestLocation).toString());
    } catch(e) {
        logger.error(`Unable to load asset mapping`, e);
        throw e;
    }
}

export const getMappedAssetLocation = (): (scriptName: string) => string => {
    const scriptMappings = getAssetMappings();
    return scriptMappings
        ? (scriptName: string) => `/assets/${scriptMappings[scriptName]}`
        : (scriptName: string) => `/assets/${scriptName}`
}
