// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CloseCircleOutlinedSvg from '@ant-design/icons-svg/es/asn/CloseCircleOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-close-circle-outlined')
export default class CloseCircleOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'CloseCircleOutlined';
  static tagName = 'o-close-circle-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={CloseCircleOutlinedSvg} />;
  };
}