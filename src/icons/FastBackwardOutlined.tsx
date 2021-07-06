// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FastBackwardOutlinedSvg from '@ant-design/icons-svg/lib/asn/FastBackwardOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-fast-backward-outlined')
export default class FastBackwardOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'FastBackwardOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={FastBackwardOutlinedSvg}></AntdIcon>;
  };
}