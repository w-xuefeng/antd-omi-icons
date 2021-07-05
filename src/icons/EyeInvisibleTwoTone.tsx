// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import EyeInvisibleTwoToneSvg from '@ant-design/icons-svg/lib/asn/EyeInvisibleTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-eye-invisible-two-tone')
export default class EyeInvisibleTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'EyeInvisibleTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={EyeInvisibleTwoToneSvg}></AntdIcon>;
  };
}