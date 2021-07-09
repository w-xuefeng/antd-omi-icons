
import { Component as OmiComponent, h, classNames, tag } from 'omi';
import './IconBase';
import { getTwoToneColor, setTwoToneColor } from './twoTonePrimaryColor';
import { normalizeTwoToneColors } from '../utils';
import type { AntdIconComponentProps } from './types'


// Initial setting
setTwoToneColor('#1890ff');

@tag('o-antd-icon')
export default class AntdIcon extends OmiComponent<AntdIconComponentProps> {
  static propTypes = {
    spin: Boolean,
    rotate: Number,
    twoToneColor: String,
  };
  static displayName = 'AntdIcon';
  static inheritAttrs = false;
  static getTwoToneColor = getTwoToneColor;
  static setTwoToneColor = setTwoToneColor;
  render(props: Omi.RenderableProps<AntdIconComponentProps>) {
    const {
      class: cls,
      icon,
      spin,
      rotate,
      tabindex,
      // other
      twoToneColor,
      onClick,
      ...restProps
    } = props;

    if (!icon) return null

    const classObj = classNames({
      anticon: true,
      [`anticon-${icon.name}`]: Boolean(icon.name),
      [cls || '']: cls,
    });

    let iconTabIndex = tabindex;
    if (iconTabIndex === undefined && onClick) {
      iconTabIndex = -1;
      restProps.tabindex = iconTabIndex;
    }

    const svgStyle = rotate
      ? `.svgInnerRotate {
        -ms-transform: rotate(${rotate}deg);
        transform: rotate(${rotate}deg);
      }
      `
      : undefined;
    const [primaryColor, secondaryColor] = normalizeTwoToneColors(twoToneColor);

    const className = classNames({
      'anticon-spin': spin === '' || !!spin || icon.name === 'loading',
      svgInnerRotate: !!svgStyle
    })

    return (
      <span role="img" aria-label={icon.name} {...restProps} onClick={onClick} class={classObj}>
        <o-icon-base
          icon={icon}
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
          className={className}
          css={svgStyle}
        />
      </span>
    );
  };
}
