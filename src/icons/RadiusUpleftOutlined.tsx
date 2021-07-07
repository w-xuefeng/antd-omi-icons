// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import RadiusUpleftOutlinedSvg from '@ant-design/icons-svg/lib/asn/RadiusUpleftOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-radius-upleft-outlined')
export default class RadiusUpleftOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'RadiusUpleftOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={RadiusUpleftOutlinedSvg} />;
  };
}