import * as React from 'react';

/** A target for dragged files. */
export interface DropZoneProps {
  /** Receives the dropped File objects */
  onDrop?: (files: File[], event: React.DragEvent) => void;
  /** Opens a file picker. Always offer this — dragging is not available to everyone. */
  onBrowse?: () => void;
  accept?: string;
  /** What is allowed — "png, jpg or gif up to 20 mb". Say it before the failure. */
  hint?: React.ReactNode;
  /** Force the active look, for a page-level drop target driven from outside */
  active?: boolean;
  compact?: boolean;
  /** Replaces the default contents entirely */
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export declare function DropZone(props: DropZoneProps): React.ReactElement;
