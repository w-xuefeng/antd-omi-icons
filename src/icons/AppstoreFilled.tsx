// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import AppstoreFilledSvg from '@ant-design/icons-svg/lib/asn/AppstoreFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-appstore-filled')
export default class AppstoreFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'AppstoreFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={AppstoreFilledSvg}></AntdIcon>;
  };
}