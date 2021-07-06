// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import InfoCircleFilledSvg from '@ant-design/icons-svg/lib/asn/InfoCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-info-circle-filled')
export default class InfoCircleFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'InfoCircleFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={InfoCircleFilledSvg}></AntdIcon>;
  };
}