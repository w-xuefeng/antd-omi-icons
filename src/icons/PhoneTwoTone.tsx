// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import PhoneTwoToneSvg from '@ant-design/icons-svg/es/asn/PhoneTwoTone';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-phone-two-tone')
export default class PhoneTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'PhoneTwoTone';
  static tagName = 'o-phone-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={PhoneTwoToneSvg} />;
  };
}