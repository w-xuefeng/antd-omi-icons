// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CheckCircleFilledSvg from '@ant-design/icons-svg/lib/asn/CheckCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-check-circle-filled')
export default class CheckCircleFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'CheckCircleFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={CheckCircleFilledSvg}></AntdIcon>;
  };
}