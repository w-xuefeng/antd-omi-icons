// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ExclamationCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/ExclamationCircleTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-exclamation-circle-two-tone')
export default class ExclamationCircleTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'ExclamationCircleTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={ExclamationCircleTwoToneSvg}></AntdIcon>;
  };
}