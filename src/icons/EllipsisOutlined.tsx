// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import EllipsisOutlinedSvg from '@ant-design/icons-svg/lib/asn/EllipsisOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-ellipsis-outlined')
export default class EllipsisOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'EllipsisOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={EllipsisOutlinedSvg} />;
  };
}