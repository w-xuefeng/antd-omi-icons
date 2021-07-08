// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CopyrightCircleFilledSvg from '@ant-design/icons-svg/es/asn/CopyrightCircleFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-copyright-circle-filled')
export default class CopyrightCircleFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'CopyrightCircleFilled';
  static tagName = 'o-copyright-circle-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={CopyrightCircleFilledSvg} />;
  };
}