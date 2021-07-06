// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import SwitcherTwoToneSvg from '@ant-design/icons-svg/lib/asn/SwitcherTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-switcher-two-tone')
export default class SwitcherTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'SwitcherTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={SwitcherTwoToneSvg}></AntdIcon>;
  };
}