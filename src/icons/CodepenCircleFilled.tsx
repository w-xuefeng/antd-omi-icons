// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CodepenCircleFilledSvg from '@ant-design/icons-svg/lib/asn/CodepenCircleFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-codepen-circle-filled')
export default class CodepenCircleFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'CodepenCircleFilled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={CodepenCircleFilledSvg} />;
  };
}