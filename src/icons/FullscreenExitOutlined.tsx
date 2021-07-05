// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FullscreenExitOutlinedSvg from '@ant-design/icons-svg/lib/asn/FullscreenExitOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-fullscreen-exit-outlined')
export default class FullscreenExitOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'FullscreenExitOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={FullscreenExitOutlinedSvg}></AntdIcon>;
  };
}