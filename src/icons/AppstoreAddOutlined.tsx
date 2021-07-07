// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import AppstoreAddOutlinedSvg from '@ant-design/icons-svg/lib/asn/AppstoreAddOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-appstore-add-outlined')
export default class AppstoreAddOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'AppstoreAddOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={AppstoreAddOutlinedSvg} />;
  };
}