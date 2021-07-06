// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import InteractionOutlinedSvg from '@ant-design/icons-svg/lib/asn/InteractionOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-interaction-outlined')
export default class InteractionOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'InteractionOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={InteractionOutlinedSvg}></AntdIcon>;
  };
}