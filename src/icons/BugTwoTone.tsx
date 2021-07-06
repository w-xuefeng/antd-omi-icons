// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import BugTwoToneSvg from '@ant-design/icons-svg/lib/asn/BugTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-bug-two-tone')
export default class BugTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'BugTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={BugTwoToneSvg}></AntdIcon>;
  };
}