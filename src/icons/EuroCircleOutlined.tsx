// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import EuroCircleOutlinedSvg from '@ant-design/icons-svg/es/asn/EuroCircleOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-euro-circle-outlined')
export default class EuroCircleOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'EuroCircleOutlined';
  static tagName = 'o-euro-circle-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={EuroCircleOutlinedSvg} />;
  };
}