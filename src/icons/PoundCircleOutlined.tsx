// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import PoundCircleOutlinedSvg from '@ant-design/icons-svg/es/asn/PoundCircleOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-pound-circle-outlined')
export default class PoundCircleOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'PoundCircleOutlined';
  static tagName = 'o-pound-circle-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={PoundCircleOutlinedSvg} />;
  };
}