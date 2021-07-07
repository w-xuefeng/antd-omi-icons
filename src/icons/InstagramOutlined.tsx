// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import InstagramOutlinedSvg from '@ant-design/icons-svg/lib/asn/InstagramOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-instagram-outlined')
export default class InstagramOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'InstagramOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={InstagramOutlinedSvg} />;
  };
}