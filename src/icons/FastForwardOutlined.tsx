// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FastForwardOutlinedSvg from '@ant-design/icons-svg/lib/asn/FastForwardOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-fast-forward-outlined')
export default class FastForwardOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'FastForwardOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={FastForwardOutlinedSvg}></AntdIcon>;
  };
}