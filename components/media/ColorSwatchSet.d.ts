import * as React from 'react';

export interface Swatch {
  hex: string;
  /** Optional name above the hex */
  name?: string;
}

/** A palette — extracted from an image, or a brand's colours. */
export interface ColorSwatchSetProps {
  /** Hex strings, or { hex, name } */
  colors: Array<string | Swatch>;
  /** Swatch height in px, and the minimum column width */
  size?: number;
  showHex?: boolean;
  /** Makes swatches clickable and copies the value */
  onCopy?: (hex: string) => void;
  /** Fixed column count. Omit to fill responsively. */
  columns?: number;
  style?: React.CSSProperties;
}

export declare function ColorSwatchSet(props: ColorSwatchSetProps): React.ReactElement;
