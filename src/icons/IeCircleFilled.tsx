// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import IeCircleFilledSvg from '@ant-design/icons-svg/lib/asn/IeCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-ie-circle-filled')
export default class IeCircleFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'IeCircleFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={IeCircleFilledSvg}></AntdIcon>;
  };
}