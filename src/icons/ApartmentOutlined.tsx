// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ApartmentOutlinedSvg from '@ant-design/icons-svg/lib/asn/ApartmentOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-apartment-outlined')
export default class ApartmentOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'ApartmentOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={ApartmentOutlinedSvg} />;
  };
}