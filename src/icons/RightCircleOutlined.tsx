// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import RightCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/RightCircleOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-right-circle-outlined')
export default class RightCircleOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'RightCircleOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={RightCircleOutlinedSvg}></AntdIcon>;
  };
}