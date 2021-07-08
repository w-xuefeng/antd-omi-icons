// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import RocketFilledSvg from '@ant-design/icons-svg/es/asn/RocketFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-rocket-filled')
export default class RocketFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'RocketFilled';
  static tagName = 'o-rocket-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={RocketFilledSvg} />;
  };
}