// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import PlusSquareOutlinedSvg from '@ant-design/icons-svg/es/asn/PlusSquareOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-plus-square-outlined')
export default class PlusSquareOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'PlusSquareOutlined';
  static tagName = 'o-plus-square-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={PlusSquareOutlinedSvg} />;
  };
}