// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import AppstoreOutlinedSvg from '@ant-design/icons-svg/lib/asn/AppstoreOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-appstore-outlined')
export default class AppstoreOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'AppstoreOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={AppstoreOutlinedSvg} />;
  };
}