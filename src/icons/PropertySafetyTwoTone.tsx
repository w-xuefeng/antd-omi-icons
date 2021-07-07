// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import PropertySafetyTwoToneSvg from '@ant-design/icons-svg/lib/asn/PropertySafetyTwoTone';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-property-safety-two-tone')
export default class PropertySafetyTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'PropertySafetyTwoTone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={PropertySafetyTwoToneSvg} />;
  };
}