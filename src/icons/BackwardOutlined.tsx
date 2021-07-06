// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import BackwardOutlinedSvg from '@ant-design/icons-svg/lib/asn/BackwardOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-backward-outlined')
export default class BackwardOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'BackwardOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={BackwardOutlinedSvg}></AntdIcon>;
  };
}