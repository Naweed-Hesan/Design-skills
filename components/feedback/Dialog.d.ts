import * as React from 'react';

/** A modal that interrupts. Use sparingly.
 *
 * @startingPoint section="Feedback" subtitle="Modal with header, body and footer" viewport="700x360"
 */
export interface DialogProps {
  open: boolean;
  /** A question or a noun phrase — "Delete board?", "Invite people" */
  title?: React.ReactNode;
  /** The consequence, stated plainly, including anything irreversible */
  description?: React.ReactNode;
  children?: React.ReactNode;
  /** Buttons, right-aligned. Cancel first, the action last. */
  footer?: React.ReactNode;
  /** Called by the close button, the scrim, and Escape. Omit only for a blocking dialog. */
  onClose?: () => void;
  size?: 'sm' | 'md' | 'lg';
  style?: React.CSSProperties;
}

export declare function Dialog(props: DialogProps): React.ReactElement | null;
