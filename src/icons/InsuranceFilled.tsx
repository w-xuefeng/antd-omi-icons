// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import { rmIEFP } from 'omi-tools';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const InsuranceFilledSvg: AntdIconProps['icon'] = {"icon":{"tag":"svg","attrs":{"viewBox":"64 64 896 896","focusable":"false"},"children":[{"tag":"path","attrs":{"d":"M519.9 358.8h97.9v41.6h-97.9zm347-188.9L527.1 54.1C523 52.7 517.5 52 512 52s-11 .7-15.1 2.1L157.1 169.9c-8.3 2.8-15.1 12.4-15.1 21.2v482.4c0 8.8 5.7 20.4 12.6 25.9L499.3 968c3.5 2.7 8 4.1 12.6 4.1s9.2-1.4 12.6-4.1l344.7-268.6c6.9-5.4 12.6-17 12.6-25.9V191.1c.2-8.8-6.6-18.3-14.9-21.2zM411.3 656h-.2c0 4.4-3.6 8-8 8h-37.3c-4.4 0-8-3.6-8-8V471.4c-7.7 9.2-15.4 17.9-23.1 26a6.04 6.04 0 01-10.2-2.4l-13.2-43.5c-.6-2-.2-4.1 1.2-5.6 37-43.4 64.7-95.1 82.2-153.6 1.1-3.5 5-5.3 8.4-3.7l38.6 18.3c2.7 1.3 4.1 4.4 3.2 7.2a429.2 429.2 0 01-33.6 79V656zm296.5-49.2l-26.3 35.3a5.92 5.92 0 01-8.9.7c-30.6-29.3-56.8-65.2-78.1-106.9V656c0 4.4-3.6 8-8 8h-36.2c-4.4 0-8-3.6-8-8V536c-22 44.7-49 80.8-80.6 107.6a5.9 5.9 0 01-8.9-1.4L430 605.7a6 6 0 011.6-8.1c28.6-20.3 51.9-45.2 71-76h-55.1c-4.4 0-8-3.6-8-8V478c0-4.4 3.6-8 8-8h94.9v-18.6h-65.9c-4.4 0-8-3.6-8-8V316c0-4.4 3.6-8 8-8h184.7c4.4 0 8 3.6 8 8v127.2c0 4.4-3.6 8-8 8h-66.7v18.6h98.8c4.4 0 8 3.6 8 8v35.6c0 4.4-3.6 8-8 8h-59c18.1 29.1 41.8 54.3 72.3 76.9 2.6 2.1 3.2 5.9 1.2 8.5z"}}]},"name":"insurance","theme":"filled"};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['o-insurance-filled']: Omi.Props & Partial<AntdIconProps>
    }
  }
}

@tag('o-insurance-filled')
export default class InsuranceFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'InsuranceFilled';
  static tagName = 'o-insurance-filled';
  static inheritAttrs = false;
  render(props: Omi.OmiProps<AntdIconProps>) {
    return <o-antd-icon {...rmIEFP(props)} icon={InsuranceFilledSvg} />;
  };
}