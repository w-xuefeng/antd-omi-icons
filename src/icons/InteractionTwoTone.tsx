// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import InteractionTwoToneSvg from '@ant-design/icons-svg/lib/asn/InteractionTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-interaction-two-tone')
export default class InteractionTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'InteractionTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={InteractionTwoToneSvg}></AntdIcon>;
  };
}