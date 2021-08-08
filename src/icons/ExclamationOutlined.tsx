// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import { rmIEFP } from 'omi-tools';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const ExclamationOutlinedSvg: AntdIconProps['icon'] = {"icon":{"tag":"svg","attrs":{"viewBox":"64 64 896 896","focusable":"false"},"children":[{"tag":"path","attrs":{"d":"M448 804a64 64 0 10128 0 64 64 0 10-128 0zm32-168h64c4.4 0 8-3.6 8-8V164c0-4.4-3.6-8-8-8h-64c-4.4 0-8 3.6-8 8v464c0 4.4 3.6 8 8 8z"}}]},"name":"exclamation","theme":"outlined"};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['o-exclamation-outlined']: Omi.Props & Partial<AntdIconProps>
    }
  }
}

@tag('o-exclamation-outlined')
export default class ExclamationOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'ExclamationOutlined';
  static tagName = 'o-exclamation-outlined';
  static inheritAttrs = false;
  render(props: Omi.OmiProps<AntdIconProps>) {
    return <o-antd-icon {...rmIEFP(props)} icon={ExclamationOutlinedSvg} />;
  };
}