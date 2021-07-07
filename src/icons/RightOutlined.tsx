// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import RightOutlinedSvg from '@ant-design/icons-svg/lib/asn/RightOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-right-outlined')
export default class RightOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'RightOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={RightOutlinedSvg} />;
  };
}