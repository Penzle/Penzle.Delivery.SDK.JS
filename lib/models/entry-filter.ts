import { QueryConfig } from './common/query-config';

export interface EntryFilter {
	language?: string;
	include?: number;
	usePreviewMode?: boolean;
	queryConfig?: QueryConfig;
}
