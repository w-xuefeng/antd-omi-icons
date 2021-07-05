// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import InteractionFilledSvg from '@ant-design/icons-svg/lib/asn/InteractionFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-interaction-filled')
export default class InteractionFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'InteractionFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={InteractionFilledSvg}></AntdIcon>;
  };
}