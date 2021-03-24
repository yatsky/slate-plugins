import { NodeEntry, Range } from 'slate';
import { SPEditor } from '../../plugins/useSlatePluginsPlugin';

/**
 * Function used to decorate ranges.
 * If the function returns undefined then no ranges are modified.
 * If the function returns an array the returned ranges are merged with the ranges called by other plugins.
 */
export type Decorate = (
  editor: SPEditor
) => (entry: NodeEntry) => Range[] | undefined;
