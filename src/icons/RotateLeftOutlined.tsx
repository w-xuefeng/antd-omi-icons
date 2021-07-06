// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import RotateLeftOutlinedSvg from '@ant-design/icons-svg/lib/asn/RotateLeftOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-rotate-left-outlined')
export default class RotateLeftOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'RotateLeftOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={RotateLeftOutlinedSvg}></AntdIcon>;
  };
}