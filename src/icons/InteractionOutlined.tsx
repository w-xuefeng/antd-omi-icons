// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import InteractionOutlinedSvg from '@ant-design/icons-svg/es/asn/InteractionOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-interaction-outlined')
export default class InteractionOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'InteractionOutlined';
  static tagName = 'o-interaction-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={InteractionOutlinedSvg} />;
  };
}