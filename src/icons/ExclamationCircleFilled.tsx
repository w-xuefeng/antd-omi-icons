// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ExclamationCircleFilledSvg from '@ant-design/icons-svg/lib/asn/ExclamationCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-exclamation-circle-filled')
export default class ExclamationCircleFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'ExclamationCircleFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={ExclamationCircleFilledSvg}></AntdIcon>;
  };
}