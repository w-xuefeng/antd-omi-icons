// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import PropertySafetyOutlinedSvg from '@ant-design/icons-svg/lib/asn/PropertySafetyOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-property-safety-outlined')
export default class PropertySafetyOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'PropertySafetyOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={PropertySafetyOutlinedSvg}></AntdIcon>;
  };
}