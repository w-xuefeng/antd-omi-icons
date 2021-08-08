// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import { rmIEFP } from 'omi-tools';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const AntCloudOutlinedSvg: AntdIconProps['icon'] = {"icon":{"tag":"svg","attrs":{"viewBox":"64 64 896 896","focusable":"false"},"children":[{"tag":"path","attrs":{"d":"M378.9 738c-3.1 0-6.1-.5-8.8-1.5l4.4 30.7h26.3l-15.5-29.9c-2.1.5-4.2.7-6.4.7zm421-291.2c-12.6 0-24.8 1.5-36.5 4.2-21.4-38.4-62.3-64.3-109.3-64.3-6.9 0-13.6.6-20.2 1.6-35.4-77.4-113.4-131.1-203.9-131.1-112.3 0-205.3 82.6-221.6 190.4C127.3 455.5 64 523.8 64 607c0 88.4 71.6 160.1 160 160.2h50l13.2-27.6c-26.2-8.3-43.3-29-39.1-48.8 4.6-21.6 32.8-33.9 63.1-27.5 22.9 4.9 40.4 19.1 45.5 35.1a26.1 26.1 0 0122.1-12.4h.2c-.8-3.2-1.2-6.5-1.2-9.9 0-20.1 14.8-36.7 34.1-39.6v-25.4c0-4.4 3.6-8 8-8s8 3.6 8 8v26.3c4.6 1.2 8.8 3.2 12.6 5.8l19.5-21.4c3-3.3 8-3.5 11.3-.5 3.3 3 3.5 8 .5 11.3l-20 22-.2.2a40 40 0 01-46.9 59.2c-.4 5.6-2.6 10.7-6 14.8l20 38.4H804v-.1c86.5-2.2 156-73 156-160.1 0-88.5-71.7-160.2-160.1-160.2zM338.2 737.2l-4.3 30h24.4l-5.9-41.5c-3.5 4.6-8.3 8.5-14.2 11.5zM797.5 305a48 48 0 1096 0 48 48 0 10-96 0zm-65.7 61.3a24 24 0 1048 0 24 24 0 10-48 0zM303.4 742.9l-11.6 24.3h26l3.5-24.7c-5.7.8-11.7 1-17.9.4z"}}]},"name":"ant-cloud","theme":"outlined"};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['o-ant-cloud-outlined']: Omi.Props & Partial<AntdIconProps>
    }
  }
}

@tag('o-ant-cloud-outlined')
export default class AntCloudOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'AntCloudOutlined';
  static tagName = 'o-ant-cloud-outlined';
  static inheritAttrs = false;
  render(props: Omi.OmiProps<AntdIconProps>) {
    return <o-antd-icon {...rmIEFP(props)} icon={AntCloudOutlinedSvg} />;
  };
}