// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import InteractionTwoToneSvg from '@ant-design/icons-svg/lib/asn/InteractionTwoTone';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-interaction-two-tone')
export default class InteractionTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'InteractionTwoTone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={InteractionTwoToneSvg} />;
  };
}