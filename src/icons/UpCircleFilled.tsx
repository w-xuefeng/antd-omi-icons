// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import UpCircleFilledSvg from '@ant-design/icons-svg/lib/asn/UpCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-up-circle-filled')
export default class UpCircleFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'UpCircleFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={UpCircleFilledSvg}></AntdIcon>;
  };
}