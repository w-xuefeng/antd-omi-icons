// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FullscreenOutlinedSvg from '@ant-design/icons-svg/lib/asn/FullscreenOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-fullscreen-outlined')
export default class FullscreenOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'FullscreenOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={FullscreenOutlinedSvg} />;
  };
}