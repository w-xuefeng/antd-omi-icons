// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import DoubleRightOutlinedSvg from '@ant-design/icons-svg/lib/asn/DoubleRightOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-double-right-outlined')
export default class DoubleRightOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'DoubleRightOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={DoubleRightOutlinedSvg}></AntdIcon>;
  };
}