// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CloseCircleFilledSvg from '@ant-design/icons-svg/es/asn/CloseCircleFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-close-circle-filled')
export default class CloseCircleFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'CloseCircleFilled';
  static tagName = 'o-close-circle-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={CloseCircleFilledSvg} />;
  };
}