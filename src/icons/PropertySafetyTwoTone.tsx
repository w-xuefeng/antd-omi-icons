// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import PropertySafetyTwoToneSvg from '@ant-design/icons-svg/lib/asn/PropertySafetyTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-property-safety-two-tone')
export default class PropertySafetyTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'PropertySafetyTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={PropertySafetyTwoToneSvg}></AntdIcon>;
  };
}