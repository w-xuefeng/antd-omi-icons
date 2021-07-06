// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CompassOutlinedSvg from '@ant-design/icons-svg/lib/asn/CompassOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-compass-outlined')
export default class CompassOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'CompassOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={CompassOutlinedSvg}></AntdIcon>;
  };
}