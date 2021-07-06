// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import AimOutlinedSvg from '@ant-design/icons-svg/lib/asn/AimOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-aim-outlined')
export default class AimOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'AimOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={AimOutlinedSvg}></AntdIcon>;
  };
}