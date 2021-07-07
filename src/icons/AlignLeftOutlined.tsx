// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import AlignLeftOutlinedSvg from '@ant-design/icons-svg/lib/asn/AlignLeftOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-align-left-outlined')
export default class AlignLeftOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'AlignLeftOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={AlignLeftOutlinedSvg} />;
  };
}