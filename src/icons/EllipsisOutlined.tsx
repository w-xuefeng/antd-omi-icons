// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import { rmIEFP } from 'omi-tools';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const EllipsisOutlinedSvg: AntdIconProps['icon'] = {"icon":{"tag":"svg","attrs":{"viewBox":"64 64 896 896","focusable":"false"},"children":[{"tag":"path","attrs":{"d":"M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z"}}]},"name":"ellipsis","theme":"outlined"};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['o-ellipsis-outlined']: Omi.Props & Partial<AntdIconProps>
    }
  }
}

@tag('o-ellipsis-outlined')
export default class EllipsisOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'EllipsisOutlined';
  static tagName = 'o-ellipsis-outlined';
  static inheritAttrs = false;
  render(props: Omi.OmiProps<AntdIconProps>) {
    return <o-antd-icon {...rmIEFP(props)} icon={EllipsisOutlinedSvg} />;
  };
}