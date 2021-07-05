// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import SoundOutlinedSvg from '@ant-design/icons-svg/lib/asn/SoundOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-sound-outlined')
export default class SoundOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'SoundOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={SoundOutlinedSvg}></AntdIcon>;
  };
}