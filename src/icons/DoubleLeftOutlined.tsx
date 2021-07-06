// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import DoubleLeftOutlinedSvg from '@ant-design/icons-svg/lib/asn/DoubleLeftOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-double-left-outlined')
export default class DoubleLeftOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'DoubleLeftOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={DoubleLeftOutlinedSvg}></AntdIcon>;
  };
}