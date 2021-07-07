// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import VerticalRightOutlinedSvg from '@ant-design/icons-svg/lib/asn/VerticalRightOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-vertical-right-outlined')
export default class VerticalRightOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'VerticalRightOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={VerticalRightOutlinedSvg} />;
  };
}