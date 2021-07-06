// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ZoomInOutlinedSvg from '@ant-design/icons-svg/lib/asn/ZoomInOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-zoom-in-outlined')
export default class ZoomInOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'ZoomInOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={ZoomInOutlinedSvg}></AntdIcon>;
  };
}