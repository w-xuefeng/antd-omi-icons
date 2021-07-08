// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import UpCircleOutlinedSvg from '@ant-design/icons-svg/es/asn/UpCircleOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-up-circle-outlined')
export default class UpCircleOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'UpCircleOutlined';
  static tagName = 'o-up-circle-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={UpCircleOutlinedSvg} />;
  };
}