// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FrownOutlinedSvg from '@ant-design/icons-svg/lib/asn/FrownOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-frown-outlined')
export default class FrownOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'FrownOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={FrownOutlinedSvg}></AntdIcon>;
  };
}