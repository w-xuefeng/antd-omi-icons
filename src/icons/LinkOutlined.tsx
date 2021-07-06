// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import LinkOutlinedSvg from '@ant-design/icons-svg/lib/asn/LinkOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-link-outlined')
export default class LinkOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'LinkOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={LinkOutlinedSvg}></AntdIcon>;
  };
}