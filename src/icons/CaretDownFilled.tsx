// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import { rmIEFP } from 'omi-tools';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const CaretDownFilledSvg: AntdIconProps['icon'] = {"icon":{"tag":"svg","attrs":{"viewBox":"0 0 1024 1024","focusable":"false"},"children":[{"tag":"path","attrs":{"d":"M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"}}]},"name":"caret-down","theme":"filled"};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['o-caret-down-filled']: Omi.Props & Partial<AntdIconProps>
    }
  }
}

@tag('o-caret-down-filled')
export default class CaretDownFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'CaretDownFilled';
  static tagName = 'o-caret-down-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...rmIEFP(props)} icon={CaretDownFilledSvg} />;
  };
}