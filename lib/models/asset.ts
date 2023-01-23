import { AssetMimeType } from './asset-mime-type';
import { Tag } from './tag';

export interface Asset {
	/**
	 * Url of the asset
	 */
	url: string;
	/**
	 * Identifier of the asset
	 */
	assetId: string;
	/**
	 * Identifier of the workflow the asset is associated with
	 */
	workflowId: string | null;
	/**
	 * MimeType of the asset
	 */
	assetMimeType: AssetMimeType;
	/**
	 * List of tags associated with the asset
	 */
	tags: Tag[];
	/**
	 * Identifier of the asset
	 */
	id: string;
	/**
	 * Name of the asset
	 */
	name: string;
	/**
	 * Description of the asset
	 */
	description: string;
	/**
	 * Date of the asset's creation
	 */
	createdAt: Date;
	/**
	 * Date of the asset's last modification
	 */
	modifiedAt: Date;
	/**
	 * Type of the asset
	 */
	type: string;
	/**
	 * Size of the asset in bytes
	 */
	size: number;

	/**
	 * Language of the asset
	 */
	language: string;
}
