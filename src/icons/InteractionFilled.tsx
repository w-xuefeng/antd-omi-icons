// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import InteractionFilledSvg from '@ant-design/icons-svg/es/asn/InteractionFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-interaction-filled')
export default class InteractionFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'InteractionFilled';
  static tagName = 'o-interaction-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={InteractionFilledSvg} />;
  };
}