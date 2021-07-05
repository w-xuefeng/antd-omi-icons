// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FrownTwoToneSvg from '@ant-design/icons-svg/lib/asn/FrownTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-frown-two-tone')
export default class FrownTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'FrownTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={FrownTwoToneSvg}></AntdIcon>;
  };
}