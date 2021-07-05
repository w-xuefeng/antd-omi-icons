// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import SettingOutlinedSvg from '@ant-design/icons-svg/lib/asn/SettingOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-setting-outlined')
export default class SettingOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'SettingOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={SettingOutlinedSvg}></AntdIcon>;
  };
}