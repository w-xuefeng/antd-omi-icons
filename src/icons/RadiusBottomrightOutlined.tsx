// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import RadiusBottomrightOutlinedSvg from '@ant-design/icons-svg/es/asn/RadiusBottomrightOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-radius-bottomright-outlined')
export default class RadiusBottomrightOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'RadiusBottomrightOutlined';
  static tagName = 'o-radius-bottomright-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={RadiusBottomrightOutlinedSvg} />;
  };
}