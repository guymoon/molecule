import {
    getBEMElement,
    getBEMModifier,
    prefixClaName,
} from 'mo/common/className';

export const defaultMenuClassName = prefixClaName('menu');
export const defaultSubMenuClassName = prefixClaName('sub-menu');

export const verticalMenuClassName = getBEMModifier(
    defaultMenuClassName,
    'vertical'
);
export const horizontalMenuClassName = getBEMModifier(
    defaultMenuClassName,
    'horizontal'
);

export const defaultMenuItemClassName = getBEMElement(
    defaultMenuClassName,
    'item'
);
export const checkClassName = getBEMElement(defaultMenuClassName, 'check');
export const labelClassName = getBEMElement(defaultMenuClassName, 'label');
export const menuContentClassName = getBEMElement(
    defaultMenuClassName,
    'content'
);
export const keybindingClassName = getBEMElement(
    defaultMenuClassName,
    'keybinding'
);
export const indicatorClassName = getBEMElement(
    defaultMenuClassName,
    'indicator'
);