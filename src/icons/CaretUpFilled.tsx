// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import { rmIEFP } from 'omi-tools';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const CaretUpFilledSvg: AntdIconProps['icon'] = {"icon":{"tag":"svg","attrs":{"viewBox":"0 0 1024 1024","focusable":"false"},"children":[{"tag":"path","attrs":{"d":"M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z"}}]},"name":"caret-up","theme":"filled"};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['o-caret-up-filled']: Omi.Props & Partial<AntdIconProps>
    }
  }
}

@tag('o-caret-up-filled')
export default class CaretUpFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'CaretUpFilled';
  static tagName = 'o-caret-up-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...rmIEFP(props)} icon={CaretUpFilledSvg} />;
  };
}