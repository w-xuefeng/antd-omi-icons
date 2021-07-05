import IconBase from './IconBase';
import { IconBaseProps } from './Icon';
import { IconDefinition } from '@ant-design/icons-svg/lib/types';
import { getTwoToneColor, TwoToneColor, setTwoToneColor } from './twoTonePrimaryColor';
import { normalizeTwoToneColors } from '../utils';
import { Component as OmiComponent, h } from 'omi';

export interface AntdIconProps extends IconBaseProps {
  twoToneColor?: TwoToneColor;
}

export interface IconComponentProps extends AntdIconProps {
  icon: IconDefinition;
}
interface Color {
  getTwoToneColor: () => TwoToneColor;
  setTwoToneColor: (twoToneColor: TwoToneColor) => void;
}
// Initial setting
setTwoToneColor('#1890ff');

class Icon extends OmiComponent<IconComponentProps> {
  static propTypes = {
    spin: Boolean,
    rotate: Number,
    icon: Object,
    twoToneColor: String,
  };
  static displayName = 'AntdIcon';
  static inheritAttrs = false;
  static getTwoToneColor = getTwoToneColor;
  static setTwoToneColor = setTwoToneColor;
  render(props: IconComponentProps, context: any) {
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
    } = { ...props, ...context.attrs } as any;
    const classObj = {
      anticon: true,
      [`anticon-${icon.name}`]: Boolean(icon.name),
      [cls]: cls,
    };

    const svgClassString = spin === '' || !!spin || icon.name === 'loading' ? 'anticon-spin' : '';

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

    return (
      <span role="img" aria-label={icon.name} {...restProps} onClick={onClick} class={classObj}>
        <IconBase
          class={svgClassString}
          icon={icon}
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
          className={svgStyle && 'svgInnerRotate'}
          css={svgStyle}
        />
      </span>
    );
  };
}
export default Icon;
