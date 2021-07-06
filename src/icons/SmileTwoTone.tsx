// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import SmileTwoToneSvg from '@ant-design/icons-svg/lib/asn/SmileTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-smile-two-tone')
export default class SmileTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'SmileTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={SmileTwoToneSvg}></AntdIcon>;
  };
}