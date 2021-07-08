// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import SettingFilledSvg from '@ant-design/icons-svg/es/asn/SettingFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-setting-filled')
export default class SettingFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'SettingFilled';
  static tagName = 'o-setting-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={SettingFilledSvg} />;
  };
}