import { generate, getSecondaryColor, isIconDefinition, warning, useInsertStyles } from '../utils';
import { AbstractNode, IconDefinition } from '@ant-design/icons-svg/lib/types';
import { Component as OmiComponent, classNames } from 'omi';

export interface IconProps {
  icon: IconDefinition;
  class?: string;
  onClick?: (e?: Event) => void;
  className?: string;
  primaryColor?: string; // only for two-tone
  secondaryColor?: string; // only for two-tone
  focusable?: string;
}

export interface TwoToneColorPaletteSetter {
  primaryColor: string;
  secondaryColor?: string;
}

export interface TwoToneColorPalette extends TwoToneColorPaletteSetter {
  calculated?: boolean; // marker for calculation
}

const twoToneColorPalette: TwoToneColorPalette & { secondaryColor: string } = {
  primaryColor: '#333',
  secondaryColor: '#E6E6E6',
  calculated: false,
};

function setTwoToneColors({ primaryColor, secondaryColor }: TwoToneColorPaletteSetter): void {
  twoToneColorPalette.primaryColor = primaryColor;
  twoToneColorPalette.secondaryColor = secondaryColor || getSecondaryColor(primaryColor);
  twoToneColorPalette.calculated = !!secondaryColor;
}

function getTwoToneColors(): TwoToneColorPalette {
  return {
    ...twoToneColorPalette,
  };
}

class IconBase extends OmiComponent<IconProps> {
  static propTypes = {
    icon: Object,
    primaryColor: String,
    secondaryColor: String,
    focusable: String,
  }
  static inheritAttrs = false;
  static displayName = 'IconBase';
  static getTwoToneColors = getTwoToneColors;
  static setTwoToneColors = setTwoToneColors;
  render(props: IconProps, context: any) {
    const { icon, primaryColor, secondaryColor, className, ...restProps } = {
      ...props,
      ...context.attrs,
    } as any;

    let colors = twoToneColorPalette;
    if (primaryColor) {
      colors = {
        primaryColor,
        secondaryColor: secondaryColor || getSecondaryColor(primaryColor),
      };
    }

    useInsertStyles();

    warning(isIconDefinition(icon), `icon should be icon definiton, but got ${icon}`);

    if (!isIconDefinition(icon)) {
      return null;
    }

    let target = icon;
    if (target && typeof target.icon === 'function') {
      target = {
        ...target,
        icon: target.icon(colors.primaryColor, colors.secondaryColor),
      };
    }

    return generate(target.icon as AbstractNode, `svg-${target.name}`, {
      ...restProps,
      class: classNames(className),
      'data-icon': target.name,
      width: '1em',
      height: '1em',
      fill: 'currentColor',
      'aria-hidden': 'true',
    });
  };
}
export default IconBase;
