// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import { rmIEFP } from 'omi-tools';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const StepForwardFilledSvg: AntdIconProps['icon'] = {"icon":{"tag":"svg","attrs":{"viewBox":"0 0 1024 1024","focusable":"false"},"children":[{"tag":"path","attrs":{"d":"M676.4 528.95L293.2 829.97c-14.25 11.2-35.2 1.1-35.2-16.95V210.97c0-18.05 20.95-28.14 35.2-16.94l383.2 301.02a21.53 21.53 0 010 33.9M694 864h64a8 8 0 008-8V168a8 8 0 00-8-8h-64a8 8 0 00-8 8v688a8 8 0 008 8"}}]},"name":"step-forward","theme":"filled"};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['o-step-forward-filled']: Omi.Props & Partial<AntdIconProps>
    }
  }
}

@tag('o-step-forward-filled')
export default class StepForwardFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'StepForwardFilled';
  static tagName = 'o-step-forward-filled';
  static inheritAttrs = false;
  render(props: Omi.OmiProps<AntdIconProps>) {
    return <o-antd-icon {...rmIEFP(props)} icon={StepForwardFilledSvg} />;
  };
}