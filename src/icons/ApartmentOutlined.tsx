// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ApartmentOutlinedSvg from '@ant-design/icons-svg/lib/asn/ApartmentOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-apartment-outlined')
export default class ApartmentOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'ApartmentOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={ApartmentOutlinedSvg}></AntdIcon>;
  };
}