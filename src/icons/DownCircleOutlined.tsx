// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import DownCircleOutlinedSvg from '@ant-design/icons-svg/es/asn/DownCircleOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-down-circle-outlined')
export default class DownCircleOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'DownCircleOutlined';
  static tagName = 'o-down-circle-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={DownCircleOutlinedSvg} />;
  };
}