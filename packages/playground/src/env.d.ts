import type { EditorContainer } from '@blocksuite/editor';
import type { BlockSchema, Page, Workspace } from '@blocksuite/store';
import type { z } from 'zod';

declare global {
  interface Window {
    editor: EditorContainer;
    page: Page;
    workspace: Workspace;
    blockSchemas: z.infer<typeof BlockSchema>[];
    Y: typeof Workspace.Y;
    std: typeof std;
  }
}
