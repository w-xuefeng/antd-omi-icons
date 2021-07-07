// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import PauseOutlinedSvg from '@ant-design/icons-svg/lib/asn/PauseOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-pause-outlined')
export default class PauseOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'PauseOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={PauseOutlinedSvg} />;
  };
}