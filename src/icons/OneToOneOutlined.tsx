// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import OneToOneOutlinedSvg from '@ant-design/icons-svg/es/asn/OneToOneOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-one-to-one-outlined')
export default class OneToOneOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'OneToOneOutlined';
  static tagName = 'o-one-to-one-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={OneToOneOutlinedSvg} />;
  };
}