import { BaseModel } from './base-model';
import { EntrySystem } from './entry-system';

export class Entry<TEntity> extends BaseModel<EntrySystem> {
	fields!: TEntity;
}
