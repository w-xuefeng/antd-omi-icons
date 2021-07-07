// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import SettingOutlinedSvg from '@ant-design/icons-svg/lib/asn/SettingOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-setting-outlined')
export default class SettingOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'SettingOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={SettingOutlinedSvg} />;
  };
}