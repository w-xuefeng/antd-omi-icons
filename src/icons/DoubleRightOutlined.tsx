// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import DoubleRightOutlinedSvg from '@ant-design/icons-svg/lib/asn/DoubleRightOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-double-right-outlined')
export default class DoubleRightOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'DoubleRightOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={DoubleRightOutlinedSvg} />;
  };
}