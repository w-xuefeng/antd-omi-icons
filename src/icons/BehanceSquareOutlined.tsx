// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import BehanceSquareOutlinedSvg from '@ant-design/icons-svg/lib/asn/BehanceSquareOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-behance-square-outlined')
export default class BehanceSquareOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'BehanceSquareOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={BehanceSquareOutlinedSvg}></AntdIcon>;
  };
}