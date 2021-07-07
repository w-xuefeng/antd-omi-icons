// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CopyrightCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/CopyrightCircleOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-copyright-circle-outlined')
export default class CopyrightCircleOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'CopyrightCircleOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={CopyrightCircleOutlinedSvg} />;
  };
}