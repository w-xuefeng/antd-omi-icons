// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import AppstoreFilledSvg from '@ant-design/icons-svg/es/asn/AppstoreFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-appstore-filled')
export default class AppstoreFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'AppstoreFilled';
  static tagName = 'o-appstore-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={AppstoreFilledSvg} />;
  };
}