// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import EyeTwoToneSvg from '@ant-design/icons-svg/lib/asn/EyeTwoTone';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-eye-two-tone')
export default class EyeTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'EyeTwoTone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={EyeTwoToneSvg} />;
  };
}