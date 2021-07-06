// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import EuroTwoToneSvg from '@ant-design/icons-svg/lib/asn/EuroTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-euro-two-tone')
export default class EuroTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'EuroTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={EuroTwoToneSvg}></AntdIcon>;
  };
}