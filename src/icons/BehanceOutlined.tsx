// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import BehanceOutlinedSvg from '@ant-design/icons-svg/lib/asn/BehanceOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-behance-outlined')
export default class BehanceOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'BehanceOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={BehanceOutlinedSvg}></AntdIcon>;
  };
}