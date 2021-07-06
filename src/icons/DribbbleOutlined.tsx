// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import DribbbleOutlinedSvg from '@ant-design/icons-svg/lib/asn/DribbbleOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-dribbble-outlined')
export default class DribbbleOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'DribbbleOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={DribbbleOutlinedSvg}></AntdIcon>;
  };
}