// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CopyrightTwoToneSvg from '@ant-design/icons-svg/lib/asn/CopyrightTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-copyright-two-tone')
export default class CopyrightTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'CopyrightTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={CopyrightTwoToneSvg}></AntdIcon>;
  };
}