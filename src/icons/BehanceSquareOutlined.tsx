// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import BehanceSquareOutlinedSvg from '@ant-design/icons-svg/lib/asn/BehanceSquareOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-behance-square-outlined')
export default class BehanceSquareOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'BehanceSquareOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={BehanceSquareOutlinedSvg} />;
  };
}