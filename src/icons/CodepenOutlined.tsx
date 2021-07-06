// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CodepenOutlinedSvg from '@ant-design/icons-svg/lib/asn/CodepenOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-codepen-outlined')
export default class CodepenOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'CodepenOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={CodepenOutlinedSvg}></AntdIcon>;
  };
}