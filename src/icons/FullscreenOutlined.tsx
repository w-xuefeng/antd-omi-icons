// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FullscreenOutlinedSvg from '@ant-design/icons-svg/lib/asn/FullscreenOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-fullscreen-outlined')
export default class FullscreenOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'FullscreenOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={FullscreenOutlinedSvg}></AntdIcon>;
  };
}