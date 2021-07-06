// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import BlockOutlinedSvg from '@ant-design/icons-svg/lib/asn/BlockOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-block-outlined')
export default class BlockOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'BlockOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={BlockOutlinedSvg}></AntdIcon>;
  };
}