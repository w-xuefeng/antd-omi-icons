// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import MehTwoToneSvg from '@ant-design/icons-svg/lib/asn/MehTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-meh-two-tone')
export default class MehTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'MehTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={MehTwoToneSvg}></AntdIcon>;
  };
}