// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import EuroCircleFilledSvg from '@ant-design/icons-svg/lib/asn/EuroCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-euro-circle-filled')
export default class EuroCircleFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'EuroCircleFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={EuroCircleFilledSvg}></AntdIcon>;
  };
}