// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import RadiusUprightOutlinedSvg from '@ant-design/icons-svg/es/asn/RadiusUprightOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-radius-upright-outlined')
export default class RadiusUprightOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'RadiusUprightOutlined';
  static tagName = 'o-radius-upright-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={RadiusUprightOutlinedSvg} />;
  };
}