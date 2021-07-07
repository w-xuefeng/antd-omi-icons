// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import LinkedinOutlinedSvg from '@ant-design/icons-svg/lib/asn/LinkedinOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-linkedin-outlined')
export default class LinkedinOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'LinkedinOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={LinkedinOutlinedSvg} />;
  };
}