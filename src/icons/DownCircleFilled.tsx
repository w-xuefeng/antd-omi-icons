// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import { rmIEFP } from 'omi-tools';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const DownCircleFilledSvg: AntdIconProps['icon'] = {"icon":{"tag":"svg","attrs":{"viewBox":"64 64 896 896","focusable":"false"},"children":[{"tag":"path","attrs":{"d":"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm184.5 353.7l-178 246a7.95 7.95 0 01-12.9 0l-178-246c-3.8-5.3 0-12.7 6.5-12.7H381c10.2 0 19.9 4.9 25.9 13.2L512 563.6l105.2-145.4c6-8.3 15.6-13.2 25.9-13.2H690c6.5 0 10.3 7.4 6.5 12.7z"}}]},"name":"down-circle","theme":"filled"};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['o-down-circle-filled']: Omi.Props & Partial<AntdIconProps>
    }
  }
}

@tag('o-down-circle-filled')
export default class DownCircleFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'DownCircleFilled';
  static tagName = 'o-down-circle-filled';
  static inheritAttrs = false;
  render(props: Omi.OmiProps<AntdIconProps>) {
    return <o-antd-icon {...rmIEFP(props)} icon={DownCircleFilledSvg} />;
  };
}