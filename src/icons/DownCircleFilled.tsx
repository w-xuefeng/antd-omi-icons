// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import DownCircleFilledSvg from '@ant-design/icons-svg/es/asn/DownCircleFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-down-circle-filled')
export default class DownCircleFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'DownCircleFilled';
  static tagName = 'o-down-circle-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={DownCircleFilledSvg} />;
  };
}