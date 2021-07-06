// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CameraTwoToneSvg from '@ant-design/icons-svg/lib/asn/CameraTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-camera-two-tone')
export default class CameraTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'CameraTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={CameraTwoToneSvg}></AntdIcon>;
  };
}