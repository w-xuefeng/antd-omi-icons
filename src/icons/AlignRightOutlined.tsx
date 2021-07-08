// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import AlignRightOutlinedSvg from '@ant-design/icons-svg/es/asn/AlignRightOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-align-right-outlined')
export default class AlignRightOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'AlignRightOutlined';
  static tagName = 'o-align-right-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={AlignRightOutlinedSvg} />;
  };
}