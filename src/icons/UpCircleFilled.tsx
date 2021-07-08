// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import UpCircleFilledSvg from '@ant-design/icons-svg/es/asn/UpCircleFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-up-circle-filled')
export default class UpCircleFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'UpCircleFilled';
  static tagName = 'o-up-circle-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={UpCircleFilledSvg} />;
  };
}