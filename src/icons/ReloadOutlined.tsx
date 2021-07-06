// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ReloadOutlinedSvg from '@ant-design/icons-svg/lib/asn/ReloadOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-reload-outlined')
export default class ReloadOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'ReloadOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={ReloadOutlinedSvg}></AntdIcon>;
  };
}