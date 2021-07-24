
import { Component as OmiComponent, h, tag } from 'omi';
import { rmIEFP } from 'omi-tools';
import './IconBase';
import { getTwoToneColor, setTwoToneColor } from './twoTonePrimaryColor';
import { normalizeTwoToneColors, iconStyles } from '../utils';
import type { AntdIconComponentProps } from './types'

// Initial setting
setTwoToneColor('#1890ff');

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['o-antd-icon']: Omi.Props & Partial<AntdIconComponentProps>
    }
  }
}

@tag('o-antd-icon')
export default class AntdIcon extends OmiComponent<AntdIconComponentProps> {
  static propTypes = {
    spin: Boolean,
    rotate: Number,
    twoToneColor: String,
  };
  static displayName = 'AntdIcon';
  static inheritAttrs = false;
  static css = iconStyles;
  static getTwoToneColor = getTwoToneColor;
  static setTwoToneColor = setTwoToneColor;
  render(props: Omi.RenderableProps<AntdIconComponentProps>) {
    const {
      icon,
      tabindex,
      // other
      twoToneColor,
      onClick,
      ...restProps
    } = props;

    if (!icon) return null

    let iconTabIndex = tabindex;
    if (iconTabIndex === undefined && onClick) {
      iconTabIndex = -1;
      restProps.tabindex = iconTabIndex;
    }

    const [primaryColor, secondaryColor] = normalizeTwoToneColors(twoToneColor);

    return (
      <span
        role="img"
        aria-label={icon.name}
      >
        <o-icon-base
          icon={icon}
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
          {...rmIEFP(restProps)}
        />
      </span>
    );
  };
}
