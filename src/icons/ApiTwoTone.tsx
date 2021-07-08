// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ApiTwoToneSvg from '@ant-design/icons-svg/es/asn/ApiTwoTone';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-api-two-tone')
export default class ApiTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'ApiTwoTone';
  static tagName = 'o-api-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={ApiTwoToneSvg} />;
  };
}