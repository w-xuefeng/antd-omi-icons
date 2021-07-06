// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ChromeOutlinedSvg from '@ant-design/icons-svg/lib/asn/ChromeOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-chrome-outlined')
export default class ChromeOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'ChromeOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={ChromeOutlinedSvg}></AntdIcon>;
  };
}