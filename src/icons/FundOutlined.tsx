// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import { rmIEFP } from 'omi-tools';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const FundOutlinedSvg: AntdIconProps['icon'] = {"icon":{"tag":"svg","attrs":{"viewBox":"64 64 896 896","focusable":"false"},"children":[{"tag":"path","attrs":{"d":"M926 164H94c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V196c0-17.7-14.3-32-32-32zm-40 632H134V236h752v560zm-658.9-82.3c3.1 3.1 8.2 3.1 11.3 0l172.5-172.5 114.4 114.5c3.1 3.1 8.2 3.1 11.3 0l297-297.2c3.1-3.1 3.1-8.2 0-11.3l-36.8-36.8a8.03 8.03 0 00-11.3 0L531 565 416.6 450.5a8.03 8.03 0 00-11.3 0l-214.9 215a8.03 8.03 0 000 11.3l36.7 36.9z"}}]},"name":"fund","theme":"outlined"};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['o-fund-outlined']: Omi.Props & Partial<AntdIconProps>
    }
  }
}

@tag('o-fund-outlined')
export default class FundOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'FundOutlined';
  static tagName = 'o-fund-outlined';
  static inheritAttrs = false;
  render(props: Omi.OmiProps<AntdIconProps>) {
    return <o-antd-icon {...rmIEFP(props)} icon={FundOutlinedSvg} />;
  };
}