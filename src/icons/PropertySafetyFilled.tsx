// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import PropertySafetyFilledSvg from '@ant-design/icons-svg/lib/asn/PropertySafetyFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-property-safety-filled')
export default class PropertySafetyFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'PropertySafetyFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={PropertySafetyFilledSvg}></AntdIcon>;
  };
}