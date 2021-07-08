// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import BlockOutlinedSvg from '@ant-design/icons-svg/es/asn/BlockOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-block-outlined')
export default class BlockOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'BlockOutlined';
  static tagName = 'o-block-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={BlockOutlinedSvg} />;
  };
}