// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import PauseCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/PauseCircleOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-pause-circle-outlined')
export default class PauseCircleOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'PauseCircleOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={PauseCircleOutlinedSvg} />;
  };
}