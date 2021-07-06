// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import RadiusSettingOutlinedSvg from '@ant-design/icons-svg/lib/asn/RadiusSettingOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-radius-setting-outlined')
export default class RadiusSettingOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'RadiusSettingOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={RadiusSettingOutlinedSvg}></AntdIcon>;
  };
}