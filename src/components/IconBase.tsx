import { Component as OmiComponent, classNames, tag } from 'omi';
import { generate, getSecondaryColor, isIconDefinition, warning, useInsertStyles } from '../utils';
import type { AbstractNode } from '@ant-design/icons-svg/lib/types';
import type { IconProps, TwoToneColorPalette, TwoToneColorPaletteSetter } from './types';

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

@tag('o-icon-base')
export default class IconBase extends OmiComponent<IconProps> {
  static propTypes = {
    primaryColor: String,
    secondaryColor: String,
    focusable: String,
  }
  static inheritAttrs = false;
  static displayName = 'IconBase';
  static getTwoToneColors = getTwoToneColors;
  static setTwoToneColors = setTwoToneColors;

  installed() {
    useInsertStyles();
  }

  render(props: Omi.RenderableProps<IconProps>) {
    const { icon, primaryColor, secondaryColor, className, ...restProps } = props;

    let colors = twoToneColorPalette;
    if (primaryColor) {
      colors = {
        primaryColor,
        secondaryColor: secondaryColor || getSecondaryColor(primaryColor),
      };
    }

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
      ...(className ? { class: classNames(className) } : {}),
      'data-icon': target.name,
      width: '1em',
      height: '1em',
      fill: 'currentColor',
      'aria-hidden': 'true',
    });
  };
}
