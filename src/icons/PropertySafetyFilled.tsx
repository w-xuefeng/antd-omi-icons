// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import PropertySafetyFilledSvg from '@ant-design/icons-svg/lib/asn/PropertySafetyFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-property-safety-filled')
export default class PropertySafetyFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'PropertySafetyFilled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={PropertySafetyFilledSvg} />;
  };
}