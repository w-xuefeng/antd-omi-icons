// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import GoogleCircleFilledSvg from '@ant-design/icons-svg/lib/asn/GoogleCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-google-circle-filled')
export default class GoogleCircleFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'GoogleCircleFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={GoogleCircleFilledSvg}></AntdIcon>;
  };
}