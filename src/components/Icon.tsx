import { svgBaseProps, warning, useInsertStyles } from '../utils';
import { Component as OmiComponent, h, classNames } from 'omi';

export interface IconBaseProps extends Omit<JSX.HTMLAttributes, 'icon'> {
  spin?: boolean | string;
  rotate?: number;
}
export interface CustomIconComponentProps {
  width: string | number;
  height: string | number;
  fill: string;
  viewBox?: string;
}
export interface IconComponentProps extends IconBaseProps {
  viewBox?: string;
  component?: Omi.WeElementConstructor;
  ariaLabel?: string;
}

class Icon extends OmiComponent<IconComponentProps> {
  static propTypes = {
    spin: Boolean,
    rotate: Number,
    viewBox: String,
    ariaLabel: String,
  };
  static inheritAttrs = false;
  static displayName = 'Icon';
  render(props: IconComponentProps) {
    const {
      class: cls,
      // affect inner <svg>...</svg>
      component: Component,
      viewBox,
      spin,
      rotate,
      tabindex,
      onClick,
      children,
      ...restProps
    } = props;

    const hasChildren = children && children.length;
    warning(
      Boolean(Component || hasChildren),
      'Should have `component` prop/slot or `children`.',
    );

    useInsertStyles();

    const classString = classNames({
      anticon: true,
      [cls]: cls,
    });

    const svgClassString = classNames({
      'anticon-spin': spin === '' || !!spin,
    });

    const svgStyle = rotate
      ? `.svgInnerRotate {
        -ms-transform: rotate(${rotate}deg);
        transform: rotate(${rotate}deg);
      }
      `
      : undefined;

    const innerSvgProps = {
      ...svgBaseProps,
      viewBox,
      class: svgClassString,
      css: svgStyle,
      className: svgStyle && 'svgInnerRotate'
    };

    if (!viewBox) {
      delete innerSvgProps.viewBox;
    }
    const renderInnerNode = () => {
      if (Component) {
        return <Component {...innerSvgProps}>{children}</Component>;
      }
      if (hasChildren) {
        warning(
          Boolean(viewBox) || (children.length === 1 && children[0] && children[0].type === 'use'),
          'Make sure that you provide correct `viewBox`' +
          ' prop (default `0 0 1024 1024`) to the icon.',
        );
        return (
          <svg {...innerSvgProps} viewBox={viewBox}>
            {children}
          </svg>
        );
      }
      return null;
    };

    let iconTabIndex = tabindex;
    if (iconTabIndex === undefined && onClick) {
      iconTabIndex = -1;
      restProps.tabindex = iconTabIndex;
    }

    return (
      <span role="img" {...restProps} onClick={onClick} class={classString}>
        {renderInnerNode()}
      </span>
    );
  }
}

export default Icon;
