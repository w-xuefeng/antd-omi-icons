// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import { rmIEFP } from 'omi-tools';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const LeftCircleFilledSvg: AntdIconProps['icon'] = {"icon":{"tag":"svg","attrs":{"viewBox":"64 64 896 896","focusable":"false"},"children":[{"tag":"path","attrs":{"d":"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm104 316.9c0 10.2-4.9 19.9-13.2 25.9L457.4 512l145.4 105.2c8.3 6 13.2 15.6 13.2 25.9V690c0 6.5-7.4 10.3-12.7 6.5l-246-178a7.95 7.95 0 010-12.9l246-178a8 8 0 0112.7 6.5v46.8z"}}]},"name":"left-circle","theme":"filled"};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['o-left-circle-filled']: Omi.Props & Partial<AntdIconProps>
    }
  }
}

@tag('o-left-circle-filled')
export default class LeftCircleFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'LeftCircleFilled';
  static tagName = 'o-left-circle-filled';
  static inheritAttrs = false;
  render(props: Omi.OmiProps<AntdIconProps>) {
    return <o-antd-icon {...rmIEFP(props)} icon={LeftCircleFilledSvg} />;
  };
}