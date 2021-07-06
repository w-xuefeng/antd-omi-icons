// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CrownTwoToneSvg from '@ant-design/icons-svg/lib/asn/CrownTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-crown-two-tone')
export default class CrownTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'CrownTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={CrownTwoToneSvg}></AntdIcon>;
  };
}