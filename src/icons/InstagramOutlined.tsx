// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import InstagramOutlinedSvg from '@ant-design/icons-svg/lib/asn/InstagramOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-instagram-outlined')
export default class InstagramOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'InstagramOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={InstagramOutlinedSvg}></AntdIcon>;
  };
}