// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import BuildOutlinedSvg from '@ant-design/icons-svg/lib/asn/BuildOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-build-outlined')
export default class BuildOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'BuildOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={BuildOutlinedSvg}></AntdIcon>;
  };
}