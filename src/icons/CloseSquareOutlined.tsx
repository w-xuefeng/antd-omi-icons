// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CloseSquareOutlinedSvg from '@ant-design/icons-svg/es/asn/CloseSquareOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-close-square-outlined')
export default class CloseSquareOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'CloseSquareOutlined';
  static tagName = 'o-close-square-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={CloseSquareOutlinedSvg} />;
  };
}