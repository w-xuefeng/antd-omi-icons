// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CrownFilledSvg from '@ant-design/icons-svg/lib/asn/CrownFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-crown-filled')
export default class CrownFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'CrownFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={CrownFilledSvg}></AntdIcon>;
  };
}