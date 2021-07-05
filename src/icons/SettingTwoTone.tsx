// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import SettingTwoToneSvg from '@ant-design/icons-svg/lib/asn/SettingTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-setting-two-tone')
export default class SettingTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'SettingTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={SettingTwoToneSvg}></AntdIcon>;
  };
}