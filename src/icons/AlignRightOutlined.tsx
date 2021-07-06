// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import AlignRightOutlinedSvg from '@ant-design/icons-svg/lib/asn/AlignRightOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-align-right-outlined')
export default class AlignRightOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'AlignRightOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={AlignRightOutlinedSvg}></AntdIcon>;
  };
}