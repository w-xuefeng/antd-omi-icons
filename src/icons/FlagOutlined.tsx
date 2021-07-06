// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FlagOutlinedSvg from '@ant-design/icons-svg/lib/asn/FlagOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-flag-outlined')
export default class FlagOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'FlagOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={FlagOutlinedSvg}></AntdIcon>;
  };
}