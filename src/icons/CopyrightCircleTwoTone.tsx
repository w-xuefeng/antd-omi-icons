// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CopyrightCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/CopyrightCircleTwoTone';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-copyright-circle-two-tone')
export default class CopyrightCircleTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'CopyrightCircleTwoTone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={CopyrightCircleTwoToneSvg} />;
  };
}