// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CodepenCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/CodepenCircleOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-codepen-circle-outlined')
export default class CodepenCircleOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'CodepenCircleOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={CodepenCircleOutlinedSvg}></AntdIcon>;
  };
}