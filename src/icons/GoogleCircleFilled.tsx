// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import GoogleCircleFilledSvg from '@ant-design/icons-svg/lib/asn/GoogleCircleFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-google-circle-filled')
export default class GoogleCircleFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'GoogleCircleFilled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={GoogleCircleFilledSvg} />;
  };
}