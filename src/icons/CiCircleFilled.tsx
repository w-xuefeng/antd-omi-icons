// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CiCircleFilledSvg from '@ant-design/icons-svg/lib/asn/CiCircleFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-ci-circle-filled')
export default class CiCircleFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'CiCircleFilled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={CiCircleFilledSvg} />;
  };
}