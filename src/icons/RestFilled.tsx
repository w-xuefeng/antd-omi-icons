// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import RestFilledSvg from '@ant-design/icons-svg/es/asn/RestFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-rest-filled')
export default class RestFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'RestFilled';
  static tagName = 'o-rest-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={RestFilledSvg} />;
  };
}