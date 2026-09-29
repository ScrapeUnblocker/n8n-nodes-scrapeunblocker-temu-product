import { TemuProductScraper } from './nodes/TemuProductScraper/TemuProductScraper.node';
import { ApifyApi } from './credentials/ApifyApi.credentials';

export const nodeTypes = [TemuProductScraper];

export const credentialTypes = [ApifyApi];
