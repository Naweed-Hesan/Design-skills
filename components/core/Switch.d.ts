import * as React from 'react';

/** An instant-apply toggle.
 *
 * @startingPoint section="Core" subtitle="Settings rows with instant-apply switches" viewport="700x160"
 */
export interface SwitchProps {
  checked?: boolean;
  /** Receives the new boolean. Apply it immediately — that is what a switch means. */
  onChange?: (checked: boolean) => void;
  /** Passing a label turns the whole thing into a settings row: text left, switch right */
  label?: React.ReactNode;
  /** A second line under the label, explaining what turning it on actually does */
  description?: React.ReactNode;
  size?: 'sm' | 'md';
  disabled?: boolean;
  style?: React.CSSProperties;
}

export declare function Switch(props: SwitchProps): React.ReactElement;
