import React from 'react';

export type EventType = 'hover' | 'click' | 'focus' | 'right-click';
export type PopupPostion =
  | 'top left'
  | 'top center'
  | 'top right'
  | 'right top'
  | 'right center'
  | 'right bottom'
  | 'bottom left'
  | 'bottom center'
  | 'bottom right'
  | 'left top'
  | 'left center'
  | 'left bottom'
  | 'center center';

export type PopupActions = {
  open: () => void;
  close: () => void;
  toggle: () => void;
};

export interface PopupProps {
  trigger?: JSX.Element | ((isOpen: boolean) => JSX.Element);
  open?: boolean;
  disabled?: boolean;
  nested?: boolean;
  defaultOpen?: boolean;
  on?: EventType | EventType[];
  children: React.ReactNode;

  position?: PopupPostion | PopupPostion[];
  offsetX?: number;
  offsetY?: number;
  arrow?: boolean;
  modal?: boolean;
  lockScroll?: boolean;
  closeOnDocumentClick?: boolean;
  closeOnEscape?: boolean;
  repositionOnResize?: boolean;
  mouseEnterDelay?: number;
  mouseLeaveDelay?: number;
  onOpen?: () => any;
  onClose?: () => any;
  contentStyle?: React.CSSProperties;
  overlayStyle?: React.CSSProperties;
  className?: string;
  keepTooltipInside?: boolean | string;
}
