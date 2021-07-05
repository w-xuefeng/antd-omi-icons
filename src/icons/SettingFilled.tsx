// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import SettingFilledSvg from '@ant-design/icons-svg/lib/asn/SettingFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-setting-filled')
export default class SettingFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'SettingFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={SettingFilledSvg}></AntdIcon>;
  };
}