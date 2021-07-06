// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import SwitcherOutlinedSvg from '@ant-design/icons-svg/lib/asn/SwitcherOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-switcher-outlined')
export default class SwitcherOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'SwitcherOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={SwitcherOutlinedSvg}></AntdIcon>;
  };
}