// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import EyeTwoToneSvg from '@ant-design/icons-svg/lib/asn/EyeTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-eye-two-tone')
export default class EyeTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'EyeTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={EyeTwoToneSvg}></AntdIcon>;
  };
}