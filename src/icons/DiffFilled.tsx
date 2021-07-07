// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import DiffFilledSvg from '@ant-design/icons-svg/lib/asn/DiffFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-diff-filled')
export default class DiffFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'DiffFilled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={DiffFilledSvg} />;
  };
}