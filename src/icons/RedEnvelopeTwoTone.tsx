// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import RedEnvelopeTwoToneSvg from '@ant-design/icons-svg/es/asn/RedEnvelopeTwoTone';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-red-envelope-two-tone')
export default class RedEnvelopeTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'RedEnvelopeTwoTone';
  static tagName = 'o-red-envelope-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={RedEnvelopeTwoToneSvg} />;
  };
}