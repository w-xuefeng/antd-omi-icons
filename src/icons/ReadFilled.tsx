// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ReadFilledSvg from '@ant-design/icons-svg/lib/asn/ReadFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-read-filled')
export default class ReadFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'ReadFilled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={ReadFilledSvg} />;
  };
}