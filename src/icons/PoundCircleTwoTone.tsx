// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import PoundCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/PoundCircleTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-pound-circle-two-tone')
export default class PoundCircleTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'PoundCircleTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={PoundCircleTwoToneSvg}></AntdIcon>;
  };
}