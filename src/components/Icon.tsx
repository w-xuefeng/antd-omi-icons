
import { Component as OmiComponent, h, classNames, extractClass, tag } from 'omi';
import { rmIEFP } from 'omi-tools';
import { svgBaseProps, warning, iconStyles } from '../utils';
import type { IconComponentProps } from './types'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['o-icon']: Omi.Props & Partial<IconComponentProps>
    }
  }
}

@tag('o-icon')
export default class Icon extends OmiComponent<IconComponentProps> {
  static propTypes = {
    spin: Boolean,
    rotate: Number,
    viewBox: String,
    ariaLabel: String,
  };
  static inheritAttrs = false;
  static displayName = 'Icon';
  static css = iconStyles;

  render(props: Omi.RenderableProps<IconComponentProps>) {
    const {
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

    const hasChildren = !!(children && Array.isArray(children) && children.length);
    warning(
      Boolean(Component || hasChildren),
      'Should have `component` prop/slot or `children`.',
    );

    const cls = extractClass(props, {
      anticon: true
    });

    const svgStyle = rotate
      ? `.svgInnerRotate {
        -ms-transform: rotate(${rotate}deg);
        transform: rotate(${rotate}deg);
      }
      `
      : undefined;

    const svgClassString = classNames({
      'anticon-spin': spin === '' || !!spin,
      svgInnerRotate: !!svgStyle
    });

    const innerSvgProps = {
      ...svgBaseProps,
      viewBox,
      class: svgClassString,
      css: svgStyle
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
          // @ts-ignore
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
      <span role="img" {...cls} {...rmIEFP(restProps)}>
        {renderInnerNode()}
      </span>
    );
  }
}
