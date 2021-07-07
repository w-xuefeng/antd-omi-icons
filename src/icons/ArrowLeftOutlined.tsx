// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ArrowLeftOutlinedSvg from '@ant-design/icons-svg/lib/asn/ArrowLeftOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-arrow-left-outlined')
export default class ArrowLeftOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'ArrowLeftOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={ArrowLeftOutlinedSvg} />;
  };
}