// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import EuroOutlinedSvg from '@ant-design/icons-svg/lib/asn/EuroOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-euro-outlined')
export default class EuroOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'EuroOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={EuroOutlinedSvg}></AntdIcon>;
  };
}