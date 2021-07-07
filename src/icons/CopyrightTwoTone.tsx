// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CopyrightTwoToneSvg from '@ant-design/icons-svg/lib/asn/CopyrightTwoTone';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-copyright-two-tone')
export default class CopyrightTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'CopyrightTwoTone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={CopyrightTwoToneSvg} />;
  };
}