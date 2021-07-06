// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import QqCircleFilledSvg from '@ant-design/icons-svg/lib/asn/QqCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-qq-circle-filled')
export default class QqCircleFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'QqCircleFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={QqCircleFilledSvg}></AntdIcon>;
  };
}