// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import PoundOutlinedSvg from '@ant-design/icons-svg/lib/asn/PoundOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-pound-outlined')
export default class PoundOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'PoundOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={PoundOutlinedSvg} />;
  };
}