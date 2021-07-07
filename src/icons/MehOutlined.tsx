// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import MehOutlinedSvg from '@ant-design/icons-svg/lib/asn/MehOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-meh-outlined')
export default class MehOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'MehOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={MehOutlinedSvg} />;
  };
}