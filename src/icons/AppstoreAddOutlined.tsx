// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import AppstoreAddOutlinedSvg from '@ant-design/icons-svg/lib/asn/AppstoreAddOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-appstore-add-outlined')
export default class AppstoreAddOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'AppstoreAddOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={AppstoreAddOutlinedSvg}></AntdIcon>;
  };
}