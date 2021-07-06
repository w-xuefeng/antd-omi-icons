// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import DiffTwoToneSvg from '@ant-design/icons-svg/lib/asn/DiffTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-diff-two-tone')
export default class DiffTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'DiffTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={DiffTwoToneSvg}></AntdIcon>;
  };
}