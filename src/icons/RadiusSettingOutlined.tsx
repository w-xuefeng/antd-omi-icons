// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import RadiusSettingOutlinedSvg from '@ant-design/icons-svg/es/asn/RadiusSettingOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-radius-setting-outlined')
export default class RadiusSettingOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'RadiusSettingOutlined';
  static tagName = 'o-radius-setting-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={RadiusSettingOutlinedSvg} />;
  };
}