// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ArrowRightOutlinedSvg from '@ant-design/icons-svg/es/asn/ArrowRightOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-arrow-right-outlined')
export default class ArrowRightOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'ArrowRightOutlined';
  static tagName = 'o-arrow-right-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={ArrowRightOutlinedSvg} />;
  };
}