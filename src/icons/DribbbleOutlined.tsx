// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import DribbbleOutlinedSvg from '@ant-design/icons-svg/es/asn/DribbbleOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-dribbble-outlined')
export default class DribbbleOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'DribbbleOutlined';
  static tagName = 'o-dribbble-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={DribbbleOutlinedSvg} />;
  };
}