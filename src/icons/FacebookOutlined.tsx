// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FacebookOutlinedSvg from '@ant-design/icons-svg/lib/asn/FacebookOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-facebook-outlined')
export default class FacebookOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'FacebookOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={FacebookOutlinedSvg} />;
  };
}