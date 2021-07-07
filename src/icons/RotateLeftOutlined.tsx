// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import RotateLeftOutlinedSvg from '@ant-design/icons-svg/lib/asn/RotateLeftOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-rotate-left-outlined')
export default class RotateLeftOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'RotateLeftOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={RotateLeftOutlinedSvg} />;
  };
}