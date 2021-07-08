// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import GooglePlusCircleFilledSvg from '@ant-design/icons-svg/es/asn/GooglePlusCircleFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-google-plus-circle-filled')
export default class GooglePlusCircleFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'GooglePlusCircleFilled';
  static tagName = 'o-google-plus-circle-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={GooglePlusCircleFilledSvg} />;
  };
}