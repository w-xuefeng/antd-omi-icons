// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import MediumCircleFilledSvg from '@ant-design/icons-svg/es/asn/MediumCircleFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-medium-circle-filled')
export default class MediumCircleFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'MediumCircleFilled';
  static tagName = 'o-medium-circle-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={MediumCircleFilledSvg} />;
  };
}