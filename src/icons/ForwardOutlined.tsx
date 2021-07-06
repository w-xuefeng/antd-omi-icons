// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ForwardOutlinedSvg from '@ant-design/icons-svg/lib/asn/ForwardOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-forward-outlined')
export default class ForwardOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'ForwardOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={ForwardOutlinedSvg}></AntdIcon>;
  };
}