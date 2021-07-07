// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CloseCircleFilledSvg from '@ant-design/icons-svg/lib/asn/CloseCircleFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-close-circle-filled')
export default class CloseCircleFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'CloseCircleFilled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={CloseCircleFilledSvg} />;
  };
}