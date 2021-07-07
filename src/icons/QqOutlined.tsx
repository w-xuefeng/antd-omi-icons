// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import QqOutlinedSvg from '@ant-design/icons-svg/lib/asn/QqOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-qq-outlined')
export default class QqOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'QqOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={QqOutlinedSvg} />;
  };
}