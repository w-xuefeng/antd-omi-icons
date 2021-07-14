// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import { rmIEFP } from 'omi-tools';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const LayoutFilledSvg: AntdIconProps['icon'] = {"icon":{"tag":"svg","attrs":{"viewBox":"64 64 896 896","focusable":"false"},"children":[{"tag":"path","attrs":{"d":"M384 912h496c17.7 0 32-14.3 32-32V340H384v572zm496-800H384v164h528V144c0-17.7-14.3-32-32-32zm-768 32v736c0 17.7 14.3 32 32 32h176V112H144c-17.7 0-32 14.3-32 32z"}}]},"name":"layout","theme":"filled"};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['o-layout-filled']: Omi.Props & Partial<AntdIconProps>
    }
  }
}

@tag('o-layout-filled')
export default class LayoutFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'LayoutFilled';
  static tagName = 'o-layout-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...rmIEFP(props)} icon={LayoutFilledSvg} />;
  };
}