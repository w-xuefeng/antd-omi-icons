// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CopyTwoToneSvg from '@ant-design/icons-svg/lib/asn/CopyTwoTone';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-copy-two-tone')
export default class CopyTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'CopyTwoTone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={CopyTwoToneSvg} />;
  };
}