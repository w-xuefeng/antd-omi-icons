// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ReloadOutlinedSvg from '@ant-design/icons-svg/lib/asn/ReloadOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-reload-outlined')
export default class ReloadOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'ReloadOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={ReloadOutlinedSvg} />;
  };
}