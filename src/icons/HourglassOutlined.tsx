// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import HourglassOutlinedSvg from '@ant-design/icons-svg/lib/asn/HourglassOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-hourglass-outlined')
export default class HourglassOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'HourglassOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={HourglassOutlinedSvg} />;
  };
}