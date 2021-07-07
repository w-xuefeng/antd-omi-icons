// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import BehanceOutlinedSvg from '@ant-design/icons-svg/lib/asn/BehanceOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-behance-outlined')
export default class BehanceOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'BehanceOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={BehanceOutlinedSvg} />;
  };
}