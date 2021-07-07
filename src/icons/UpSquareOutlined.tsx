// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import UpSquareOutlinedSvg from '@ant-design/icons-svg/lib/asn/UpSquareOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-up-square-outlined')
export default class UpSquareOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'UpSquareOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={UpSquareOutlinedSvg} />;
  };
}