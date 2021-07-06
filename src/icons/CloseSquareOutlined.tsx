// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CloseSquareOutlinedSvg from '@ant-design/icons-svg/lib/asn/CloseSquareOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-close-square-outlined')
export default class CloseSquareOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'CloseSquareOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={CloseSquareOutlinedSvg}></AntdIcon>;
  };
}