// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FullscreenExitOutlinedSvg from '@ant-design/icons-svg/es/asn/FullscreenExitOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-fullscreen-exit-outlined')
export default class FullscreenExitOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'FullscreenExitOutlined';
  static tagName = 'o-fullscreen-exit-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={FullscreenExitOutlinedSvg} />;
  };
}