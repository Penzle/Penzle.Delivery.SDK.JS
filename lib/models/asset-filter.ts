import { QueryConfig } from './common/query-config';

export interface AssetFilter {
	language?: string;
	usePreviewMode?: boolean;
	queryConfig?: QueryConfig;
}
