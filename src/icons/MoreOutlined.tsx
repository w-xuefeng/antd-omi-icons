// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import MoreOutlinedSvg from '@ant-design/icons-svg/lib/asn/MoreOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-more-outlined')
export default class MoreOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'MoreOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={MoreOutlinedSvg} />;
  };
}