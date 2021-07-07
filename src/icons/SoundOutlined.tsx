// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import SoundOutlinedSvg from '@ant-design/icons-svg/lib/asn/SoundOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-sound-outlined')
export default class SoundOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'SoundOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={SoundOutlinedSvg} />;
  };
}