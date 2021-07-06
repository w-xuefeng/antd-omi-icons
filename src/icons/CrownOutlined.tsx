// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CrownOutlinedSvg from '@ant-design/icons-svg/lib/asn/CrownOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-crown-outlined')
export default class CrownOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'CrownOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={CrownOutlinedSvg}></AntdIcon>;
  };
}