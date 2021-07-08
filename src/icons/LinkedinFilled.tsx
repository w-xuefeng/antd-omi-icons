// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import LinkedinFilledSvg from '@ant-design/icons-svg/es/asn/LinkedinFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-linkedin-filled')
export default class LinkedinFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'LinkedinFilled';
  static tagName = 'o-linkedin-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={LinkedinFilledSvg} />;
  };
}