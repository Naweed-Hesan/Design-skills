import * as React from 'react';

export interface Logo {
  /** Image URL. Without it, `name` renders as a wordmark. */
  src?: string;
  /** The company name — the alt text, and the fallback */
  name?: string;
}

/** Who else uses this. */
export interface LogoWallProps {
  logos: Array<string | Logo>;
  /** The line above — "Trusted by teams at" */
  label?: React.ReactNode;
  /** Desaturates and fades, so the wall reads as texture rather than competing */
  grayscale?: boolean;
  /** Uniform render height. Logos vary wildly in aspect ratio; height is what
   *  makes a row of them look deliberate. */
  height?: number;
  style?: React.CSSProperties;
}

export declare function LogoWall(props: LogoWallProps): React.ReactElement;
